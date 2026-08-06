import { config } from "@/lib/config";
import { FallbackAIProvider } from "./fallbackExtractor";
import { OpenAIProvider } from "./openaiProvider";
import { AnthropicProvider } from "./anthropicProvider";
import type { AIProvider } from "./types";

let cached: AIProvider | undefined;

/**
 * Multi-engine AI selection. AI_PROVIDER controls the engine:
 *   - "anthropic" / "openai": use that engine (falls back to deterministic
 *     internally on any error)
 *   - "deterministic": no external AI at all
 *   - "auto" (default): Anthropic if keyed, else OpenAI if keyed, else
 *     deterministic
 * Every engine degrades safely — the planner never depends on an API.
 */
export function getAIProvider(): AIProvider {
  if (!cached) {
    cached = selectProvider();
  }
  return cached;
}

function selectProvider(): AIProvider {
  if (!config.enableAIPersonalisation) return new FallbackAIProvider();
  const choice = config.aiProvider;
  if (choice === "deterministic") return new FallbackAIProvider();
  if (choice === "anthropic") {
    return config.anthropicApiKey
      ? new AnthropicProvider(config.anthropicApiKey, config.anthropicModel)
      : new FallbackAIProvider();
  }
  if (choice === "openai") {
    return config.openaiApiKey
      ? new OpenAIProvider(config.openaiApiKey, config.openaiModel)
      : new FallbackAIProvider();
  }
  // auto
  if (config.anthropicApiKey) return new AnthropicProvider(config.anthropicApiKey, config.anthropicModel);
  if (config.openaiApiKey) return new OpenAIProvider(config.openaiApiKey, config.openaiModel);
  return new FallbackAIProvider();
}

export type { AIProvider } from "./types";
