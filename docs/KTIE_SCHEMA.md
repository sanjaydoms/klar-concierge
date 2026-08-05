# KTIE Schema

Three linked levels, all zod-validated (src/lib/knowledgeSchemas.ts):

## CountryIntelligence (knowledge/countries/registry.json)
ISO2/ISO3, name, region/subregion, currencies, languages, timezones,
climate zones, season overview, optional travellerFit / travelPracticality /
foodPracticality blocks, stable advisory notes, dynamic-verification list,
status (skeleton | reviewed | verified), sources, review dates.
Skeletons carry only registry facts — unknown fields stay absent, never faked.

## DestinationIntelligence (knowledge/destinations/<slug>.json)
Identity + positioning + ideal traveller · status/tier · night bounds
(min ≤ ideal ≤ max) · suitable paces · 14-interest strength map · suitability
(family, toddlers, 5–10, teens, seniors, honeymoon, solo, first trip) · food
(veg / Indian availability / halal / cuisine / street / fine dining) ·
practicality (flight hours, walking intensity, transport ease, road-transfer
burden, accessibility, medical access) · budget bands · climate tags ·
12 months of intelligence (score, label, rainfall, humidity, temperature band,
crowds, highlights, warnings) · trip combinations · common mistakes · packing ·
practical warnings · trade-offs · who-should-avoid · confidence · versioning ·
sources.

## AttractionIntelligence (knowledge/attractions/<slug>.json)
Category (13 kinds), summary, idealFor/unsuitableFor, minimum age, typical
duration, physical intensity, indoor/outdoor, weather sensitivity, best time
of day, accessibility/child/senior/practical notes, status, sources.

## KnowledgeSource
Typed provenance (tourism board, government, meteorological service, Klar
expert, …) with reliability and freshness. The dynamic-information policy is
absolute: visas, advisories, closures, event dates, prices and live weather
are never answered from static knowledge — they are flagged for verification.
