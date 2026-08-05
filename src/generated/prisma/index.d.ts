
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model DestinationMonth
 * 
 */
export type DestinationMonth = $Result.DefaultSelection<Prisma.$DestinationMonthPayload>
/**
 * Model DestinationSource
 * 
 */
export type DestinationSource = $Result.DefaultSelection<Prisma.$DestinationSourcePayload>
/**
 * Model ConversationSession
 * 
 */
export type ConversationSession = $Result.DefaultSelection<Prisma.$ConversationSessionPayload>
/**
 * Model ConversationMessage
 * 
 */
export type ConversationMessage = $Result.DefaultSelection<Prisma.$ConversationMessagePayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model LeadRecommendation
 * 
 */
export type LeadRecommendation = $Result.DefaultSelection<Prisma.$LeadRecommendationPayload>
/**
 * Model LeadItineraryDay
 * 
 */
export type LeadItineraryDay = $Result.DefaultSelection<Prisma.$LeadItineraryDayPayload>
/**
 * Model LeadNote
 * 
 */
export type LeadNote = $Result.DefaultSelection<Prisma.$LeadNotePayload>
/**
 * Model LeadAssignment
 * 
 */
export type LeadAssignment = $Result.DefaultSelection<Prisma.$LeadAssignmentPayload>
/**
 * Model CRMDeliveryAttempt
 * 
 */
export type CRMDeliveryAttempt = $Result.DefaultSelection<Prisma.$CRMDeliveryAttemptPayload>
/**
 * Model AnalyticsEvent
 * 
 */
export type AnalyticsEvent = $Result.DefaultSelection<Prisma.$AnalyticsEventPayload>
/**
 * Model AuditRecord
 * 
 */
export type AuditRecord = $Result.DefaultSelection<Prisma.$AuditRecordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KnowledgeStatus: {
  draft: 'draft',
  reviewed: 'reviewed',
  verified: 'verified'
};

export type KnowledgeStatus = (typeof KnowledgeStatus)[keyof typeof KnowledgeStatus]


export const LeadStage: {
  new_enquiry: 'new_enquiry',
  consultant_assigned: 'consultant_assigned',
  contact_attempted: 'contact_attempted',
  requirement_confirmed: 'requirement_confirmed',
  quote_in_preparation: 'quote_in_preparation',
  quote_sent: 'quote_sent',
  follow_up: 'follow_up',
  converted: 'converted',
  lost: 'lost'
};

export type LeadStage = (typeof LeadStage)[keyof typeof LeadStage]


export const LeadPriority: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  urgent: 'urgent'
};

export type LeadPriority = (typeof LeadPriority)[keyof typeof LeadPriority]


export const CRMDeliveryStatus: {
  disabled: 'disabled',
  pending: 'pending',
  submitted: 'submitted',
  failed: 'failed',
  manual_intervention: 'manual_intervention'
};

export type CRMDeliveryStatus = (typeof CRMDeliveryStatus)[keyof typeof CRMDeliveryStatus]

}

export type KnowledgeStatus = $Enums.KnowledgeStatus

export const KnowledgeStatus: typeof $Enums.KnowledgeStatus

export type LeadStage = $Enums.LeadStage

export const LeadStage: typeof $Enums.LeadStage

export type LeadPriority = $Enums.LeadPriority

export const LeadPriority: typeof $Enums.LeadPriority

export type CRMDeliveryStatus = $Enums.CRMDeliveryStatus

export const CRMDeliveryStatus: typeof $Enums.CRMDeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Destinations
 * const destinations = await prisma.destination.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Destinations
   * const destinations = await prisma.destination.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinationMonth`: Exposes CRUD operations for the **DestinationMonth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationMonths
    * const destinationMonths = await prisma.destinationMonth.findMany()
    * ```
    */
  get destinationMonth(): Prisma.DestinationMonthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinationSource`: Exposes CRUD operations for the **DestinationSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DestinationSources
    * const destinationSources = await prisma.destinationSource.findMany()
    * ```
    */
  get destinationSource(): Prisma.DestinationSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationSession`: Exposes CRUD operations for the **ConversationSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationSessions
    * const conversationSessions = await prisma.conversationSession.findMany()
    * ```
    */
  get conversationSession(): Prisma.ConversationSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversationMessage`: Exposes CRUD operations for the **ConversationMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConversationMessages
    * const conversationMessages = await prisma.conversationMessage.findMany()
    * ```
    */
  get conversationMessage(): Prisma.ConversationMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadRecommendation`: Exposes CRUD operations for the **LeadRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadRecommendations
    * const leadRecommendations = await prisma.leadRecommendation.findMany()
    * ```
    */
  get leadRecommendation(): Prisma.LeadRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadItineraryDay`: Exposes CRUD operations for the **LeadItineraryDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadItineraryDays
    * const leadItineraryDays = await prisma.leadItineraryDay.findMany()
    * ```
    */
  get leadItineraryDay(): Prisma.LeadItineraryDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadNote`: Exposes CRUD operations for the **LeadNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadNotes
    * const leadNotes = await prisma.leadNote.findMany()
    * ```
    */
  get leadNote(): Prisma.LeadNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadAssignment`: Exposes CRUD operations for the **LeadAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadAssignments
    * const leadAssignments = await prisma.leadAssignment.findMany()
    * ```
    */
  get leadAssignment(): Prisma.LeadAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cRMDeliveryAttempt`: Exposes CRUD operations for the **CRMDeliveryAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CRMDeliveryAttempts
    * const cRMDeliveryAttempts = await prisma.cRMDeliveryAttempt.findMany()
    * ```
    */
  get cRMDeliveryAttempt(): Prisma.CRMDeliveryAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsEvent`: Exposes CRUD operations for the **AnalyticsEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsEvents
    * const analyticsEvents = await prisma.analyticsEvent.findMany()
    * ```
    */
  get analyticsEvent(): Prisma.AnalyticsEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditRecord`: Exposes CRUD operations for the **AuditRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditRecords
    * const auditRecords = await prisma.auditRecord.findMany()
    * ```
    */
  get auditRecord(): Prisma.AuditRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Destination: 'Destination',
    DestinationMonth: 'DestinationMonth',
    DestinationSource: 'DestinationSource',
    ConversationSession: 'ConversationSession',
    ConversationMessage: 'ConversationMessage',
    Lead: 'Lead',
    LeadRecommendation: 'LeadRecommendation',
    LeadItineraryDay: 'LeadItineraryDay',
    LeadNote: 'LeadNote',
    LeadAssignment: 'LeadAssignment',
    CRMDeliveryAttempt: 'CRMDeliveryAttempt',
    AnalyticsEvent: 'AnalyticsEvent',
    AuditRecord: 'AuditRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "destination" | "destinationMonth" | "destinationSource" | "conversationSession" | "conversationMessage" | "lead" | "leadRecommendation" | "leadItineraryDay" | "leadNote" | "leadAssignment" | "cRMDeliveryAttempt" | "analyticsEvent" | "auditRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      DestinationMonth: {
        payload: Prisma.$DestinationMonthPayload<ExtArgs>
        fields: Prisma.DestinationMonthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationMonthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationMonthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>
          }
          findFirst: {
            args: Prisma.DestinationMonthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationMonthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>
          }
          findMany: {
            args: Prisma.DestinationMonthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>[]
          }
          create: {
            args: Prisma.DestinationMonthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>
          }
          createMany: {
            args: Prisma.DestinationMonthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationMonthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>[]
          }
          delete: {
            args: Prisma.DestinationMonthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>
          }
          update: {
            args: Prisma.DestinationMonthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>
          }
          deleteMany: {
            args: Prisma.DestinationMonthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationMonthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationMonthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>[]
          }
          upsert: {
            args: Prisma.DestinationMonthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationMonthPayload>
          }
          aggregate: {
            args: Prisma.DestinationMonthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinationMonth>
          }
          groupBy: {
            args: Prisma.DestinationMonthGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationMonthGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationMonthCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationMonthCountAggregateOutputType> | number
          }
        }
      }
      DestinationSource: {
        payload: Prisma.$DestinationSourcePayload<ExtArgs>
        fields: Prisma.DestinationSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>
          }
          findFirst: {
            args: Prisma.DestinationSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>
          }
          findMany: {
            args: Prisma.DestinationSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>[]
          }
          create: {
            args: Prisma.DestinationSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>
          }
          createMany: {
            args: Prisma.DestinationSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>[]
          }
          delete: {
            args: Prisma.DestinationSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>
          }
          update: {
            args: Prisma.DestinationSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>
          }
          deleteMany: {
            args: Prisma.DestinationSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>[]
          }
          upsert: {
            args: Prisma.DestinationSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationSourcePayload>
          }
          aggregate: {
            args: Prisma.DestinationSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinationSource>
          }
          groupBy: {
            args: Prisma.DestinationSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationSourceCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationSourceCountAggregateOutputType> | number
          }
        }
      }
      ConversationSession: {
        payload: Prisma.$ConversationSessionPayload<ExtArgs>
        fields: Prisma.ConversationSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>
          }
          findFirst: {
            args: Prisma.ConversationSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>
          }
          findMany: {
            args: Prisma.ConversationSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>[]
          }
          create: {
            args: Prisma.ConversationSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>
          }
          createMany: {
            args: Prisma.ConversationSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>[]
          }
          delete: {
            args: Prisma.ConversationSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>
          }
          update: {
            args: Prisma.ConversationSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>
          }
          deleteMany: {
            args: Prisma.ConversationSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>[]
          }
          upsert: {
            args: Prisma.ConversationSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationSessionPayload>
          }
          aggregate: {
            args: Prisma.ConversationSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationSession>
          }
          groupBy: {
            args: Prisma.ConversationSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationSessionCountAggregateOutputType> | number
          }
        }
      }
      ConversationMessage: {
        payload: Prisma.$ConversationMessagePayload<ExtArgs>
        fields: Prisma.ConversationMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>
          }
          findFirst: {
            args: Prisma.ConversationMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>
          }
          findMany: {
            args: Prisma.ConversationMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>[]
          }
          create: {
            args: Prisma.ConversationMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>
          }
          createMany: {
            args: Prisma.ConversationMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>[]
          }
          delete: {
            args: Prisma.ConversationMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>
          }
          update: {
            args: Prisma.ConversationMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>
          }
          deleteMany: {
            args: Prisma.ConversationMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>[]
          }
          upsert: {
            args: Prisma.ConversationMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationMessagePayload>
          }
          aggregate: {
            args: Prisma.ConversationMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversationMessage>
          }
          groupBy: {
            args: Prisma.ConversationMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationMessageCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      LeadRecommendation: {
        payload: Prisma.$LeadRecommendationPayload<ExtArgs>
        fields: Prisma.LeadRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>
          }
          findFirst: {
            args: Prisma.LeadRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>
          }
          findMany: {
            args: Prisma.LeadRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>[]
          }
          create: {
            args: Prisma.LeadRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>
          }
          createMany: {
            args: Prisma.LeadRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>[]
          }
          delete: {
            args: Prisma.LeadRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>
          }
          update: {
            args: Prisma.LeadRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.LeadRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadRecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>[]
          }
          upsert: {
            args: Prisma.LeadRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadRecommendationPayload>
          }
          aggregate: {
            args: Prisma.LeadRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadRecommendation>
          }
          groupBy: {
            args: Prisma.LeadRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<LeadRecommendationCountAggregateOutputType> | number
          }
        }
      }
      LeadItineraryDay: {
        payload: Prisma.$LeadItineraryDayPayload<ExtArgs>
        fields: Prisma.LeadItineraryDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadItineraryDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadItineraryDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>
          }
          findFirst: {
            args: Prisma.LeadItineraryDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadItineraryDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>
          }
          findMany: {
            args: Prisma.LeadItineraryDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>[]
          }
          create: {
            args: Prisma.LeadItineraryDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>
          }
          createMany: {
            args: Prisma.LeadItineraryDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadItineraryDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>[]
          }
          delete: {
            args: Prisma.LeadItineraryDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>
          }
          update: {
            args: Prisma.LeadItineraryDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>
          }
          deleteMany: {
            args: Prisma.LeadItineraryDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadItineraryDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadItineraryDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>[]
          }
          upsert: {
            args: Prisma.LeadItineraryDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadItineraryDayPayload>
          }
          aggregate: {
            args: Prisma.LeadItineraryDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadItineraryDay>
          }
          groupBy: {
            args: Prisma.LeadItineraryDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadItineraryDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadItineraryDayCountArgs<ExtArgs>
            result: $Utils.Optional<LeadItineraryDayCountAggregateOutputType> | number
          }
        }
      }
      LeadNote: {
        payload: Prisma.$LeadNotePayload<ExtArgs>
        fields: Prisma.LeadNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findFirst: {
            args: Prisma.LeadNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findMany: {
            args: Prisma.LeadNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          create: {
            args: Prisma.LeadNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          createMany: {
            args: Prisma.LeadNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          delete: {
            args: Prisma.LeadNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          update: {
            args: Prisma.LeadNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          deleteMany: {
            args: Prisma.LeadNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          upsert: {
            args: Prisma.LeadNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          aggregate: {
            args: Prisma.LeadNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadNote>
          }
          groupBy: {
            args: Prisma.LeadNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadNoteCountArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteCountAggregateOutputType> | number
          }
        }
      }
      LeadAssignment: {
        payload: Prisma.$LeadAssignmentPayload<ExtArgs>
        fields: Prisma.LeadAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>
          }
          findFirst: {
            args: Prisma.LeadAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>
          }
          findMany: {
            args: Prisma.LeadAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>[]
          }
          create: {
            args: Prisma.LeadAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>
          }
          createMany: {
            args: Prisma.LeadAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>[]
          }
          delete: {
            args: Prisma.LeadAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>
          }
          update: {
            args: Prisma.LeadAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.LeadAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.LeadAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadAssignmentPayload>
          }
          aggregate: {
            args: Prisma.LeadAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadAssignment>
          }
          groupBy: {
            args: Prisma.LeadAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<LeadAssignmentCountAggregateOutputType> | number
          }
        }
      }
      CRMDeliveryAttempt: {
        payload: Prisma.$CRMDeliveryAttemptPayload<ExtArgs>
        fields: Prisma.CRMDeliveryAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CRMDeliveryAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CRMDeliveryAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>
          }
          findFirst: {
            args: Prisma.CRMDeliveryAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CRMDeliveryAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>
          }
          findMany: {
            args: Prisma.CRMDeliveryAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>[]
          }
          create: {
            args: Prisma.CRMDeliveryAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>
          }
          createMany: {
            args: Prisma.CRMDeliveryAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CRMDeliveryAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>[]
          }
          delete: {
            args: Prisma.CRMDeliveryAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>
          }
          update: {
            args: Prisma.CRMDeliveryAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>
          }
          deleteMany: {
            args: Prisma.CRMDeliveryAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CRMDeliveryAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CRMDeliveryAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>[]
          }
          upsert: {
            args: Prisma.CRMDeliveryAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRMDeliveryAttemptPayload>
          }
          aggregate: {
            args: Prisma.CRMDeliveryAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCRMDeliveryAttempt>
          }
          groupBy: {
            args: Prisma.CRMDeliveryAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<CRMDeliveryAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.CRMDeliveryAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<CRMDeliveryAttemptCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsEvent: {
        payload: Prisma.$AnalyticsEventPayload<ExtArgs>
        fields: Prisma.AnalyticsEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findMany: {
            args: Prisma.AnalyticsEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          create: {
            args: Prisma.AnalyticsEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          createMany: {
            args: Prisma.AnalyticsEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          update: {
            args: Prisma.AnalyticsEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsEvent>
          }
          groupBy: {
            args: Prisma.AnalyticsEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventCountAggregateOutputType> | number
          }
        }
      }
      AuditRecord: {
        payload: Prisma.$AuditRecordPayload<ExtArgs>
        fields: Prisma.AuditRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>
          }
          findFirst: {
            args: Prisma.AuditRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>
          }
          findMany: {
            args: Prisma.AuditRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>[]
          }
          create: {
            args: Prisma.AuditRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>
          }
          createMany: {
            args: Prisma.AuditRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>[]
          }
          delete: {
            args: Prisma.AuditRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>
          }
          update: {
            args: Prisma.AuditRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>
          }
          deleteMany: {
            args: Prisma.AuditRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>[]
          }
          upsert: {
            args: Prisma.AuditRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditRecordPayload>
          }
          aggregate: {
            args: Prisma.AuditRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditRecord>
          }
          groupBy: {
            args: Prisma.AuditRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AuditRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    destination?: DestinationOmit
    destinationMonth?: DestinationMonthOmit
    destinationSource?: DestinationSourceOmit
    conversationSession?: ConversationSessionOmit
    conversationMessage?: ConversationMessageOmit
    lead?: LeadOmit
    leadRecommendation?: LeadRecommendationOmit
    leadItineraryDay?: LeadItineraryDayOmit
    leadNote?: LeadNoteOmit
    leadAssignment?: LeadAssignmentOmit
    cRMDeliveryAttempt?: CRMDeliveryAttemptOmit
    analyticsEvent?: AnalyticsEventOmit
    auditRecord?: AuditRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    months: number
    sources: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    months?: boolean | DestinationCountOutputTypeCountMonthsArgs
    sources?: boolean | DestinationCountOutputTypeCountSourcesArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountMonthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationMonthWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationSourceWhereInput
  }


  /**
   * Count Type ConversationSessionCountOutputType
   */

  export type ConversationSessionCountOutputType = {
    messages: number
    leads: number
  }

  export type ConversationSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationSessionCountOutputTypeCountMessagesArgs
    leads?: boolean | ConversationSessionCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * ConversationSessionCountOutputType without action
   */
  export type ConversationSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSessionCountOutputType
     */
    select?: ConversationSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationSessionCountOutputType without action
   */
  export type ConversationSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMessageWhereInput
  }

  /**
   * ConversationSessionCountOutputType without action
   */
  export type ConversationSessionCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    recommendations: number
    itineraryDays: number
    notes: number
    assignments: number
    crmDeliveries: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | LeadCountOutputTypeCountRecommendationsArgs
    itineraryDays?: boolean | LeadCountOutputTypeCountItineraryDaysArgs
    notes?: boolean | LeadCountOutputTypeCountNotesArgs
    assignments?: boolean | LeadCountOutputTypeCountAssignmentsArgs
    crmDeliveries?: boolean | LeadCountOutputTypeCountCrmDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadRecommendationWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountItineraryDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadItineraryDayWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadAssignmentWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountCrmDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CRMDeliveryAttemptWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    country: string | null
    region: string | null
    status: $Enums.KnowledgeStatus | null
    reviewedBy: string | null
    reviewedAt: Date | null
    nextReviewAt: Date | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    country: string | null
    region: string | null
    status: $Enums.KnowledgeStatus | null
    reviewedBy: string | null
    reviewedAt: Date | null
    nextReviewAt: Date | null
    version: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    country: number
    region: number
    status: number
    profile: number
    reviewedBy: number
    reviewedAt: number
    nextReviewAt: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    country?: true
    region?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    nextReviewAt?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    country?: true
    region?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    nextReviewAt?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    country?: true
    region?: true
    status?: true
    profile?: true
    reviewedBy?: true
    reviewedAt?: true
    nextReviewAt?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    slug: string
    name: string
    country: string
    region: string
    status: $Enums.KnowledgeStatus
    profile: JsonValue
    reviewedBy: string | null
    reviewedAt: Date | null
    nextReviewAt: Date | null
    version: string
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    status?: boolean
    profile?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    nextReviewAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    months?: boolean | Destination$monthsArgs<ExtArgs>
    sources?: boolean | Destination$sourcesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    status?: boolean
    profile?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    nextReviewAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    status?: boolean
    profile?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    nextReviewAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    country?: boolean
    region?: boolean
    status?: boolean
    profile?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    nextReviewAt?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "country" | "region" | "status" | "profile" | "reviewedBy" | "reviewedAt" | "nextReviewAt" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    months?: boolean | Destination$monthsArgs<ExtArgs>
    sources?: boolean | Destination$sourcesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      months: Prisma.$DestinationMonthPayload<ExtArgs>[]
      sources: Prisma.$DestinationSourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      country: string
      region: string
      status: $Enums.KnowledgeStatus
      /**
       * Full DestinationKnowledge JSON (summary, suitability, food, practicality…)
       */
      profile: Prisma.JsonValue
      reviewedBy: string | null
      reviewedAt: Date | null
      nextReviewAt: Date | null
      version: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    months<T extends Destination$monthsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$monthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sources<T extends Destination$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly slug: FieldRef<"Destination", 'String'>
    readonly name: FieldRef<"Destination", 'String'>
    readonly country: FieldRef<"Destination", 'String'>
    readonly region: FieldRef<"Destination", 'String'>
    readonly status: FieldRef<"Destination", 'KnowledgeStatus'>
    readonly profile: FieldRef<"Destination", 'Json'>
    readonly reviewedBy: FieldRef<"Destination", 'String'>
    readonly reviewedAt: FieldRef<"Destination", 'DateTime'>
    readonly nextReviewAt: FieldRef<"Destination", 'DateTime'>
    readonly version: FieldRef<"Destination", 'String'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.months
   */
  export type Destination$monthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    where?: DestinationMonthWhereInput
    orderBy?: DestinationMonthOrderByWithRelationInput | DestinationMonthOrderByWithRelationInput[]
    cursor?: DestinationMonthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationMonthScalarFieldEnum | DestinationMonthScalarFieldEnum[]
  }

  /**
   * Destination.sources
   */
  export type Destination$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    where?: DestinationSourceWhereInput
    orderBy?: DestinationSourceOrderByWithRelationInput | DestinationSourceOrderByWithRelationInput[]
    cursor?: DestinationSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationSourceScalarFieldEnum | DestinationSourceScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model DestinationMonth
   */

  export type AggregateDestinationMonth = {
    _count: DestinationMonthCountAggregateOutputType | null
    _avg: DestinationMonthAvgAggregateOutputType | null
    _sum: DestinationMonthSumAggregateOutputType | null
    _min: DestinationMonthMinAggregateOutputType | null
    _max: DestinationMonthMaxAggregateOutputType | null
  }

  export type DestinationMonthAvgAggregateOutputType = {
    month: number | null
    seasonScore: number | null
  }

  export type DestinationMonthSumAggregateOutputType = {
    month: number | null
    seasonScore: number | null
  }

  export type DestinationMonthMinAggregateOutputType = {
    id: string | null
    destinationId: string | null
    month: number | null
    seasonScore: number | null
    seasonLabel: string | null
    rainfall: string | null
    humidity: string | null
    crowdLevel: string | null
  }

  export type DestinationMonthMaxAggregateOutputType = {
    id: string | null
    destinationId: string | null
    month: number | null
    seasonScore: number | null
    seasonLabel: string | null
    rainfall: string | null
    humidity: string | null
    crowdLevel: string | null
  }

  export type DestinationMonthCountAggregateOutputType = {
    id: number
    destinationId: number
    month: number
    seasonScore: number
    seasonLabel: number
    rainfall: number
    humidity: number
    crowdLevel: number
    highlights: number
    warnings: number
    _all: number
  }


  export type DestinationMonthAvgAggregateInputType = {
    month?: true
    seasonScore?: true
  }

  export type DestinationMonthSumAggregateInputType = {
    month?: true
    seasonScore?: true
  }

  export type DestinationMonthMinAggregateInputType = {
    id?: true
    destinationId?: true
    month?: true
    seasonScore?: true
    seasonLabel?: true
    rainfall?: true
    humidity?: true
    crowdLevel?: true
  }

  export type DestinationMonthMaxAggregateInputType = {
    id?: true
    destinationId?: true
    month?: true
    seasonScore?: true
    seasonLabel?: true
    rainfall?: true
    humidity?: true
    crowdLevel?: true
  }

  export type DestinationMonthCountAggregateInputType = {
    id?: true
    destinationId?: true
    month?: true
    seasonScore?: true
    seasonLabel?: true
    rainfall?: true
    humidity?: true
    crowdLevel?: true
    highlights?: true
    warnings?: true
    _all?: true
  }

  export type DestinationMonthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationMonth to aggregate.
     */
    where?: DestinationMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationMonths to fetch.
     */
    orderBy?: DestinationMonthOrderByWithRelationInput | DestinationMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationMonths
    **/
    _count?: true | DestinationMonthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationMonthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationMonthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMonthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMonthMaxAggregateInputType
  }

  export type GetDestinationMonthAggregateType<T extends DestinationMonthAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationMonth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationMonth[P]>
      : GetScalarType<T[P], AggregateDestinationMonth[P]>
  }




  export type DestinationMonthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationMonthWhereInput
    orderBy?: DestinationMonthOrderByWithAggregationInput | DestinationMonthOrderByWithAggregationInput[]
    by: DestinationMonthScalarFieldEnum[] | DestinationMonthScalarFieldEnum
    having?: DestinationMonthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationMonthCountAggregateInputType | true
    _avg?: DestinationMonthAvgAggregateInputType
    _sum?: DestinationMonthSumAggregateInputType
    _min?: DestinationMonthMinAggregateInputType
    _max?: DestinationMonthMaxAggregateInputType
  }

  export type DestinationMonthGroupByOutputType = {
    id: string
    destinationId: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonValue
    warnings: JsonValue
    _count: DestinationMonthCountAggregateOutputType | null
    _avg: DestinationMonthAvgAggregateOutputType | null
    _sum: DestinationMonthSumAggregateOutputType | null
    _min: DestinationMonthMinAggregateOutputType | null
    _max: DestinationMonthMaxAggregateOutputType | null
  }

  type GetDestinationMonthGroupByPayload<T extends DestinationMonthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationMonthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationMonthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationMonthGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationMonthGroupByOutputType[P]>
        }
      >
    >


  export type DestinationMonthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinationId?: boolean
    month?: boolean
    seasonScore?: boolean
    seasonLabel?: boolean
    rainfall?: boolean
    humidity?: boolean
    crowdLevel?: boolean
    highlights?: boolean
    warnings?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationMonth"]>

  export type DestinationMonthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinationId?: boolean
    month?: boolean
    seasonScore?: boolean
    seasonLabel?: boolean
    rainfall?: boolean
    humidity?: boolean
    crowdLevel?: boolean
    highlights?: boolean
    warnings?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationMonth"]>

  export type DestinationMonthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinationId?: boolean
    month?: boolean
    seasonScore?: boolean
    seasonLabel?: boolean
    rainfall?: boolean
    humidity?: boolean
    crowdLevel?: boolean
    highlights?: boolean
    warnings?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationMonth"]>

  export type DestinationMonthSelectScalar = {
    id?: boolean
    destinationId?: boolean
    month?: boolean
    seasonScore?: boolean
    seasonLabel?: boolean
    rainfall?: boolean
    humidity?: boolean
    crowdLevel?: boolean
    highlights?: boolean
    warnings?: boolean
  }

  export type DestinationMonthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "destinationId" | "month" | "seasonScore" | "seasonLabel" | "rainfall" | "humidity" | "crowdLevel" | "highlights" | "warnings", ExtArgs["result"]["destinationMonth"]>
  export type DestinationMonthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationMonthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationMonthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $DestinationMonthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DestinationMonth"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      destinationId: string
      month: number
      seasonScore: number
      seasonLabel: string
      rainfall: string
      humidity: string
      crowdLevel: string
      highlights: Prisma.JsonValue
      warnings: Prisma.JsonValue
    }, ExtArgs["result"]["destinationMonth"]>
    composites: {}
  }

  type DestinationMonthGetPayload<S extends boolean | null | undefined | DestinationMonthDefaultArgs> = $Result.GetResult<Prisma.$DestinationMonthPayload, S>

  type DestinationMonthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationMonthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationMonthCountAggregateInputType | true
    }

  export interface DestinationMonthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationMonth'], meta: { name: 'DestinationMonth' } }
    /**
     * Find zero or one DestinationMonth that matches the filter.
     * @param {DestinationMonthFindUniqueArgs} args - Arguments to find a DestinationMonth
     * @example
     * // Get one DestinationMonth
     * const destinationMonth = await prisma.destinationMonth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationMonthFindUniqueArgs>(args: SelectSubset<T, DestinationMonthFindUniqueArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DestinationMonth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationMonthFindUniqueOrThrowArgs} args - Arguments to find a DestinationMonth
     * @example
     * // Get one DestinationMonth
     * const destinationMonth = await prisma.destinationMonth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationMonthFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationMonthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationMonth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthFindFirstArgs} args - Arguments to find a DestinationMonth
     * @example
     * // Get one DestinationMonth
     * const destinationMonth = await prisma.destinationMonth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationMonthFindFirstArgs>(args?: SelectSubset<T, DestinationMonthFindFirstArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationMonth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthFindFirstOrThrowArgs} args - Arguments to find a DestinationMonth
     * @example
     * // Get one DestinationMonth
     * const destinationMonth = await prisma.destinationMonth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationMonthFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationMonthFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DestinationMonths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationMonths
     * const destinationMonths = await prisma.destinationMonth.findMany()
     * 
     * // Get first 10 DestinationMonths
     * const destinationMonths = await prisma.destinationMonth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationMonthWithIdOnly = await prisma.destinationMonth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationMonthFindManyArgs>(args?: SelectSubset<T, DestinationMonthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DestinationMonth.
     * @param {DestinationMonthCreateArgs} args - Arguments to create a DestinationMonth.
     * @example
     * // Create one DestinationMonth
     * const DestinationMonth = await prisma.destinationMonth.create({
     *   data: {
     *     // ... data to create a DestinationMonth
     *   }
     * })
     * 
     */
    create<T extends DestinationMonthCreateArgs>(args: SelectSubset<T, DestinationMonthCreateArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DestinationMonths.
     * @param {DestinationMonthCreateManyArgs} args - Arguments to create many DestinationMonths.
     * @example
     * // Create many DestinationMonths
     * const destinationMonth = await prisma.destinationMonth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationMonthCreateManyArgs>(args?: SelectSubset<T, DestinationMonthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DestinationMonths and returns the data saved in the database.
     * @param {DestinationMonthCreateManyAndReturnArgs} args - Arguments to create many DestinationMonths.
     * @example
     * // Create many DestinationMonths
     * const destinationMonth = await prisma.destinationMonth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DestinationMonths and only return the `id`
     * const destinationMonthWithIdOnly = await prisma.destinationMonth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationMonthCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationMonthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DestinationMonth.
     * @param {DestinationMonthDeleteArgs} args - Arguments to delete one DestinationMonth.
     * @example
     * // Delete one DestinationMonth
     * const DestinationMonth = await prisma.destinationMonth.delete({
     *   where: {
     *     // ... filter to delete one DestinationMonth
     *   }
     * })
     * 
     */
    delete<T extends DestinationMonthDeleteArgs>(args: SelectSubset<T, DestinationMonthDeleteArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DestinationMonth.
     * @param {DestinationMonthUpdateArgs} args - Arguments to update one DestinationMonth.
     * @example
     * // Update one DestinationMonth
     * const destinationMonth = await prisma.destinationMonth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationMonthUpdateArgs>(args: SelectSubset<T, DestinationMonthUpdateArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DestinationMonths.
     * @param {DestinationMonthDeleteManyArgs} args - Arguments to filter DestinationMonths to delete.
     * @example
     * // Delete a few DestinationMonths
     * const { count } = await prisma.destinationMonth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationMonthDeleteManyArgs>(args?: SelectSubset<T, DestinationMonthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationMonths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationMonths
     * const destinationMonth = await prisma.destinationMonth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationMonthUpdateManyArgs>(args: SelectSubset<T, DestinationMonthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationMonths and returns the data updated in the database.
     * @param {DestinationMonthUpdateManyAndReturnArgs} args - Arguments to update many DestinationMonths.
     * @example
     * // Update many DestinationMonths
     * const destinationMonth = await prisma.destinationMonth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DestinationMonths and only return the `id`
     * const destinationMonthWithIdOnly = await prisma.destinationMonth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationMonthUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationMonthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DestinationMonth.
     * @param {DestinationMonthUpsertArgs} args - Arguments to update or create a DestinationMonth.
     * @example
     * // Update or create a DestinationMonth
     * const destinationMonth = await prisma.destinationMonth.upsert({
     *   create: {
     *     // ... data to create a DestinationMonth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationMonth we want to update
     *   }
     * })
     */
    upsert<T extends DestinationMonthUpsertArgs>(args: SelectSubset<T, DestinationMonthUpsertArgs<ExtArgs>>): Prisma__DestinationMonthClient<$Result.GetResult<Prisma.$DestinationMonthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DestinationMonths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthCountArgs} args - Arguments to filter DestinationMonths to count.
     * @example
     * // Count the number of DestinationMonths
     * const count = await prisma.destinationMonth.count({
     *   where: {
     *     // ... the filter for the DestinationMonths we want to count
     *   }
     * })
    **/
    count<T extends DestinationMonthCountArgs>(
      args?: Subset<T, DestinationMonthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationMonthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationMonth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationMonthAggregateArgs>(args: Subset<T, DestinationMonthAggregateArgs>): Prisma.PrismaPromise<GetDestinationMonthAggregateType<T>>

    /**
     * Group by DestinationMonth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationMonthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationMonthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationMonthGroupByArgs['orderBy'] }
        : { orderBy?: DestinationMonthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationMonthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationMonthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DestinationMonth model
   */
  readonly fields: DestinationMonthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationMonth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationMonthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DestinationMonth model
   */
  interface DestinationMonthFieldRefs {
    readonly id: FieldRef<"DestinationMonth", 'String'>
    readonly destinationId: FieldRef<"DestinationMonth", 'String'>
    readonly month: FieldRef<"DestinationMonth", 'Int'>
    readonly seasonScore: FieldRef<"DestinationMonth", 'Int'>
    readonly seasonLabel: FieldRef<"DestinationMonth", 'String'>
    readonly rainfall: FieldRef<"DestinationMonth", 'String'>
    readonly humidity: FieldRef<"DestinationMonth", 'String'>
    readonly crowdLevel: FieldRef<"DestinationMonth", 'String'>
    readonly highlights: FieldRef<"DestinationMonth", 'Json'>
    readonly warnings: FieldRef<"DestinationMonth", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DestinationMonth findUnique
   */
  export type DestinationMonthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * Filter, which DestinationMonth to fetch.
     */
    where: DestinationMonthWhereUniqueInput
  }

  /**
   * DestinationMonth findUniqueOrThrow
   */
  export type DestinationMonthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * Filter, which DestinationMonth to fetch.
     */
    where: DestinationMonthWhereUniqueInput
  }

  /**
   * DestinationMonth findFirst
   */
  export type DestinationMonthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * Filter, which DestinationMonth to fetch.
     */
    where?: DestinationMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationMonths to fetch.
     */
    orderBy?: DestinationMonthOrderByWithRelationInput | DestinationMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationMonths.
     */
    cursor?: DestinationMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationMonths.
     */
    distinct?: DestinationMonthScalarFieldEnum | DestinationMonthScalarFieldEnum[]
  }

  /**
   * DestinationMonth findFirstOrThrow
   */
  export type DestinationMonthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * Filter, which DestinationMonth to fetch.
     */
    where?: DestinationMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationMonths to fetch.
     */
    orderBy?: DestinationMonthOrderByWithRelationInput | DestinationMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationMonths.
     */
    cursor?: DestinationMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationMonths.
     */
    distinct?: DestinationMonthScalarFieldEnum | DestinationMonthScalarFieldEnum[]
  }

  /**
   * DestinationMonth findMany
   */
  export type DestinationMonthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * Filter, which DestinationMonths to fetch.
     */
    where?: DestinationMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationMonths to fetch.
     */
    orderBy?: DestinationMonthOrderByWithRelationInput | DestinationMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationMonths.
     */
    cursor?: DestinationMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationMonths.
     */
    skip?: number
    distinct?: DestinationMonthScalarFieldEnum | DestinationMonthScalarFieldEnum[]
  }

  /**
   * DestinationMonth create
   */
  export type DestinationMonthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationMonth.
     */
    data: XOR<DestinationMonthCreateInput, DestinationMonthUncheckedCreateInput>
  }

  /**
   * DestinationMonth createMany
   */
  export type DestinationMonthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationMonths.
     */
    data: DestinationMonthCreateManyInput | DestinationMonthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DestinationMonth createManyAndReturn
   */
  export type DestinationMonthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * The data used to create many DestinationMonths.
     */
    data: DestinationMonthCreateManyInput | DestinationMonthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationMonth update
   */
  export type DestinationMonthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationMonth.
     */
    data: XOR<DestinationMonthUpdateInput, DestinationMonthUncheckedUpdateInput>
    /**
     * Choose, which DestinationMonth to update.
     */
    where: DestinationMonthWhereUniqueInput
  }

  /**
   * DestinationMonth updateMany
   */
  export type DestinationMonthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationMonths.
     */
    data: XOR<DestinationMonthUpdateManyMutationInput, DestinationMonthUncheckedUpdateManyInput>
    /**
     * Filter which DestinationMonths to update
     */
    where?: DestinationMonthWhereInput
    /**
     * Limit how many DestinationMonths to update.
     */
    limit?: number
  }

  /**
   * DestinationMonth updateManyAndReturn
   */
  export type DestinationMonthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * The data used to update DestinationMonths.
     */
    data: XOR<DestinationMonthUpdateManyMutationInput, DestinationMonthUncheckedUpdateManyInput>
    /**
     * Filter which DestinationMonths to update
     */
    where?: DestinationMonthWhereInput
    /**
     * Limit how many DestinationMonths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationMonth upsert
   */
  export type DestinationMonthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationMonth to update in case it exists.
     */
    where: DestinationMonthWhereUniqueInput
    /**
     * In case the DestinationMonth found by the `where` argument doesn't exist, create a new DestinationMonth with this data.
     */
    create: XOR<DestinationMonthCreateInput, DestinationMonthUncheckedCreateInput>
    /**
     * In case the DestinationMonth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationMonthUpdateInput, DestinationMonthUncheckedUpdateInput>
  }

  /**
   * DestinationMonth delete
   */
  export type DestinationMonthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
    /**
     * Filter which DestinationMonth to delete.
     */
    where: DestinationMonthWhereUniqueInput
  }

  /**
   * DestinationMonth deleteMany
   */
  export type DestinationMonthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationMonths to delete
     */
    where?: DestinationMonthWhereInput
    /**
     * Limit how many DestinationMonths to delete.
     */
    limit?: number
  }

  /**
   * DestinationMonth without action
   */
  export type DestinationMonthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationMonth
     */
    select?: DestinationMonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationMonth
     */
    omit?: DestinationMonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationMonthInclude<ExtArgs> | null
  }


  /**
   * Model DestinationSource
   */

  export type AggregateDestinationSource = {
    _count: DestinationSourceCountAggregateOutputType | null
    _min: DestinationSourceMinAggregateOutputType | null
    _max: DestinationSourceMaxAggregateOutputType | null
  }

  export type DestinationSourceMinAggregateOutputType = {
    id: string | null
    destinationId: string | null
    sourceName: string | null
    sourceType: string | null
    sourceReference: string | null
    reliability: string | null
    accessedAt: Date | null
  }

  export type DestinationSourceMaxAggregateOutputType = {
    id: string | null
    destinationId: string | null
    sourceName: string | null
    sourceType: string | null
    sourceReference: string | null
    reliability: string | null
    accessedAt: Date | null
  }

  export type DestinationSourceCountAggregateOutputType = {
    id: number
    destinationId: number
    sourceName: number
    sourceType: number
    sourceReference: number
    reliability: number
    accessedAt: number
    _all: number
  }


  export type DestinationSourceMinAggregateInputType = {
    id?: true
    destinationId?: true
    sourceName?: true
    sourceType?: true
    sourceReference?: true
    reliability?: true
    accessedAt?: true
  }

  export type DestinationSourceMaxAggregateInputType = {
    id?: true
    destinationId?: true
    sourceName?: true
    sourceType?: true
    sourceReference?: true
    reliability?: true
    accessedAt?: true
  }

  export type DestinationSourceCountAggregateInputType = {
    id?: true
    destinationId?: true
    sourceName?: true
    sourceType?: true
    sourceReference?: true
    reliability?: true
    accessedAt?: true
    _all?: true
  }

  export type DestinationSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationSource to aggregate.
     */
    where?: DestinationSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationSources to fetch.
     */
    orderBy?: DestinationSourceOrderByWithRelationInput | DestinationSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DestinationSources
    **/
    _count?: true | DestinationSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationSourceMaxAggregateInputType
  }

  export type GetDestinationSourceAggregateType<T extends DestinationSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinationSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinationSource[P]>
      : GetScalarType<T[P], AggregateDestinationSource[P]>
  }




  export type DestinationSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationSourceWhereInput
    orderBy?: DestinationSourceOrderByWithAggregationInput | DestinationSourceOrderByWithAggregationInput[]
    by: DestinationSourceScalarFieldEnum[] | DestinationSourceScalarFieldEnum
    having?: DestinationSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationSourceCountAggregateInputType | true
    _min?: DestinationSourceMinAggregateInputType
    _max?: DestinationSourceMaxAggregateInputType
  }

  export type DestinationSourceGroupByOutputType = {
    id: string
    destinationId: string
    sourceName: string
    sourceType: string
    sourceReference: string | null
    reliability: string
    accessedAt: Date
    _count: DestinationSourceCountAggregateOutputType | null
    _min: DestinationSourceMinAggregateOutputType | null
    _max: DestinationSourceMaxAggregateOutputType | null
  }

  type GetDestinationSourceGroupByPayload<T extends DestinationSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationSourceGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationSourceGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinationId?: boolean
    sourceName?: boolean
    sourceType?: boolean
    sourceReference?: boolean
    reliability?: boolean
    accessedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationSource"]>

  export type DestinationSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinationId?: boolean
    sourceName?: boolean
    sourceType?: boolean
    sourceReference?: boolean
    reliability?: boolean
    accessedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationSource"]>

  export type DestinationSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    destinationId?: boolean
    sourceName?: boolean
    sourceType?: boolean
    sourceReference?: boolean
    reliability?: boolean
    accessedAt?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinationSource"]>

  export type DestinationSourceSelectScalar = {
    id?: boolean
    destinationId?: boolean
    sourceName?: boolean
    sourceType?: boolean
    sourceReference?: boolean
    reliability?: boolean
    accessedAt?: boolean
  }

  export type DestinationSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "destinationId" | "sourceName" | "sourceType" | "sourceReference" | "reliability" | "accessedAt", ExtArgs["result"]["destinationSource"]>
  export type DestinationSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DestinationSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $DestinationSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DestinationSource"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      destinationId: string
      sourceName: string
      sourceType: string
      sourceReference: string | null
      reliability: string
      accessedAt: Date
    }, ExtArgs["result"]["destinationSource"]>
    composites: {}
  }

  type DestinationSourceGetPayload<S extends boolean | null | undefined | DestinationSourceDefaultArgs> = $Result.GetResult<Prisma.$DestinationSourcePayload, S>

  type DestinationSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationSourceCountAggregateInputType | true
    }

  export interface DestinationSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DestinationSource'], meta: { name: 'DestinationSource' } }
    /**
     * Find zero or one DestinationSource that matches the filter.
     * @param {DestinationSourceFindUniqueArgs} args - Arguments to find a DestinationSource
     * @example
     * // Get one DestinationSource
     * const destinationSource = await prisma.destinationSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationSourceFindUniqueArgs>(args: SelectSubset<T, DestinationSourceFindUniqueArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DestinationSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationSourceFindUniqueOrThrowArgs} args - Arguments to find a DestinationSource
     * @example
     * // Get one DestinationSource
     * const destinationSource = await prisma.destinationSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceFindFirstArgs} args - Arguments to find a DestinationSource
     * @example
     * // Get one DestinationSource
     * const destinationSource = await prisma.destinationSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationSourceFindFirstArgs>(args?: SelectSubset<T, DestinationSourceFindFirstArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DestinationSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceFindFirstOrThrowArgs} args - Arguments to find a DestinationSource
     * @example
     * // Get one DestinationSource
     * const destinationSource = await prisma.destinationSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DestinationSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DestinationSources
     * const destinationSources = await prisma.destinationSource.findMany()
     * 
     * // Get first 10 DestinationSources
     * const destinationSources = await prisma.destinationSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationSourceWithIdOnly = await prisma.destinationSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationSourceFindManyArgs>(args?: SelectSubset<T, DestinationSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DestinationSource.
     * @param {DestinationSourceCreateArgs} args - Arguments to create a DestinationSource.
     * @example
     * // Create one DestinationSource
     * const DestinationSource = await prisma.destinationSource.create({
     *   data: {
     *     // ... data to create a DestinationSource
     *   }
     * })
     * 
     */
    create<T extends DestinationSourceCreateArgs>(args: SelectSubset<T, DestinationSourceCreateArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DestinationSources.
     * @param {DestinationSourceCreateManyArgs} args - Arguments to create many DestinationSources.
     * @example
     * // Create many DestinationSources
     * const destinationSource = await prisma.destinationSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationSourceCreateManyArgs>(args?: SelectSubset<T, DestinationSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DestinationSources and returns the data saved in the database.
     * @param {DestinationSourceCreateManyAndReturnArgs} args - Arguments to create many DestinationSources.
     * @example
     * // Create many DestinationSources
     * const destinationSource = await prisma.destinationSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DestinationSources and only return the `id`
     * const destinationSourceWithIdOnly = await prisma.destinationSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DestinationSource.
     * @param {DestinationSourceDeleteArgs} args - Arguments to delete one DestinationSource.
     * @example
     * // Delete one DestinationSource
     * const DestinationSource = await prisma.destinationSource.delete({
     *   where: {
     *     // ... filter to delete one DestinationSource
     *   }
     * })
     * 
     */
    delete<T extends DestinationSourceDeleteArgs>(args: SelectSubset<T, DestinationSourceDeleteArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DestinationSource.
     * @param {DestinationSourceUpdateArgs} args - Arguments to update one DestinationSource.
     * @example
     * // Update one DestinationSource
     * const destinationSource = await prisma.destinationSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationSourceUpdateArgs>(args: SelectSubset<T, DestinationSourceUpdateArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DestinationSources.
     * @param {DestinationSourceDeleteManyArgs} args - Arguments to filter DestinationSources to delete.
     * @example
     * // Delete a few DestinationSources
     * const { count } = await prisma.destinationSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationSourceDeleteManyArgs>(args?: SelectSubset<T, DestinationSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DestinationSources
     * const destinationSource = await prisma.destinationSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationSourceUpdateManyArgs>(args: SelectSubset<T, DestinationSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DestinationSources and returns the data updated in the database.
     * @param {DestinationSourceUpdateManyAndReturnArgs} args - Arguments to update many DestinationSources.
     * @example
     * // Update many DestinationSources
     * const destinationSource = await prisma.destinationSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DestinationSources and only return the `id`
     * const destinationSourceWithIdOnly = await prisma.destinationSource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DestinationSource.
     * @param {DestinationSourceUpsertArgs} args - Arguments to update or create a DestinationSource.
     * @example
     * // Update or create a DestinationSource
     * const destinationSource = await prisma.destinationSource.upsert({
     *   create: {
     *     // ... data to create a DestinationSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DestinationSource we want to update
     *   }
     * })
     */
    upsert<T extends DestinationSourceUpsertArgs>(args: SelectSubset<T, DestinationSourceUpsertArgs<ExtArgs>>): Prisma__DestinationSourceClient<$Result.GetResult<Prisma.$DestinationSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DestinationSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceCountArgs} args - Arguments to filter DestinationSources to count.
     * @example
     * // Count the number of DestinationSources
     * const count = await prisma.destinationSource.count({
     *   where: {
     *     // ... the filter for the DestinationSources we want to count
     *   }
     * })
    **/
    count<T extends DestinationSourceCountArgs>(
      args?: Subset<T, DestinationSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DestinationSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationSourceAggregateArgs>(args: Subset<T, DestinationSourceAggregateArgs>): Prisma.PrismaPromise<GetDestinationSourceAggregateType<T>>

    /**
     * Group by DestinationSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationSourceGroupByArgs['orderBy'] }
        : { orderBy?: DestinationSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DestinationSource model
   */
  readonly fields: DestinationSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DestinationSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DestinationSource model
   */
  interface DestinationSourceFieldRefs {
    readonly id: FieldRef<"DestinationSource", 'String'>
    readonly destinationId: FieldRef<"DestinationSource", 'String'>
    readonly sourceName: FieldRef<"DestinationSource", 'String'>
    readonly sourceType: FieldRef<"DestinationSource", 'String'>
    readonly sourceReference: FieldRef<"DestinationSource", 'String'>
    readonly reliability: FieldRef<"DestinationSource", 'String'>
    readonly accessedAt: FieldRef<"DestinationSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DestinationSource findUnique
   */
  export type DestinationSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * Filter, which DestinationSource to fetch.
     */
    where: DestinationSourceWhereUniqueInput
  }

  /**
   * DestinationSource findUniqueOrThrow
   */
  export type DestinationSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * Filter, which DestinationSource to fetch.
     */
    where: DestinationSourceWhereUniqueInput
  }

  /**
   * DestinationSource findFirst
   */
  export type DestinationSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * Filter, which DestinationSource to fetch.
     */
    where?: DestinationSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationSources to fetch.
     */
    orderBy?: DestinationSourceOrderByWithRelationInput | DestinationSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationSources.
     */
    cursor?: DestinationSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationSources.
     */
    distinct?: DestinationSourceScalarFieldEnum | DestinationSourceScalarFieldEnum[]
  }

  /**
   * DestinationSource findFirstOrThrow
   */
  export type DestinationSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * Filter, which DestinationSource to fetch.
     */
    where?: DestinationSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationSources to fetch.
     */
    orderBy?: DestinationSourceOrderByWithRelationInput | DestinationSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DestinationSources.
     */
    cursor?: DestinationSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DestinationSources.
     */
    distinct?: DestinationSourceScalarFieldEnum | DestinationSourceScalarFieldEnum[]
  }

  /**
   * DestinationSource findMany
   */
  export type DestinationSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * Filter, which DestinationSources to fetch.
     */
    where?: DestinationSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DestinationSources to fetch.
     */
    orderBy?: DestinationSourceOrderByWithRelationInput | DestinationSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DestinationSources.
     */
    cursor?: DestinationSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DestinationSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DestinationSources.
     */
    skip?: number
    distinct?: DestinationSourceScalarFieldEnum | DestinationSourceScalarFieldEnum[]
  }

  /**
   * DestinationSource create
   */
  export type DestinationSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a DestinationSource.
     */
    data: XOR<DestinationSourceCreateInput, DestinationSourceUncheckedCreateInput>
  }

  /**
   * DestinationSource createMany
   */
  export type DestinationSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DestinationSources.
     */
    data: DestinationSourceCreateManyInput | DestinationSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DestinationSource createManyAndReturn
   */
  export type DestinationSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * The data used to create many DestinationSources.
     */
    data: DestinationSourceCreateManyInput | DestinationSourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationSource update
   */
  export type DestinationSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a DestinationSource.
     */
    data: XOR<DestinationSourceUpdateInput, DestinationSourceUncheckedUpdateInput>
    /**
     * Choose, which DestinationSource to update.
     */
    where: DestinationSourceWhereUniqueInput
  }

  /**
   * DestinationSource updateMany
   */
  export type DestinationSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DestinationSources.
     */
    data: XOR<DestinationSourceUpdateManyMutationInput, DestinationSourceUncheckedUpdateManyInput>
    /**
     * Filter which DestinationSources to update
     */
    where?: DestinationSourceWhereInput
    /**
     * Limit how many DestinationSources to update.
     */
    limit?: number
  }

  /**
   * DestinationSource updateManyAndReturn
   */
  export type DestinationSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * The data used to update DestinationSources.
     */
    data: XOR<DestinationSourceUpdateManyMutationInput, DestinationSourceUncheckedUpdateManyInput>
    /**
     * Filter which DestinationSources to update
     */
    where?: DestinationSourceWhereInput
    /**
     * Limit how many DestinationSources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DestinationSource upsert
   */
  export type DestinationSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the DestinationSource to update in case it exists.
     */
    where: DestinationSourceWhereUniqueInput
    /**
     * In case the DestinationSource found by the `where` argument doesn't exist, create a new DestinationSource with this data.
     */
    create: XOR<DestinationSourceCreateInput, DestinationSourceUncheckedCreateInput>
    /**
     * In case the DestinationSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationSourceUpdateInput, DestinationSourceUncheckedUpdateInput>
  }

  /**
   * DestinationSource delete
   */
  export type DestinationSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
    /**
     * Filter which DestinationSource to delete.
     */
    where: DestinationSourceWhereUniqueInput
  }

  /**
   * DestinationSource deleteMany
   */
  export type DestinationSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DestinationSources to delete
     */
    where?: DestinationSourceWhereInput
    /**
     * Limit how many DestinationSources to delete.
     */
    limit?: number
  }

  /**
   * DestinationSource without action
   */
  export type DestinationSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationSource
     */
    select?: DestinationSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DestinationSource
     */
    omit?: DestinationSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationSourceInclude<ExtArgs> | null
  }


  /**
   * Model ConversationSession
   */

  export type AggregateConversationSession = {
    _count: ConversationSessionCountAggregateOutputType | null
    _min: ConversationSessionMinAggregateOutputType | null
    _max: ConversationSessionMaxAggregateOutputType | null
  }

  export type ConversationSessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationSessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationSessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationSessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationSessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationSessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationSession to aggregate.
     */
    where?: ConversationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSessions to fetch.
     */
    orderBy?: ConversationSessionOrderByWithRelationInput | ConversationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationSessions
    **/
    _count?: true | ConversationSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationSessionMaxAggregateInputType
  }

  export type GetConversationSessionAggregateType<T extends ConversationSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationSession[P]>
      : GetScalarType<T[P], AggregateConversationSession[P]>
  }




  export type ConversationSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationSessionWhereInput
    orderBy?: ConversationSessionOrderByWithAggregationInput | ConversationSessionOrderByWithAggregationInput[]
    by: ConversationSessionScalarFieldEnum[] | ConversationSessionScalarFieldEnum
    having?: ConversationSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationSessionCountAggregateInputType | true
    _min?: ConversationSessionMinAggregateInputType
    _max?: ConversationSessionMaxAggregateInputType
  }

  export type ConversationSessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: ConversationSessionCountAggregateOutputType | null
    _min: ConversationSessionMinAggregateOutputType | null
    _max: ConversationSessionMaxAggregateOutputType | null
  }

  type GetConversationSessionGroupByPayload<T extends ConversationSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationSessionGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | ConversationSession$messagesArgs<ExtArgs>
    leads?: boolean | ConversationSession$leadsArgs<ExtArgs>
    _count?: boolean | ConversationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationSession"]>

  export type ConversationSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conversationSession"]>

  export type ConversationSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["conversationSession"]>

  export type ConversationSessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["conversationSession"]>
  export type ConversationSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationSession$messagesArgs<ExtArgs>
    leads?: boolean | ConversationSession$leadsArgs<ExtArgs>
    _count?: boolean | ConversationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConversationSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConversationSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationSession"
    objects: {
      messages: Prisma.$ConversationMessagePayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversationSession"]>
    composites: {}
  }

  type ConversationSessionGetPayload<S extends boolean | null | undefined | ConversationSessionDefaultArgs> = $Result.GetResult<Prisma.$ConversationSessionPayload, S>

  type ConversationSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationSessionCountAggregateInputType | true
    }

  export interface ConversationSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationSession'], meta: { name: 'ConversationSession' } }
    /**
     * Find zero or one ConversationSession that matches the filter.
     * @param {ConversationSessionFindUniqueArgs} args - Arguments to find a ConversationSession
     * @example
     * // Get one ConversationSession
     * const conversationSession = await prisma.conversationSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationSessionFindUniqueArgs>(args: SelectSubset<T, ConversationSessionFindUniqueArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationSessionFindUniqueOrThrowArgs} args - Arguments to find a ConversationSession
     * @example
     * // Get one ConversationSession
     * const conversationSession = await prisma.conversationSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionFindFirstArgs} args - Arguments to find a ConversationSession
     * @example
     * // Get one ConversationSession
     * const conversationSession = await prisma.conversationSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationSessionFindFirstArgs>(args?: SelectSubset<T, ConversationSessionFindFirstArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionFindFirstOrThrowArgs} args - Arguments to find a ConversationSession
     * @example
     * // Get one ConversationSession
     * const conversationSession = await prisma.conversationSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationSessions
     * const conversationSessions = await prisma.conversationSession.findMany()
     * 
     * // Get first 10 ConversationSessions
     * const conversationSessions = await prisma.conversationSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationSessionWithIdOnly = await prisma.conversationSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationSessionFindManyArgs>(args?: SelectSubset<T, ConversationSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationSession.
     * @param {ConversationSessionCreateArgs} args - Arguments to create a ConversationSession.
     * @example
     * // Create one ConversationSession
     * const ConversationSession = await prisma.conversationSession.create({
     *   data: {
     *     // ... data to create a ConversationSession
     *   }
     * })
     * 
     */
    create<T extends ConversationSessionCreateArgs>(args: SelectSubset<T, ConversationSessionCreateArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationSessions.
     * @param {ConversationSessionCreateManyArgs} args - Arguments to create many ConversationSessions.
     * @example
     * // Create many ConversationSessions
     * const conversationSession = await prisma.conversationSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationSessionCreateManyArgs>(args?: SelectSubset<T, ConversationSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversationSessions and returns the data saved in the database.
     * @param {ConversationSessionCreateManyAndReturnArgs} args - Arguments to create many ConversationSessions.
     * @example
     * // Create many ConversationSessions
     * const conversationSession = await prisma.conversationSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversationSessions and only return the `id`
     * const conversationSessionWithIdOnly = await prisma.conversationSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversationSession.
     * @param {ConversationSessionDeleteArgs} args - Arguments to delete one ConversationSession.
     * @example
     * // Delete one ConversationSession
     * const ConversationSession = await prisma.conversationSession.delete({
     *   where: {
     *     // ... filter to delete one ConversationSession
     *   }
     * })
     * 
     */
    delete<T extends ConversationSessionDeleteArgs>(args: SelectSubset<T, ConversationSessionDeleteArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationSession.
     * @param {ConversationSessionUpdateArgs} args - Arguments to update one ConversationSession.
     * @example
     * // Update one ConversationSession
     * const conversationSession = await prisma.conversationSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationSessionUpdateArgs>(args: SelectSubset<T, ConversationSessionUpdateArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationSessions.
     * @param {ConversationSessionDeleteManyArgs} args - Arguments to filter ConversationSessions to delete.
     * @example
     * // Delete a few ConversationSessions
     * const { count } = await prisma.conversationSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationSessionDeleteManyArgs>(args?: SelectSubset<T, ConversationSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationSessions
     * const conversationSession = await prisma.conversationSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationSessionUpdateManyArgs>(args: SelectSubset<T, ConversationSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationSessions and returns the data updated in the database.
     * @param {ConversationSessionUpdateManyAndReturnArgs} args - Arguments to update many ConversationSessions.
     * @example
     * // Update many ConversationSessions
     * const conversationSession = await prisma.conversationSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversationSessions and only return the `id`
     * const conversationSessionWithIdOnly = await prisma.conversationSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversationSession.
     * @param {ConversationSessionUpsertArgs} args - Arguments to update or create a ConversationSession.
     * @example
     * // Update or create a ConversationSession
     * const conversationSession = await prisma.conversationSession.upsert({
     *   create: {
     *     // ... data to create a ConversationSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationSession we want to update
     *   }
     * })
     */
    upsert<T extends ConversationSessionUpsertArgs>(args: SelectSubset<T, ConversationSessionUpsertArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionCountArgs} args - Arguments to filter ConversationSessions to count.
     * @example
     * // Count the number of ConversationSessions
     * const count = await prisma.conversationSession.count({
     *   where: {
     *     // ... the filter for the ConversationSessions we want to count
     *   }
     * })
    **/
    count<T extends ConversationSessionCountArgs>(
      args?: Subset<T, ConversationSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationSessionAggregateArgs>(args: Subset<T, ConversationSessionAggregateArgs>): Prisma.PrismaPromise<GetConversationSessionAggregateType<T>>

    /**
     * Group by ConversationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationSessionGroupByArgs['orderBy'] }
        : { orderBy?: ConversationSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationSession model
   */
  readonly fields: ConversationSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends ConversationSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ConversationSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends ConversationSession$leadsArgs<ExtArgs> = {}>(args?: Subset<T, ConversationSession$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversationSession model
   */
  interface ConversationSessionFieldRefs {
    readonly id: FieldRef<"ConversationSession", 'String'>
    readonly createdAt: FieldRef<"ConversationSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ConversationSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversationSession findUnique
   */
  export type ConversationSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSession to fetch.
     */
    where: ConversationSessionWhereUniqueInput
  }

  /**
   * ConversationSession findUniqueOrThrow
   */
  export type ConversationSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSession to fetch.
     */
    where: ConversationSessionWhereUniqueInput
  }

  /**
   * ConversationSession findFirst
   */
  export type ConversationSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSession to fetch.
     */
    where?: ConversationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSessions to fetch.
     */
    orderBy?: ConversationSessionOrderByWithRelationInput | ConversationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationSessions.
     */
    cursor?: ConversationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationSessions.
     */
    distinct?: ConversationSessionScalarFieldEnum | ConversationSessionScalarFieldEnum[]
  }

  /**
   * ConversationSession findFirstOrThrow
   */
  export type ConversationSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSession to fetch.
     */
    where?: ConversationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSessions to fetch.
     */
    orderBy?: ConversationSessionOrderByWithRelationInput | ConversationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationSessions.
     */
    cursor?: ConversationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationSessions.
     */
    distinct?: ConversationSessionScalarFieldEnum | ConversationSessionScalarFieldEnum[]
  }

  /**
   * ConversationSession findMany
   */
  export type ConversationSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConversationSessions to fetch.
     */
    where?: ConversationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationSessions to fetch.
     */
    orderBy?: ConversationSessionOrderByWithRelationInput | ConversationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationSessions.
     */
    cursor?: ConversationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationSessions.
     */
    skip?: number
    distinct?: ConversationSessionScalarFieldEnum | ConversationSessionScalarFieldEnum[]
  }

  /**
   * ConversationSession create
   */
  export type ConversationSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationSession.
     */
    data: XOR<ConversationSessionCreateInput, ConversationSessionUncheckedCreateInput>
  }

  /**
   * ConversationSession createMany
   */
  export type ConversationSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationSessions.
     */
    data: ConversationSessionCreateManyInput | ConversationSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationSession createManyAndReturn
   */
  export type ConversationSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ConversationSessions.
     */
    data: ConversationSessionCreateManyInput | ConversationSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationSession update
   */
  export type ConversationSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationSession.
     */
    data: XOR<ConversationSessionUpdateInput, ConversationSessionUncheckedUpdateInput>
    /**
     * Choose, which ConversationSession to update.
     */
    where: ConversationSessionWhereUniqueInput
  }

  /**
   * ConversationSession updateMany
   */
  export type ConversationSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationSessions.
     */
    data: XOR<ConversationSessionUpdateManyMutationInput, ConversationSessionUncheckedUpdateManyInput>
    /**
     * Filter which ConversationSessions to update
     */
    where?: ConversationSessionWhereInput
    /**
     * Limit how many ConversationSessions to update.
     */
    limit?: number
  }

  /**
   * ConversationSession updateManyAndReturn
   */
  export type ConversationSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * The data used to update ConversationSessions.
     */
    data: XOR<ConversationSessionUpdateManyMutationInput, ConversationSessionUncheckedUpdateManyInput>
    /**
     * Filter which ConversationSessions to update
     */
    where?: ConversationSessionWhereInput
    /**
     * Limit how many ConversationSessions to update.
     */
    limit?: number
  }

  /**
   * ConversationSession upsert
   */
  export type ConversationSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationSession to update in case it exists.
     */
    where: ConversationSessionWhereUniqueInput
    /**
     * In case the ConversationSession found by the `where` argument doesn't exist, create a new ConversationSession with this data.
     */
    create: XOR<ConversationSessionCreateInput, ConversationSessionUncheckedCreateInput>
    /**
     * In case the ConversationSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationSessionUpdateInput, ConversationSessionUncheckedUpdateInput>
  }

  /**
   * ConversationSession delete
   */
  export type ConversationSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    /**
     * Filter which ConversationSession to delete.
     */
    where: ConversationSessionWhereUniqueInput
  }

  /**
   * ConversationSession deleteMany
   */
  export type ConversationSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationSessions to delete
     */
    where?: ConversationSessionWhereInput
    /**
     * Limit how many ConversationSessions to delete.
     */
    limit?: number
  }

  /**
   * ConversationSession.messages
   */
  export type ConversationSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    where?: ConversationMessageWhereInput
    orderBy?: ConversationMessageOrderByWithRelationInput | ConversationMessageOrderByWithRelationInput[]
    cursor?: ConversationMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationMessageScalarFieldEnum | ConversationMessageScalarFieldEnum[]
  }

  /**
   * ConversationSession.leads
   */
  export type ConversationSession$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * ConversationSession without action
   */
  export type ConversationSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
  }


  /**
   * Model ConversationMessage
   */

  export type AggregateConversationMessage = {
    _count: ConversationMessageCountAggregateOutputType | null
    _min: ConversationMessageMinAggregateOutputType | null
    _max: ConversationMessageMaxAggregateOutputType | null
  }

  export type ConversationMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ConversationMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ConversationMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ConversationMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ConversationMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ConversationMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMessage to aggregate.
     */
    where?: ConversationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMessages to fetch.
     */
    orderBy?: ConversationMessageOrderByWithRelationInput | ConversationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConversationMessages
    **/
    _count?: true | ConversationMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMessageMaxAggregateInputType
  }

  export type GetConversationMessageAggregateType<T extends ConversationMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateConversationMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversationMessage[P]>
      : GetScalarType<T[P], AggregateConversationMessage[P]>
  }




  export type ConversationMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationMessageWhereInput
    orderBy?: ConversationMessageOrderByWithAggregationInput | ConversationMessageOrderByWithAggregationInput[]
    by: ConversationMessageScalarFieldEnum[] | ConversationMessageScalarFieldEnum
    having?: ConversationMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationMessageCountAggregateInputType | true
    _min?: ConversationMessageMinAggregateInputType
    _max?: ConversationMessageMaxAggregateInputType
  }

  export type ConversationMessageGroupByOutputType = {
    id: string
    sessionId: string
    role: string
    content: string
    createdAt: Date
    _count: ConversationMessageCountAggregateOutputType | null
    _min: ConversationMessageMinAggregateOutputType | null
    _max: ConversationMessageMaxAggregateOutputType | null
  }

  type GetConversationMessageGroupByPayload<T extends ConversationMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationMessageGroupByOutputType[P]>
        }
      >
    >


  export type ConversationMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ConversationSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMessage"]>

  export type ConversationMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ConversationSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMessage"]>

  export type ConversationMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ConversationSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversationMessage"]>

  export type ConversationMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ConversationMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "role" | "content" | "createdAt", ExtArgs["result"]["conversationMessage"]>
  export type ConversationMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ConversationSessionDefaultArgs<ExtArgs>
  }
  export type ConversationMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ConversationSessionDefaultArgs<ExtArgs>
  }
  export type ConversationMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ConversationSessionDefaultArgs<ExtArgs>
  }

  export type $ConversationMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConversationMessage"
    objects: {
      session: Prisma.$ConversationSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["conversationMessage"]>
    composites: {}
  }

  type ConversationMessageGetPayload<S extends boolean | null | undefined | ConversationMessageDefaultArgs> = $Result.GetResult<Prisma.$ConversationMessagePayload, S>

  type ConversationMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationMessageCountAggregateInputType | true
    }

  export interface ConversationMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConversationMessage'], meta: { name: 'ConversationMessage' } }
    /**
     * Find zero or one ConversationMessage that matches the filter.
     * @param {ConversationMessageFindUniqueArgs} args - Arguments to find a ConversationMessage
     * @example
     * // Get one ConversationMessage
     * const conversationMessage = await prisma.conversationMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationMessageFindUniqueArgs>(args: SelectSubset<T, ConversationMessageFindUniqueArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConversationMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationMessageFindUniqueOrThrowArgs} args - Arguments to find a ConversationMessage
     * @example
     * // Get one ConversationMessage
     * const conversationMessage = await prisma.conversationMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageFindFirstArgs} args - Arguments to find a ConversationMessage
     * @example
     * // Get one ConversationMessage
     * const conversationMessage = await prisma.conversationMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationMessageFindFirstArgs>(args?: SelectSubset<T, ConversationMessageFindFirstArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConversationMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageFindFirstOrThrowArgs} args - Arguments to find a ConversationMessage
     * @example
     * // Get one ConversationMessage
     * const conversationMessage = await prisma.conversationMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConversationMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversationMessages
     * const conversationMessages = await prisma.conversationMessage.findMany()
     * 
     * // Get first 10 ConversationMessages
     * const conversationMessages = await prisma.conversationMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationMessageWithIdOnly = await prisma.conversationMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationMessageFindManyArgs>(args?: SelectSubset<T, ConversationMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConversationMessage.
     * @param {ConversationMessageCreateArgs} args - Arguments to create a ConversationMessage.
     * @example
     * // Create one ConversationMessage
     * const ConversationMessage = await prisma.conversationMessage.create({
     *   data: {
     *     // ... data to create a ConversationMessage
     *   }
     * })
     * 
     */
    create<T extends ConversationMessageCreateArgs>(args: SelectSubset<T, ConversationMessageCreateArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConversationMessages.
     * @param {ConversationMessageCreateManyArgs} args - Arguments to create many ConversationMessages.
     * @example
     * // Create many ConversationMessages
     * const conversationMessage = await prisma.conversationMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationMessageCreateManyArgs>(args?: SelectSubset<T, ConversationMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConversationMessages and returns the data saved in the database.
     * @param {ConversationMessageCreateManyAndReturnArgs} args - Arguments to create many ConversationMessages.
     * @example
     * // Create many ConversationMessages
     * const conversationMessage = await prisma.conversationMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConversationMessages and only return the `id`
     * const conversationMessageWithIdOnly = await prisma.conversationMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConversationMessage.
     * @param {ConversationMessageDeleteArgs} args - Arguments to delete one ConversationMessage.
     * @example
     * // Delete one ConversationMessage
     * const ConversationMessage = await prisma.conversationMessage.delete({
     *   where: {
     *     // ... filter to delete one ConversationMessage
     *   }
     * })
     * 
     */
    delete<T extends ConversationMessageDeleteArgs>(args: SelectSubset<T, ConversationMessageDeleteArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConversationMessage.
     * @param {ConversationMessageUpdateArgs} args - Arguments to update one ConversationMessage.
     * @example
     * // Update one ConversationMessage
     * const conversationMessage = await prisma.conversationMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationMessageUpdateArgs>(args: SelectSubset<T, ConversationMessageUpdateArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConversationMessages.
     * @param {ConversationMessageDeleteManyArgs} args - Arguments to filter ConversationMessages to delete.
     * @example
     * // Delete a few ConversationMessages
     * const { count } = await prisma.conversationMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationMessageDeleteManyArgs>(args?: SelectSubset<T, ConversationMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversationMessages
     * const conversationMessage = await prisma.conversationMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationMessageUpdateManyArgs>(args: SelectSubset<T, ConversationMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConversationMessages and returns the data updated in the database.
     * @param {ConversationMessageUpdateManyAndReturnArgs} args - Arguments to update many ConversationMessages.
     * @example
     * // Update many ConversationMessages
     * const conversationMessage = await prisma.conversationMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConversationMessages and only return the `id`
     * const conversationMessageWithIdOnly = await prisma.conversationMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConversationMessage.
     * @param {ConversationMessageUpsertArgs} args - Arguments to update or create a ConversationMessage.
     * @example
     * // Update or create a ConversationMessage
     * const conversationMessage = await prisma.conversationMessage.upsert({
     *   create: {
     *     // ... data to create a ConversationMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversationMessage we want to update
     *   }
     * })
     */
    upsert<T extends ConversationMessageUpsertArgs>(args: SelectSubset<T, ConversationMessageUpsertArgs<ExtArgs>>): Prisma__ConversationMessageClient<$Result.GetResult<Prisma.$ConversationMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConversationMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageCountArgs} args - Arguments to filter ConversationMessages to count.
     * @example
     * // Count the number of ConversationMessages
     * const count = await prisma.conversationMessage.count({
     *   where: {
     *     // ... the filter for the ConversationMessages we want to count
     *   }
     * })
    **/
    count<T extends ConversationMessageCountArgs>(
      args?: Subset<T, ConversationMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConversationMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationMessageAggregateArgs>(args: Subset<T, ConversationMessageAggregateArgs>): Prisma.PrismaPromise<GetConversationMessageAggregateType<T>>

    /**
     * Group by ConversationMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationMessageGroupByArgs['orderBy'] }
        : { orderBy?: ConversationMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConversationMessage model
   */
  readonly fields: ConversationMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConversationMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ConversationSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationSessionDefaultArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConversationMessage model
   */
  interface ConversationMessageFieldRefs {
    readonly id: FieldRef<"ConversationMessage", 'String'>
    readonly sessionId: FieldRef<"ConversationMessage", 'String'>
    readonly role: FieldRef<"ConversationMessage", 'String'>
    readonly content: FieldRef<"ConversationMessage", 'String'>
    readonly createdAt: FieldRef<"ConversationMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConversationMessage findUnique
   */
  export type ConversationMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMessage to fetch.
     */
    where: ConversationMessageWhereUniqueInput
  }

  /**
   * ConversationMessage findUniqueOrThrow
   */
  export type ConversationMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMessage to fetch.
     */
    where: ConversationMessageWhereUniqueInput
  }

  /**
   * ConversationMessage findFirst
   */
  export type ConversationMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMessage to fetch.
     */
    where?: ConversationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMessages to fetch.
     */
    orderBy?: ConversationMessageOrderByWithRelationInput | ConversationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMessages.
     */
    cursor?: ConversationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMessages.
     */
    distinct?: ConversationMessageScalarFieldEnum | ConversationMessageScalarFieldEnum[]
  }

  /**
   * ConversationMessage findFirstOrThrow
   */
  export type ConversationMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMessage to fetch.
     */
    where?: ConversationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMessages to fetch.
     */
    orderBy?: ConversationMessageOrderByWithRelationInput | ConversationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConversationMessages.
     */
    cursor?: ConversationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConversationMessages.
     */
    distinct?: ConversationMessageScalarFieldEnum | ConversationMessageScalarFieldEnum[]
  }

  /**
   * ConversationMessage findMany
   */
  export type ConversationMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * Filter, which ConversationMessages to fetch.
     */
    where?: ConversationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConversationMessages to fetch.
     */
    orderBy?: ConversationMessageOrderByWithRelationInput | ConversationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConversationMessages.
     */
    cursor?: ConversationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConversationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConversationMessages.
     */
    skip?: number
    distinct?: ConversationMessageScalarFieldEnum | ConversationMessageScalarFieldEnum[]
  }

  /**
   * ConversationMessage create
   */
  export type ConversationMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ConversationMessage.
     */
    data: XOR<ConversationMessageCreateInput, ConversationMessageUncheckedCreateInput>
  }

  /**
   * ConversationMessage createMany
   */
  export type ConversationMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversationMessages.
     */
    data: ConversationMessageCreateManyInput | ConversationMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConversationMessage createManyAndReturn
   */
  export type ConversationMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ConversationMessages.
     */
    data: ConversationMessageCreateManyInput | ConversationMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationMessage update
   */
  export type ConversationMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ConversationMessage.
     */
    data: XOR<ConversationMessageUpdateInput, ConversationMessageUncheckedUpdateInput>
    /**
     * Choose, which ConversationMessage to update.
     */
    where: ConversationMessageWhereUniqueInput
  }

  /**
   * ConversationMessage updateMany
   */
  export type ConversationMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversationMessages.
     */
    data: XOR<ConversationMessageUpdateManyMutationInput, ConversationMessageUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMessages to update
     */
    where?: ConversationMessageWhereInput
    /**
     * Limit how many ConversationMessages to update.
     */
    limit?: number
  }

  /**
   * ConversationMessage updateManyAndReturn
   */
  export type ConversationMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * The data used to update ConversationMessages.
     */
    data: XOR<ConversationMessageUpdateManyMutationInput, ConversationMessageUncheckedUpdateManyInput>
    /**
     * Filter which ConversationMessages to update
     */
    where?: ConversationMessageWhereInput
    /**
     * Limit how many ConversationMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConversationMessage upsert
   */
  export type ConversationMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ConversationMessage to update in case it exists.
     */
    where: ConversationMessageWhereUniqueInput
    /**
     * In case the ConversationMessage found by the `where` argument doesn't exist, create a new ConversationMessage with this data.
     */
    create: XOR<ConversationMessageCreateInput, ConversationMessageUncheckedCreateInput>
    /**
     * In case the ConversationMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationMessageUpdateInput, ConversationMessageUncheckedUpdateInput>
  }

  /**
   * ConversationMessage delete
   */
  export type ConversationMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
    /**
     * Filter which ConversationMessage to delete.
     */
    where: ConversationMessageWhereUniqueInput
  }

  /**
   * ConversationMessage deleteMany
   */
  export type ConversationMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConversationMessages to delete
     */
    where?: ConversationMessageWhereInput
    /**
     * Limit how many ConversationMessages to delete.
     */
    limit?: number
  }

  /**
   * ConversationMessage without action
   */
  export type ConversationMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationMessage
     */
    select?: ConversationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationMessage
     */
    omit?: ConversationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationMessageInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    leadScore: number | null
    crmAttempts: number | null
  }

  export type LeadSumAggregateOutputType = {
    leadScore: number | null
    crmAttempts: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    reference: string | null
    idempotencyKey: string | null
    source: string | null
    stage: $Enums.LeadStage | null
    priority: $Enums.LeadPriority | null
    customerName: string | null
    customerPhone: string | null
    customerEmail: string | null
    preferredContactChannel: string | null
    preferredContactTime: string | null
    additionalNotes: string | null
    consent: boolean | null
    consentTimestamp: Date | null
    selectedConceptId: string | null
    selectedDestinationSlug: string | null
    selectedDirection: string | null
    leadScore: number | null
    crmStatus: $Enums.CRMDeliveryStatus | null
    crmProvider: string | null
    crmAttempts: number | null
    crmReferenceId: string | null
    crmLastError: string | null
    crmLastAttempt: Date | null
    crmNextRetryAt: Date | null
    consultantOwner: string | null
    followUpDueAt: Date | null
    conversationSessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    idempotencyKey: string | null
    source: string | null
    stage: $Enums.LeadStage | null
    priority: $Enums.LeadPriority | null
    customerName: string | null
    customerPhone: string | null
    customerEmail: string | null
    preferredContactChannel: string | null
    preferredContactTime: string | null
    additionalNotes: string | null
    consent: boolean | null
    consentTimestamp: Date | null
    selectedConceptId: string | null
    selectedDestinationSlug: string | null
    selectedDirection: string | null
    leadScore: number | null
    crmStatus: $Enums.CRMDeliveryStatus | null
    crmProvider: string | null
    crmAttempts: number | null
    crmReferenceId: string | null
    crmLastError: string | null
    crmLastAttempt: Date | null
    crmNextRetryAt: Date | null
    consultantOwner: string | null
    followUpDueAt: Date | null
    conversationSessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    reference: number
    idempotencyKey: number
    source: number
    stage: number
    priority: number
    customerName: number
    customerPhone: number
    customerEmail: number
    preferredContactChannel: number
    preferredContactTime: number
    additionalNotes: number
    consent: number
    consentTimestamp: number
    tripBrief: number
    transcript: number
    selectedConceptId: number
    selectedDestinationSlug: number
    selectedDirection: number
    itinerary: number
    leadScore: number
    leadScoreReasons: number
    crmStatus: number
    crmProvider: number
    crmAttempts: number
    crmReferenceId: number
    crmLastError: number
    crmLastAttempt: number
    crmNextRetryAt: number
    consultantOwner: number
    followUpDueAt: number
    conversationSessionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    leadScore?: true
    crmAttempts?: true
  }

  export type LeadSumAggregateInputType = {
    leadScore?: true
    crmAttempts?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    reference?: true
    idempotencyKey?: true
    source?: true
    stage?: true
    priority?: true
    customerName?: true
    customerPhone?: true
    customerEmail?: true
    preferredContactChannel?: true
    preferredContactTime?: true
    additionalNotes?: true
    consent?: true
    consentTimestamp?: true
    selectedConceptId?: true
    selectedDestinationSlug?: true
    selectedDirection?: true
    leadScore?: true
    crmStatus?: true
    crmProvider?: true
    crmAttempts?: true
    crmReferenceId?: true
    crmLastError?: true
    crmLastAttempt?: true
    crmNextRetryAt?: true
    consultantOwner?: true
    followUpDueAt?: true
    conversationSessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    reference?: true
    idempotencyKey?: true
    source?: true
    stage?: true
    priority?: true
    customerName?: true
    customerPhone?: true
    customerEmail?: true
    preferredContactChannel?: true
    preferredContactTime?: true
    additionalNotes?: true
    consent?: true
    consentTimestamp?: true
    selectedConceptId?: true
    selectedDestinationSlug?: true
    selectedDirection?: true
    leadScore?: true
    crmStatus?: true
    crmProvider?: true
    crmAttempts?: true
    crmReferenceId?: true
    crmLastError?: true
    crmLastAttempt?: true
    crmNextRetryAt?: true
    consultantOwner?: true
    followUpDueAt?: true
    conversationSessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    reference?: true
    idempotencyKey?: true
    source?: true
    stage?: true
    priority?: true
    customerName?: true
    customerPhone?: true
    customerEmail?: true
    preferredContactChannel?: true
    preferredContactTime?: true
    additionalNotes?: true
    consent?: true
    consentTimestamp?: true
    tripBrief?: true
    transcript?: true
    selectedConceptId?: true
    selectedDestinationSlug?: true
    selectedDirection?: true
    itinerary?: true
    leadScore?: true
    leadScoreReasons?: true
    crmStatus?: true
    crmProvider?: true
    crmAttempts?: true
    crmReferenceId?: true
    crmLastError?: true
    crmLastAttempt?: true
    crmNextRetryAt?: true
    consultantOwner?: true
    followUpDueAt?: true
    conversationSessionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    reference: string
    idempotencyKey: string
    source: string
    stage: $Enums.LeadStage
    priority: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime: string | null
    additionalNotes: string | null
    consent: boolean
    consentTimestamp: Date
    tripBrief: JsonValue
    transcript: JsonValue
    selectedConceptId: string | null
    selectedDestinationSlug: string | null
    selectedDirection: string | null
    itinerary: JsonValue
    leadScore: number
    leadScoreReasons: JsonValue
    crmStatus: $Enums.CRMDeliveryStatus
    crmProvider: string
    crmAttempts: number
    crmReferenceId: string | null
    crmLastError: string | null
    crmLastAttempt: Date | null
    crmNextRetryAt: Date | null
    consultantOwner: string | null
    followUpDueAt: Date | null
    conversationSessionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    idempotencyKey?: boolean
    source?: boolean
    stage?: boolean
    priority?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    preferredContactChannel?: boolean
    preferredContactTime?: boolean
    additionalNotes?: boolean
    consent?: boolean
    consentTimestamp?: boolean
    tripBrief?: boolean
    transcript?: boolean
    selectedConceptId?: boolean
    selectedDestinationSlug?: boolean
    selectedDirection?: boolean
    itinerary?: boolean
    leadScore?: boolean
    leadScoreReasons?: boolean
    crmStatus?: boolean
    crmProvider?: boolean
    crmAttempts?: boolean
    crmReferenceId?: boolean
    crmLastError?: boolean
    crmLastAttempt?: boolean
    crmNextRetryAt?: boolean
    consultantOwner?: boolean
    followUpDueAt?: boolean
    conversationSessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationSession?: boolean | Lead$conversationSessionArgs<ExtArgs>
    recommendations?: boolean | Lead$recommendationsArgs<ExtArgs>
    itineraryDays?: boolean | Lead$itineraryDaysArgs<ExtArgs>
    notes?: boolean | Lead$notesArgs<ExtArgs>
    assignments?: boolean | Lead$assignmentsArgs<ExtArgs>
    crmDeliveries?: boolean | Lead$crmDeliveriesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    idempotencyKey?: boolean
    source?: boolean
    stage?: boolean
    priority?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    preferredContactChannel?: boolean
    preferredContactTime?: boolean
    additionalNotes?: boolean
    consent?: boolean
    consentTimestamp?: boolean
    tripBrief?: boolean
    transcript?: boolean
    selectedConceptId?: boolean
    selectedDestinationSlug?: boolean
    selectedDirection?: boolean
    itinerary?: boolean
    leadScore?: boolean
    leadScoreReasons?: boolean
    crmStatus?: boolean
    crmProvider?: boolean
    crmAttempts?: boolean
    crmReferenceId?: boolean
    crmLastError?: boolean
    crmLastAttempt?: boolean
    crmNextRetryAt?: boolean
    consultantOwner?: boolean
    followUpDueAt?: boolean
    conversationSessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationSession?: boolean | Lead$conversationSessionArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    idempotencyKey?: boolean
    source?: boolean
    stage?: boolean
    priority?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    preferredContactChannel?: boolean
    preferredContactTime?: boolean
    additionalNotes?: boolean
    consent?: boolean
    consentTimestamp?: boolean
    tripBrief?: boolean
    transcript?: boolean
    selectedConceptId?: boolean
    selectedDestinationSlug?: boolean
    selectedDirection?: boolean
    itinerary?: boolean
    leadScore?: boolean
    leadScoreReasons?: boolean
    crmStatus?: boolean
    crmProvider?: boolean
    crmAttempts?: boolean
    crmReferenceId?: boolean
    crmLastError?: boolean
    crmLastAttempt?: boolean
    crmNextRetryAt?: boolean
    consultantOwner?: boolean
    followUpDueAt?: boolean
    conversationSessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversationSession?: boolean | Lead$conversationSessionArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    reference?: boolean
    idempotencyKey?: boolean
    source?: boolean
    stage?: boolean
    priority?: boolean
    customerName?: boolean
    customerPhone?: boolean
    customerEmail?: boolean
    preferredContactChannel?: boolean
    preferredContactTime?: boolean
    additionalNotes?: boolean
    consent?: boolean
    consentTimestamp?: boolean
    tripBrief?: boolean
    transcript?: boolean
    selectedConceptId?: boolean
    selectedDestinationSlug?: boolean
    selectedDirection?: boolean
    itinerary?: boolean
    leadScore?: boolean
    leadScoreReasons?: boolean
    crmStatus?: boolean
    crmProvider?: boolean
    crmAttempts?: boolean
    crmReferenceId?: boolean
    crmLastError?: boolean
    crmLastAttempt?: boolean
    crmNextRetryAt?: boolean
    consultantOwner?: boolean
    followUpDueAt?: boolean
    conversationSessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "idempotencyKey" | "source" | "stage" | "priority" | "customerName" | "customerPhone" | "customerEmail" | "preferredContactChannel" | "preferredContactTime" | "additionalNotes" | "consent" | "consentTimestamp" | "tripBrief" | "transcript" | "selectedConceptId" | "selectedDestinationSlug" | "selectedDirection" | "itinerary" | "leadScore" | "leadScoreReasons" | "crmStatus" | "crmProvider" | "crmAttempts" | "crmReferenceId" | "crmLastError" | "crmLastAttempt" | "crmNextRetryAt" | "consultantOwner" | "followUpDueAt" | "conversationSessionId" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationSession?: boolean | Lead$conversationSessionArgs<ExtArgs>
    recommendations?: boolean | Lead$recommendationsArgs<ExtArgs>
    itineraryDays?: boolean | Lead$itineraryDaysArgs<ExtArgs>
    notes?: boolean | Lead$notesArgs<ExtArgs>
    assignments?: boolean | Lead$assignmentsArgs<ExtArgs>
    crmDeliveries?: boolean | Lead$crmDeliveriesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationSession?: boolean | Lead$conversationSessionArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversationSession?: boolean | Lead$conversationSessionArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      conversationSession: Prisma.$ConversationSessionPayload<ExtArgs> | null
      recommendations: Prisma.$LeadRecommendationPayload<ExtArgs>[]
      itineraryDays: Prisma.$LeadItineraryDayPayload<ExtArgs>[]
      notes: Prisma.$LeadNotePayload<ExtArgs>[]
      assignments: Prisma.$LeadAssignmentPayload<ExtArgs>[]
      crmDeliveries: Prisma.$CRMDeliveryAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      idempotencyKey: string
      source: string
      stage: $Enums.LeadStage
      priority: $Enums.LeadPriority
      customerName: string
      customerPhone: string
      customerEmail: string
      preferredContactChannel: string
      preferredContactTime: string | null
      additionalNotes: string | null
      consent: boolean
      consentTimestamp: Date
      /**
       * Structured TravelBrief JSON
       */
      tripBrief: Prisma.JsonValue
      /**
       * Conversation transcript JSON [{role, content, createdAt}]
       */
      transcript: Prisma.JsonValue
      selectedConceptId: string | null
      selectedDestinationSlug: string | null
      selectedDirection: string | null
      /**
       * Itinerary days JSON
       */
      itinerary: Prisma.JsonValue
      leadScore: number
      leadScoreReasons: Prisma.JsonValue
      crmStatus: $Enums.CRMDeliveryStatus
      crmProvider: string
      crmAttempts: number
      crmReferenceId: string | null
      crmLastError: string | null
      crmLastAttempt: Date | null
      crmNextRetryAt: Date | null
      consultantOwner: string | null
      followUpDueAt: Date | null
      conversationSessionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversationSession<T extends Lead$conversationSessionArgs<ExtArgs> = {}>(args?: Subset<T, Lead$conversationSessionArgs<ExtArgs>>): Prisma__ConversationSessionClient<$Result.GetResult<Prisma.$ConversationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recommendations<T extends Lead$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itineraryDays<T extends Lead$itineraryDaysArgs<ExtArgs> = {}>(args?: Subset<T, Lead$itineraryDaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Lead$notesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Lead$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crmDeliveries<T extends Lead$crmDeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$crmDeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly reference: FieldRef<"Lead", 'String'>
    readonly idempotencyKey: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'String'>
    readonly stage: FieldRef<"Lead", 'LeadStage'>
    readonly priority: FieldRef<"Lead", 'LeadPriority'>
    readonly customerName: FieldRef<"Lead", 'String'>
    readonly customerPhone: FieldRef<"Lead", 'String'>
    readonly customerEmail: FieldRef<"Lead", 'String'>
    readonly preferredContactChannel: FieldRef<"Lead", 'String'>
    readonly preferredContactTime: FieldRef<"Lead", 'String'>
    readonly additionalNotes: FieldRef<"Lead", 'String'>
    readonly consent: FieldRef<"Lead", 'Boolean'>
    readonly consentTimestamp: FieldRef<"Lead", 'DateTime'>
    readonly tripBrief: FieldRef<"Lead", 'Json'>
    readonly transcript: FieldRef<"Lead", 'Json'>
    readonly selectedConceptId: FieldRef<"Lead", 'String'>
    readonly selectedDestinationSlug: FieldRef<"Lead", 'String'>
    readonly selectedDirection: FieldRef<"Lead", 'String'>
    readonly itinerary: FieldRef<"Lead", 'Json'>
    readonly leadScore: FieldRef<"Lead", 'Int'>
    readonly leadScoreReasons: FieldRef<"Lead", 'Json'>
    readonly crmStatus: FieldRef<"Lead", 'CRMDeliveryStatus'>
    readonly crmProvider: FieldRef<"Lead", 'String'>
    readonly crmAttempts: FieldRef<"Lead", 'Int'>
    readonly crmReferenceId: FieldRef<"Lead", 'String'>
    readonly crmLastError: FieldRef<"Lead", 'String'>
    readonly crmLastAttempt: FieldRef<"Lead", 'DateTime'>
    readonly crmNextRetryAt: FieldRef<"Lead", 'DateTime'>
    readonly consultantOwner: FieldRef<"Lead", 'String'>
    readonly followUpDueAt: FieldRef<"Lead", 'DateTime'>
    readonly conversationSessionId: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.conversationSession
   */
  export type Lead$conversationSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationSession
     */
    select?: ConversationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConversationSession
     */
    omit?: ConversationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationSessionInclude<ExtArgs> | null
    where?: ConversationSessionWhereInput
  }

  /**
   * Lead.recommendations
   */
  export type Lead$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    where?: LeadRecommendationWhereInput
    orderBy?: LeadRecommendationOrderByWithRelationInput | LeadRecommendationOrderByWithRelationInput[]
    cursor?: LeadRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadRecommendationScalarFieldEnum | LeadRecommendationScalarFieldEnum[]
  }

  /**
   * Lead.itineraryDays
   */
  export type Lead$itineraryDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    where?: LeadItineraryDayWhereInput
    orderBy?: LeadItineraryDayOrderByWithRelationInput | LeadItineraryDayOrderByWithRelationInput[]
    cursor?: LeadItineraryDayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadItineraryDayScalarFieldEnum | LeadItineraryDayScalarFieldEnum[]
  }

  /**
   * Lead.notes
   */
  export type Lead$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    cursor?: LeadNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * Lead.assignments
   */
  export type Lead$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    where?: LeadAssignmentWhereInput
    orderBy?: LeadAssignmentOrderByWithRelationInput | LeadAssignmentOrderByWithRelationInput[]
    cursor?: LeadAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadAssignmentScalarFieldEnum | LeadAssignmentScalarFieldEnum[]
  }

  /**
   * Lead.crmDeliveries
   */
  export type Lead$crmDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    where?: CRMDeliveryAttemptWhereInput
    orderBy?: CRMDeliveryAttemptOrderByWithRelationInput | CRMDeliveryAttemptOrderByWithRelationInput[]
    cursor?: CRMDeliveryAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CRMDeliveryAttemptScalarFieldEnum | CRMDeliveryAttemptScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model LeadRecommendation
   */

  export type AggregateLeadRecommendation = {
    _count: LeadRecommendationCountAggregateOutputType | null
    _min: LeadRecommendationMinAggregateOutputType | null
    _max: LeadRecommendationMaxAggregateOutputType | null
  }

  export type LeadRecommendationMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    conceptId: string | null
    destinationSlug: string | null
    direction: string | null
    tradeOff: string | null
  }

  export type LeadRecommendationMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    conceptId: string | null
    destinationSlug: string | null
    direction: string | null
    tradeOff: string | null
  }

  export type LeadRecommendationCountAggregateOutputType = {
    id: number
    leadId: number
    conceptId: number
    destinationSlug: number
    direction: number
    score: number
    reasons: number
    tradeOff: number
    _all: number
  }


  export type LeadRecommendationMinAggregateInputType = {
    id?: true
    leadId?: true
    conceptId?: true
    destinationSlug?: true
    direction?: true
    tradeOff?: true
  }

  export type LeadRecommendationMaxAggregateInputType = {
    id?: true
    leadId?: true
    conceptId?: true
    destinationSlug?: true
    direction?: true
    tradeOff?: true
  }

  export type LeadRecommendationCountAggregateInputType = {
    id?: true
    leadId?: true
    conceptId?: true
    destinationSlug?: true
    direction?: true
    score?: true
    reasons?: true
    tradeOff?: true
    _all?: true
  }

  export type LeadRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadRecommendation to aggregate.
     */
    where?: LeadRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRecommendations to fetch.
     */
    orderBy?: LeadRecommendationOrderByWithRelationInput | LeadRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadRecommendations
    **/
    _count?: true | LeadRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadRecommendationMaxAggregateInputType
  }

  export type GetLeadRecommendationAggregateType<T extends LeadRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadRecommendation[P]>
      : GetScalarType<T[P], AggregateLeadRecommendation[P]>
  }




  export type LeadRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadRecommendationWhereInput
    orderBy?: LeadRecommendationOrderByWithAggregationInput | LeadRecommendationOrderByWithAggregationInput[]
    by: LeadRecommendationScalarFieldEnum[] | LeadRecommendationScalarFieldEnum
    having?: LeadRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadRecommendationCountAggregateInputType | true
    _min?: LeadRecommendationMinAggregateInputType
    _max?: LeadRecommendationMaxAggregateInputType
  }

  export type LeadRecommendationGroupByOutputType = {
    id: string
    leadId: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonValue
    reasons: JsonValue
    tradeOff: string
    _count: LeadRecommendationCountAggregateOutputType | null
    _min: LeadRecommendationMinAggregateOutputType | null
    _max: LeadRecommendationMaxAggregateOutputType | null
  }

  type GetLeadRecommendationGroupByPayload<T extends LeadRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], LeadRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type LeadRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    conceptId?: boolean
    destinationSlug?: boolean
    direction?: boolean
    score?: boolean
    reasons?: boolean
    tradeOff?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadRecommendation"]>

  export type LeadRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    conceptId?: boolean
    destinationSlug?: boolean
    direction?: boolean
    score?: boolean
    reasons?: boolean
    tradeOff?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadRecommendation"]>

  export type LeadRecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    conceptId?: boolean
    destinationSlug?: boolean
    direction?: boolean
    score?: boolean
    reasons?: boolean
    tradeOff?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadRecommendation"]>

  export type LeadRecommendationSelectScalar = {
    id?: boolean
    leadId?: boolean
    conceptId?: boolean
    destinationSlug?: boolean
    direction?: boolean
    score?: boolean
    reasons?: boolean
    tradeOff?: boolean
  }

  export type LeadRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "conceptId" | "destinationSlug" | "direction" | "score" | "reasons" | "tradeOff", ExtArgs["result"]["leadRecommendation"]>
  export type LeadRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadRecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadRecommendation"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      conceptId: string
      destinationSlug: string
      direction: string
      score: Prisma.JsonValue
      reasons: Prisma.JsonValue
      tradeOff: string
    }, ExtArgs["result"]["leadRecommendation"]>
    composites: {}
  }

  type LeadRecommendationGetPayload<S extends boolean | null | undefined | LeadRecommendationDefaultArgs> = $Result.GetResult<Prisma.$LeadRecommendationPayload, S>

  type LeadRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadRecommendationCountAggregateInputType | true
    }

  export interface LeadRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadRecommendation'], meta: { name: 'LeadRecommendation' } }
    /**
     * Find zero or one LeadRecommendation that matches the filter.
     * @param {LeadRecommendationFindUniqueArgs} args - Arguments to find a LeadRecommendation
     * @example
     * // Get one LeadRecommendation
     * const leadRecommendation = await prisma.leadRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadRecommendationFindUniqueArgs>(args: SelectSubset<T, LeadRecommendationFindUniqueArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadRecommendationFindUniqueOrThrowArgs} args - Arguments to find a LeadRecommendation
     * @example
     * // Get one LeadRecommendation
     * const leadRecommendation = await prisma.leadRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationFindFirstArgs} args - Arguments to find a LeadRecommendation
     * @example
     * // Get one LeadRecommendation
     * const leadRecommendation = await prisma.leadRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadRecommendationFindFirstArgs>(args?: SelectSubset<T, LeadRecommendationFindFirstArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationFindFirstOrThrowArgs} args - Arguments to find a LeadRecommendation
     * @example
     * // Get one LeadRecommendation
     * const leadRecommendation = await prisma.leadRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadRecommendations
     * const leadRecommendations = await prisma.leadRecommendation.findMany()
     * 
     * // Get first 10 LeadRecommendations
     * const leadRecommendations = await prisma.leadRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadRecommendationWithIdOnly = await prisma.leadRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadRecommendationFindManyArgs>(args?: SelectSubset<T, LeadRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadRecommendation.
     * @param {LeadRecommendationCreateArgs} args - Arguments to create a LeadRecommendation.
     * @example
     * // Create one LeadRecommendation
     * const LeadRecommendation = await prisma.leadRecommendation.create({
     *   data: {
     *     // ... data to create a LeadRecommendation
     *   }
     * })
     * 
     */
    create<T extends LeadRecommendationCreateArgs>(args: SelectSubset<T, LeadRecommendationCreateArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadRecommendations.
     * @param {LeadRecommendationCreateManyArgs} args - Arguments to create many LeadRecommendations.
     * @example
     * // Create many LeadRecommendations
     * const leadRecommendation = await prisma.leadRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadRecommendationCreateManyArgs>(args?: SelectSubset<T, LeadRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadRecommendations and returns the data saved in the database.
     * @param {LeadRecommendationCreateManyAndReturnArgs} args - Arguments to create many LeadRecommendations.
     * @example
     * // Create many LeadRecommendations
     * const leadRecommendation = await prisma.leadRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadRecommendations and only return the `id`
     * const leadRecommendationWithIdOnly = await prisma.leadRecommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadRecommendation.
     * @param {LeadRecommendationDeleteArgs} args - Arguments to delete one LeadRecommendation.
     * @example
     * // Delete one LeadRecommendation
     * const LeadRecommendation = await prisma.leadRecommendation.delete({
     *   where: {
     *     // ... filter to delete one LeadRecommendation
     *   }
     * })
     * 
     */
    delete<T extends LeadRecommendationDeleteArgs>(args: SelectSubset<T, LeadRecommendationDeleteArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadRecommendation.
     * @param {LeadRecommendationUpdateArgs} args - Arguments to update one LeadRecommendation.
     * @example
     * // Update one LeadRecommendation
     * const leadRecommendation = await prisma.leadRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadRecommendationUpdateArgs>(args: SelectSubset<T, LeadRecommendationUpdateArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadRecommendations.
     * @param {LeadRecommendationDeleteManyArgs} args - Arguments to filter LeadRecommendations to delete.
     * @example
     * // Delete a few LeadRecommendations
     * const { count } = await prisma.leadRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadRecommendationDeleteManyArgs>(args?: SelectSubset<T, LeadRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadRecommendations
     * const leadRecommendation = await prisma.leadRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadRecommendationUpdateManyArgs>(args: SelectSubset<T, LeadRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadRecommendations and returns the data updated in the database.
     * @param {LeadRecommendationUpdateManyAndReturnArgs} args - Arguments to update many LeadRecommendations.
     * @example
     * // Update many LeadRecommendations
     * const leadRecommendation = await prisma.leadRecommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadRecommendations and only return the `id`
     * const leadRecommendationWithIdOnly = await prisma.leadRecommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadRecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadRecommendation.
     * @param {LeadRecommendationUpsertArgs} args - Arguments to update or create a LeadRecommendation.
     * @example
     * // Update or create a LeadRecommendation
     * const leadRecommendation = await prisma.leadRecommendation.upsert({
     *   create: {
     *     // ... data to create a LeadRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends LeadRecommendationUpsertArgs>(args: SelectSubset<T, LeadRecommendationUpsertArgs<ExtArgs>>): Prisma__LeadRecommendationClient<$Result.GetResult<Prisma.$LeadRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationCountArgs} args - Arguments to filter LeadRecommendations to count.
     * @example
     * // Count the number of LeadRecommendations
     * const count = await prisma.leadRecommendation.count({
     *   where: {
     *     // ... the filter for the LeadRecommendations we want to count
     *   }
     * })
    **/
    count<T extends LeadRecommendationCountArgs>(
      args?: Subset<T, LeadRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadRecommendationAggregateArgs>(args: Subset<T, LeadRecommendationAggregateArgs>): Prisma.PrismaPromise<GetLeadRecommendationAggregateType<T>>

    /**
     * Group by LeadRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadRecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: LeadRecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadRecommendation model
   */
  readonly fields: LeadRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadRecommendation model
   */
  interface LeadRecommendationFieldRefs {
    readonly id: FieldRef<"LeadRecommendation", 'String'>
    readonly leadId: FieldRef<"LeadRecommendation", 'String'>
    readonly conceptId: FieldRef<"LeadRecommendation", 'String'>
    readonly destinationSlug: FieldRef<"LeadRecommendation", 'String'>
    readonly direction: FieldRef<"LeadRecommendation", 'String'>
    readonly score: FieldRef<"LeadRecommendation", 'Json'>
    readonly reasons: FieldRef<"LeadRecommendation", 'Json'>
    readonly tradeOff: FieldRef<"LeadRecommendation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeadRecommendation findUnique
   */
  export type LeadRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which LeadRecommendation to fetch.
     */
    where: LeadRecommendationWhereUniqueInput
  }

  /**
   * LeadRecommendation findUniqueOrThrow
   */
  export type LeadRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which LeadRecommendation to fetch.
     */
    where: LeadRecommendationWhereUniqueInput
  }

  /**
   * LeadRecommendation findFirst
   */
  export type LeadRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which LeadRecommendation to fetch.
     */
    where?: LeadRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRecommendations to fetch.
     */
    orderBy?: LeadRecommendationOrderByWithRelationInput | LeadRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadRecommendations.
     */
    cursor?: LeadRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadRecommendations.
     */
    distinct?: LeadRecommendationScalarFieldEnum | LeadRecommendationScalarFieldEnum[]
  }

  /**
   * LeadRecommendation findFirstOrThrow
   */
  export type LeadRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which LeadRecommendation to fetch.
     */
    where?: LeadRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRecommendations to fetch.
     */
    orderBy?: LeadRecommendationOrderByWithRelationInput | LeadRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadRecommendations.
     */
    cursor?: LeadRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadRecommendations.
     */
    distinct?: LeadRecommendationScalarFieldEnum | LeadRecommendationScalarFieldEnum[]
  }

  /**
   * LeadRecommendation findMany
   */
  export type LeadRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which LeadRecommendations to fetch.
     */
    where?: LeadRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadRecommendations to fetch.
     */
    orderBy?: LeadRecommendationOrderByWithRelationInput | LeadRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadRecommendations.
     */
    cursor?: LeadRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadRecommendations.
     */
    skip?: number
    distinct?: LeadRecommendationScalarFieldEnum | LeadRecommendationScalarFieldEnum[]
  }

  /**
   * LeadRecommendation create
   */
  export type LeadRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadRecommendation.
     */
    data: XOR<LeadRecommendationCreateInput, LeadRecommendationUncheckedCreateInput>
  }

  /**
   * LeadRecommendation createMany
   */
  export type LeadRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadRecommendations.
     */
    data: LeadRecommendationCreateManyInput | LeadRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadRecommendation createManyAndReturn
   */
  export type LeadRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many LeadRecommendations.
     */
    data: LeadRecommendationCreateManyInput | LeadRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadRecommendation update
   */
  export type LeadRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadRecommendation.
     */
    data: XOR<LeadRecommendationUpdateInput, LeadRecommendationUncheckedUpdateInput>
    /**
     * Choose, which LeadRecommendation to update.
     */
    where: LeadRecommendationWhereUniqueInput
  }

  /**
   * LeadRecommendation updateMany
   */
  export type LeadRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadRecommendations.
     */
    data: XOR<LeadRecommendationUpdateManyMutationInput, LeadRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which LeadRecommendations to update
     */
    where?: LeadRecommendationWhereInput
    /**
     * Limit how many LeadRecommendations to update.
     */
    limit?: number
  }

  /**
   * LeadRecommendation updateManyAndReturn
   */
  export type LeadRecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * The data used to update LeadRecommendations.
     */
    data: XOR<LeadRecommendationUpdateManyMutationInput, LeadRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which LeadRecommendations to update
     */
    where?: LeadRecommendationWhereInput
    /**
     * Limit how many LeadRecommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadRecommendation upsert
   */
  export type LeadRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadRecommendation to update in case it exists.
     */
    where: LeadRecommendationWhereUniqueInput
    /**
     * In case the LeadRecommendation found by the `where` argument doesn't exist, create a new LeadRecommendation with this data.
     */
    create: XOR<LeadRecommendationCreateInput, LeadRecommendationUncheckedCreateInput>
    /**
     * In case the LeadRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadRecommendationUpdateInput, LeadRecommendationUncheckedUpdateInput>
  }

  /**
   * LeadRecommendation delete
   */
  export type LeadRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
    /**
     * Filter which LeadRecommendation to delete.
     */
    where: LeadRecommendationWhereUniqueInput
  }

  /**
   * LeadRecommendation deleteMany
   */
  export type LeadRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadRecommendations to delete
     */
    where?: LeadRecommendationWhereInput
    /**
     * Limit how many LeadRecommendations to delete.
     */
    limit?: number
  }

  /**
   * LeadRecommendation without action
   */
  export type LeadRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadRecommendation
     */
    select?: LeadRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadRecommendation
     */
    omit?: LeadRecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadRecommendationInclude<ExtArgs> | null
  }


  /**
   * Model LeadItineraryDay
   */

  export type AggregateLeadItineraryDay = {
    _count: LeadItineraryDayCountAggregateOutputType | null
    _avg: LeadItineraryDayAvgAggregateOutputType | null
    _sum: LeadItineraryDaySumAggregateOutputType | null
    _min: LeadItineraryDayMinAggregateOutputType | null
    _max: LeadItineraryDayMaxAggregateOutputType | null
  }

  export type LeadItineraryDayAvgAggregateOutputType = {
    day: number | null
  }

  export type LeadItineraryDaySumAggregateOutputType = {
    day: number | null
  }

  export type LeadItineraryDayMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    day: number | null
    title: string | null
    pace: string | null
  }

  export type LeadItineraryDayMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    day: number | null
    title: string | null
    pace: string | null
  }

  export type LeadItineraryDayCountAggregateOutputType = {
    id: number
    leadId: number
    day: number
    title: number
    pace: number
    activities: number
    notes: number
    _all: number
  }


  export type LeadItineraryDayAvgAggregateInputType = {
    day?: true
  }

  export type LeadItineraryDaySumAggregateInputType = {
    day?: true
  }

  export type LeadItineraryDayMinAggregateInputType = {
    id?: true
    leadId?: true
    day?: true
    title?: true
    pace?: true
  }

  export type LeadItineraryDayMaxAggregateInputType = {
    id?: true
    leadId?: true
    day?: true
    title?: true
    pace?: true
  }

  export type LeadItineraryDayCountAggregateInputType = {
    id?: true
    leadId?: true
    day?: true
    title?: true
    pace?: true
    activities?: true
    notes?: true
    _all?: true
  }

  export type LeadItineraryDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadItineraryDay to aggregate.
     */
    where?: LeadItineraryDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadItineraryDays to fetch.
     */
    orderBy?: LeadItineraryDayOrderByWithRelationInput | LeadItineraryDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadItineraryDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadItineraryDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadItineraryDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadItineraryDays
    **/
    _count?: true | LeadItineraryDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadItineraryDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadItineraryDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadItineraryDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadItineraryDayMaxAggregateInputType
  }

  export type GetLeadItineraryDayAggregateType<T extends LeadItineraryDayAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadItineraryDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadItineraryDay[P]>
      : GetScalarType<T[P], AggregateLeadItineraryDay[P]>
  }




  export type LeadItineraryDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadItineraryDayWhereInput
    orderBy?: LeadItineraryDayOrderByWithAggregationInput | LeadItineraryDayOrderByWithAggregationInput[]
    by: LeadItineraryDayScalarFieldEnum[] | LeadItineraryDayScalarFieldEnum
    having?: LeadItineraryDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadItineraryDayCountAggregateInputType | true
    _avg?: LeadItineraryDayAvgAggregateInputType
    _sum?: LeadItineraryDaySumAggregateInputType
    _min?: LeadItineraryDayMinAggregateInputType
    _max?: LeadItineraryDayMaxAggregateInputType
  }

  export type LeadItineraryDayGroupByOutputType = {
    id: string
    leadId: string
    day: number
    title: string
    pace: string
    activities: JsonValue
    notes: JsonValue
    _count: LeadItineraryDayCountAggregateOutputType | null
    _avg: LeadItineraryDayAvgAggregateOutputType | null
    _sum: LeadItineraryDaySumAggregateOutputType | null
    _min: LeadItineraryDayMinAggregateOutputType | null
    _max: LeadItineraryDayMaxAggregateOutputType | null
  }

  type GetLeadItineraryDayGroupByPayload<T extends LeadItineraryDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadItineraryDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadItineraryDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadItineraryDayGroupByOutputType[P]>
            : GetScalarType<T[P], LeadItineraryDayGroupByOutputType[P]>
        }
      >
    >


  export type LeadItineraryDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    day?: boolean
    title?: boolean
    pace?: boolean
    activities?: boolean
    notes?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadItineraryDay"]>

  export type LeadItineraryDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    day?: boolean
    title?: boolean
    pace?: boolean
    activities?: boolean
    notes?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadItineraryDay"]>

  export type LeadItineraryDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    day?: boolean
    title?: boolean
    pace?: boolean
    activities?: boolean
    notes?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadItineraryDay"]>

  export type LeadItineraryDaySelectScalar = {
    id?: boolean
    leadId?: boolean
    day?: boolean
    title?: boolean
    pace?: boolean
    activities?: boolean
    notes?: boolean
  }

  export type LeadItineraryDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "day" | "title" | "pace" | "activities" | "notes", ExtArgs["result"]["leadItineraryDay"]>
  export type LeadItineraryDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadItineraryDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadItineraryDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadItineraryDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadItineraryDay"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      day: number
      title: string
      pace: string
      activities: Prisma.JsonValue
      notes: Prisma.JsonValue
    }, ExtArgs["result"]["leadItineraryDay"]>
    composites: {}
  }

  type LeadItineraryDayGetPayload<S extends boolean | null | undefined | LeadItineraryDayDefaultArgs> = $Result.GetResult<Prisma.$LeadItineraryDayPayload, S>

  type LeadItineraryDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadItineraryDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadItineraryDayCountAggregateInputType | true
    }

  export interface LeadItineraryDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadItineraryDay'], meta: { name: 'LeadItineraryDay' } }
    /**
     * Find zero or one LeadItineraryDay that matches the filter.
     * @param {LeadItineraryDayFindUniqueArgs} args - Arguments to find a LeadItineraryDay
     * @example
     * // Get one LeadItineraryDay
     * const leadItineraryDay = await prisma.leadItineraryDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadItineraryDayFindUniqueArgs>(args: SelectSubset<T, LeadItineraryDayFindUniqueArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadItineraryDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadItineraryDayFindUniqueOrThrowArgs} args - Arguments to find a LeadItineraryDay
     * @example
     * // Get one LeadItineraryDay
     * const leadItineraryDay = await prisma.leadItineraryDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadItineraryDayFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadItineraryDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadItineraryDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayFindFirstArgs} args - Arguments to find a LeadItineraryDay
     * @example
     * // Get one LeadItineraryDay
     * const leadItineraryDay = await prisma.leadItineraryDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadItineraryDayFindFirstArgs>(args?: SelectSubset<T, LeadItineraryDayFindFirstArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadItineraryDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayFindFirstOrThrowArgs} args - Arguments to find a LeadItineraryDay
     * @example
     * // Get one LeadItineraryDay
     * const leadItineraryDay = await prisma.leadItineraryDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadItineraryDayFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadItineraryDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadItineraryDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadItineraryDays
     * const leadItineraryDays = await prisma.leadItineraryDay.findMany()
     * 
     * // Get first 10 LeadItineraryDays
     * const leadItineraryDays = await prisma.leadItineraryDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadItineraryDayWithIdOnly = await prisma.leadItineraryDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadItineraryDayFindManyArgs>(args?: SelectSubset<T, LeadItineraryDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadItineraryDay.
     * @param {LeadItineraryDayCreateArgs} args - Arguments to create a LeadItineraryDay.
     * @example
     * // Create one LeadItineraryDay
     * const LeadItineraryDay = await prisma.leadItineraryDay.create({
     *   data: {
     *     // ... data to create a LeadItineraryDay
     *   }
     * })
     * 
     */
    create<T extends LeadItineraryDayCreateArgs>(args: SelectSubset<T, LeadItineraryDayCreateArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadItineraryDays.
     * @param {LeadItineraryDayCreateManyArgs} args - Arguments to create many LeadItineraryDays.
     * @example
     * // Create many LeadItineraryDays
     * const leadItineraryDay = await prisma.leadItineraryDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadItineraryDayCreateManyArgs>(args?: SelectSubset<T, LeadItineraryDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadItineraryDays and returns the data saved in the database.
     * @param {LeadItineraryDayCreateManyAndReturnArgs} args - Arguments to create many LeadItineraryDays.
     * @example
     * // Create many LeadItineraryDays
     * const leadItineraryDay = await prisma.leadItineraryDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadItineraryDays and only return the `id`
     * const leadItineraryDayWithIdOnly = await prisma.leadItineraryDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadItineraryDayCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadItineraryDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadItineraryDay.
     * @param {LeadItineraryDayDeleteArgs} args - Arguments to delete one LeadItineraryDay.
     * @example
     * // Delete one LeadItineraryDay
     * const LeadItineraryDay = await prisma.leadItineraryDay.delete({
     *   where: {
     *     // ... filter to delete one LeadItineraryDay
     *   }
     * })
     * 
     */
    delete<T extends LeadItineraryDayDeleteArgs>(args: SelectSubset<T, LeadItineraryDayDeleteArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadItineraryDay.
     * @param {LeadItineraryDayUpdateArgs} args - Arguments to update one LeadItineraryDay.
     * @example
     * // Update one LeadItineraryDay
     * const leadItineraryDay = await prisma.leadItineraryDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadItineraryDayUpdateArgs>(args: SelectSubset<T, LeadItineraryDayUpdateArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadItineraryDays.
     * @param {LeadItineraryDayDeleteManyArgs} args - Arguments to filter LeadItineraryDays to delete.
     * @example
     * // Delete a few LeadItineraryDays
     * const { count } = await prisma.leadItineraryDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadItineraryDayDeleteManyArgs>(args?: SelectSubset<T, LeadItineraryDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadItineraryDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadItineraryDays
     * const leadItineraryDay = await prisma.leadItineraryDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadItineraryDayUpdateManyArgs>(args: SelectSubset<T, LeadItineraryDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadItineraryDays and returns the data updated in the database.
     * @param {LeadItineraryDayUpdateManyAndReturnArgs} args - Arguments to update many LeadItineraryDays.
     * @example
     * // Update many LeadItineraryDays
     * const leadItineraryDay = await prisma.leadItineraryDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadItineraryDays and only return the `id`
     * const leadItineraryDayWithIdOnly = await prisma.leadItineraryDay.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadItineraryDayUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadItineraryDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadItineraryDay.
     * @param {LeadItineraryDayUpsertArgs} args - Arguments to update or create a LeadItineraryDay.
     * @example
     * // Update or create a LeadItineraryDay
     * const leadItineraryDay = await prisma.leadItineraryDay.upsert({
     *   create: {
     *     // ... data to create a LeadItineraryDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadItineraryDay we want to update
     *   }
     * })
     */
    upsert<T extends LeadItineraryDayUpsertArgs>(args: SelectSubset<T, LeadItineraryDayUpsertArgs<ExtArgs>>): Prisma__LeadItineraryDayClient<$Result.GetResult<Prisma.$LeadItineraryDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadItineraryDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayCountArgs} args - Arguments to filter LeadItineraryDays to count.
     * @example
     * // Count the number of LeadItineraryDays
     * const count = await prisma.leadItineraryDay.count({
     *   where: {
     *     // ... the filter for the LeadItineraryDays we want to count
     *   }
     * })
    **/
    count<T extends LeadItineraryDayCountArgs>(
      args?: Subset<T, LeadItineraryDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadItineraryDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadItineraryDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadItineraryDayAggregateArgs>(args: Subset<T, LeadItineraryDayAggregateArgs>): Prisma.PrismaPromise<GetLeadItineraryDayAggregateType<T>>

    /**
     * Group by LeadItineraryDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadItineraryDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadItineraryDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadItineraryDayGroupByArgs['orderBy'] }
        : { orderBy?: LeadItineraryDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadItineraryDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadItineraryDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadItineraryDay model
   */
  readonly fields: LeadItineraryDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadItineraryDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadItineraryDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadItineraryDay model
   */
  interface LeadItineraryDayFieldRefs {
    readonly id: FieldRef<"LeadItineraryDay", 'String'>
    readonly leadId: FieldRef<"LeadItineraryDay", 'String'>
    readonly day: FieldRef<"LeadItineraryDay", 'Int'>
    readonly title: FieldRef<"LeadItineraryDay", 'String'>
    readonly pace: FieldRef<"LeadItineraryDay", 'String'>
    readonly activities: FieldRef<"LeadItineraryDay", 'Json'>
    readonly notes: FieldRef<"LeadItineraryDay", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * LeadItineraryDay findUnique
   */
  export type LeadItineraryDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * Filter, which LeadItineraryDay to fetch.
     */
    where: LeadItineraryDayWhereUniqueInput
  }

  /**
   * LeadItineraryDay findUniqueOrThrow
   */
  export type LeadItineraryDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * Filter, which LeadItineraryDay to fetch.
     */
    where: LeadItineraryDayWhereUniqueInput
  }

  /**
   * LeadItineraryDay findFirst
   */
  export type LeadItineraryDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * Filter, which LeadItineraryDay to fetch.
     */
    where?: LeadItineraryDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadItineraryDays to fetch.
     */
    orderBy?: LeadItineraryDayOrderByWithRelationInput | LeadItineraryDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadItineraryDays.
     */
    cursor?: LeadItineraryDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadItineraryDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadItineraryDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadItineraryDays.
     */
    distinct?: LeadItineraryDayScalarFieldEnum | LeadItineraryDayScalarFieldEnum[]
  }

  /**
   * LeadItineraryDay findFirstOrThrow
   */
  export type LeadItineraryDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * Filter, which LeadItineraryDay to fetch.
     */
    where?: LeadItineraryDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadItineraryDays to fetch.
     */
    orderBy?: LeadItineraryDayOrderByWithRelationInput | LeadItineraryDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadItineraryDays.
     */
    cursor?: LeadItineraryDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadItineraryDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadItineraryDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadItineraryDays.
     */
    distinct?: LeadItineraryDayScalarFieldEnum | LeadItineraryDayScalarFieldEnum[]
  }

  /**
   * LeadItineraryDay findMany
   */
  export type LeadItineraryDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * Filter, which LeadItineraryDays to fetch.
     */
    where?: LeadItineraryDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadItineraryDays to fetch.
     */
    orderBy?: LeadItineraryDayOrderByWithRelationInput | LeadItineraryDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadItineraryDays.
     */
    cursor?: LeadItineraryDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadItineraryDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadItineraryDays.
     */
    skip?: number
    distinct?: LeadItineraryDayScalarFieldEnum | LeadItineraryDayScalarFieldEnum[]
  }

  /**
   * LeadItineraryDay create
   */
  export type LeadItineraryDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadItineraryDay.
     */
    data: XOR<LeadItineraryDayCreateInput, LeadItineraryDayUncheckedCreateInput>
  }

  /**
   * LeadItineraryDay createMany
   */
  export type LeadItineraryDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadItineraryDays.
     */
    data: LeadItineraryDayCreateManyInput | LeadItineraryDayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadItineraryDay createManyAndReturn
   */
  export type LeadItineraryDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * The data used to create many LeadItineraryDays.
     */
    data: LeadItineraryDayCreateManyInput | LeadItineraryDayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadItineraryDay update
   */
  export type LeadItineraryDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadItineraryDay.
     */
    data: XOR<LeadItineraryDayUpdateInput, LeadItineraryDayUncheckedUpdateInput>
    /**
     * Choose, which LeadItineraryDay to update.
     */
    where: LeadItineraryDayWhereUniqueInput
  }

  /**
   * LeadItineraryDay updateMany
   */
  export type LeadItineraryDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadItineraryDays.
     */
    data: XOR<LeadItineraryDayUpdateManyMutationInput, LeadItineraryDayUncheckedUpdateManyInput>
    /**
     * Filter which LeadItineraryDays to update
     */
    where?: LeadItineraryDayWhereInput
    /**
     * Limit how many LeadItineraryDays to update.
     */
    limit?: number
  }

  /**
   * LeadItineraryDay updateManyAndReturn
   */
  export type LeadItineraryDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * The data used to update LeadItineraryDays.
     */
    data: XOR<LeadItineraryDayUpdateManyMutationInput, LeadItineraryDayUncheckedUpdateManyInput>
    /**
     * Filter which LeadItineraryDays to update
     */
    where?: LeadItineraryDayWhereInput
    /**
     * Limit how many LeadItineraryDays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadItineraryDay upsert
   */
  export type LeadItineraryDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadItineraryDay to update in case it exists.
     */
    where: LeadItineraryDayWhereUniqueInput
    /**
     * In case the LeadItineraryDay found by the `where` argument doesn't exist, create a new LeadItineraryDay with this data.
     */
    create: XOR<LeadItineraryDayCreateInput, LeadItineraryDayUncheckedCreateInput>
    /**
     * In case the LeadItineraryDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadItineraryDayUpdateInput, LeadItineraryDayUncheckedUpdateInput>
  }

  /**
   * LeadItineraryDay delete
   */
  export type LeadItineraryDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
    /**
     * Filter which LeadItineraryDay to delete.
     */
    where: LeadItineraryDayWhereUniqueInput
  }

  /**
   * LeadItineraryDay deleteMany
   */
  export type LeadItineraryDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadItineraryDays to delete
     */
    where?: LeadItineraryDayWhereInput
    /**
     * Limit how many LeadItineraryDays to delete.
     */
    limit?: number
  }

  /**
   * LeadItineraryDay without action
   */
  export type LeadItineraryDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadItineraryDay
     */
    select?: LeadItineraryDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadItineraryDay
     */
    omit?: LeadItineraryDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadItineraryDayInclude<ExtArgs> | null
  }


  /**
   * Model LeadNote
   */

  export type AggregateLeadNote = {
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  export type LeadNoteMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    authorName: string | null
    body: string | null
    createdAt: Date | null
  }

  export type LeadNoteMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    authorName: string | null
    body: string | null
    createdAt: Date | null
  }

  export type LeadNoteCountAggregateOutputType = {
    id: number
    leadId: number
    authorName: number
    body: number
    createdAt: number
    _all: number
  }


  export type LeadNoteMinAggregateInputType = {
    id?: true
    leadId?: true
    authorName?: true
    body?: true
    createdAt?: true
  }

  export type LeadNoteMaxAggregateInputType = {
    id?: true
    leadId?: true
    authorName?: true
    body?: true
    createdAt?: true
  }

  export type LeadNoteCountAggregateInputType = {
    id?: true
    leadId?: true
    authorName?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type LeadNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNote to aggregate.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadNotes
    **/
    _count?: true | LeadNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadNoteMaxAggregateInputType
  }

  export type GetLeadNoteAggregateType<T extends LeadNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadNote[P]>
      : GetScalarType<T[P], AggregateLeadNote[P]>
  }




  export type LeadNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithAggregationInput | LeadNoteOrderByWithAggregationInput[]
    by: LeadNoteScalarFieldEnum[] | LeadNoteScalarFieldEnum
    having?: LeadNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadNoteCountAggregateInputType | true
    _min?: LeadNoteMinAggregateInputType
    _max?: LeadNoteMaxAggregateInputType
  }

  export type LeadNoteGroupByOutputType = {
    id: string
    leadId: string
    authorName: string
    body: string
    createdAt: Date
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  type GetLeadNoteGroupByPayload<T extends LeadNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
            : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
        }
      >
    >


  export type LeadNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    authorName?: boolean
    body?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    authorName?: boolean
    body?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    authorName?: boolean
    body?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectScalar = {
    id?: boolean
    leadId?: boolean
    authorName?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type LeadNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "authorName" | "body" | "createdAt", ExtArgs["result"]["leadNote"]>
  export type LeadNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadNote"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      authorName: string
      body: string
      createdAt: Date
    }, ExtArgs["result"]["leadNote"]>
    composites: {}
  }

  type LeadNoteGetPayload<S extends boolean | null | undefined | LeadNoteDefaultArgs> = $Result.GetResult<Prisma.$LeadNotePayload, S>

  type LeadNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadNoteCountAggregateInputType | true
    }

  export interface LeadNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadNote'], meta: { name: 'LeadNote' } }
    /**
     * Find zero or one LeadNote that matches the filter.
     * @param {LeadNoteFindUniqueArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadNoteFindUniqueArgs>(args: SelectSubset<T, LeadNoteFindUniqueArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadNoteFindUniqueOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadNoteFindFirstArgs>(args?: SelectSubset<T, LeadNoteFindFirstArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadNotes
     * const leadNotes = await prisma.leadNote.findMany()
     * 
     * // Get first 10 LeadNotes
     * const leadNotes = await prisma.leadNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadNoteFindManyArgs>(args?: SelectSubset<T, LeadNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadNote.
     * @param {LeadNoteCreateArgs} args - Arguments to create a LeadNote.
     * @example
     * // Create one LeadNote
     * const LeadNote = await prisma.leadNote.create({
     *   data: {
     *     // ... data to create a LeadNote
     *   }
     * })
     * 
     */
    create<T extends LeadNoteCreateArgs>(args: SelectSubset<T, LeadNoteCreateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadNotes.
     * @param {LeadNoteCreateManyArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadNoteCreateManyArgs>(args?: SelectSubset<T, LeadNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadNotes and returns the data saved in the database.
     * @param {LeadNoteCreateManyAndReturnArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadNote.
     * @param {LeadNoteDeleteArgs} args - Arguments to delete one LeadNote.
     * @example
     * // Delete one LeadNote
     * const LeadNote = await prisma.leadNote.delete({
     *   where: {
     *     // ... filter to delete one LeadNote
     *   }
     * })
     * 
     */
    delete<T extends LeadNoteDeleteArgs>(args: SelectSubset<T, LeadNoteDeleteArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadNote.
     * @param {LeadNoteUpdateArgs} args - Arguments to update one LeadNote.
     * @example
     * // Update one LeadNote
     * const leadNote = await prisma.leadNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadNoteUpdateArgs>(args: SelectSubset<T, LeadNoteUpdateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadNotes.
     * @param {LeadNoteDeleteManyArgs} args - Arguments to filter LeadNotes to delete.
     * @example
     * // Delete a few LeadNotes
     * const { count } = await prisma.leadNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadNoteDeleteManyArgs>(args?: SelectSubset<T, LeadNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadNoteUpdateManyArgs>(args: SelectSubset<T, LeadNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes and returns the data updated in the database.
     * @param {LeadNoteUpdateManyAndReturnArgs} args - Arguments to update many LeadNotes.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadNote.
     * @param {LeadNoteUpsertArgs} args - Arguments to update or create a LeadNote.
     * @example
     * // Update or create a LeadNote
     * const leadNote = await prisma.leadNote.upsert({
     *   create: {
     *     // ... data to create a LeadNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadNote we want to update
     *   }
     * })
     */
    upsert<T extends LeadNoteUpsertArgs>(args: SelectSubset<T, LeadNoteUpsertArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteCountArgs} args - Arguments to filter LeadNotes to count.
     * @example
     * // Count the number of LeadNotes
     * const count = await prisma.leadNote.count({
     *   where: {
     *     // ... the filter for the LeadNotes we want to count
     *   }
     * })
    **/
    count<T extends LeadNoteCountArgs>(
      args?: Subset<T, LeadNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadNoteAggregateArgs>(args: Subset<T, LeadNoteAggregateArgs>): Prisma.PrismaPromise<GetLeadNoteAggregateType<T>>

    /**
     * Group by LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadNoteGroupByArgs['orderBy'] }
        : { orderBy?: LeadNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadNote model
   */
  readonly fields: LeadNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadNote model
   */
  interface LeadNoteFieldRefs {
    readonly id: FieldRef<"LeadNote", 'String'>
    readonly leadId: FieldRef<"LeadNote", 'String'>
    readonly authorName: FieldRef<"LeadNote", 'String'>
    readonly body: FieldRef<"LeadNote", 'String'>
    readonly createdAt: FieldRef<"LeadNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadNote findUnique
   */
  export type LeadNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findUniqueOrThrow
   */
  export type LeadNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findFirst
   */
  export type LeadNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findFirstOrThrow
   */
  export type LeadNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findMany
   */
  export type LeadNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNotes to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote create
   */
  export type LeadNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadNote.
     */
    data: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
  }

  /**
   * LeadNote createMany
   */
  export type LeadNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadNote createManyAndReturn
   */
  export type LeadNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote update
   */
  export type LeadNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadNote.
     */
    data: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
    /**
     * Choose, which LeadNote to update.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote updateMany
   */
  export type LeadNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
  }

  /**
   * LeadNote updateManyAndReturn
   */
  export type LeadNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote upsert
   */
  export type LeadNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadNote to update in case it exists.
     */
    where: LeadNoteWhereUniqueInput
    /**
     * In case the LeadNote found by the `where` argument doesn't exist, create a new LeadNote with this data.
     */
    create: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
    /**
     * In case the LeadNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
  }

  /**
   * LeadNote delete
   */
  export type LeadNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter which LeadNote to delete.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote deleteMany
   */
  export type LeadNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNotes to delete
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to delete.
     */
    limit?: number
  }

  /**
   * LeadNote without action
   */
  export type LeadNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
  }


  /**
   * Model LeadAssignment
   */

  export type AggregateLeadAssignment = {
    _count: LeadAssignmentCountAggregateOutputType | null
    _min: LeadAssignmentMinAggregateOutputType | null
    _max: LeadAssignmentMaxAggregateOutputType | null
  }

  export type LeadAssignmentMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    consultantName: string | null
    assignedAt: Date | null
  }

  export type LeadAssignmentMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    consultantName: string | null
    assignedAt: Date | null
  }

  export type LeadAssignmentCountAggregateOutputType = {
    id: number
    leadId: number
    consultantName: number
    assignedAt: number
    _all: number
  }


  export type LeadAssignmentMinAggregateInputType = {
    id?: true
    leadId?: true
    consultantName?: true
    assignedAt?: true
  }

  export type LeadAssignmentMaxAggregateInputType = {
    id?: true
    leadId?: true
    consultantName?: true
    assignedAt?: true
  }

  export type LeadAssignmentCountAggregateInputType = {
    id?: true
    leadId?: true
    consultantName?: true
    assignedAt?: true
    _all?: true
  }

  export type LeadAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadAssignment to aggregate.
     */
    where?: LeadAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadAssignments to fetch.
     */
    orderBy?: LeadAssignmentOrderByWithRelationInput | LeadAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadAssignments
    **/
    _count?: true | LeadAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadAssignmentMaxAggregateInputType
  }

  export type GetLeadAssignmentAggregateType<T extends LeadAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadAssignment[P]>
      : GetScalarType<T[P], AggregateLeadAssignment[P]>
  }




  export type LeadAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadAssignmentWhereInput
    orderBy?: LeadAssignmentOrderByWithAggregationInput | LeadAssignmentOrderByWithAggregationInput[]
    by: LeadAssignmentScalarFieldEnum[] | LeadAssignmentScalarFieldEnum
    having?: LeadAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadAssignmentCountAggregateInputType | true
    _min?: LeadAssignmentMinAggregateInputType
    _max?: LeadAssignmentMaxAggregateInputType
  }

  export type LeadAssignmentGroupByOutputType = {
    id: string
    leadId: string
    consultantName: string
    assignedAt: Date
    _count: LeadAssignmentCountAggregateOutputType | null
    _min: LeadAssignmentMinAggregateOutputType | null
    _max: LeadAssignmentMaxAggregateOutputType | null
  }

  type GetLeadAssignmentGroupByPayload<T extends LeadAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], LeadAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type LeadAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    consultantName?: boolean
    assignedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadAssignment"]>

  export type LeadAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    consultantName?: boolean
    assignedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadAssignment"]>

  export type LeadAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    consultantName?: boolean
    assignedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadAssignment"]>

  export type LeadAssignmentSelectScalar = {
    id?: boolean
    leadId?: boolean
    consultantName?: boolean
    assignedAt?: boolean
  }

  export type LeadAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "consultantName" | "assignedAt", ExtArgs["result"]["leadAssignment"]>
  export type LeadAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type LeadAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $LeadAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadAssignment"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      consultantName: string
      assignedAt: Date
    }, ExtArgs["result"]["leadAssignment"]>
    composites: {}
  }

  type LeadAssignmentGetPayload<S extends boolean | null | undefined | LeadAssignmentDefaultArgs> = $Result.GetResult<Prisma.$LeadAssignmentPayload, S>

  type LeadAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadAssignmentCountAggregateInputType | true
    }

  export interface LeadAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadAssignment'], meta: { name: 'LeadAssignment' } }
    /**
     * Find zero or one LeadAssignment that matches the filter.
     * @param {LeadAssignmentFindUniqueArgs} args - Arguments to find a LeadAssignment
     * @example
     * // Get one LeadAssignment
     * const leadAssignment = await prisma.leadAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadAssignmentFindUniqueArgs>(args: SelectSubset<T, LeadAssignmentFindUniqueArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadAssignmentFindUniqueOrThrowArgs} args - Arguments to find a LeadAssignment
     * @example
     * // Get one LeadAssignment
     * const leadAssignment = await prisma.leadAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentFindFirstArgs} args - Arguments to find a LeadAssignment
     * @example
     * // Get one LeadAssignment
     * const leadAssignment = await prisma.leadAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadAssignmentFindFirstArgs>(args?: SelectSubset<T, LeadAssignmentFindFirstArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentFindFirstOrThrowArgs} args - Arguments to find a LeadAssignment
     * @example
     * // Get one LeadAssignment
     * const leadAssignment = await prisma.leadAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadAssignments
     * const leadAssignments = await prisma.leadAssignment.findMany()
     * 
     * // Get first 10 LeadAssignments
     * const leadAssignments = await prisma.leadAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadAssignmentWithIdOnly = await prisma.leadAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadAssignmentFindManyArgs>(args?: SelectSubset<T, LeadAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadAssignment.
     * @param {LeadAssignmentCreateArgs} args - Arguments to create a LeadAssignment.
     * @example
     * // Create one LeadAssignment
     * const LeadAssignment = await prisma.leadAssignment.create({
     *   data: {
     *     // ... data to create a LeadAssignment
     *   }
     * })
     * 
     */
    create<T extends LeadAssignmentCreateArgs>(args: SelectSubset<T, LeadAssignmentCreateArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadAssignments.
     * @param {LeadAssignmentCreateManyArgs} args - Arguments to create many LeadAssignments.
     * @example
     * // Create many LeadAssignments
     * const leadAssignment = await prisma.leadAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadAssignmentCreateManyArgs>(args?: SelectSubset<T, LeadAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadAssignments and returns the data saved in the database.
     * @param {LeadAssignmentCreateManyAndReturnArgs} args - Arguments to create many LeadAssignments.
     * @example
     * // Create many LeadAssignments
     * const leadAssignment = await prisma.leadAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadAssignments and only return the `id`
     * const leadAssignmentWithIdOnly = await prisma.leadAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadAssignment.
     * @param {LeadAssignmentDeleteArgs} args - Arguments to delete one LeadAssignment.
     * @example
     * // Delete one LeadAssignment
     * const LeadAssignment = await prisma.leadAssignment.delete({
     *   where: {
     *     // ... filter to delete one LeadAssignment
     *   }
     * })
     * 
     */
    delete<T extends LeadAssignmentDeleteArgs>(args: SelectSubset<T, LeadAssignmentDeleteArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadAssignment.
     * @param {LeadAssignmentUpdateArgs} args - Arguments to update one LeadAssignment.
     * @example
     * // Update one LeadAssignment
     * const leadAssignment = await prisma.leadAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadAssignmentUpdateArgs>(args: SelectSubset<T, LeadAssignmentUpdateArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadAssignments.
     * @param {LeadAssignmentDeleteManyArgs} args - Arguments to filter LeadAssignments to delete.
     * @example
     * // Delete a few LeadAssignments
     * const { count } = await prisma.leadAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadAssignmentDeleteManyArgs>(args?: SelectSubset<T, LeadAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadAssignments
     * const leadAssignment = await prisma.leadAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadAssignmentUpdateManyArgs>(args: SelectSubset<T, LeadAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadAssignments and returns the data updated in the database.
     * @param {LeadAssignmentUpdateManyAndReturnArgs} args - Arguments to update many LeadAssignments.
     * @example
     * // Update many LeadAssignments
     * const leadAssignment = await prisma.leadAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadAssignments and only return the `id`
     * const leadAssignmentWithIdOnly = await prisma.leadAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadAssignment.
     * @param {LeadAssignmentUpsertArgs} args - Arguments to update or create a LeadAssignment.
     * @example
     * // Update or create a LeadAssignment
     * const leadAssignment = await prisma.leadAssignment.upsert({
     *   create: {
     *     // ... data to create a LeadAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadAssignment we want to update
     *   }
     * })
     */
    upsert<T extends LeadAssignmentUpsertArgs>(args: SelectSubset<T, LeadAssignmentUpsertArgs<ExtArgs>>): Prisma__LeadAssignmentClient<$Result.GetResult<Prisma.$LeadAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentCountArgs} args - Arguments to filter LeadAssignments to count.
     * @example
     * // Count the number of LeadAssignments
     * const count = await prisma.leadAssignment.count({
     *   where: {
     *     // ... the filter for the LeadAssignments we want to count
     *   }
     * })
    **/
    count<T extends LeadAssignmentCountArgs>(
      args?: Subset<T, LeadAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAssignmentAggregateArgs>(args: Subset<T, LeadAssignmentAggregateArgs>): Prisma.PrismaPromise<GetLeadAssignmentAggregateType<T>>

    /**
     * Group by LeadAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: LeadAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadAssignment model
   */
  readonly fields: LeadAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadAssignment model
   */
  interface LeadAssignmentFieldRefs {
    readonly id: FieldRef<"LeadAssignment", 'String'>
    readonly leadId: FieldRef<"LeadAssignment", 'String'>
    readonly consultantName: FieldRef<"LeadAssignment", 'String'>
    readonly assignedAt: FieldRef<"LeadAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadAssignment findUnique
   */
  export type LeadAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which LeadAssignment to fetch.
     */
    where: LeadAssignmentWhereUniqueInput
  }

  /**
   * LeadAssignment findUniqueOrThrow
   */
  export type LeadAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which LeadAssignment to fetch.
     */
    where: LeadAssignmentWhereUniqueInput
  }

  /**
   * LeadAssignment findFirst
   */
  export type LeadAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which LeadAssignment to fetch.
     */
    where?: LeadAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadAssignments to fetch.
     */
    orderBy?: LeadAssignmentOrderByWithRelationInput | LeadAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadAssignments.
     */
    cursor?: LeadAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadAssignments.
     */
    distinct?: LeadAssignmentScalarFieldEnum | LeadAssignmentScalarFieldEnum[]
  }

  /**
   * LeadAssignment findFirstOrThrow
   */
  export type LeadAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which LeadAssignment to fetch.
     */
    where?: LeadAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadAssignments to fetch.
     */
    orderBy?: LeadAssignmentOrderByWithRelationInput | LeadAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadAssignments.
     */
    cursor?: LeadAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadAssignments.
     */
    distinct?: LeadAssignmentScalarFieldEnum | LeadAssignmentScalarFieldEnum[]
  }

  /**
   * LeadAssignment findMany
   */
  export type LeadAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which LeadAssignments to fetch.
     */
    where?: LeadAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadAssignments to fetch.
     */
    orderBy?: LeadAssignmentOrderByWithRelationInput | LeadAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadAssignments.
     */
    cursor?: LeadAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadAssignments.
     */
    skip?: number
    distinct?: LeadAssignmentScalarFieldEnum | LeadAssignmentScalarFieldEnum[]
  }

  /**
   * LeadAssignment create
   */
  export type LeadAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadAssignment.
     */
    data: XOR<LeadAssignmentCreateInput, LeadAssignmentUncheckedCreateInput>
  }

  /**
   * LeadAssignment createMany
   */
  export type LeadAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadAssignments.
     */
    data: LeadAssignmentCreateManyInput | LeadAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadAssignment createManyAndReturn
   */
  export type LeadAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many LeadAssignments.
     */
    data: LeadAssignmentCreateManyInput | LeadAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadAssignment update
   */
  export type LeadAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadAssignment.
     */
    data: XOR<LeadAssignmentUpdateInput, LeadAssignmentUncheckedUpdateInput>
    /**
     * Choose, which LeadAssignment to update.
     */
    where: LeadAssignmentWhereUniqueInput
  }

  /**
   * LeadAssignment updateMany
   */
  export type LeadAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadAssignments.
     */
    data: XOR<LeadAssignmentUpdateManyMutationInput, LeadAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which LeadAssignments to update
     */
    where?: LeadAssignmentWhereInput
    /**
     * Limit how many LeadAssignments to update.
     */
    limit?: number
  }

  /**
   * LeadAssignment updateManyAndReturn
   */
  export type LeadAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update LeadAssignments.
     */
    data: XOR<LeadAssignmentUpdateManyMutationInput, LeadAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which LeadAssignments to update
     */
    where?: LeadAssignmentWhereInput
    /**
     * Limit how many LeadAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadAssignment upsert
   */
  export type LeadAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadAssignment to update in case it exists.
     */
    where: LeadAssignmentWhereUniqueInput
    /**
     * In case the LeadAssignment found by the `where` argument doesn't exist, create a new LeadAssignment with this data.
     */
    create: XOR<LeadAssignmentCreateInput, LeadAssignmentUncheckedCreateInput>
    /**
     * In case the LeadAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadAssignmentUpdateInput, LeadAssignmentUncheckedUpdateInput>
  }

  /**
   * LeadAssignment delete
   */
  export type LeadAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
    /**
     * Filter which LeadAssignment to delete.
     */
    where: LeadAssignmentWhereUniqueInput
  }

  /**
   * LeadAssignment deleteMany
   */
  export type LeadAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadAssignments to delete
     */
    where?: LeadAssignmentWhereInput
    /**
     * Limit how many LeadAssignments to delete.
     */
    limit?: number
  }

  /**
   * LeadAssignment without action
   */
  export type LeadAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadAssignment
     */
    select?: LeadAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadAssignment
     */
    omit?: LeadAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model CRMDeliveryAttempt
   */

  export type AggregateCRMDeliveryAttempt = {
    _count: CRMDeliveryAttemptCountAggregateOutputType | null
    _avg: CRMDeliveryAttemptAvgAggregateOutputType | null
    _sum: CRMDeliveryAttemptSumAggregateOutputType | null
    _min: CRMDeliveryAttemptMinAggregateOutputType | null
    _max: CRMDeliveryAttemptMaxAggregateOutputType | null
  }

  export type CRMDeliveryAttemptAvgAggregateOutputType = {
    attempt: number | null
  }

  export type CRMDeliveryAttemptSumAggregateOutputType = {
    attempt: number | null
  }

  export type CRMDeliveryAttemptMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    provider: string | null
    attempt: number | null
    status: string | null
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type CRMDeliveryAttemptMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    provider: string | null
    attempt: number | null
    status: string | null
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type CRMDeliveryAttemptCountAggregateOutputType = {
    id: number
    leadId: number
    provider: number
    attempt: number
    status: number
    errorCode: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type CRMDeliveryAttemptAvgAggregateInputType = {
    attempt?: true
  }

  export type CRMDeliveryAttemptSumAggregateInputType = {
    attempt?: true
  }

  export type CRMDeliveryAttemptMinAggregateInputType = {
    id?: true
    leadId?: true
    provider?: true
    attempt?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
  }

  export type CRMDeliveryAttemptMaxAggregateInputType = {
    id?: true
    leadId?: true
    provider?: true
    attempt?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
  }

  export type CRMDeliveryAttemptCountAggregateInputType = {
    id?: true
    leadId?: true
    provider?: true
    attempt?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type CRMDeliveryAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CRMDeliveryAttempt to aggregate.
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRMDeliveryAttempts to fetch.
     */
    orderBy?: CRMDeliveryAttemptOrderByWithRelationInput | CRMDeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CRMDeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRMDeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRMDeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CRMDeliveryAttempts
    **/
    _count?: true | CRMDeliveryAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CRMDeliveryAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CRMDeliveryAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CRMDeliveryAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CRMDeliveryAttemptMaxAggregateInputType
  }

  export type GetCRMDeliveryAttemptAggregateType<T extends CRMDeliveryAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateCRMDeliveryAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCRMDeliveryAttempt[P]>
      : GetScalarType<T[P], AggregateCRMDeliveryAttempt[P]>
  }




  export type CRMDeliveryAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CRMDeliveryAttemptWhereInput
    orderBy?: CRMDeliveryAttemptOrderByWithAggregationInput | CRMDeliveryAttemptOrderByWithAggregationInput[]
    by: CRMDeliveryAttemptScalarFieldEnum[] | CRMDeliveryAttemptScalarFieldEnum
    having?: CRMDeliveryAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CRMDeliveryAttemptCountAggregateInputType | true
    _avg?: CRMDeliveryAttemptAvgAggregateInputType
    _sum?: CRMDeliveryAttemptSumAggregateInputType
    _min?: CRMDeliveryAttemptMinAggregateInputType
    _max?: CRMDeliveryAttemptMaxAggregateInputType
  }

  export type CRMDeliveryAttemptGroupByOutputType = {
    id: string
    leadId: string
    provider: string
    attempt: number
    status: string
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date
    _count: CRMDeliveryAttemptCountAggregateOutputType | null
    _avg: CRMDeliveryAttemptAvgAggregateOutputType | null
    _sum: CRMDeliveryAttemptSumAggregateOutputType | null
    _min: CRMDeliveryAttemptMinAggregateOutputType | null
    _max: CRMDeliveryAttemptMaxAggregateOutputType | null
  }

  type GetCRMDeliveryAttemptGroupByPayload<T extends CRMDeliveryAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CRMDeliveryAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CRMDeliveryAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CRMDeliveryAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], CRMDeliveryAttemptGroupByOutputType[P]>
        }
      >
    >


  export type CRMDeliveryAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    provider?: boolean
    attempt?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cRMDeliveryAttempt"]>

  export type CRMDeliveryAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    provider?: boolean
    attempt?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cRMDeliveryAttempt"]>

  export type CRMDeliveryAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    provider?: boolean
    attempt?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cRMDeliveryAttempt"]>

  export type CRMDeliveryAttemptSelectScalar = {
    id?: boolean
    leadId?: boolean
    provider?: boolean
    attempt?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type CRMDeliveryAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "provider" | "attempt" | "status" | "errorCode" | "errorMessage" | "createdAt", ExtArgs["result"]["cRMDeliveryAttempt"]>
  export type CRMDeliveryAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type CRMDeliveryAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type CRMDeliveryAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $CRMDeliveryAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CRMDeliveryAttempt"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      provider: string
      attempt: number
      status: string
      errorCode: string | null
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["cRMDeliveryAttempt"]>
    composites: {}
  }

  type CRMDeliveryAttemptGetPayload<S extends boolean | null | undefined | CRMDeliveryAttemptDefaultArgs> = $Result.GetResult<Prisma.$CRMDeliveryAttemptPayload, S>

  type CRMDeliveryAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CRMDeliveryAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CRMDeliveryAttemptCountAggregateInputType | true
    }

  export interface CRMDeliveryAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CRMDeliveryAttempt'], meta: { name: 'CRMDeliveryAttempt' } }
    /**
     * Find zero or one CRMDeliveryAttempt that matches the filter.
     * @param {CRMDeliveryAttemptFindUniqueArgs} args - Arguments to find a CRMDeliveryAttempt
     * @example
     * // Get one CRMDeliveryAttempt
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CRMDeliveryAttemptFindUniqueArgs>(args: SelectSubset<T, CRMDeliveryAttemptFindUniqueArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CRMDeliveryAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CRMDeliveryAttemptFindUniqueOrThrowArgs} args - Arguments to find a CRMDeliveryAttempt
     * @example
     * // Get one CRMDeliveryAttempt
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CRMDeliveryAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, CRMDeliveryAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CRMDeliveryAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptFindFirstArgs} args - Arguments to find a CRMDeliveryAttempt
     * @example
     * // Get one CRMDeliveryAttempt
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CRMDeliveryAttemptFindFirstArgs>(args?: SelectSubset<T, CRMDeliveryAttemptFindFirstArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CRMDeliveryAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptFindFirstOrThrowArgs} args - Arguments to find a CRMDeliveryAttempt
     * @example
     * // Get one CRMDeliveryAttempt
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CRMDeliveryAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, CRMDeliveryAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CRMDeliveryAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CRMDeliveryAttempts
     * const cRMDeliveryAttempts = await prisma.cRMDeliveryAttempt.findMany()
     * 
     * // Get first 10 CRMDeliveryAttempts
     * const cRMDeliveryAttempts = await prisma.cRMDeliveryAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cRMDeliveryAttemptWithIdOnly = await prisma.cRMDeliveryAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CRMDeliveryAttemptFindManyArgs>(args?: SelectSubset<T, CRMDeliveryAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CRMDeliveryAttempt.
     * @param {CRMDeliveryAttemptCreateArgs} args - Arguments to create a CRMDeliveryAttempt.
     * @example
     * // Create one CRMDeliveryAttempt
     * const CRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.create({
     *   data: {
     *     // ... data to create a CRMDeliveryAttempt
     *   }
     * })
     * 
     */
    create<T extends CRMDeliveryAttemptCreateArgs>(args: SelectSubset<T, CRMDeliveryAttemptCreateArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CRMDeliveryAttempts.
     * @param {CRMDeliveryAttemptCreateManyArgs} args - Arguments to create many CRMDeliveryAttempts.
     * @example
     * // Create many CRMDeliveryAttempts
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CRMDeliveryAttemptCreateManyArgs>(args?: SelectSubset<T, CRMDeliveryAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CRMDeliveryAttempts and returns the data saved in the database.
     * @param {CRMDeliveryAttemptCreateManyAndReturnArgs} args - Arguments to create many CRMDeliveryAttempts.
     * @example
     * // Create many CRMDeliveryAttempts
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CRMDeliveryAttempts and only return the `id`
     * const cRMDeliveryAttemptWithIdOnly = await prisma.cRMDeliveryAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CRMDeliveryAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, CRMDeliveryAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CRMDeliveryAttempt.
     * @param {CRMDeliveryAttemptDeleteArgs} args - Arguments to delete one CRMDeliveryAttempt.
     * @example
     * // Delete one CRMDeliveryAttempt
     * const CRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.delete({
     *   where: {
     *     // ... filter to delete one CRMDeliveryAttempt
     *   }
     * })
     * 
     */
    delete<T extends CRMDeliveryAttemptDeleteArgs>(args: SelectSubset<T, CRMDeliveryAttemptDeleteArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CRMDeliveryAttempt.
     * @param {CRMDeliveryAttemptUpdateArgs} args - Arguments to update one CRMDeliveryAttempt.
     * @example
     * // Update one CRMDeliveryAttempt
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CRMDeliveryAttemptUpdateArgs>(args: SelectSubset<T, CRMDeliveryAttemptUpdateArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CRMDeliveryAttempts.
     * @param {CRMDeliveryAttemptDeleteManyArgs} args - Arguments to filter CRMDeliveryAttempts to delete.
     * @example
     * // Delete a few CRMDeliveryAttempts
     * const { count } = await prisma.cRMDeliveryAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CRMDeliveryAttemptDeleteManyArgs>(args?: SelectSubset<T, CRMDeliveryAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CRMDeliveryAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CRMDeliveryAttempts
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CRMDeliveryAttemptUpdateManyArgs>(args: SelectSubset<T, CRMDeliveryAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CRMDeliveryAttempts and returns the data updated in the database.
     * @param {CRMDeliveryAttemptUpdateManyAndReturnArgs} args - Arguments to update many CRMDeliveryAttempts.
     * @example
     * // Update many CRMDeliveryAttempts
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CRMDeliveryAttempts and only return the `id`
     * const cRMDeliveryAttemptWithIdOnly = await prisma.cRMDeliveryAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CRMDeliveryAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, CRMDeliveryAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CRMDeliveryAttempt.
     * @param {CRMDeliveryAttemptUpsertArgs} args - Arguments to update or create a CRMDeliveryAttempt.
     * @example
     * // Update or create a CRMDeliveryAttempt
     * const cRMDeliveryAttempt = await prisma.cRMDeliveryAttempt.upsert({
     *   create: {
     *     // ... data to create a CRMDeliveryAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CRMDeliveryAttempt we want to update
     *   }
     * })
     */
    upsert<T extends CRMDeliveryAttemptUpsertArgs>(args: SelectSubset<T, CRMDeliveryAttemptUpsertArgs<ExtArgs>>): Prisma__CRMDeliveryAttemptClient<$Result.GetResult<Prisma.$CRMDeliveryAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CRMDeliveryAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptCountArgs} args - Arguments to filter CRMDeliveryAttempts to count.
     * @example
     * // Count the number of CRMDeliveryAttempts
     * const count = await prisma.cRMDeliveryAttempt.count({
     *   where: {
     *     // ... the filter for the CRMDeliveryAttempts we want to count
     *   }
     * })
    **/
    count<T extends CRMDeliveryAttemptCountArgs>(
      args?: Subset<T, CRMDeliveryAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CRMDeliveryAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CRMDeliveryAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CRMDeliveryAttemptAggregateArgs>(args: Subset<T, CRMDeliveryAttemptAggregateArgs>): Prisma.PrismaPromise<GetCRMDeliveryAttemptAggregateType<T>>

    /**
     * Group by CRMDeliveryAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRMDeliveryAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CRMDeliveryAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CRMDeliveryAttemptGroupByArgs['orderBy'] }
        : { orderBy?: CRMDeliveryAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CRMDeliveryAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCRMDeliveryAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CRMDeliveryAttempt model
   */
  readonly fields: CRMDeliveryAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CRMDeliveryAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CRMDeliveryAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CRMDeliveryAttempt model
   */
  interface CRMDeliveryAttemptFieldRefs {
    readonly id: FieldRef<"CRMDeliveryAttempt", 'String'>
    readonly leadId: FieldRef<"CRMDeliveryAttempt", 'String'>
    readonly provider: FieldRef<"CRMDeliveryAttempt", 'String'>
    readonly attempt: FieldRef<"CRMDeliveryAttempt", 'Int'>
    readonly status: FieldRef<"CRMDeliveryAttempt", 'String'>
    readonly errorCode: FieldRef<"CRMDeliveryAttempt", 'String'>
    readonly errorMessage: FieldRef<"CRMDeliveryAttempt", 'String'>
    readonly createdAt: FieldRef<"CRMDeliveryAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CRMDeliveryAttempt findUnique
   */
  export type CRMDeliveryAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which CRMDeliveryAttempt to fetch.
     */
    where: CRMDeliveryAttemptWhereUniqueInput
  }

  /**
   * CRMDeliveryAttempt findUniqueOrThrow
   */
  export type CRMDeliveryAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which CRMDeliveryAttempt to fetch.
     */
    where: CRMDeliveryAttemptWhereUniqueInput
  }

  /**
   * CRMDeliveryAttempt findFirst
   */
  export type CRMDeliveryAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which CRMDeliveryAttempt to fetch.
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRMDeliveryAttempts to fetch.
     */
    orderBy?: CRMDeliveryAttemptOrderByWithRelationInput | CRMDeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CRMDeliveryAttempts.
     */
    cursor?: CRMDeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRMDeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRMDeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CRMDeliveryAttempts.
     */
    distinct?: CRMDeliveryAttemptScalarFieldEnum | CRMDeliveryAttemptScalarFieldEnum[]
  }

  /**
   * CRMDeliveryAttempt findFirstOrThrow
   */
  export type CRMDeliveryAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which CRMDeliveryAttempt to fetch.
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRMDeliveryAttempts to fetch.
     */
    orderBy?: CRMDeliveryAttemptOrderByWithRelationInput | CRMDeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CRMDeliveryAttempts.
     */
    cursor?: CRMDeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRMDeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRMDeliveryAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CRMDeliveryAttempts.
     */
    distinct?: CRMDeliveryAttemptScalarFieldEnum | CRMDeliveryAttemptScalarFieldEnum[]
  }

  /**
   * CRMDeliveryAttempt findMany
   */
  export type CRMDeliveryAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter, which CRMDeliveryAttempts to fetch.
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRMDeliveryAttempts to fetch.
     */
    orderBy?: CRMDeliveryAttemptOrderByWithRelationInput | CRMDeliveryAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CRMDeliveryAttempts.
     */
    cursor?: CRMDeliveryAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRMDeliveryAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRMDeliveryAttempts.
     */
    skip?: number
    distinct?: CRMDeliveryAttemptScalarFieldEnum | CRMDeliveryAttemptScalarFieldEnum[]
  }

  /**
   * CRMDeliveryAttempt create
   */
  export type CRMDeliveryAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a CRMDeliveryAttempt.
     */
    data: XOR<CRMDeliveryAttemptCreateInput, CRMDeliveryAttemptUncheckedCreateInput>
  }

  /**
   * CRMDeliveryAttempt createMany
   */
  export type CRMDeliveryAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CRMDeliveryAttempts.
     */
    data: CRMDeliveryAttemptCreateManyInput | CRMDeliveryAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CRMDeliveryAttempt createManyAndReturn
   */
  export type CRMDeliveryAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many CRMDeliveryAttempts.
     */
    data: CRMDeliveryAttemptCreateManyInput | CRMDeliveryAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CRMDeliveryAttempt update
   */
  export type CRMDeliveryAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a CRMDeliveryAttempt.
     */
    data: XOR<CRMDeliveryAttemptUpdateInput, CRMDeliveryAttemptUncheckedUpdateInput>
    /**
     * Choose, which CRMDeliveryAttempt to update.
     */
    where: CRMDeliveryAttemptWhereUniqueInput
  }

  /**
   * CRMDeliveryAttempt updateMany
   */
  export type CRMDeliveryAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CRMDeliveryAttempts.
     */
    data: XOR<CRMDeliveryAttemptUpdateManyMutationInput, CRMDeliveryAttemptUncheckedUpdateManyInput>
    /**
     * Filter which CRMDeliveryAttempts to update
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * Limit how many CRMDeliveryAttempts to update.
     */
    limit?: number
  }

  /**
   * CRMDeliveryAttempt updateManyAndReturn
   */
  export type CRMDeliveryAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * The data used to update CRMDeliveryAttempts.
     */
    data: XOR<CRMDeliveryAttemptUpdateManyMutationInput, CRMDeliveryAttemptUncheckedUpdateManyInput>
    /**
     * Filter which CRMDeliveryAttempts to update
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * Limit how many CRMDeliveryAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CRMDeliveryAttempt upsert
   */
  export type CRMDeliveryAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the CRMDeliveryAttempt to update in case it exists.
     */
    where: CRMDeliveryAttemptWhereUniqueInput
    /**
     * In case the CRMDeliveryAttempt found by the `where` argument doesn't exist, create a new CRMDeliveryAttempt with this data.
     */
    create: XOR<CRMDeliveryAttemptCreateInput, CRMDeliveryAttemptUncheckedCreateInput>
    /**
     * In case the CRMDeliveryAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CRMDeliveryAttemptUpdateInput, CRMDeliveryAttemptUncheckedUpdateInput>
  }

  /**
   * CRMDeliveryAttempt delete
   */
  export type CRMDeliveryAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
    /**
     * Filter which CRMDeliveryAttempt to delete.
     */
    where: CRMDeliveryAttemptWhereUniqueInput
  }

  /**
   * CRMDeliveryAttempt deleteMany
   */
  export type CRMDeliveryAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CRMDeliveryAttempts to delete
     */
    where?: CRMDeliveryAttemptWhereInput
    /**
     * Limit how many CRMDeliveryAttempts to delete.
     */
    limit?: number
  }

  /**
   * CRMDeliveryAttempt without action
   */
  export type CRMDeliveryAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRMDeliveryAttempt
     */
    select?: CRMDeliveryAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CRMDeliveryAttempt
     */
    omit?: CRMDeliveryAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CRMDeliveryAttemptInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsEvent
   */

  export type AggregateAnalyticsEvent = {
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  export type AnalyticsEventMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventCountAggregateOutputType = {
    id: number
    name: number
    props: number
    createdAt: number
    _all: number
  }


  export type AnalyticsEventMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AnalyticsEventMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type AnalyticsEventCountAggregateInputType = {
    id?: true
    name?: true
    props?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvent to aggregate.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsEvents
    **/
    _count?: true | AnalyticsEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type GetAnalyticsEventAggregateType<T extends AnalyticsEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
      : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
  }




  export type AnalyticsEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsEventWhereInput
    orderBy?: AnalyticsEventOrderByWithAggregationInput | AnalyticsEventOrderByWithAggregationInput[]
    by: AnalyticsEventScalarFieldEnum[] | AnalyticsEventScalarFieldEnum
    having?: AnalyticsEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsEventCountAggregateInputType | true
    _min?: AnalyticsEventMinAggregateInputType
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type AnalyticsEventGroupByOutputType = {
    id: string
    name: string
    props: JsonValue | null
    createdAt: Date
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  type GetAnalyticsEventGroupByPayload<T extends AnalyticsEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    props?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    props?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    props?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectScalar = {
    id?: boolean
    name?: boolean
    props?: boolean
    createdAt?: boolean
  }

  export type AnalyticsEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "props" | "createdAt", ExtArgs["result"]["analyticsEvent"]>

  export type $AnalyticsEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      /**
       * Non-sensitive properties only — enforced at the service layer.
       */
      props: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["analyticsEvent"]>
    composites: {}
  }

  type AnalyticsEventGetPayload<S extends boolean | null | undefined | AnalyticsEventDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsEventPayload, S>

  type AnalyticsEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsEventCountAggregateInputType | true
    }

  export interface AnalyticsEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsEvent'], meta: { name: 'AnalyticsEvent' } }
    /**
     * Find zero or one AnalyticsEvent that matches the filter.
     * @param {AnalyticsEventFindUniqueArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsEventFindUniqueArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsEventFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsEventFindFirstArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany()
     * 
     * // Get first 10 AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsEventFindManyArgs>(args?: SelectSubset<T, AnalyticsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsEvent.
     * @param {AnalyticsEventCreateArgs} args - Arguments to create a AnalyticsEvent.
     * @example
     * // Create one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.create({
     *   data: {
     *     // ... data to create a AnalyticsEvent
     *   }
     * })
     * 
     */
    create<T extends AnalyticsEventCreateArgs>(args: SelectSubset<T, AnalyticsEventCreateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsEvents.
     * @param {AnalyticsEventCreateManyArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsEventCreateManyArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsEvents and returns the data saved in the database.
     * @param {AnalyticsEventCreateManyAndReturnArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsEvent.
     * @param {AnalyticsEventDeleteArgs} args - Arguments to delete one AnalyticsEvent.
     * @example
     * // Delete one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsEvent
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsEventDeleteArgs>(args: SelectSubset<T, AnalyticsEventDeleteArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsEvent.
     * @param {AnalyticsEventUpdateArgs} args - Arguments to update one AnalyticsEvent.
     * @example
     * // Update one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsEventUpdateArgs>(args: SelectSubset<T, AnalyticsEventUpdateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsEvents.
     * @param {AnalyticsEventDeleteManyArgs} args - Arguments to filter AnalyticsEvents to delete.
     * @example
     * // Delete a few AnalyticsEvents
     * const { count } = await prisma.analyticsEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsEventDeleteManyArgs>(args?: SelectSubset<T, AnalyticsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsEventUpdateManyArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents and returns the data updated in the database.
     * @param {AnalyticsEventUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsEvents.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalyticsEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsEvent.
     * @param {AnalyticsEventUpsertArgs} args - Arguments to update or create a AnalyticsEvent.
     * @example
     * // Update or create a AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.upsert({
     *   create: {
     *     // ... data to create a AnalyticsEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsEventUpsertArgs>(args: SelectSubset<T, AnalyticsEventUpsertArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventCountArgs} args - Arguments to filter AnalyticsEvents to count.
     * @example
     * // Count the number of AnalyticsEvents
     * const count = await prisma.analyticsEvent.count({
     *   where: {
     *     // ... the filter for the AnalyticsEvents we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsEventCountArgs>(
      args?: Subset<T, AnalyticsEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalyticsEventAggregateArgs>(args: Subset<T, AnalyticsEventAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsEventAggregateType<T>>

    /**
     * Group by AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalyticsEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsEventGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsEvent model
   */
  readonly fields: AnalyticsEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalyticsEvent model
   */
  interface AnalyticsEventFieldRefs {
    readonly id: FieldRef<"AnalyticsEvent", 'String'>
    readonly name: FieldRef<"AnalyticsEvent", 'String'>
    readonly props: FieldRef<"AnalyticsEvent", 'Json'>
    readonly createdAt: FieldRef<"AnalyticsEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsEvent findUnique
   */
  export type AnalyticsEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findUniqueOrThrow
   */
  export type AnalyticsEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findFirst
   */
  export type AnalyticsEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findFirstOrThrow
   */
  export type AnalyticsEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findMany
   */
  export type AnalyticsEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvents to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent create
   */
  export type AnalyticsEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
  }

  /**
   * AnalyticsEvent createMany
   */
  export type AnalyticsEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent createManyAndReturn
   */
  export type AnalyticsEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent update
   */
  export type AnalyticsEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsEvent to update.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent updateMany
   */
  export type AnalyticsEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent updateManyAndReturn
   */
  export type AnalyticsEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent upsert
   */
  export type AnalyticsEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsEvent to update in case it exists.
     */
    where: AnalyticsEventWhereUniqueInput
    /**
     * In case the AnalyticsEvent found by the `where` argument doesn't exist, create a new AnalyticsEvent with this data.
     */
    create: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
    /**
     * In case the AnalyticsEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
  }

  /**
   * AnalyticsEvent delete
   */
  export type AnalyticsEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter which AnalyticsEvent to delete.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent deleteMany
   */
  export type AnalyticsEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvents to delete
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent without action
   */
  export type AnalyticsEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
  }


  /**
   * Model AuditRecord
   */

  export type AggregateAuditRecord = {
    _count: AuditRecordCountAggregateOutputType | null
    _min: AuditRecordMinAggregateOutputType | null
    _max: AuditRecordMaxAggregateOutputType | null
  }

  export type AuditRecordMinAggregateOutputType = {
    id: string | null
    actor: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditRecordMaxAggregateOutputType = {
    id: string | null
    actor: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditRecordCountAggregateOutputType = {
    id: number
    actor: number
    action: number
    entity: number
    entityId: number
    detail: number
    createdAt: number
    _all: number
  }


  export type AuditRecordMinAggregateInputType = {
    id?: true
    actor?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditRecordMaxAggregateInputType = {
    id?: true
    actor?: true
    action?: true
    entity?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditRecordCountAggregateInputType = {
    id?: true
    actor?: true
    action?: true
    entity?: true
    entityId?: true
    detail?: true
    createdAt?: true
    _all?: true
  }

  export type AuditRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditRecord to aggregate.
     */
    where?: AuditRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRecords to fetch.
     */
    orderBy?: AuditRecordOrderByWithRelationInput | AuditRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditRecords
    **/
    _count?: true | AuditRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditRecordMaxAggregateInputType
  }

  export type GetAuditRecordAggregateType<T extends AuditRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditRecord[P]>
      : GetScalarType<T[P], AggregateAuditRecord[P]>
  }




  export type AuditRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditRecordWhereInput
    orderBy?: AuditRecordOrderByWithAggregationInput | AuditRecordOrderByWithAggregationInput[]
    by: AuditRecordScalarFieldEnum[] | AuditRecordScalarFieldEnum
    having?: AuditRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditRecordCountAggregateInputType | true
    _min?: AuditRecordMinAggregateInputType
    _max?: AuditRecordMaxAggregateInputType
  }

  export type AuditRecordGroupByOutputType = {
    id: string
    actor: string
    action: string
    entity: string | null
    entityId: string | null
    detail: JsonValue | null
    createdAt: Date
    _count: AuditRecordCountAggregateOutputType | null
    _min: AuditRecordMinAggregateOutputType | null
    _max: AuditRecordMaxAggregateOutputType | null
  }

  type GetAuditRecordGroupByPayload<T extends AuditRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AuditRecordGroupByOutputType[P]>
        }
      >
    >


  export type AuditRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actor?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    detail?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditRecord"]>

  export type AuditRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actor?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    detail?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditRecord"]>

  export type AuditRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actor?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    detail?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditRecord"]>

  export type AuditRecordSelectScalar = {
    id?: boolean
    actor?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    detail?: boolean
    createdAt?: boolean
  }

  export type AuditRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actor" | "action" | "entity" | "entityId" | "detail" | "createdAt", ExtArgs["result"]["auditRecord"]>

  export type $AuditRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actor: string
      action: string
      entity: string | null
      entityId: string | null
      detail: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditRecord"]>
    composites: {}
  }

  type AuditRecordGetPayload<S extends boolean | null | undefined | AuditRecordDefaultArgs> = $Result.GetResult<Prisma.$AuditRecordPayload, S>

  type AuditRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditRecordCountAggregateInputType | true
    }

  export interface AuditRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditRecord'], meta: { name: 'AuditRecord' } }
    /**
     * Find zero or one AuditRecord that matches the filter.
     * @param {AuditRecordFindUniqueArgs} args - Arguments to find a AuditRecord
     * @example
     * // Get one AuditRecord
     * const auditRecord = await prisma.auditRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditRecordFindUniqueArgs>(args: SelectSubset<T, AuditRecordFindUniqueArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditRecordFindUniqueOrThrowArgs} args - Arguments to find a AuditRecord
     * @example
     * // Get one AuditRecord
     * const auditRecord = await prisma.auditRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordFindFirstArgs} args - Arguments to find a AuditRecord
     * @example
     * // Get one AuditRecord
     * const auditRecord = await prisma.auditRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditRecordFindFirstArgs>(args?: SelectSubset<T, AuditRecordFindFirstArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordFindFirstOrThrowArgs} args - Arguments to find a AuditRecord
     * @example
     * // Get one AuditRecord
     * const auditRecord = await prisma.auditRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditRecords
     * const auditRecords = await prisma.auditRecord.findMany()
     * 
     * // Get first 10 AuditRecords
     * const auditRecords = await prisma.auditRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditRecordWithIdOnly = await prisma.auditRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditRecordFindManyArgs>(args?: SelectSubset<T, AuditRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditRecord.
     * @param {AuditRecordCreateArgs} args - Arguments to create a AuditRecord.
     * @example
     * // Create one AuditRecord
     * const AuditRecord = await prisma.auditRecord.create({
     *   data: {
     *     // ... data to create a AuditRecord
     *   }
     * })
     * 
     */
    create<T extends AuditRecordCreateArgs>(args: SelectSubset<T, AuditRecordCreateArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditRecords.
     * @param {AuditRecordCreateManyArgs} args - Arguments to create many AuditRecords.
     * @example
     * // Create many AuditRecords
     * const auditRecord = await prisma.auditRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditRecordCreateManyArgs>(args?: SelectSubset<T, AuditRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditRecords and returns the data saved in the database.
     * @param {AuditRecordCreateManyAndReturnArgs} args - Arguments to create many AuditRecords.
     * @example
     * // Create many AuditRecords
     * const auditRecord = await prisma.auditRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditRecords and only return the `id`
     * const auditRecordWithIdOnly = await prisma.auditRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditRecord.
     * @param {AuditRecordDeleteArgs} args - Arguments to delete one AuditRecord.
     * @example
     * // Delete one AuditRecord
     * const AuditRecord = await prisma.auditRecord.delete({
     *   where: {
     *     // ... filter to delete one AuditRecord
     *   }
     * })
     * 
     */
    delete<T extends AuditRecordDeleteArgs>(args: SelectSubset<T, AuditRecordDeleteArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditRecord.
     * @param {AuditRecordUpdateArgs} args - Arguments to update one AuditRecord.
     * @example
     * // Update one AuditRecord
     * const auditRecord = await prisma.auditRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditRecordUpdateArgs>(args: SelectSubset<T, AuditRecordUpdateArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditRecords.
     * @param {AuditRecordDeleteManyArgs} args - Arguments to filter AuditRecords to delete.
     * @example
     * // Delete a few AuditRecords
     * const { count } = await prisma.auditRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditRecordDeleteManyArgs>(args?: SelectSubset<T, AuditRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditRecords
     * const auditRecord = await prisma.auditRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditRecordUpdateManyArgs>(args: SelectSubset<T, AuditRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditRecords and returns the data updated in the database.
     * @param {AuditRecordUpdateManyAndReturnArgs} args - Arguments to update many AuditRecords.
     * @example
     * // Update many AuditRecords
     * const auditRecord = await prisma.auditRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditRecords and only return the `id`
     * const auditRecordWithIdOnly = await prisma.auditRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditRecord.
     * @param {AuditRecordUpsertArgs} args - Arguments to update or create a AuditRecord.
     * @example
     * // Update or create a AuditRecord
     * const auditRecord = await prisma.auditRecord.upsert({
     *   create: {
     *     // ... data to create a AuditRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditRecord we want to update
     *   }
     * })
     */
    upsert<T extends AuditRecordUpsertArgs>(args: SelectSubset<T, AuditRecordUpsertArgs<ExtArgs>>): Prisma__AuditRecordClient<$Result.GetResult<Prisma.$AuditRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordCountArgs} args - Arguments to filter AuditRecords to count.
     * @example
     * // Count the number of AuditRecords
     * const count = await prisma.auditRecord.count({
     *   where: {
     *     // ... the filter for the AuditRecords we want to count
     *   }
     * })
    **/
    count<T extends AuditRecordCountArgs>(
      args?: Subset<T, AuditRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditRecordAggregateArgs>(args: Subset<T, AuditRecordAggregateArgs>): Prisma.PrismaPromise<GetAuditRecordAggregateType<T>>

    /**
     * Group by AuditRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditRecordGroupByArgs['orderBy'] }
        : { orderBy?: AuditRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditRecord model
   */
  readonly fields: AuditRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditRecord model
   */
  interface AuditRecordFieldRefs {
    readonly id: FieldRef<"AuditRecord", 'String'>
    readonly actor: FieldRef<"AuditRecord", 'String'>
    readonly action: FieldRef<"AuditRecord", 'String'>
    readonly entity: FieldRef<"AuditRecord", 'String'>
    readonly entityId: FieldRef<"AuditRecord", 'String'>
    readonly detail: FieldRef<"AuditRecord", 'Json'>
    readonly createdAt: FieldRef<"AuditRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditRecord findUnique
   */
  export type AuditRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * Filter, which AuditRecord to fetch.
     */
    where: AuditRecordWhereUniqueInput
  }

  /**
   * AuditRecord findUniqueOrThrow
   */
  export type AuditRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * Filter, which AuditRecord to fetch.
     */
    where: AuditRecordWhereUniqueInput
  }

  /**
   * AuditRecord findFirst
   */
  export type AuditRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * Filter, which AuditRecord to fetch.
     */
    where?: AuditRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRecords to fetch.
     */
    orderBy?: AuditRecordOrderByWithRelationInput | AuditRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditRecords.
     */
    cursor?: AuditRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditRecords.
     */
    distinct?: AuditRecordScalarFieldEnum | AuditRecordScalarFieldEnum[]
  }

  /**
   * AuditRecord findFirstOrThrow
   */
  export type AuditRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * Filter, which AuditRecord to fetch.
     */
    where?: AuditRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRecords to fetch.
     */
    orderBy?: AuditRecordOrderByWithRelationInput | AuditRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditRecords.
     */
    cursor?: AuditRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditRecords.
     */
    distinct?: AuditRecordScalarFieldEnum | AuditRecordScalarFieldEnum[]
  }

  /**
   * AuditRecord findMany
   */
  export type AuditRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * Filter, which AuditRecords to fetch.
     */
    where?: AuditRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditRecords to fetch.
     */
    orderBy?: AuditRecordOrderByWithRelationInput | AuditRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditRecords.
     */
    cursor?: AuditRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditRecords.
     */
    skip?: number
    distinct?: AuditRecordScalarFieldEnum | AuditRecordScalarFieldEnum[]
  }

  /**
   * AuditRecord create
   */
  export type AuditRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditRecord.
     */
    data: XOR<AuditRecordCreateInput, AuditRecordUncheckedCreateInput>
  }

  /**
   * AuditRecord createMany
   */
  export type AuditRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditRecords.
     */
    data: AuditRecordCreateManyInput | AuditRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditRecord createManyAndReturn
   */
  export type AuditRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AuditRecords.
     */
    data: AuditRecordCreateManyInput | AuditRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditRecord update
   */
  export type AuditRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditRecord.
     */
    data: XOR<AuditRecordUpdateInput, AuditRecordUncheckedUpdateInput>
    /**
     * Choose, which AuditRecord to update.
     */
    where: AuditRecordWhereUniqueInput
  }

  /**
   * AuditRecord updateMany
   */
  export type AuditRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditRecords.
     */
    data: XOR<AuditRecordUpdateManyMutationInput, AuditRecordUncheckedUpdateManyInput>
    /**
     * Filter which AuditRecords to update
     */
    where?: AuditRecordWhereInput
    /**
     * Limit how many AuditRecords to update.
     */
    limit?: number
  }

  /**
   * AuditRecord updateManyAndReturn
   */
  export type AuditRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * The data used to update AuditRecords.
     */
    data: XOR<AuditRecordUpdateManyMutationInput, AuditRecordUncheckedUpdateManyInput>
    /**
     * Filter which AuditRecords to update
     */
    where?: AuditRecordWhereInput
    /**
     * Limit how many AuditRecords to update.
     */
    limit?: number
  }

  /**
   * AuditRecord upsert
   */
  export type AuditRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditRecord to update in case it exists.
     */
    where: AuditRecordWhereUniqueInput
    /**
     * In case the AuditRecord found by the `where` argument doesn't exist, create a new AuditRecord with this data.
     */
    create: XOR<AuditRecordCreateInput, AuditRecordUncheckedCreateInput>
    /**
     * In case the AuditRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditRecordUpdateInput, AuditRecordUncheckedUpdateInput>
  }

  /**
   * AuditRecord delete
   */
  export type AuditRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
    /**
     * Filter which AuditRecord to delete.
     */
    where: AuditRecordWhereUniqueInput
  }

  /**
   * AuditRecord deleteMany
   */
  export type AuditRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditRecords to delete
     */
    where?: AuditRecordWhereInput
    /**
     * Limit how many AuditRecords to delete.
     */
    limit?: number
  }

  /**
   * AuditRecord without action
   */
  export type AuditRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditRecord
     */
    select?: AuditRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditRecord
     */
    omit?: AuditRecordOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    country: 'country',
    region: 'region',
    status: 'status',
    profile: 'profile',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    nextReviewAt: 'nextReviewAt',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const DestinationMonthScalarFieldEnum: {
    id: 'id',
    destinationId: 'destinationId',
    month: 'month',
    seasonScore: 'seasonScore',
    seasonLabel: 'seasonLabel',
    rainfall: 'rainfall',
    humidity: 'humidity',
    crowdLevel: 'crowdLevel',
    highlights: 'highlights',
    warnings: 'warnings'
  };

  export type DestinationMonthScalarFieldEnum = (typeof DestinationMonthScalarFieldEnum)[keyof typeof DestinationMonthScalarFieldEnum]


  export const DestinationSourceScalarFieldEnum: {
    id: 'id',
    destinationId: 'destinationId',
    sourceName: 'sourceName',
    sourceType: 'sourceType',
    sourceReference: 'sourceReference',
    reliability: 'reliability',
    accessedAt: 'accessedAt'
  };

  export type DestinationSourceScalarFieldEnum = (typeof DestinationSourceScalarFieldEnum)[keyof typeof DestinationSourceScalarFieldEnum]


  export const ConversationSessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationSessionScalarFieldEnum = (typeof ConversationSessionScalarFieldEnum)[keyof typeof ConversationSessionScalarFieldEnum]


  export const ConversationMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ConversationMessageScalarFieldEnum = (typeof ConversationMessageScalarFieldEnum)[keyof typeof ConversationMessageScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    idempotencyKey: 'idempotencyKey',
    source: 'source',
    stage: 'stage',
    priority: 'priority',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    customerEmail: 'customerEmail',
    preferredContactChannel: 'preferredContactChannel',
    preferredContactTime: 'preferredContactTime',
    additionalNotes: 'additionalNotes',
    consent: 'consent',
    consentTimestamp: 'consentTimestamp',
    tripBrief: 'tripBrief',
    transcript: 'transcript',
    selectedConceptId: 'selectedConceptId',
    selectedDestinationSlug: 'selectedDestinationSlug',
    selectedDirection: 'selectedDirection',
    itinerary: 'itinerary',
    leadScore: 'leadScore',
    leadScoreReasons: 'leadScoreReasons',
    crmStatus: 'crmStatus',
    crmProvider: 'crmProvider',
    crmAttempts: 'crmAttempts',
    crmReferenceId: 'crmReferenceId',
    crmLastError: 'crmLastError',
    crmLastAttempt: 'crmLastAttempt',
    crmNextRetryAt: 'crmNextRetryAt',
    consultantOwner: 'consultantOwner',
    followUpDueAt: 'followUpDueAt',
    conversationSessionId: 'conversationSessionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LeadRecommendationScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    conceptId: 'conceptId',
    destinationSlug: 'destinationSlug',
    direction: 'direction',
    score: 'score',
    reasons: 'reasons',
    tradeOff: 'tradeOff'
  };

  export type LeadRecommendationScalarFieldEnum = (typeof LeadRecommendationScalarFieldEnum)[keyof typeof LeadRecommendationScalarFieldEnum]


  export const LeadItineraryDayScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    day: 'day',
    title: 'title',
    pace: 'pace',
    activities: 'activities',
    notes: 'notes'
  };

  export type LeadItineraryDayScalarFieldEnum = (typeof LeadItineraryDayScalarFieldEnum)[keyof typeof LeadItineraryDayScalarFieldEnum]


  export const LeadNoteScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    authorName: 'authorName',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type LeadNoteScalarFieldEnum = (typeof LeadNoteScalarFieldEnum)[keyof typeof LeadNoteScalarFieldEnum]


  export const LeadAssignmentScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    consultantName: 'consultantName',
    assignedAt: 'assignedAt'
  };

  export type LeadAssignmentScalarFieldEnum = (typeof LeadAssignmentScalarFieldEnum)[keyof typeof LeadAssignmentScalarFieldEnum]


  export const CRMDeliveryAttemptScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    provider: 'provider',
    attempt: 'attempt',
    status: 'status',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type CRMDeliveryAttemptScalarFieldEnum = (typeof CRMDeliveryAttemptScalarFieldEnum)[keyof typeof CRMDeliveryAttemptScalarFieldEnum]


  export const AnalyticsEventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    props: 'props',
    createdAt: 'createdAt'
  };

  export type AnalyticsEventScalarFieldEnum = (typeof AnalyticsEventScalarFieldEnum)[keyof typeof AnalyticsEventScalarFieldEnum]


  export const AuditRecordScalarFieldEnum: {
    id: 'id',
    actor: 'actor',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    detail: 'detail',
    createdAt: 'createdAt'
  };

  export type AuditRecordScalarFieldEnum = (typeof AuditRecordScalarFieldEnum)[keyof typeof AuditRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'KnowledgeStatus'
   */
  export type EnumKnowledgeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KnowledgeStatus'>
    


  /**
   * Reference to a field of type 'KnowledgeStatus[]'
   */
  export type ListEnumKnowledgeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KnowledgeStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LeadStage'
   */
  export type EnumLeadStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStage'>
    


  /**
   * Reference to a field of type 'LeadStage[]'
   */
  export type ListEnumLeadStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStage[]'>
    


  /**
   * Reference to a field of type 'LeadPriority'
   */
  export type EnumLeadPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadPriority'>
    


  /**
   * Reference to a field of type 'LeadPriority[]'
   */
  export type ListEnumLeadPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadPriority[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CRMDeliveryStatus'
   */
  export type EnumCRMDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CRMDeliveryStatus'>
    


  /**
   * Reference to a field of type 'CRMDeliveryStatus[]'
   */
  export type ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CRMDeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    slug?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    country?: StringFilter<"Destination"> | string
    region?: StringFilter<"Destination"> | string
    status?: EnumKnowledgeStatusFilter<"Destination"> | $Enums.KnowledgeStatus
    profile?: JsonFilter<"Destination">
    reviewedBy?: StringNullableFilter<"Destination"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Destination"> | Date | string | null
    nextReviewAt?: DateTimeNullableFilter<"Destination"> | Date | string | null
    version?: StringFilter<"Destination"> | string
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    months?: DestinationMonthListRelationFilter
    sources?: DestinationSourceListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    status?: SortOrder
    profile?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    nextReviewAt?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    months?: DestinationMonthOrderByRelationAggregateInput
    sources?: DestinationSourceOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    name?: StringFilter<"Destination"> | string
    country?: StringFilter<"Destination"> | string
    region?: StringFilter<"Destination"> | string
    status?: EnumKnowledgeStatusFilter<"Destination"> | $Enums.KnowledgeStatus
    profile?: JsonFilter<"Destination">
    reviewedBy?: StringNullableFilter<"Destination"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Destination"> | Date | string | null
    nextReviewAt?: DateTimeNullableFilter<"Destination"> | Date | string | null
    version?: StringFilter<"Destination"> | string
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    months?: DestinationMonthListRelationFilter
    sources?: DestinationSourceListRelationFilter
  }, "id" | "slug">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    status?: SortOrder
    profile?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    nextReviewAt?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    slug?: StringWithAggregatesFilter<"Destination"> | string
    name?: StringWithAggregatesFilter<"Destination"> | string
    country?: StringWithAggregatesFilter<"Destination"> | string
    region?: StringWithAggregatesFilter<"Destination"> | string
    status?: EnumKnowledgeStatusWithAggregatesFilter<"Destination"> | $Enums.KnowledgeStatus
    profile?: JsonWithAggregatesFilter<"Destination">
    reviewedBy?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"Destination"> | Date | string | null
    nextReviewAt?: DateTimeNullableWithAggregatesFilter<"Destination"> | Date | string | null
    version?: StringWithAggregatesFilter<"Destination"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
  }

  export type DestinationMonthWhereInput = {
    AND?: DestinationMonthWhereInput | DestinationMonthWhereInput[]
    OR?: DestinationMonthWhereInput[]
    NOT?: DestinationMonthWhereInput | DestinationMonthWhereInput[]
    id?: StringFilter<"DestinationMonth"> | string
    destinationId?: StringFilter<"DestinationMonth"> | string
    month?: IntFilter<"DestinationMonth"> | number
    seasonScore?: IntFilter<"DestinationMonth"> | number
    seasonLabel?: StringFilter<"DestinationMonth"> | string
    rainfall?: StringFilter<"DestinationMonth"> | string
    humidity?: StringFilter<"DestinationMonth"> | string
    crowdLevel?: StringFilter<"DestinationMonth"> | string
    highlights?: JsonFilter<"DestinationMonth">
    warnings?: JsonFilter<"DestinationMonth">
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type DestinationMonthOrderByWithRelationInput = {
    id?: SortOrder
    destinationId?: SortOrder
    month?: SortOrder
    seasonScore?: SortOrder
    seasonLabel?: SortOrder
    rainfall?: SortOrder
    humidity?: SortOrder
    crowdLevel?: SortOrder
    highlights?: SortOrder
    warnings?: SortOrder
    destination?: DestinationOrderByWithRelationInput
  }

  export type DestinationMonthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    destinationId_month?: DestinationMonthDestinationIdMonthCompoundUniqueInput
    AND?: DestinationMonthWhereInput | DestinationMonthWhereInput[]
    OR?: DestinationMonthWhereInput[]
    NOT?: DestinationMonthWhereInput | DestinationMonthWhereInput[]
    destinationId?: StringFilter<"DestinationMonth"> | string
    month?: IntFilter<"DestinationMonth"> | number
    seasonScore?: IntFilter<"DestinationMonth"> | number
    seasonLabel?: StringFilter<"DestinationMonth"> | string
    rainfall?: StringFilter<"DestinationMonth"> | string
    humidity?: StringFilter<"DestinationMonth"> | string
    crowdLevel?: StringFilter<"DestinationMonth"> | string
    highlights?: JsonFilter<"DestinationMonth">
    warnings?: JsonFilter<"DestinationMonth">
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id" | "destinationId_month">

  export type DestinationMonthOrderByWithAggregationInput = {
    id?: SortOrder
    destinationId?: SortOrder
    month?: SortOrder
    seasonScore?: SortOrder
    seasonLabel?: SortOrder
    rainfall?: SortOrder
    humidity?: SortOrder
    crowdLevel?: SortOrder
    highlights?: SortOrder
    warnings?: SortOrder
    _count?: DestinationMonthCountOrderByAggregateInput
    _avg?: DestinationMonthAvgOrderByAggregateInput
    _max?: DestinationMonthMaxOrderByAggregateInput
    _min?: DestinationMonthMinOrderByAggregateInput
    _sum?: DestinationMonthSumOrderByAggregateInput
  }

  export type DestinationMonthScalarWhereWithAggregatesInput = {
    AND?: DestinationMonthScalarWhereWithAggregatesInput | DestinationMonthScalarWhereWithAggregatesInput[]
    OR?: DestinationMonthScalarWhereWithAggregatesInput[]
    NOT?: DestinationMonthScalarWhereWithAggregatesInput | DestinationMonthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DestinationMonth"> | string
    destinationId?: StringWithAggregatesFilter<"DestinationMonth"> | string
    month?: IntWithAggregatesFilter<"DestinationMonth"> | number
    seasonScore?: IntWithAggregatesFilter<"DestinationMonth"> | number
    seasonLabel?: StringWithAggregatesFilter<"DestinationMonth"> | string
    rainfall?: StringWithAggregatesFilter<"DestinationMonth"> | string
    humidity?: StringWithAggregatesFilter<"DestinationMonth"> | string
    crowdLevel?: StringWithAggregatesFilter<"DestinationMonth"> | string
    highlights?: JsonWithAggregatesFilter<"DestinationMonth">
    warnings?: JsonWithAggregatesFilter<"DestinationMonth">
  }

  export type DestinationSourceWhereInput = {
    AND?: DestinationSourceWhereInput | DestinationSourceWhereInput[]
    OR?: DestinationSourceWhereInput[]
    NOT?: DestinationSourceWhereInput | DestinationSourceWhereInput[]
    id?: StringFilter<"DestinationSource"> | string
    destinationId?: StringFilter<"DestinationSource"> | string
    sourceName?: StringFilter<"DestinationSource"> | string
    sourceType?: StringFilter<"DestinationSource"> | string
    sourceReference?: StringNullableFilter<"DestinationSource"> | string | null
    reliability?: StringFilter<"DestinationSource"> | string
    accessedAt?: DateTimeFilter<"DestinationSource"> | Date | string
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type DestinationSourceOrderByWithRelationInput = {
    id?: SortOrder
    destinationId?: SortOrder
    sourceName?: SortOrder
    sourceType?: SortOrder
    sourceReference?: SortOrderInput | SortOrder
    reliability?: SortOrder
    accessedAt?: SortOrder
    destination?: DestinationOrderByWithRelationInput
  }

  export type DestinationSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationSourceWhereInput | DestinationSourceWhereInput[]
    OR?: DestinationSourceWhereInput[]
    NOT?: DestinationSourceWhereInput | DestinationSourceWhereInput[]
    destinationId?: StringFilter<"DestinationSource"> | string
    sourceName?: StringFilter<"DestinationSource"> | string
    sourceType?: StringFilter<"DestinationSource"> | string
    sourceReference?: StringNullableFilter<"DestinationSource"> | string | null
    reliability?: StringFilter<"DestinationSource"> | string
    accessedAt?: DateTimeFilter<"DestinationSource"> | Date | string
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id">

  export type DestinationSourceOrderByWithAggregationInput = {
    id?: SortOrder
    destinationId?: SortOrder
    sourceName?: SortOrder
    sourceType?: SortOrder
    sourceReference?: SortOrderInput | SortOrder
    reliability?: SortOrder
    accessedAt?: SortOrder
    _count?: DestinationSourceCountOrderByAggregateInput
    _max?: DestinationSourceMaxOrderByAggregateInput
    _min?: DestinationSourceMinOrderByAggregateInput
  }

  export type DestinationSourceScalarWhereWithAggregatesInput = {
    AND?: DestinationSourceScalarWhereWithAggregatesInput | DestinationSourceScalarWhereWithAggregatesInput[]
    OR?: DestinationSourceScalarWhereWithAggregatesInput[]
    NOT?: DestinationSourceScalarWhereWithAggregatesInput | DestinationSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DestinationSource"> | string
    destinationId?: StringWithAggregatesFilter<"DestinationSource"> | string
    sourceName?: StringWithAggregatesFilter<"DestinationSource"> | string
    sourceType?: StringWithAggregatesFilter<"DestinationSource"> | string
    sourceReference?: StringNullableWithAggregatesFilter<"DestinationSource"> | string | null
    reliability?: StringWithAggregatesFilter<"DestinationSource"> | string
    accessedAt?: DateTimeWithAggregatesFilter<"DestinationSource"> | Date | string
  }

  export type ConversationSessionWhereInput = {
    AND?: ConversationSessionWhereInput | ConversationSessionWhereInput[]
    OR?: ConversationSessionWhereInput[]
    NOT?: ConversationSessionWhereInput | ConversationSessionWhereInput[]
    id?: StringFilter<"ConversationSession"> | string
    createdAt?: DateTimeFilter<"ConversationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationSession"> | Date | string
    messages?: ConversationMessageListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type ConversationSessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: ConversationMessageOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type ConversationSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationSessionWhereInput | ConversationSessionWhereInput[]
    OR?: ConversationSessionWhereInput[]
    NOT?: ConversationSessionWhereInput | ConversationSessionWhereInput[]
    createdAt?: DateTimeFilter<"ConversationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConversationSession"> | Date | string
    messages?: ConversationMessageListRelationFilter
    leads?: LeadListRelationFilter
  }, "id">

  export type ConversationSessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationSessionCountOrderByAggregateInput
    _max?: ConversationSessionMaxOrderByAggregateInput
    _min?: ConversationSessionMinOrderByAggregateInput
  }

  export type ConversationSessionScalarWhereWithAggregatesInput = {
    AND?: ConversationSessionScalarWhereWithAggregatesInput | ConversationSessionScalarWhereWithAggregatesInput[]
    OR?: ConversationSessionScalarWhereWithAggregatesInput[]
    NOT?: ConversationSessionScalarWhereWithAggregatesInput | ConversationSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversationSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConversationSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConversationSession"> | Date | string
  }

  export type ConversationMessageWhereInput = {
    AND?: ConversationMessageWhereInput | ConversationMessageWhereInput[]
    OR?: ConversationMessageWhereInput[]
    NOT?: ConversationMessageWhereInput | ConversationMessageWhereInput[]
    id?: StringFilter<"ConversationMessage"> | string
    sessionId?: StringFilter<"ConversationMessage"> | string
    role?: StringFilter<"ConversationMessage"> | string
    content?: StringFilter<"ConversationMessage"> | string
    createdAt?: DateTimeFilter<"ConversationMessage"> | Date | string
    session?: XOR<ConversationSessionScalarRelationFilter, ConversationSessionWhereInput>
  }

  export type ConversationMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    session?: ConversationSessionOrderByWithRelationInput
  }

  export type ConversationMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationMessageWhereInput | ConversationMessageWhereInput[]
    OR?: ConversationMessageWhereInput[]
    NOT?: ConversationMessageWhereInput | ConversationMessageWhereInput[]
    sessionId?: StringFilter<"ConversationMessage"> | string
    role?: StringFilter<"ConversationMessage"> | string
    content?: StringFilter<"ConversationMessage"> | string
    createdAt?: DateTimeFilter<"ConversationMessage"> | Date | string
    session?: XOR<ConversationSessionScalarRelationFilter, ConversationSessionWhereInput>
  }, "id">

  export type ConversationMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ConversationMessageCountOrderByAggregateInput
    _max?: ConversationMessageMaxOrderByAggregateInput
    _min?: ConversationMessageMinOrderByAggregateInput
  }

  export type ConversationMessageScalarWhereWithAggregatesInput = {
    AND?: ConversationMessageScalarWhereWithAggregatesInput | ConversationMessageScalarWhereWithAggregatesInput[]
    OR?: ConversationMessageScalarWhereWithAggregatesInput[]
    NOT?: ConversationMessageScalarWhereWithAggregatesInput | ConversationMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConversationMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ConversationMessage"> | string
    role?: StringWithAggregatesFilter<"ConversationMessage"> | string
    content?: StringWithAggregatesFilter<"ConversationMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConversationMessage"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    reference?: StringFilter<"Lead"> | string
    idempotencyKey?: StringFilter<"Lead"> | string
    source?: StringFilter<"Lead"> | string
    stage?: EnumLeadStageFilter<"Lead"> | $Enums.LeadStage
    priority?: EnumLeadPriorityFilter<"Lead"> | $Enums.LeadPriority
    customerName?: StringFilter<"Lead"> | string
    customerPhone?: StringFilter<"Lead"> | string
    customerEmail?: StringFilter<"Lead"> | string
    preferredContactChannel?: StringFilter<"Lead"> | string
    preferredContactTime?: StringNullableFilter<"Lead"> | string | null
    additionalNotes?: StringNullableFilter<"Lead"> | string | null
    consent?: BoolFilter<"Lead"> | boolean
    consentTimestamp?: DateTimeFilter<"Lead"> | Date | string
    tripBrief?: JsonFilter<"Lead">
    transcript?: JsonFilter<"Lead">
    selectedConceptId?: StringNullableFilter<"Lead"> | string | null
    selectedDestinationSlug?: StringNullableFilter<"Lead"> | string | null
    selectedDirection?: StringNullableFilter<"Lead"> | string | null
    itinerary?: JsonFilter<"Lead">
    leadScore?: IntFilter<"Lead"> | number
    leadScoreReasons?: JsonFilter<"Lead">
    crmStatus?: EnumCRMDeliveryStatusFilter<"Lead"> | $Enums.CRMDeliveryStatus
    crmProvider?: StringFilter<"Lead"> | string
    crmAttempts?: IntFilter<"Lead"> | number
    crmReferenceId?: StringNullableFilter<"Lead"> | string | null
    crmLastError?: StringNullableFilter<"Lead"> | string | null
    crmLastAttempt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    crmNextRetryAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    consultantOwner?: StringNullableFilter<"Lead"> | string | null
    followUpDueAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    conversationSessionId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    conversationSession?: XOR<ConversationSessionNullableScalarRelationFilter, ConversationSessionWhereInput> | null
    recommendations?: LeadRecommendationListRelationFilter
    itineraryDays?: LeadItineraryDayListRelationFilter
    notes?: LeadNoteListRelationFilter
    assignments?: LeadAssignmentListRelationFilter
    crmDeliveries?: CRMDeliveryAttemptListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    idempotencyKey?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    preferredContactChannel?: SortOrder
    preferredContactTime?: SortOrderInput | SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    consent?: SortOrder
    consentTimestamp?: SortOrder
    tripBrief?: SortOrder
    transcript?: SortOrder
    selectedConceptId?: SortOrderInput | SortOrder
    selectedDestinationSlug?: SortOrderInput | SortOrder
    selectedDirection?: SortOrderInput | SortOrder
    itinerary?: SortOrder
    leadScore?: SortOrder
    leadScoreReasons?: SortOrder
    crmStatus?: SortOrder
    crmProvider?: SortOrder
    crmAttempts?: SortOrder
    crmReferenceId?: SortOrderInput | SortOrder
    crmLastError?: SortOrderInput | SortOrder
    crmLastAttempt?: SortOrderInput | SortOrder
    crmNextRetryAt?: SortOrderInput | SortOrder
    consultantOwner?: SortOrderInput | SortOrder
    followUpDueAt?: SortOrderInput | SortOrder
    conversationSessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversationSession?: ConversationSessionOrderByWithRelationInput
    recommendations?: LeadRecommendationOrderByRelationAggregateInput
    itineraryDays?: LeadItineraryDayOrderByRelationAggregateInput
    notes?: LeadNoteOrderByRelationAggregateInput
    assignments?: LeadAssignmentOrderByRelationAggregateInput
    crmDeliveries?: CRMDeliveryAttemptOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    idempotencyKey?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    source?: StringFilter<"Lead"> | string
    stage?: EnumLeadStageFilter<"Lead"> | $Enums.LeadStage
    priority?: EnumLeadPriorityFilter<"Lead"> | $Enums.LeadPriority
    customerName?: StringFilter<"Lead"> | string
    customerPhone?: StringFilter<"Lead"> | string
    customerEmail?: StringFilter<"Lead"> | string
    preferredContactChannel?: StringFilter<"Lead"> | string
    preferredContactTime?: StringNullableFilter<"Lead"> | string | null
    additionalNotes?: StringNullableFilter<"Lead"> | string | null
    consent?: BoolFilter<"Lead"> | boolean
    consentTimestamp?: DateTimeFilter<"Lead"> | Date | string
    tripBrief?: JsonFilter<"Lead">
    transcript?: JsonFilter<"Lead">
    selectedConceptId?: StringNullableFilter<"Lead"> | string | null
    selectedDestinationSlug?: StringNullableFilter<"Lead"> | string | null
    selectedDirection?: StringNullableFilter<"Lead"> | string | null
    itinerary?: JsonFilter<"Lead">
    leadScore?: IntFilter<"Lead"> | number
    leadScoreReasons?: JsonFilter<"Lead">
    crmStatus?: EnumCRMDeliveryStatusFilter<"Lead"> | $Enums.CRMDeliveryStatus
    crmProvider?: StringFilter<"Lead"> | string
    crmAttempts?: IntFilter<"Lead"> | number
    crmReferenceId?: StringNullableFilter<"Lead"> | string | null
    crmLastError?: StringNullableFilter<"Lead"> | string | null
    crmLastAttempt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    crmNextRetryAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    consultantOwner?: StringNullableFilter<"Lead"> | string | null
    followUpDueAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    conversationSessionId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    conversationSession?: XOR<ConversationSessionNullableScalarRelationFilter, ConversationSessionWhereInput> | null
    recommendations?: LeadRecommendationListRelationFilter
    itineraryDays?: LeadItineraryDayListRelationFilter
    notes?: LeadNoteListRelationFilter
    assignments?: LeadAssignmentListRelationFilter
    crmDeliveries?: CRMDeliveryAttemptListRelationFilter
  }, "id" | "reference" | "idempotencyKey">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    idempotencyKey?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    preferredContactChannel?: SortOrder
    preferredContactTime?: SortOrderInput | SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    consent?: SortOrder
    consentTimestamp?: SortOrder
    tripBrief?: SortOrder
    transcript?: SortOrder
    selectedConceptId?: SortOrderInput | SortOrder
    selectedDestinationSlug?: SortOrderInput | SortOrder
    selectedDirection?: SortOrderInput | SortOrder
    itinerary?: SortOrder
    leadScore?: SortOrder
    leadScoreReasons?: SortOrder
    crmStatus?: SortOrder
    crmProvider?: SortOrder
    crmAttempts?: SortOrder
    crmReferenceId?: SortOrderInput | SortOrder
    crmLastError?: SortOrderInput | SortOrder
    crmLastAttempt?: SortOrderInput | SortOrder
    crmNextRetryAt?: SortOrderInput | SortOrder
    consultantOwner?: SortOrderInput | SortOrder
    followUpDueAt?: SortOrderInput | SortOrder
    conversationSessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    reference?: StringWithAggregatesFilter<"Lead"> | string
    idempotencyKey?: StringWithAggregatesFilter<"Lead"> | string
    source?: StringWithAggregatesFilter<"Lead"> | string
    stage?: EnumLeadStageWithAggregatesFilter<"Lead"> | $Enums.LeadStage
    priority?: EnumLeadPriorityWithAggregatesFilter<"Lead"> | $Enums.LeadPriority
    customerName?: StringWithAggregatesFilter<"Lead"> | string
    customerPhone?: StringWithAggregatesFilter<"Lead"> | string
    customerEmail?: StringWithAggregatesFilter<"Lead"> | string
    preferredContactChannel?: StringWithAggregatesFilter<"Lead"> | string
    preferredContactTime?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    additionalNotes?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    consent?: BoolWithAggregatesFilter<"Lead"> | boolean
    consentTimestamp?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    tripBrief?: JsonWithAggregatesFilter<"Lead">
    transcript?: JsonWithAggregatesFilter<"Lead">
    selectedConceptId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    selectedDestinationSlug?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    selectedDirection?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    itinerary?: JsonWithAggregatesFilter<"Lead">
    leadScore?: IntWithAggregatesFilter<"Lead"> | number
    leadScoreReasons?: JsonWithAggregatesFilter<"Lead">
    crmStatus?: EnumCRMDeliveryStatusWithAggregatesFilter<"Lead"> | $Enums.CRMDeliveryStatus
    crmProvider?: StringWithAggregatesFilter<"Lead"> | string
    crmAttempts?: IntWithAggregatesFilter<"Lead"> | number
    crmReferenceId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    crmLastError?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    crmLastAttempt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    crmNextRetryAt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    consultantOwner?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    followUpDueAt?: DateTimeNullableWithAggregatesFilter<"Lead"> | Date | string | null
    conversationSessionId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LeadRecommendationWhereInput = {
    AND?: LeadRecommendationWhereInput | LeadRecommendationWhereInput[]
    OR?: LeadRecommendationWhereInput[]
    NOT?: LeadRecommendationWhereInput | LeadRecommendationWhereInput[]
    id?: StringFilter<"LeadRecommendation"> | string
    leadId?: StringFilter<"LeadRecommendation"> | string
    conceptId?: StringFilter<"LeadRecommendation"> | string
    destinationSlug?: StringFilter<"LeadRecommendation"> | string
    direction?: StringFilter<"LeadRecommendation"> | string
    score?: JsonFilter<"LeadRecommendation">
    reasons?: JsonFilter<"LeadRecommendation">
    tradeOff?: StringFilter<"LeadRecommendation"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    conceptId?: SortOrder
    destinationSlug?: SortOrder
    direction?: SortOrder
    score?: SortOrder
    reasons?: SortOrder
    tradeOff?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadRecommendationWhereInput | LeadRecommendationWhereInput[]
    OR?: LeadRecommendationWhereInput[]
    NOT?: LeadRecommendationWhereInput | LeadRecommendationWhereInput[]
    leadId?: StringFilter<"LeadRecommendation"> | string
    conceptId?: StringFilter<"LeadRecommendation"> | string
    destinationSlug?: StringFilter<"LeadRecommendation"> | string
    direction?: StringFilter<"LeadRecommendation"> | string
    score?: JsonFilter<"LeadRecommendation">
    reasons?: JsonFilter<"LeadRecommendation">
    tradeOff?: StringFilter<"LeadRecommendation"> | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type LeadRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    conceptId?: SortOrder
    destinationSlug?: SortOrder
    direction?: SortOrder
    score?: SortOrder
    reasons?: SortOrder
    tradeOff?: SortOrder
    _count?: LeadRecommendationCountOrderByAggregateInput
    _max?: LeadRecommendationMaxOrderByAggregateInput
    _min?: LeadRecommendationMinOrderByAggregateInput
  }

  export type LeadRecommendationScalarWhereWithAggregatesInput = {
    AND?: LeadRecommendationScalarWhereWithAggregatesInput | LeadRecommendationScalarWhereWithAggregatesInput[]
    OR?: LeadRecommendationScalarWhereWithAggregatesInput[]
    NOT?: LeadRecommendationScalarWhereWithAggregatesInput | LeadRecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadRecommendation"> | string
    leadId?: StringWithAggregatesFilter<"LeadRecommendation"> | string
    conceptId?: StringWithAggregatesFilter<"LeadRecommendation"> | string
    destinationSlug?: StringWithAggregatesFilter<"LeadRecommendation"> | string
    direction?: StringWithAggregatesFilter<"LeadRecommendation"> | string
    score?: JsonWithAggregatesFilter<"LeadRecommendation">
    reasons?: JsonWithAggregatesFilter<"LeadRecommendation">
    tradeOff?: StringWithAggregatesFilter<"LeadRecommendation"> | string
  }

  export type LeadItineraryDayWhereInput = {
    AND?: LeadItineraryDayWhereInput | LeadItineraryDayWhereInput[]
    OR?: LeadItineraryDayWhereInput[]
    NOT?: LeadItineraryDayWhereInput | LeadItineraryDayWhereInput[]
    id?: StringFilter<"LeadItineraryDay"> | string
    leadId?: StringFilter<"LeadItineraryDay"> | string
    day?: IntFilter<"LeadItineraryDay"> | number
    title?: StringFilter<"LeadItineraryDay"> | string
    pace?: StringFilter<"LeadItineraryDay"> | string
    activities?: JsonFilter<"LeadItineraryDay">
    notes?: JsonFilter<"LeadItineraryDay">
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadItineraryDayOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    pace?: SortOrder
    activities?: SortOrder
    notes?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadItineraryDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leadId_day?: LeadItineraryDayLeadIdDayCompoundUniqueInput
    AND?: LeadItineraryDayWhereInput | LeadItineraryDayWhereInput[]
    OR?: LeadItineraryDayWhereInput[]
    NOT?: LeadItineraryDayWhereInput | LeadItineraryDayWhereInput[]
    leadId?: StringFilter<"LeadItineraryDay"> | string
    day?: IntFilter<"LeadItineraryDay"> | number
    title?: StringFilter<"LeadItineraryDay"> | string
    pace?: StringFilter<"LeadItineraryDay"> | string
    activities?: JsonFilter<"LeadItineraryDay">
    notes?: JsonFilter<"LeadItineraryDay">
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id" | "leadId_day">

  export type LeadItineraryDayOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    pace?: SortOrder
    activities?: SortOrder
    notes?: SortOrder
    _count?: LeadItineraryDayCountOrderByAggregateInput
    _avg?: LeadItineraryDayAvgOrderByAggregateInput
    _max?: LeadItineraryDayMaxOrderByAggregateInput
    _min?: LeadItineraryDayMinOrderByAggregateInput
    _sum?: LeadItineraryDaySumOrderByAggregateInput
  }

  export type LeadItineraryDayScalarWhereWithAggregatesInput = {
    AND?: LeadItineraryDayScalarWhereWithAggregatesInput | LeadItineraryDayScalarWhereWithAggregatesInput[]
    OR?: LeadItineraryDayScalarWhereWithAggregatesInput[]
    NOT?: LeadItineraryDayScalarWhereWithAggregatesInput | LeadItineraryDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadItineraryDay"> | string
    leadId?: StringWithAggregatesFilter<"LeadItineraryDay"> | string
    day?: IntWithAggregatesFilter<"LeadItineraryDay"> | number
    title?: StringWithAggregatesFilter<"LeadItineraryDay"> | string
    pace?: StringWithAggregatesFilter<"LeadItineraryDay"> | string
    activities?: JsonWithAggregatesFilter<"LeadItineraryDay">
    notes?: JsonWithAggregatesFilter<"LeadItineraryDay">
  }

  export type LeadNoteWhereInput = {
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    authorName?: StringFilter<"LeadNote"> | string
    body?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadNoteOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    authorName?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    leadId?: StringFilter<"LeadNote"> | string
    authorName?: StringFilter<"LeadNote"> | string
    body?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type LeadNoteOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    authorName?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: LeadNoteCountOrderByAggregateInput
    _max?: LeadNoteMaxOrderByAggregateInput
    _min?: LeadNoteMinOrderByAggregateInput
  }

  export type LeadNoteScalarWhereWithAggregatesInput = {
    AND?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    OR?: LeadNoteScalarWhereWithAggregatesInput[]
    NOT?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadNote"> | string
    leadId?: StringWithAggregatesFilter<"LeadNote"> | string
    authorName?: StringWithAggregatesFilter<"LeadNote"> | string
    body?: StringWithAggregatesFilter<"LeadNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeadNote"> | Date | string
  }

  export type LeadAssignmentWhereInput = {
    AND?: LeadAssignmentWhereInput | LeadAssignmentWhereInput[]
    OR?: LeadAssignmentWhereInput[]
    NOT?: LeadAssignmentWhereInput | LeadAssignmentWhereInput[]
    id?: StringFilter<"LeadAssignment"> | string
    leadId?: StringFilter<"LeadAssignment"> | string
    consultantName?: StringFilter<"LeadAssignment"> | string
    assignedAt?: DateTimeFilter<"LeadAssignment"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type LeadAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    consultantName?: SortOrder
    assignedAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type LeadAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadAssignmentWhereInput | LeadAssignmentWhereInput[]
    OR?: LeadAssignmentWhereInput[]
    NOT?: LeadAssignmentWhereInput | LeadAssignmentWhereInput[]
    leadId?: StringFilter<"LeadAssignment"> | string
    consultantName?: StringFilter<"LeadAssignment"> | string
    assignedAt?: DateTimeFilter<"LeadAssignment"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type LeadAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    consultantName?: SortOrder
    assignedAt?: SortOrder
    _count?: LeadAssignmentCountOrderByAggregateInput
    _max?: LeadAssignmentMaxOrderByAggregateInput
    _min?: LeadAssignmentMinOrderByAggregateInput
  }

  export type LeadAssignmentScalarWhereWithAggregatesInput = {
    AND?: LeadAssignmentScalarWhereWithAggregatesInput | LeadAssignmentScalarWhereWithAggregatesInput[]
    OR?: LeadAssignmentScalarWhereWithAggregatesInput[]
    NOT?: LeadAssignmentScalarWhereWithAggregatesInput | LeadAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadAssignment"> | string
    leadId?: StringWithAggregatesFilter<"LeadAssignment"> | string
    consultantName?: StringWithAggregatesFilter<"LeadAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"LeadAssignment"> | Date | string
  }

  export type CRMDeliveryAttemptWhereInput = {
    AND?: CRMDeliveryAttemptWhereInput | CRMDeliveryAttemptWhereInput[]
    OR?: CRMDeliveryAttemptWhereInput[]
    NOT?: CRMDeliveryAttemptWhereInput | CRMDeliveryAttemptWhereInput[]
    id?: StringFilter<"CRMDeliveryAttempt"> | string
    leadId?: StringFilter<"CRMDeliveryAttempt"> | string
    provider?: StringFilter<"CRMDeliveryAttempt"> | string
    attempt?: IntFilter<"CRMDeliveryAttempt"> | number
    status?: StringFilter<"CRMDeliveryAttempt"> | string
    errorCode?: StringNullableFilter<"CRMDeliveryAttempt"> | string | null
    errorMessage?: StringNullableFilter<"CRMDeliveryAttempt"> | string | null
    createdAt?: DateTimeFilter<"CRMDeliveryAttempt"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }

  export type CRMDeliveryAttemptOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    provider?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
  }

  export type CRMDeliveryAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CRMDeliveryAttemptWhereInput | CRMDeliveryAttemptWhereInput[]
    OR?: CRMDeliveryAttemptWhereInput[]
    NOT?: CRMDeliveryAttemptWhereInput | CRMDeliveryAttemptWhereInput[]
    leadId?: StringFilter<"CRMDeliveryAttempt"> | string
    provider?: StringFilter<"CRMDeliveryAttempt"> | string
    attempt?: IntFilter<"CRMDeliveryAttempt"> | number
    status?: StringFilter<"CRMDeliveryAttempt"> | string
    errorCode?: StringNullableFilter<"CRMDeliveryAttempt"> | string | null
    errorMessage?: StringNullableFilter<"CRMDeliveryAttempt"> | string | null
    createdAt?: DateTimeFilter<"CRMDeliveryAttempt"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
  }, "id">

  export type CRMDeliveryAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    provider?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CRMDeliveryAttemptCountOrderByAggregateInput
    _avg?: CRMDeliveryAttemptAvgOrderByAggregateInput
    _max?: CRMDeliveryAttemptMaxOrderByAggregateInput
    _min?: CRMDeliveryAttemptMinOrderByAggregateInput
    _sum?: CRMDeliveryAttemptSumOrderByAggregateInput
  }

  export type CRMDeliveryAttemptScalarWhereWithAggregatesInput = {
    AND?: CRMDeliveryAttemptScalarWhereWithAggregatesInput | CRMDeliveryAttemptScalarWhereWithAggregatesInput[]
    OR?: CRMDeliveryAttemptScalarWhereWithAggregatesInput[]
    NOT?: CRMDeliveryAttemptScalarWhereWithAggregatesInput | CRMDeliveryAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CRMDeliveryAttempt"> | string
    leadId?: StringWithAggregatesFilter<"CRMDeliveryAttempt"> | string
    provider?: StringWithAggregatesFilter<"CRMDeliveryAttempt"> | string
    attempt?: IntWithAggregatesFilter<"CRMDeliveryAttempt"> | number
    status?: StringWithAggregatesFilter<"CRMDeliveryAttempt"> | string
    errorCode?: StringNullableWithAggregatesFilter<"CRMDeliveryAttempt"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"CRMDeliveryAttempt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CRMDeliveryAttempt"> | Date | string
  }

  export type AnalyticsEventWhereInput = {
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    id?: StringFilter<"AnalyticsEvent"> | string
    name?: StringFilter<"AnalyticsEvent"> | string
    props?: JsonNullableFilter<"AnalyticsEvent">
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }

  export type AnalyticsEventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    props?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    name?: StringFilter<"AnalyticsEvent"> | string
    props?: JsonNullableFilter<"AnalyticsEvent">
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }, "id">

  export type AnalyticsEventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    props?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsEventCountOrderByAggregateInput
    _max?: AnalyticsEventMaxOrderByAggregateInput
    _min?: AnalyticsEventMinOrderByAggregateInput
  }

  export type AnalyticsEventScalarWhereWithAggregatesInput = {
    AND?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    OR?: AnalyticsEventScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    name?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    props?: JsonNullableWithAggregatesFilter<"AnalyticsEvent">
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsEvent"> | Date | string
  }

  export type AuditRecordWhereInput = {
    AND?: AuditRecordWhereInput | AuditRecordWhereInput[]
    OR?: AuditRecordWhereInput[]
    NOT?: AuditRecordWhereInput | AuditRecordWhereInput[]
    id?: StringFilter<"AuditRecord"> | string
    actor?: StringFilter<"AuditRecord"> | string
    action?: StringFilter<"AuditRecord"> | string
    entity?: StringNullableFilter<"AuditRecord"> | string | null
    entityId?: StringNullableFilter<"AuditRecord"> | string | null
    detail?: JsonNullableFilter<"AuditRecord">
    createdAt?: DateTimeFilter<"AuditRecord"> | Date | string
  }

  export type AuditRecordOrderByWithRelationInput = {
    id?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditRecordWhereInput | AuditRecordWhereInput[]
    OR?: AuditRecordWhereInput[]
    NOT?: AuditRecordWhereInput | AuditRecordWhereInput[]
    actor?: StringFilter<"AuditRecord"> | string
    action?: StringFilter<"AuditRecord"> | string
    entity?: StringNullableFilter<"AuditRecord"> | string | null
    entityId?: StringNullableFilter<"AuditRecord"> | string | null
    detail?: JsonNullableFilter<"AuditRecord">
    createdAt?: DateTimeFilter<"AuditRecord"> | Date | string
  }, "id">

  export type AuditRecordOrderByWithAggregationInput = {
    id?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditRecordCountOrderByAggregateInput
    _max?: AuditRecordMaxOrderByAggregateInput
    _min?: AuditRecordMinOrderByAggregateInput
  }

  export type AuditRecordScalarWhereWithAggregatesInput = {
    AND?: AuditRecordScalarWhereWithAggregatesInput | AuditRecordScalarWhereWithAggregatesInput[]
    OR?: AuditRecordScalarWhereWithAggregatesInput[]
    NOT?: AuditRecordScalarWhereWithAggregatesInput | AuditRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditRecord"> | string
    actor?: StringWithAggregatesFilter<"AuditRecord"> | string
    action?: StringWithAggregatesFilter<"AuditRecord"> | string
    entity?: StringNullableWithAggregatesFilter<"AuditRecord"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"AuditRecord"> | string | null
    detail?: JsonNullableWithAggregatesFilter<"AuditRecord">
    createdAt?: DateTimeWithAggregatesFilter<"AuditRecord"> | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: DestinationMonthCreateNestedManyWithoutDestinationInput
    sources?: DestinationSourceCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: DestinationMonthUncheckedCreateNestedManyWithoutDestinationInput
    sources?: DestinationSourceUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: DestinationMonthUpdateManyWithoutDestinationNestedInput
    sources?: DestinationSourceUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: DestinationMonthUncheckedUpdateManyWithoutDestinationNestedInput
    sources?: DestinationSourceUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationMonthCreateInput = {
    id?: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonNullValueInput | InputJsonValue
    warnings: JsonNullValueInput | InputJsonValue
    destination: DestinationCreateNestedOneWithoutMonthsInput
  }

  export type DestinationMonthUncheckedCreateInput = {
    id?: string
    destinationId: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonNullValueInput | InputJsonValue
    warnings: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
    destination?: DestinationUpdateOneRequiredWithoutMonthsNestedInput
  }

  export type DestinationMonthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthCreateManyInput = {
    id?: string
    destinationId: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonNullValueInput | InputJsonValue
    warnings: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
  }

  export type DestinationSourceCreateInput = {
    id?: string
    sourceName: string
    sourceType: string
    sourceReference?: string | null
    reliability: string
    accessedAt: Date | string
    destination: DestinationCreateNestedOneWithoutSourcesInput
  }

  export type DestinationSourceUncheckedCreateInput = {
    id?: string
    destinationId: string
    sourceName: string
    sourceType: string
    sourceReference?: string | null
    reliability: string
    accessedAt: Date | string
  }

  export type DestinationSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutSourcesNestedInput
  }

  export type DestinationSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationSourceCreateManyInput = {
    id?: string
    destinationId: string
    sourceName: string
    sourceType: string
    sourceReference?: string | null
    reliability: string
    accessedAt: Date | string
  }

  export type DestinationSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationSessionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ConversationMessageCreateNestedManyWithoutSessionInput
    leads?: LeadCreateNestedManyWithoutConversationSessionInput
  }

  export type ConversationSessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ConversationMessageUncheckedCreateNestedManyWithoutSessionInput
    leads?: LeadUncheckedCreateNestedManyWithoutConversationSessionInput
  }

  export type ConversationSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ConversationMessageUpdateManyWithoutSessionNestedInput
    leads?: LeadUpdateManyWithoutConversationSessionNestedInput
  }

  export type ConversationSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ConversationMessageUncheckedUpdateManyWithoutSessionNestedInput
    leads?: LeadUncheckedUpdateManyWithoutConversationSessionNestedInput
  }

  export type ConversationSessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    session: ConversationSessionCreateNestedOneWithoutMessagesInput
  }

  export type ConversationMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ConversationMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ConversationSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ConversationMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMessageCreateManyInput = {
    id?: string
    sessionId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ConversationMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationSession?: ConversationSessionCreateNestedOneWithoutLeadsInput
    recommendations?: LeadRecommendationCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationSession?: ConversationSessionUpdateOneWithoutLeadsNestedInput
    recommendations?: LeadRecommendationUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadRecommendationCreateInput = {
    id?: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonNullValueInput | InputJsonValue
    reasons: JsonNullValueInput | InputJsonValue
    tradeOff: string
    lead: LeadCreateNestedOneWithoutRecommendationsInput
  }

  export type LeadRecommendationUncheckedCreateInput = {
    id?: string
    leadId: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonNullValueInput | InputJsonValue
    reasons: JsonNullValueInput | InputJsonValue
    tradeOff: string
  }

  export type LeadRecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
    lead?: LeadUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type LeadRecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
  }

  export type LeadRecommendationCreateManyInput = {
    id?: string
    leadId: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonNullValueInput | InputJsonValue
    reasons: JsonNullValueInput | InputJsonValue
    tradeOff: string
  }

  export type LeadRecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
  }

  export type LeadRecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
  }

  export type LeadItineraryDayCreateInput = {
    id?: string
    day: number
    title: string
    pace: string
    activities: JsonNullValueInput | InputJsonValue
    notes: JsonNullValueInput | InputJsonValue
    lead: LeadCreateNestedOneWithoutItineraryDaysInput
  }

  export type LeadItineraryDayUncheckedCreateInput = {
    id?: string
    leadId: string
    day: number
    title: string
    pace: string
    activities: JsonNullValueInput | InputJsonValue
    notes: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
    lead?: LeadUpdateOneRequiredWithoutItineraryDaysNestedInput
  }

  export type LeadItineraryDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayCreateManyInput = {
    id?: string
    leadId: string
    day: number
    title: string
    pace: string
    activities: JsonNullValueInput | InputJsonValue
    notes: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
  }

  export type LeadNoteCreateInput = {
    id?: string
    authorName?: string
    body: string
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutNotesInput
  }

  export type LeadNoteUncheckedCreateInput = {
    id?: string
    leadId: string
    authorName?: string
    body: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutNotesNestedInput
  }

  export type LeadNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateManyInput = {
    id?: string
    leadId: string
    authorName?: string
    body: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadAssignmentCreateInput = {
    id?: string
    consultantName: string
    assignedAt?: Date | string
    lead: LeadCreateNestedOneWithoutAssignmentsInput
  }

  export type LeadAssignmentUncheckedCreateInput = {
    id?: string
    leadId: string
    consultantName: string
    assignedAt?: Date | string
  }

  export type LeadAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type LeadAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadAssignmentCreateManyInput = {
    id?: string
    leadId: string
    consultantName: string
    assignedAt?: Date | string
  }

  export type LeadAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CRMDeliveryAttemptCreateInput = {
    id?: string
    provider: string
    attempt: number
    status: string
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutCrmDeliveriesInput
  }

  export type CRMDeliveryAttemptUncheckedCreateInput = {
    id?: string
    leadId: string
    provider: string
    attempt: number
    status: string
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CRMDeliveryAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutCrmDeliveriesNestedInput
  }

  export type CRMDeliveryAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CRMDeliveryAttemptCreateManyInput = {
    id?: string
    leadId: string
    provider: string
    attempt: number
    status: string
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CRMDeliveryAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CRMDeliveryAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateInput = {
    id?: string
    name: string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUncheckedCreateInput = {
    id?: string
    name: string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateManyInput = {
    id?: string
    name: string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    props?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRecordCreateInput = {
    id?: string
    actor: string
    action: string
    entity?: string | null
    entityId?: string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditRecordUncheckedCreateInput = {
    id?: string
    actor: string
    action: string
    entity?: string | null
    entityId?: string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRecordCreateManyInput = {
    id?: string
    actor: string
    action: string
    entity?: string | null
    entityId?: string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumKnowledgeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KnowledgeStatus | EnumKnowledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKnowledgeStatusFilter<$PrismaModel> | $Enums.KnowledgeStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DestinationMonthListRelationFilter = {
    every?: DestinationMonthWhereInput
    some?: DestinationMonthWhereInput
    none?: DestinationMonthWhereInput
  }

  export type DestinationSourceListRelationFilter = {
    every?: DestinationSourceWhereInput
    some?: DestinationSourceWhereInput
    none?: DestinationSourceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DestinationMonthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    status?: SortOrder
    profile?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    country?: SortOrder
    region?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumKnowledgeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KnowledgeStatus | EnumKnowledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKnowledgeStatusWithAggregatesFilter<$PrismaModel> | $Enums.KnowledgeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKnowledgeStatusFilter<$PrismaModel>
    _max?: NestedEnumKnowledgeStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type DestinationMonthDestinationIdMonthCompoundUniqueInput = {
    destinationId: string
    month: number
  }

  export type DestinationMonthCountOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
    month?: SortOrder
    seasonScore?: SortOrder
    seasonLabel?: SortOrder
    rainfall?: SortOrder
    humidity?: SortOrder
    crowdLevel?: SortOrder
    highlights?: SortOrder
    warnings?: SortOrder
  }

  export type DestinationMonthAvgOrderByAggregateInput = {
    month?: SortOrder
    seasonScore?: SortOrder
  }

  export type DestinationMonthMaxOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
    month?: SortOrder
    seasonScore?: SortOrder
    seasonLabel?: SortOrder
    rainfall?: SortOrder
    humidity?: SortOrder
    crowdLevel?: SortOrder
  }

  export type DestinationMonthMinOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
    month?: SortOrder
    seasonScore?: SortOrder
    seasonLabel?: SortOrder
    rainfall?: SortOrder
    humidity?: SortOrder
    crowdLevel?: SortOrder
  }

  export type DestinationMonthSumOrderByAggregateInput = {
    month?: SortOrder
    seasonScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DestinationSourceCountOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
    sourceName?: SortOrder
    sourceType?: SortOrder
    sourceReference?: SortOrder
    reliability?: SortOrder
    accessedAt?: SortOrder
  }

  export type DestinationSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
    sourceName?: SortOrder
    sourceType?: SortOrder
    sourceReference?: SortOrder
    reliability?: SortOrder
    accessedAt?: SortOrder
  }

  export type DestinationSourceMinOrderByAggregateInput = {
    id?: SortOrder
    destinationId?: SortOrder
    sourceName?: SortOrder
    sourceType?: SortOrder
    sourceReference?: SortOrder
    reliability?: SortOrder
    accessedAt?: SortOrder
  }

  export type ConversationMessageListRelationFilter = {
    every?: ConversationMessageWhereInput
    some?: ConversationMessageWhereInput
    none?: ConversationMessageWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type ConversationMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationSessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSessionScalarRelationFilter = {
    is?: ConversationSessionWhereInput
    isNot?: ConversationSessionWhereInput
  }

  export type ConversationMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLeadStageFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStage | EnumLeadStageFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStageFilter<$PrismaModel> | $Enums.LeadStage
  }

  export type EnumLeadPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadPriorityFilter<$PrismaModel> | $Enums.LeadPriority
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumCRMDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CRMDeliveryStatus | EnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCRMDeliveryStatusFilter<$PrismaModel> | $Enums.CRMDeliveryStatus
  }

  export type ConversationSessionNullableScalarRelationFilter = {
    is?: ConversationSessionWhereInput | null
    isNot?: ConversationSessionWhereInput | null
  }

  export type LeadRecommendationListRelationFilter = {
    every?: LeadRecommendationWhereInput
    some?: LeadRecommendationWhereInput
    none?: LeadRecommendationWhereInput
  }

  export type LeadItineraryDayListRelationFilter = {
    every?: LeadItineraryDayWhereInput
    some?: LeadItineraryDayWhereInput
    none?: LeadItineraryDayWhereInput
  }

  export type LeadNoteListRelationFilter = {
    every?: LeadNoteWhereInput
    some?: LeadNoteWhereInput
    none?: LeadNoteWhereInput
  }

  export type LeadAssignmentListRelationFilter = {
    every?: LeadAssignmentWhereInput
    some?: LeadAssignmentWhereInput
    none?: LeadAssignmentWhereInput
  }

  export type CRMDeliveryAttemptListRelationFilter = {
    every?: CRMDeliveryAttemptWhereInput
    some?: CRMDeliveryAttemptWhereInput
    none?: CRMDeliveryAttemptWhereInput
  }

  export type LeadRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadItineraryDayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CRMDeliveryAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    idempotencyKey?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    preferredContactChannel?: SortOrder
    preferredContactTime?: SortOrder
    additionalNotes?: SortOrder
    consent?: SortOrder
    consentTimestamp?: SortOrder
    tripBrief?: SortOrder
    transcript?: SortOrder
    selectedConceptId?: SortOrder
    selectedDestinationSlug?: SortOrder
    selectedDirection?: SortOrder
    itinerary?: SortOrder
    leadScore?: SortOrder
    leadScoreReasons?: SortOrder
    crmStatus?: SortOrder
    crmProvider?: SortOrder
    crmAttempts?: SortOrder
    crmReferenceId?: SortOrder
    crmLastError?: SortOrder
    crmLastAttempt?: SortOrder
    crmNextRetryAt?: SortOrder
    consultantOwner?: SortOrder
    followUpDueAt?: SortOrder
    conversationSessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    leadScore?: SortOrder
    crmAttempts?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    idempotencyKey?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    preferredContactChannel?: SortOrder
    preferredContactTime?: SortOrder
    additionalNotes?: SortOrder
    consent?: SortOrder
    consentTimestamp?: SortOrder
    selectedConceptId?: SortOrder
    selectedDestinationSlug?: SortOrder
    selectedDirection?: SortOrder
    leadScore?: SortOrder
    crmStatus?: SortOrder
    crmProvider?: SortOrder
    crmAttempts?: SortOrder
    crmReferenceId?: SortOrder
    crmLastError?: SortOrder
    crmLastAttempt?: SortOrder
    crmNextRetryAt?: SortOrder
    consultantOwner?: SortOrder
    followUpDueAt?: SortOrder
    conversationSessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    idempotencyKey?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    customerEmail?: SortOrder
    preferredContactChannel?: SortOrder
    preferredContactTime?: SortOrder
    additionalNotes?: SortOrder
    consent?: SortOrder
    consentTimestamp?: SortOrder
    selectedConceptId?: SortOrder
    selectedDestinationSlug?: SortOrder
    selectedDirection?: SortOrder
    leadScore?: SortOrder
    crmStatus?: SortOrder
    crmProvider?: SortOrder
    crmAttempts?: SortOrder
    crmReferenceId?: SortOrder
    crmLastError?: SortOrder
    crmLastAttempt?: SortOrder
    crmNextRetryAt?: SortOrder
    consultantOwner?: SortOrder
    followUpDueAt?: SortOrder
    conversationSessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    leadScore?: SortOrder
    crmAttempts?: SortOrder
  }

  export type EnumLeadStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStage | EnumLeadStageFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStageWithAggregatesFilter<$PrismaModel> | $Enums.LeadStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStageFilter<$PrismaModel>
    _max?: NestedEnumLeadStageFilter<$PrismaModel>
  }

  export type EnumLeadPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadPriorityWithAggregatesFilter<$PrismaModel> | $Enums.LeadPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadPriorityFilter<$PrismaModel>
    _max?: NestedEnumLeadPriorityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCRMDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CRMDeliveryStatus | EnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCRMDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CRMDeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCRMDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumCRMDeliveryStatusFilter<$PrismaModel>
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type LeadRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    conceptId?: SortOrder
    destinationSlug?: SortOrder
    direction?: SortOrder
    score?: SortOrder
    reasons?: SortOrder
    tradeOff?: SortOrder
  }

  export type LeadRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    conceptId?: SortOrder
    destinationSlug?: SortOrder
    direction?: SortOrder
    tradeOff?: SortOrder
  }

  export type LeadRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    conceptId?: SortOrder
    destinationSlug?: SortOrder
    direction?: SortOrder
    tradeOff?: SortOrder
  }

  export type LeadItineraryDayLeadIdDayCompoundUniqueInput = {
    leadId: string
    day: number
  }

  export type LeadItineraryDayCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    pace?: SortOrder
    activities?: SortOrder
    notes?: SortOrder
  }

  export type LeadItineraryDayAvgOrderByAggregateInput = {
    day?: SortOrder
  }

  export type LeadItineraryDayMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    pace?: SortOrder
  }

  export type LeadItineraryDayMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    day?: SortOrder
    title?: SortOrder
    pace?: SortOrder
  }

  export type LeadItineraryDaySumOrderByAggregateInput = {
    day?: SortOrder
  }

  export type LeadNoteCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    authorName?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    authorName?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    authorName?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    consultantName?: SortOrder
    assignedAt?: SortOrder
  }

  export type LeadAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    consultantName?: SortOrder
    assignedAt?: SortOrder
  }

  export type LeadAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    consultantName?: SortOrder
    assignedAt?: SortOrder
  }

  export type CRMDeliveryAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    provider?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type CRMDeliveryAttemptAvgOrderByAggregateInput = {
    attempt?: SortOrder
  }

  export type CRMDeliveryAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    provider?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type CRMDeliveryAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    provider?: SortOrder
    attempt?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type CRMDeliveryAttemptSumOrderByAggregateInput = {
    attempt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalyticsEventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    props?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AuditRecordCountOrderByAggregateInput = {
    id?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditRecordMinOrderByAggregateInput = {
    id?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type DestinationMonthCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationMonthCreateWithoutDestinationInput, DestinationMonthUncheckedCreateWithoutDestinationInput> | DestinationMonthCreateWithoutDestinationInput[] | DestinationMonthUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationMonthCreateOrConnectWithoutDestinationInput | DestinationMonthCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationMonthCreateManyDestinationInputEnvelope
    connect?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
  }

  export type DestinationSourceCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationSourceCreateWithoutDestinationInput, DestinationSourceUncheckedCreateWithoutDestinationInput> | DestinationSourceCreateWithoutDestinationInput[] | DestinationSourceUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationSourceCreateOrConnectWithoutDestinationInput | DestinationSourceCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationSourceCreateManyDestinationInputEnvelope
    connect?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
  }

  export type DestinationMonthUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationMonthCreateWithoutDestinationInput, DestinationMonthUncheckedCreateWithoutDestinationInput> | DestinationMonthCreateWithoutDestinationInput[] | DestinationMonthUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationMonthCreateOrConnectWithoutDestinationInput | DestinationMonthCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationMonthCreateManyDestinationInputEnvelope
    connect?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
  }

  export type DestinationSourceUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DestinationSourceCreateWithoutDestinationInput, DestinationSourceUncheckedCreateWithoutDestinationInput> | DestinationSourceCreateWithoutDestinationInput[] | DestinationSourceUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationSourceCreateOrConnectWithoutDestinationInput | DestinationSourceCreateOrConnectWithoutDestinationInput[]
    createMany?: DestinationSourceCreateManyDestinationInputEnvelope
    connect?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumKnowledgeStatusFieldUpdateOperationsInput = {
    set?: $Enums.KnowledgeStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DestinationMonthUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationMonthCreateWithoutDestinationInput, DestinationMonthUncheckedCreateWithoutDestinationInput> | DestinationMonthCreateWithoutDestinationInput[] | DestinationMonthUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationMonthCreateOrConnectWithoutDestinationInput | DestinationMonthCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationMonthUpsertWithWhereUniqueWithoutDestinationInput | DestinationMonthUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationMonthCreateManyDestinationInputEnvelope
    set?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    disconnect?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    delete?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    connect?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    update?: DestinationMonthUpdateWithWhereUniqueWithoutDestinationInput | DestinationMonthUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationMonthUpdateManyWithWhereWithoutDestinationInput | DestinationMonthUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationMonthScalarWhereInput | DestinationMonthScalarWhereInput[]
  }

  export type DestinationSourceUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationSourceCreateWithoutDestinationInput, DestinationSourceUncheckedCreateWithoutDestinationInput> | DestinationSourceCreateWithoutDestinationInput[] | DestinationSourceUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationSourceCreateOrConnectWithoutDestinationInput | DestinationSourceCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationSourceUpsertWithWhereUniqueWithoutDestinationInput | DestinationSourceUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationSourceCreateManyDestinationInputEnvelope
    set?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    disconnect?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    delete?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    connect?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    update?: DestinationSourceUpdateWithWhereUniqueWithoutDestinationInput | DestinationSourceUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationSourceUpdateManyWithWhereWithoutDestinationInput | DestinationSourceUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationSourceScalarWhereInput | DestinationSourceScalarWhereInput[]
  }

  export type DestinationMonthUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationMonthCreateWithoutDestinationInput, DestinationMonthUncheckedCreateWithoutDestinationInput> | DestinationMonthCreateWithoutDestinationInput[] | DestinationMonthUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationMonthCreateOrConnectWithoutDestinationInput | DestinationMonthCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationMonthUpsertWithWhereUniqueWithoutDestinationInput | DestinationMonthUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationMonthCreateManyDestinationInputEnvelope
    set?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    disconnect?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    delete?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    connect?: DestinationMonthWhereUniqueInput | DestinationMonthWhereUniqueInput[]
    update?: DestinationMonthUpdateWithWhereUniqueWithoutDestinationInput | DestinationMonthUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationMonthUpdateManyWithWhereWithoutDestinationInput | DestinationMonthUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationMonthScalarWhereInput | DestinationMonthScalarWhereInput[]
  }

  export type DestinationSourceUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DestinationSourceCreateWithoutDestinationInput, DestinationSourceUncheckedCreateWithoutDestinationInput> | DestinationSourceCreateWithoutDestinationInput[] | DestinationSourceUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DestinationSourceCreateOrConnectWithoutDestinationInput | DestinationSourceCreateOrConnectWithoutDestinationInput[]
    upsert?: DestinationSourceUpsertWithWhereUniqueWithoutDestinationInput | DestinationSourceUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DestinationSourceCreateManyDestinationInputEnvelope
    set?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    disconnect?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    delete?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    connect?: DestinationSourceWhereUniqueInput | DestinationSourceWhereUniqueInput[]
    update?: DestinationSourceUpdateWithWhereUniqueWithoutDestinationInput | DestinationSourceUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DestinationSourceUpdateManyWithWhereWithoutDestinationInput | DestinationSourceUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DestinationSourceScalarWhereInput | DestinationSourceScalarWhereInput[]
  }

  export type DestinationCreateNestedOneWithoutMonthsInput = {
    create?: XOR<DestinationCreateWithoutMonthsInput, DestinationUncheckedCreateWithoutMonthsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutMonthsInput
    connect?: DestinationWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DestinationUpdateOneRequiredWithoutMonthsNestedInput = {
    create?: XOR<DestinationCreateWithoutMonthsInput, DestinationUncheckedCreateWithoutMonthsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutMonthsInput
    upsert?: DestinationUpsertWithoutMonthsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutMonthsInput, DestinationUpdateWithoutMonthsInput>, DestinationUncheckedUpdateWithoutMonthsInput>
  }

  export type DestinationCreateNestedOneWithoutSourcesInput = {
    create?: XOR<DestinationCreateWithoutSourcesInput, DestinationUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutSourcesInput
    connect?: DestinationWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutSourcesNestedInput = {
    create?: XOR<DestinationCreateWithoutSourcesInput, DestinationUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutSourcesInput
    upsert?: DestinationUpsertWithoutSourcesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutSourcesInput, DestinationUpdateWithoutSourcesInput>, DestinationUncheckedUpdateWithoutSourcesInput>
  }

  export type ConversationMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ConversationMessageCreateWithoutSessionInput, ConversationMessageUncheckedCreateWithoutSessionInput> | ConversationMessageCreateWithoutSessionInput[] | ConversationMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConversationMessageCreateOrConnectWithoutSessionInput | ConversationMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ConversationMessageCreateManySessionInputEnvelope
    connect?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutConversationSessionInput = {
    create?: XOR<LeadCreateWithoutConversationSessionInput, LeadUncheckedCreateWithoutConversationSessionInput> | LeadCreateWithoutConversationSessionInput[] | LeadUncheckedCreateWithoutConversationSessionInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutConversationSessionInput | LeadCreateOrConnectWithoutConversationSessionInput[]
    createMany?: LeadCreateManyConversationSessionInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type ConversationMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ConversationMessageCreateWithoutSessionInput, ConversationMessageUncheckedCreateWithoutSessionInput> | ConversationMessageCreateWithoutSessionInput[] | ConversationMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConversationMessageCreateOrConnectWithoutSessionInput | ConversationMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ConversationMessageCreateManySessionInputEnvelope
    connect?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutConversationSessionInput = {
    create?: XOR<LeadCreateWithoutConversationSessionInput, LeadUncheckedCreateWithoutConversationSessionInput> | LeadCreateWithoutConversationSessionInput[] | LeadUncheckedCreateWithoutConversationSessionInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutConversationSessionInput | LeadCreateOrConnectWithoutConversationSessionInput[]
    createMany?: LeadCreateManyConversationSessionInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type ConversationMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ConversationMessageCreateWithoutSessionInput, ConversationMessageUncheckedCreateWithoutSessionInput> | ConversationMessageCreateWithoutSessionInput[] | ConversationMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConversationMessageCreateOrConnectWithoutSessionInput | ConversationMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ConversationMessageUpsertWithWhereUniqueWithoutSessionInput | ConversationMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ConversationMessageCreateManySessionInputEnvelope
    set?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    disconnect?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    delete?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    connect?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    update?: ConversationMessageUpdateWithWhereUniqueWithoutSessionInput | ConversationMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ConversationMessageUpdateManyWithWhereWithoutSessionInput | ConversationMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ConversationMessageScalarWhereInput | ConversationMessageScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutConversationSessionNestedInput = {
    create?: XOR<LeadCreateWithoutConversationSessionInput, LeadUncheckedCreateWithoutConversationSessionInput> | LeadCreateWithoutConversationSessionInput[] | LeadUncheckedCreateWithoutConversationSessionInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutConversationSessionInput | LeadCreateOrConnectWithoutConversationSessionInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutConversationSessionInput | LeadUpsertWithWhereUniqueWithoutConversationSessionInput[]
    createMany?: LeadCreateManyConversationSessionInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutConversationSessionInput | LeadUpdateWithWhereUniqueWithoutConversationSessionInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutConversationSessionInput | LeadUpdateManyWithWhereWithoutConversationSessionInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type ConversationMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ConversationMessageCreateWithoutSessionInput, ConversationMessageUncheckedCreateWithoutSessionInput> | ConversationMessageCreateWithoutSessionInput[] | ConversationMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConversationMessageCreateOrConnectWithoutSessionInput | ConversationMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ConversationMessageUpsertWithWhereUniqueWithoutSessionInput | ConversationMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ConversationMessageCreateManySessionInputEnvelope
    set?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    disconnect?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    delete?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    connect?: ConversationMessageWhereUniqueInput | ConversationMessageWhereUniqueInput[]
    update?: ConversationMessageUpdateWithWhereUniqueWithoutSessionInput | ConversationMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ConversationMessageUpdateManyWithWhereWithoutSessionInput | ConversationMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ConversationMessageScalarWhereInput | ConversationMessageScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutConversationSessionNestedInput = {
    create?: XOR<LeadCreateWithoutConversationSessionInput, LeadUncheckedCreateWithoutConversationSessionInput> | LeadCreateWithoutConversationSessionInput[] | LeadUncheckedCreateWithoutConversationSessionInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutConversationSessionInput | LeadCreateOrConnectWithoutConversationSessionInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutConversationSessionInput | LeadUpsertWithWhereUniqueWithoutConversationSessionInput[]
    createMany?: LeadCreateManyConversationSessionInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutConversationSessionInput | LeadUpdateWithWhereUniqueWithoutConversationSessionInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutConversationSessionInput | LeadUpdateManyWithWhereWithoutConversationSessionInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type ConversationSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationSessionCreateWithoutMessagesInput, ConversationSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationSessionCreateOrConnectWithoutMessagesInput
    connect?: ConversationSessionWhereUniqueInput
  }

  export type ConversationSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationSessionCreateWithoutMessagesInput, ConversationSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationSessionCreateOrConnectWithoutMessagesInput
    upsert?: ConversationSessionUpsertWithoutMessagesInput
    connect?: ConversationSessionWhereUniqueInput
    update?: XOR<XOR<ConversationSessionUpdateToOneWithWhereWithoutMessagesInput, ConversationSessionUpdateWithoutMessagesInput>, ConversationSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationSessionCreateNestedOneWithoutLeadsInput = {
    create?: XOR<ConversationSessionCreateWithoutLeadsInput, ConversationSessionUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ConversationSessionCreateOrConnectWithoutLeadsInput
    connect?: ConversationSessionWhereUniqueInput
  }

  export type LeadRecommendationCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadRecommendationCreateWithoutLeadInput, LeadRecommendationUncheckedCreateWithoutLeadInput> | LeadRecommendationCreateWithoutLeadInput[] | LeadRecommendationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadRecommendationCreateOrConnectWithoutLeadInput | LeadRecommendationCreateOrConnectWithoutLeadInput[]
    createMany?: LeadRecommendationCreateManyLeadInputEnvelope
    connect?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
  }

  export type LeadItineraryDayCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadItineraryDayCreateWithoutLeadInput, LeadItineraryDayUncheckedCreateWithoutLeadInput> | LeadItineraryDayCreateWithoutLeadInput[] | LeadItineraryDayUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadItineraryDayCreateOrConnectWithoutLeadInput | LeadItineraryDayCreateOrConnectWithoutLeadInput[]
    createMany?: LeadItineraryDayCreateManyLeadInputEnvelope
    connect?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
  }

  export type LeadNoteCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type LeadAssignmentCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadAssignmentCreateWithoutLeadInput, LeadAssignmentUncheckedCreateWithoutLeadInput> | LeadAssignmentCreateWithoutLeadInput[] | LeadAssignmentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadAssignmentCreateOrConnectWithoutLeadInput | LeadAssignmentCreateOrConnectWithoutLeadInput[]
    createMany?: LeadAssignmentCreateManyLeadInputEnvelope
    connect?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
  }

  export type CRMDeliveryAttemptCreateNestedManyWithoutLeadInput = {
    create?: XOR<CRMDeliveryAttemptCreateWithoutLeadInput, CRMDeliveryAttemptUncheckedCreateWithoutLeadInput> | CRMDeliveryAttemptCreateWithoutLeadInput[] | CRMDeliveryAttemptUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CRMDeliveryAttemptCreateOrConnectWithoutLeadInput | CRMDeliveryAttemptCreateOrConnectWithoutLeadInput[]
    createMany?: CRMDeliveryAttemptCreateManyLeadInputEnvelope
    connect?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
  }

  export type LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadRecommendationCreateWithoutLeadInput, LeadRecommendationUncheckedCreateWithoutLeadInput> | LeadRecommendationCreateWithoutLeadInput[] | LeadRecommendationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadRecommendationCreateOrConnectWithoutLeadInput | LeadRecommendationCreateOrConnectWithoutLeadInput[]
    createMany?: LeadRecommendationCreateManyLeadInputEnvelope
    connect?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
  }

  export type LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadItineraryDayCreateWithoutLeadInput, LeadItineraryDayUncheckedCreateWithoutLeadInput> | LeadItineraryDayCreateWithoutLeadInput[] | LeadItineraryDayUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadItineraryDayCreateOrConnectWithoutLeadInput | LeadItineraryDayCreateOrConnectWithoutLeadInput[]
    createMany?: LeadItineraryDayCreateManyLeadInputEnvelope
    connect?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
  }

  export type LeadNoteUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadAssignmentCreateWithoutLeadInput, LeadAssignmentUncheckedCreateWithoutLeadInput> | LeadAssignmentCreateWithoutLeadInput[] | LeadAssignmentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadAssignmentCreateOrConnectWithoutLeadInput | LeadAssignmentCreateOrConnectWithoutLeadInput[]
    createMany?: LeadAssignmentCreateManyLeadInputEnvelope
    connect?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
  }

  export type CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<CRMDeliveryAttemptCreateWithoutLeadInput, CRMDeliveryAttemptUncheckedCreateWithoutLeadInput> | CRMDeliveryAttemptCreateWithoutLeadInput[] | CRMDeliveryAttemptUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CRMDeliveryAttemptCreateOrConnectWithoutLeadInput | CRMDeliveryAttemptCreateOrConnectWithoutLeadInput[]
    createMany?: CRMDeliveryAttemptCreateManyLeadInputEnvelope
    connect?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
  }

  export type EnumLeadStageFieldUpdateOperationsInput = {
    set?: $Enums.LeadStage
  }

  export type EnumLeadPriorityFieldUpdateOperationsInput = {
    set?: $Enums.LeadPriority
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumCRMDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.CRMDeliveryStatus
  }

  export type ConversationSessionUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<ConversationSessionCreateWithoutLeadsInput, ConversationSessionUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ConversationSessionCreateOrConnectWithoutLeadsInput
    upsert?: ConversationSessionUpsertWithoutLeadsInput
    disconnect?: ConversationSessionWhereInput | boolean
    delete?: ConversationSessionWhereInput | boolean
    connect?: ConversationSessionWhereUniqueInput
    update?: XOR<XOR<ConversationSessionUpdateToOneWithWhereWithoutLeadsInput, ConversationSessionUpdateWithoutLeadsInput>, ConversationSessionUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadRecommendationUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadRecommendationCreateWithoutLeadInput, LeadRecommendationUncheckedCreateWithoutLeadInput> | LeadRecommendationCreateWithoutLeadInput[] | LeadRecommendationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadRecommendationCreateOrConnectWithoutLeadInput | LeadRecommendationCreateOrConnectWithoutLeadInput[]
    upsert?: LeadRecommendationUpsertWithWhereUniqueWithoutLeadInput | LeadRecommendationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadRecommendationCreateManyLeadInputEnvelope
    set?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    disconnect?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    delete?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    connect?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    update?: LeadRecommendationUpdateWithWhereUniqueWithoutLeadInput | LeadRecommendationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadRecommendationUpdateManyWithWhereWithoutLeadInput | LeadRecommendationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadRecommendationScalarWhereInput | LeadRecommendationScalarWhereInput[]
  }

  export type LeadItineraryDayUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadItineraryDayCreateWithoutLeadInput, LeadItineraryDayUncheckedCreateWithoutLeadInput> | LeadItineraryDayCreateWithoutLeadInput[] | LeadItineraryDayUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadItineraryDayCreateOrConnectWithoutLeadInput | LeadItineraryDayCreateOrConnectWithoutLeadInput[]
    upsert?: LeadItineraryDayUpsertWithWhereUniqueWithoutLeadInput | LeadItineraryDayUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadItineraryDayCreateManyLeadInputEnvelope
    set?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    disconnect?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    delete?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    connect?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    update?: LeadItineraryDayUpdateWithWhereUniqueWithoutLeadInput | LeadItineraryDayUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadItineraryDayUpdateManyWithWhereWithoutLeadInput | LeadItineraryDayUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadItineraryDayScalarWhereInput | LeadItineraryDayScalarWhereInput[]
  }

  export type LeadNoteUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutLeadInput | LeadNoteUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutLeadInput | LeadNoteUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutLeadInput | LeadNoteUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type LeadAssignmentUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadAssignmentCreateWithoutLeadInput, LeadAssignmentUncheckedCreateWithoutLeadInput> | LeadAssignmentCreateWithoutLeadInput[] | LeadAssignmentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadAssignmentCreateOrConnectWithoutLeadInput | LeadAssignmentCreateOrConnectWithoutLeadInput[]
    upsert?: LeadAssignmentUpsertWithWhereUniqueWithoutLeadInput | LeadAssignmentUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadAssignmentCreateManyLeadInputEnvelope
    set?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    disconnect?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    delete?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    connect?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    update?: LeadAssignmentUpdateWithWhereUniqueWithoutLeadInput | LeadAssignmentUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadAssignmentUpdateManyWithWhereWithoutLeadInput | LeadAssignmentUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadAssignmentScalarWhereInput | LeadAssignmentScalarWhereInput[]
  }

  export type CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput = {
    create?: XOR<CRMDeliveryAttemptCreateWithoutLeadInput, CRMDeliveryAttemptUncheckedCreateWithoutLeadInput> | CRMDeliveryAttemptCreateWithoutLeadInput[] | CRMDeliveryAttemptUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CRMDeliveryAttemptCreateOrConnectWithoutLeadInput | CRMDeliveryAttemptCreateOrConnectWithoutLeadInput[]
    upsert?: CRMDeliveryAttemptUpsertWithWhereUniqueWithoutLeadInput | CRMDeliveryAttemptUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: CRMDeliveryAttemptCreateManyLeadInputEnvelope
    set?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    disconnect?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    delete?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    connect?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    update?: CRMDeliveryAttemptUpdateWithWhereUniqueWithoutLeadInput | CRMDeliveryAttemptUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: CRMDeliveryAttemptUpdateManyWithWhereWithoutLeadInput | CRMDeliveryAttemptUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: CRMDeliveryAttemptScalarWhereInput | CRMDeliveryAttemptScalarWhereInput[]
  }

  export type LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadRecommendationCreateWithoutLeadInput, LeadRecommendationUncheckedCreateWithoutLeadInput> | LeadRecommendationCreateWithoutLeadInput[] | LeadRecommendationUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadRecommendationCreateOrConnectWithoutLeadInput | LeadRecommendationCreateOrConnectWithoutLeadInput[]
    upsert?: LeadRecommendationUpsertWithWhereUniqueWithoutLeadInput | LeadRecommendationUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadRecommendationCreateManyLeadInputEnvelope
    set?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    disconnect?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    delete?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    connect?: LeadRecommendationWhereUniqueInput | LeadRecommendationWhereUniqueInput[]
    update?: LeadRecommendationUpdateWithWhereUniqueWithoutLeadInput | LeadRecommendationUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadRecommendationUpdateManyWithWhereWithoutLeadInput | LeadRecommendationUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadRecommendationScalarWhereInput | LeadRecommendationScalarWhereInput[]
  }

  export type LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadItineraryDayCreateWithoutLeadInput, LeadItineraryDayUncheckedCreateWithoutLeadInput> | LeadItineraryDayCreateWithoutLeadInput[] | LeadItineraryDayUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadItineraryDayCreateOrConnectWithoutLeadInput | LeadItineraryDayCreateOrConnectWithoutLeadInput[]
    upsert?: LeadItineraryDayUpsertWithWhereUniqueWithoutLeadInput | LeadItineraryDayUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadItineraryDayCreateManyLeadInputEnvelope
    set?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    disconnect?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    delete?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    connect?: LeadItineraryDayWhereUniqueInput | LeadItineraryDayWhereUniqueInput[]
    update?: LeadItineraryDayUpdateWithWhereUniqueWithoutLeadInput | LeadItineraryDayUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadItineraryDayUpdateManyWithWhereWithoutLeadInput | LeadItineraryDayUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadItineraryDayScalarWhereInput | LeadItineraryDayScalarWhereInput[]
  }

  export type LeadNoteUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutLeadInput | LeadNoteUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutLeadInput | LeadNoteUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutLeadInput | LeadNoteUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadAssignmentCreateWithoutLeadInput, LeadAssignmentUncheckedCreateWithoutLeadInput> | LeadAssignmentCreateWithoutLeadInput[] | LeadAssignmentUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadAssignmentCreateOrConnectWithoutLeadInput | LeadAssignmentCreateOrConnectWithoutLeadInput[]
    upsert?: LeadAssignmentUpsertWithWhereUniqueWithoutLeadInput | LeadAssignmentUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadAssignmentCreateManyLeadInputEnvelope
    set?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    disconnect?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    delete?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    connect?: LeadAssignmentWhereUniqueInput | LeadAssignmentWhereUniqueInput[]
    update?: LeadAssignmentUpdateWithWhereUniqueWithoutLeadInput | LeadAssignmentUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadAssignmentUpdateManyWithWhereWithoutLeadInput | LeadAssignmentUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadAssignmentScalarWhereInput | LeadAssignmentScalarWhereInput[]
  }

  export type CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<CRMDeliveryAttemptCreateWithoutLeadInput, CRMDeliveryAttemptUncheckedCreateWithoutLeadInput> | CRMDeliveryAttemptCreateWithoutLeadInput[] | CRMDeliveryAttemptUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: CRMDeliveryAttemptCreateOrConnectWithoutLeadInput | CRMDeliveryAttemptCreateOrConnectWithoutLeadInput[]
    upsert?: CRMDeliveryAttemptUpsertWithWhereUniqueWithoutLeadInput | CRMDeliveryAttemptUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: CRMDeliveryAttemptCreateManyLeadInputEnvelope
    set?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    disconnect?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    delete?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    connect?: CRMDeliveryAttemptWhereUniqueInput | CRMDeliveryAttemptWhereUniqueInput[]
    update?: CRMDeliveryAttemptUpdateWithWhereUniqueWithoutLeadInput | CRMDeliveryAttemptUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: CRMDeliveryAttemptUpdateManyWithWhereWithoutLeadInput | CRMDeliveryAttemptUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: CRMDeliveryAttemptScalarWhereInput | CRMDeliveryAttemptScalarWhereInput[]
  }

  export type LeadCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<LeadCreateWithoutRecommendationsInput, LeadUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutRecommendationsInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<LeadCreateWithoutRecommendationsInput, LeadUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutRecommendationsInput
    upsert?: LeadUpsertWithoutRecommendationsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutRecommendationsInput, LeadUpdateWithoutRecommendationsInput>, LeadUncheckedUpdateWithoutRecommendationsInput>
  }

  export type LeadCreateNestedOneWithoutItineraryDaysInput = {
    create?: XOR<LeadCreateWithoutItineraryDaysInput, LeadUncheckedCreateWithoutItineraryDaysInput>
    connectOrCreate?: LeadCreateOrConnectWithoutItineraryDaysInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutItineraryDaysNestedInput = {
    create?: XOR<LeadCreateWithoutItineraryDaysInput, LeadUncheckedCreateWithoutItineraryDaysInput>
    connectOrCreate?: LeadCreateOrConnectWithoutItineraryDaysInput
    upsert?: LeadUpsertWithoutItineraryDaysInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutItineraryDaysInput, LeadUpdateWithoutItineraryDaysInput>, LeadUncheckedUpdateWithoutItineraryDaysInput>
  }

  export type LeadCreateNestedOneWithoutNotesInput = {
    create?: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutNotesInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutNotesInput
    upsert?: LeadUpsertWithoutNotesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutNotesInput, LeadUpdateWithoutNotesInput>, LeadUncheckedUpdateWithoutNotesInput>
  }

  export type LeadCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<LeadCreateWithoutAssignmentsInput, LeadUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutAssignmentsInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<LeadCreateWithoutAssignmentsInput, LeadUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutAssignmentsInput
    upsert?: LeadUpsertWithoutAssignmentsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutAssignmentsInput, LeadUpdateWithoutAssignmentsInput>, LeadUncheckedUpdateWithoutAssignmentsInput>
  }

  export type LeadCreateNestedOneWithoutCrmDeliveriesInput = {
    create?: XOR<LeadCreateWithoutCrmDeliveriesInput, LeadUncheckedCreateWithoutCrmDeliveriesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutCrmDeliveriesInput
    connect?: LeadWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutCrmDeliveriesNestedInput = {
    create?: XOR<LeadCreateWithoutCrmDeliveriesInput, LeadUncheckedCreateWithoutCrmDeliveriesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutCrmDeliveriesInput
    upsert?: LeadUpsertWithoutCrmDeliveriesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutCrmDeliveriesInput, LeadUpdateWithoutCrmDeliveriesInput>, LeadUncheckedUpdateWithoutCrmDeliveriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumKnowledgeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KnowledgeStatus | EnumKnowledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKnowledgeStatusFilter<$PrismaModel> | $Enums.KnowledgeStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumKnowledgeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KnowledgeStatus | EnumKnowledgeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KnowledgeStatus[] | ListEnumKnowledgeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKnowledgeStatusWithAggregatesFilter<$PrismaModel> | $Enums.KnowledgeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKnowledgeStatusFilter<$PrismaModel>
    _max?: NestedEnumKnowledgeStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumLeadStageFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStage | EnumLeadStageFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStageFilter<$PrismaModel> | $Enums.LeadStage
  }

  export type NestedEnumLeadPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadPriorityFilter<$PrismaModel> | $Enums.LeadPriority
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCRMDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CRMDeliveryStatus | EnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCRMDeliveryStatusFilter<$PrismaModel> | $Enums.CRMDeliveryStatus
  }

  export type NestedEnumLeadStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStage | EnumLeadStageFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStage[] | ListEnumLeadStageFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStageWithAggregatesFilter<$PrismaModel> | $Enums.LeadStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStageFilter<$PrismaModel>
    _max?: NestedEnumLeadStageFilter<$PrismaModel>
  }

  export type NestedEnumLeadPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadPriority | EnumLeadPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadPriority[] | ListEnumLeadPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadPriorityWithAggregatesFilter<$PrismaModel> | $Enums.LeadPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadPriorityFilter<$PrismaModel>
    _max?: NestedEnumLeadPriorityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCRMDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CRMDeliveryStatus | EnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CRMDeliveryStatus[] | ListEnumCRMDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCRMDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CRMDeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCRMDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumCRMDeliveryStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DestinationMonthCreateWithoutDestinationInput = {
    id?: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonNullValueInput | InputJsonValue
    warnings: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthUncheckedCreateWithoutDestinationInput = {
    id?: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonNullValueInput | InputJsonValue
    warnings: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthCreateOrConnectWithoutDestinationInput = {
    where: DestinationMonthWhereUniqueInput
    create: XOR<DestinationMonthCreateWithoutDestinationInput, DestinationMonthUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationMonthCreateManyDestinationInputEnvelope = {
    data: DestinationMonthCreateManyDestinationInput | DestinationMonthCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type DestinationSourceCreateWithoutDestinationInput = {
    id?: string
    sourceName: string
    sourceType: string
    sourceReference?: string | null
    reliability: string
    accessedAt: Date | string
  }

  export type DestinationSourceUncheckedCreateWithoutDestinationInput = {
    id?: string
    sourceName: string
    sourceType: string
    sourceReference?: string | null
    reliability: string
    accessedAt: Date | string
  }

  export type DestinationSourceCreateOrConnectWithoutDestinationInput = {
    where: DestinationSourceWhereUniqueInput
    create: XOR<DestinationSourceCreateWithoutDestinationInput, DestinationSourceUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationSourceCreateManyDestinationInputEnvelope = {
    data: DestinationSourceCreateManyDestinationInput | DestinationSourceCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type DestinationMonthUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DestinationMonthWhereUniqueInput
    update: XOR<DestinationMonthUpdateWithoutDestinationInput, DestinationMonthUncheckedUpdateWithoutDestinationInput>
    create: XOR<DestinationMonthCreateWithoutDestinationInput, DestinationMonthUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationMonthUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DestinationMonthWhereUniqueInput
    data: XOR<DestinationMonthUpdateWithoutDestinationInput, DestinationMonthUncheckedUpdateWithoutDestinationInput>
  }

  export type DestinationMonthUpdateManyWithWhereWithoutDestinationInput = {
    where: DestinationMonthScalarWhereInput
    data: XOR<DestinationMonthUpdateManyMutationInput, DestinationMonthUncheckedUpdateManyWithoutDestinationInput>
  }

  export type DestinationMonthScalarWhereInput = {
    AND?: DestinationMonthScalarWhereInput | DestinationMonthScalarWhereInput[]
    OR?: DestinationMonthScalarWhereInput[]
    NOT?: DestinationMonthScalarWhereInput | DestinationMonthScalarWhereInput[]
    id?: StringFilter<"DestinationMonth"> | string
    destinationId?: StringFilter<"DestinationMonth"> | string
    month?: IntFilter<"DestinationMonth"> | number
    seasonScore?: IntFilter<"DestinationMonth"> | number
    seasonLabel?: StringFilter<"DestinationMonth"> | string
    rainfall?: StringFilter<"DestinationMonth"> | string
    humidity?: StringFilter<"DestinationMonth"> | string
    crowdLevel?: StringFilter<"DestinationMonth"> | string
    highlights?: JsonFilter<"DestinationMonth">
    warnings?: JsonFilter<"DestinationMonth">
  }

  export type DestinationSourceUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DestinationSourceWhereUniqueInput
    update: XOR<DestinationSourceUpdateWithoutDestinationInput, DestinationSourceUncheckedUpdateWithoutDestinationInput>
    create: XOR<DestinationSourceCreateWithoutDestinationInput, DestinationSourceUncheckedCreateWithoutDestinationInput>
  }

  export type DestinationSourceUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DestinationSourceWhereUniqueInput
    data: XOR<DestinationSourceUpdateWithoutDestinationInput, DestinationSourceUncheckedUpdateWithoutDestinationInput>
  }

  export type DestinationSourceUpdateManyWithWhereWithoutDestinationInput = {
    where: DestinationSourceScalarWhereInput
    data: XOR<DestinationSourceUpdateManyMutationInput, DestinationSourceUncheckedUpdateManyWithoutDestinationInput>
  }

  export type DestinationSourceScalarWhereInput = {
    AND?: DestinationSourceScalarWhereInput | DestinationSourceScalarWhereInput[]
    OR?: DestinationSourceScalarWhereInput[]
    NOT?: DestinationSourceScalarWhereInput | DestinationSourceScalarWhereInput[]
    id?: StringFilter<"DestinationSource"> | string
    destinationId?: StringFilter<"DestinationSource"> | string
    sourceName?: StringFilter<"DestinationSource"> | string
    sourceType?: StringFilter<"DestinationSource"> | string
    sourceReference?: StringNullableFilter<"DestinationSource"> | string | null
    reliability?: StringFilter<"DestinationSource"> | string
    accessedAt?: DateTimeFilter<"DestinationSource"> | Date | string
  }

  export type DestinationCreateWithoutMonthsInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: DestinationSourceCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutMonthsInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sources?: DestinationSourceUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutMonthsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutMonthsInput, DestinationUncheckedCreateWithoutMonthsInput>
  }

  export type DestinationUpsertWithoutMonthsInput = {
    update: XOR<DestinationUpdateWithoutMonthsInput, DestinationUncheckedUpdateWithoutMonthsInput>
    create: XOR<DestinationCreateWithoutMonthsInput, DestinationUncheckedCreateWithoutMonthsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutMonthsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutMonthsInput, DestinationUncheckedUpdateWithoutMonthsInput>
  }

  export type DestinationUpdateWithoutMonthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: DestinationSourceUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutMonthsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sources?: DestinationSourceUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateWithoutSourcesInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: DestinationMonthCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutSourcesInput = {
    id?: string
    slug: string
    name: string
    country: string
    region: string
    status?: $Enums.KnowledgeStatus
    profile: JsonNullValueInput | InputJsonValue
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    version?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: DestinationMonthUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutSourcesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutSourcesInput, DestinationUncheckedCreateWithoutSourcesInput>
  }

  export type DestinationUpsertWithoutSourcesInput = {
    update: XOR<DestinationUpdateWithoutSourcesInput, DestinationUncheckedUpdateWithoutSourcesInput>
    create: XOR<DestinationCreateWithoutSourcesInput, DestinationUncheckedCreateWithoutSourcesInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutSourcesInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutSourcesInput, DestinationUncheckedUpdateWithoutSourcesInput>
  }

  export type DestinationUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: DestinationMonthUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    status?: EnumKnowledgeStatusFieldUpdateOperationsInput | $Enums.KnowledgeStatus
    profile?: JsonNullValueInput | InputJsonValue
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: DestinationMonthUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type ConversationMessageCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ConversationMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ConversationMessageCreateOrConnectWithoutSessionInput = {
    where: ConversationMessageWhereUniqueInput
    create: XOR<ConversationMessageCreateWithoutSessionInput, ConversationMessageUncheckedCreateWithoutSessionInput>
  }

  export type ConversationMessageCreateManySessionInputEnvelope = {
    data: ConversationMessageCreateManySessionInput | ConversationMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutConversationSessionInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutConversationSessionInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutConversationSessionInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutConversationSessionInput, LeadUncheckedCreateWithoutConversationSessionInput>
  }

  export type LeadCreateManyConversationSessionInputEnvelope = {
    data: LeadCreateManyConversationSessionInput | LeadCreateManyConversationSessionInput[]
    skipDuplicates?: boolean
  }

  export type ConversationMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ConversationMessageWhereUniqueInput
    update: XOR<ConversationMessageUpdateWithoutSessionInput, ConversationMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ConversationMessageCreateWithoutSessionInput, ConversationMessageUncheckedCreateWithoutSessionInput>
  }

  export type ConversationMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ConversationMessageWhereUniqueInput
    data: XOR<ConversationMessageUpdateWithoutSessionInput, ConversationMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ConversationMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ConversationMessageScalarWhereInput
    data: XOR<ConversationMessageUpdateManyMutationInput, ConversationMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ConversationMessageScalarWhereInput = {
    AND?: ConversationMessageScalarWhereInput | ConversationMessageScalarWhereInput[]
    OR?: ConversationMessageScalarWhereInput[]
    NOT?: ConversationMessageScalarWhereInput | ConversationMessageScalarWhereInput[]
    id?: StringFilter<"ConversationMessage"> | string
    sessionId?: StringFilter<"ConversationMessage"> | string
    role?: StringFilter<"ConversationMessage"> | string
    content?: StringFilter<"ConversationMessage"> | string
    createdAt?: DateTimeFilter<"ConversationMessage"> | Date | string
  }

  export type LeadUpsertWithWhereUniqueWithoutConversationSessionInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutConversationSessionInput, LeadUncheckedUpdateWithoutConversationSessionInput>
    create: XOR<LeadCreateWithoutConversationSessionInput, LeadUncheckedCreateWithoutConversationSessionInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutConversationSessionInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutConversationSessionInput, LeadUncheckedUpdateWithoutConversationSessionInput>
  }

  export type LeadUpdateManyWithWhereWithoutConversationSessionInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutConversationSessionInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    reference?: StringFilter<"Lead"> | string
    idempotencyKey?: StringFilter<"Lead"> | string
    source?: StringFilter<"Lead"> | string
    stage?: EnumLeadStageFilter<"Lead"> | $Enums.LeadStage
    priority?: EnumLeadPriorityFilter<"Lead"> | $Enums.LeadPriority
    customerName?: StringFilter<"Lead"> | string
    customerPhone?: StringFilter<"Lead"> | string
    customerEmail?: StringFilter<"Lead"> | string
    preferredContactChannel?: StringFilter<"Lead"> | string
    preferredContactTime?: StringNullableFilter<"Lead"> | string | null
    additionalNotes?: StringNullableFilter<"Lead"> | string | null
    consent?: BoolFilter<"Lead"> | boolean
    consentTimestamp?: DateTimeFilter<"Lead"> | Date | string
    tripBrief?: JsonFilter<"Lead">
    transcript?: JsonFilter<"Lead">
    selectedConceptId?: StringNullableFilter<"Lead"> | string | null
    selectedDestinationSlug?: StringNullableFilter<"Lead"> | string | null
    selectedDirection?: StringNullableFilter<"Lead"> | string | null
    itinerary?: JsonFilter<"Lead">
    leadScore?: IntFilter<"Lead"> | number
    leadScoreReasons?: JsonFilter<"Lead">
    crmStatus?: EnumCRMDeliveryStatusFilter<"Lead"> | $Enums.CRMDeliveryStatus
    crmProvider?: StringFilter<"Lead"> | string
    crmAttempts?: IntFilter<"Lead"> | number
    crmReferenceId?: StringNullableFilter<"Lead"> | string | null
    crmLastError?: StringNullableFilter<"Lead"> | string | null
    crmLastAttempt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    crmNextRetryAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    consultantOwner?: StringNullableFilter<"Lead"> | string | null
    followUpDueAt?: DateTimeNullableFilter<"Lead"> | Date | string | null
    conversationSessionId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type ConversationSessionCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutConversationSessionInput
  }

  export type ConversationSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutConversationSessionInput
  }

  export type ConversationSessionCreateOrConnectWithoutMessagesInput = {
    where: ConversationSessionWhereUniqueInput
    create: XOR<ConversationSessionCreateWithoutMessagesInput, ConversationSessionUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationSessionUpsertWithoutMessagesInput = {
    update: XOR<ConversationSessionUpdateWithoutMessagesInput, ConversationSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationSessionCreateWithoutMessagesInput, ConversationSessionUncheckedCreateWithoutMessagesInput>
    where?: ConversationSessionWhereInput
  }

  export type ConversationSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationSessionWhereInput
    data: XOR<ConversationSessionUpdateWithoutMessagesInput, ConversationSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutConversationSessionNestedInput
  }

  export type ConversationSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutConversationSessionNestedInput
  }

  export type ConversationSessionCreateWithoutLeadsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ConversationMessageCreateNestedManyWithoutSessionInput
  }

  export type ConversationSessionUncheckedCreateWithoutLeadsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ConversationMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ConversationSessionCreateOrConnectWithoutLeadsInput = {
    where: ConversationSessionWhereUniqueInput
    create: XOR<ConversationSessionCreateWithoutLeadsInput, ConversationSessionUncheckedCreateWithoutLeadsInput>
  }

  export type LeadRecommendationCreateWithoutLeadInput = {
    id?: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonNullValueInput | InputJsonValue
    reasons: JsonNullValueInput | InputJsonValue
    tradeOff: string
  }

  export type LeadRecommendationUncheckedCreateWithoutLeadInput = {
    id?: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonNullValueInput | InputJsonValue
    reasons: JsonNullValueInput | InputJsonValue
    tradeOff: string
  }

  export type LeadRecommendationCreateOrConnectWithoutLeadInput = {
    where: LeadRecommendationWhereUniqueInput
    create: XOR<LeadRecommendationCreateWithoutLeadInput, LeadRecommendationUncheckedCreateWithoutLeadInput>
  }

  export type LeadRecommendationCreateManyLeadInputEnvelope = {
    data: LeadRecommendationCreateManyLeadInput | LeadRecommendationCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type LeadItineraryDayCreateWithoutLeadInput = {
    id?: string
    day: number
    title: string
    pace: string
    activities: JsonNullValueInput | InputJsonValue
    notes: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayUncheckedCreateWithoutLeadInput = {
    id?: string
    day: number
    title: string
    pace: string
    activities: JsonNullValueInput | InputJsonValue
    notes: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayCreateOrConnectWithoutLeadInput = {
    where: LeadItineraryDayWhereUniqueInput
    create: XOR<LeadItineraryDayCreateWithoutLeadInput, LeadItineraryDayUncheckedCreateWithoutLeadInput>
  }

  export type LeadItineraryDayCreateManyLeadInputEnvelope = {
    data: LeadItineraryDayCreateManyLeadInput | LeadItineraryDayCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type LeadNoteCreateWithoutLeadInput = {
    id?: string
    authorName?: string
    body: string
    createdAt?: Date | string
  }

  export type LeadNoteUncheckedCreateWithoutLeadInput = {
    id?: string
    authorName?: string
    body: string
    createdAt?: Date | string
  }

  export type LeadNoteCreateOrConnectWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    create: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput>
  }

  export type LeadNoteCreateManyLeadInputEnvelope = {
    data: LeadNoteCreateManyLeadInput | LeadNoteCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type LeadAssignmentCreateWithoutLeadInput = {
    id?: string
    consultantName: string
    assignedAt?: Date | string
  }

  export type LeadAssignmentUncheckedCreateWithoutLeadInput = {
    id?: string
    consultantName: string
    assignedAt?: Date | string
  }

  export type LeadAssignmentCreateOrConnectWithoutLeadInput = {
    where: LeadAssignmentWhereUniqueInput
    create: XOR<LeadAssignmentCreateWithoutLeadInput, LeadAssignmentUncheckedCreateWithoutLeadInput>
  }

  export type LeadAssignmentCreateManyLeadInputEnvelope = {
    data: LeadAssignmentCreateManyLeadInput | LeadAssignmentCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type CRMDeliveryAttemptCreateWithoutLeadInput = {
    id?: string
    provider: string
    attempt: number
    status: string
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CRMDeliveryAttemptUncheckedCreateWithoutLeadInput = {
    id?: string
    provider: string
    attempt: number
    status: string
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type CRMDeliveryAttemptCreateOrConnectWithoutLeadInput = {
    where: CRMDeliveryAttemptWhereUniqueInput
    create: XOR<CRMDeliveryAttemptCreateWithoutLeadInput, CRMDeliveryAttemptUncheckedCreateWithoutLeadInput>
  }

  export type CRMDeliveryAttemptCreateManyLeadInputEnvelope = {
    data: CRMDeliveryAttemptCreateManyLeadInput | CRMDeliveryAttemptCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type ConversationSessionUpsertWithoutLeadsInput = {
    update: XOR<ConversationSessionUpdateWithoutLeadsInput, ConversationSessionUncheckedUpdateWithoutLeadsInput>
    create: XOR<ConversationSessionCreateWithoutLeadsInput, ConversationSessionUncheckedCreateWithoutLeadsInput>
    where?: ConversationSessionWhereInput
  }

  export type ConversationSessionUpdateToOneWithWhereWithoutLeadsInput = {
    where?: ConversationSessionWhereInput
    data: XOR<ConversationSessionUpdateWithoutLeadsInput, ConversationSessionUncheckedUpdateWithoutLeadsInput>
  }

  export type ConversationSessionUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ConversationMessageUpdateManyWithoutSessionNestedInput
  }

  export type ConversationSessionUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ConversationMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type LeadRecommendationUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadRecommendationWhereUniqueInput
    update: XOR<LeadRecommendationUpdateWithoutLeadInput, LeadRecommendationUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadRecommendationCreateWithoutLeadInput, LeadRecommendationUncheckedCreateWithoutLeadInput>
  }

  export type LeadRecommendationUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadRecommendationWhereUniqueInput
    data: XOR<LeadRecommendationUpdateWithoutLeadInput, LeadRecommendationUncheckedUpdateWithoutLeadInput>
  }

  export type LeadRecommendationUpdateManyWithWhereWithoutLeadInput = {
    where: LeadRecommendationScalarWhereInput
    data: XOR<LeadRecommendationUpdateManyMutationInput, LeadRecommendationUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadRecommendationScalarWhereInput = {
    AND?: LeadRecommendationScalarWhereInput | LeadRecommendationScalarWhereInput[]
    OR?: LeadRecommendationScalarWhereInput[]
    NOT?: LeadRecommendationScalarWhereInput | LeadRecommendationScalarWhereInput[]
    id?: StringFilter<"LeadRecommendation"> | string
    leadId?: StringFilter<"LeadRecommendation"> | string
    conceptId?: StringFilter<"LeadRecommendation"> | string
    destinationSlug?: StringFilter<"LeadRecommendation"> | string
    direction?: StringFilter<"LeadRecommendation"> | string
    score?: JsonFilter<"LeadRecommendation">
    reasons?: JsonFilter<"LeadRecommendation">
    tradeOff?: StringFilter<"LeadRecommendation"> | string
  }

  export type LeadItineraryDayUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadItineraryDayWhereUniqueInput
    update: XOR<LeadItineraryDayUpdateWithoutLeadInput, LeadItineraryDayUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadItineraryDayCreateWithoutLeadInput, LeadItineraryDayUncheckedCreateWithoutLeadInput>
  }

  export type LeadItineraryDayUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadItineraryDayWhereUniqueInput
    data: XOR<LeadItineraryDayUpdateWithoutLeadInput, LeadItineraryDayUncheckedUpdateWithoutLeadInput>
  }

  export type LeadItineraryDayUpdateManyWithWhereWithoutLeadInput = {
    where: LeadItineraryDayScalarWhereInput
    data: XOR<LeadItineraryDayUpdateManyMutationInput, LeadItineraryDayUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadItineraryDayScalarWhereInput = {
    AND?: LeadItineraryDayScalarWhereInput | LeadItineraryDayScalarWhereInput[]
    OR?: LeadItineraryDayScalarWhereInput[]
    NOT?: LeadItineraryDayScalarWhereInput | LeadItineraryDayScalarWhereInput[]
    id?: StringFilter<"LeadItineraryDay"> | string
    leadId?: StringFilter<"LeadItineraryDay"> | string
    day?: IntFilter<"LeadItineraryDay"> | number
    title?: StringFilter<"LeadItineraryDay"> | string
    pace?: StringFilter<"LeadItineraryDay"> | string
    activities?: JsonFilter<"LeadItineraryDay">
    notes?: JsonFilter<"LeadItineraryDay">
  }

  export type LeadNoteUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    update: XOR<LeadNoteUpdateWithoutLeadInput, LeadNoteUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput>
  }

  export type LeadNoteUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    data: XOR<LeadNoteUpdateWithoutLeadInput, LeadNoteUncheckedUpdateWithoutLeadInput>
  }

  export type LeadNoteUpdateManyWithWhereWithoutLeadInput = {
    where: LeadNoteScalarWhereInput
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadNoteScalarWhereInput = {
    AND?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    OR?: LeadNoteScalarWhereInput[]
    NOT?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    authorName?: StringFilter<"LeadNote"> | string
    body?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
  }

  export type LeadAssignmentUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadAssignmentWhereUniqueInput
    update: XOR<LeadAssignmentUpdateWithoutLeadInput, LeadAssignmentUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadAssignmentCreateWithoutLeadInput, LeadAssignmentUncheckedCreateWithoutLeadInput>
  }

  export type LeadAssignmentUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadAssignmentWhereUniqueInput
    data: XOR<LeadAssignmentUpdateWithoutLeadInput, LeadAssignmentUncheckedUpdateWithoutLeadInput>
  }

  export type LeadAssignmentUpdateManyWithWhereWithoutLeadInput = {
    where: LeadAssignmentScalarWhereInput
    data: XOR<LeadAssignmentUpdateManyMutationInput, LeadAssignmentUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadAssignmentScalarWhereInput = {
    AND?: LeadAssignmentScalarWhereInput | LeadAssignmentScalarWhereInput[]
    OR?: LeadAssignmentScalarWhereInput[]
    NOT?: LeadAssignmentScalarWhereInput | LeadAssignmentScalarWhereInput[]
    id?: StringFilter<"LeadAssignment"> | string
    leadId?: StringFilter<"LeadAssignment"> | string
    consultantName?: StringFilter<"LeadAssignment"> | string
    assignedAt?: DateTimeFilter<"LeadAssignment"> | Date | string
  }

  export type CRMDeliveryAttemptUpsertWithWhereUniqueWithoutLeadInput = {
    where: CRMDeliveryAttemptWhereUniqueInput
    update: XOR<CRMDeliveryAttemptUpdateWithoutLeadInput, CRMDeliveryAttemptUncheckedUpdateWithoutLeadInput>
    create: XOR<CRMDeliveryAttemptCreateWithoutLeadInput, CRMDeliveryAttemptUncheckedCreateWithoutLeadInput>
  }

  export type CRMDeliveryAttemptUpdateWithWhereUniqueWithoutLeadInput = {
    where: CRMDeliveryAttemptWhereUniqueInput
    data: XOR<CRMDeliveryAttemptUpdateWithoutLeadInput, CRMDeliveryAttemptUncheckedUpdateWithoutLeadInput>
  }

  export type CRMDeliveryAttemptUpdateManyWithWhereWithoutLeadInput = {
    where: CRMDeliveryAttemptScalarWhereInput
    data: XOR<CRMDeliveryAttemptUpdateManyMutationInput, CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadInput>
  }

  export type CRMDeliveryAttemptScalarWhereInput = {
    AND?: CRMDeliveryAttemptScalarWhereInput | CRMDeliveryAttemptScalarWhereInput[]
    OR?: CRMDeliveryAttemptScalarWhereInput[]
    NOT?: CRMDeliveryAttemptScalarWhereInput | CRMDeliveryAttemptScalarWhereInput[]
    id?: StringFilter<"CRMDeliveryAttempt"> | string
    leadId?: StringFilter<"CRMDeliveryAttempt"> | string
    provider?: StringFilter<"CRMDeliveryAttempt"> | string
    attempt?: IntFilter<"CRMDeliveryAttempt"> | number
    status?: StringFilter<"CRMDeliveryAttempt"> | string
    errorCode?: StringNullableFilter<"CRMDeliveryAttempt"> | string | null
    errorMessage?: StringNullableFilter<"CRMDeliveryAttempt"> | string | null
    createdAt?: DateTimeFilter<"CRMDeliveryAttempt"> | Date | string
  }

  export type LeadCreateWithoutRecommendationsInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationSession?: ConversationSessionCreateNestedOneWithoutLeadsInput
    itineraryDays?: LeadItineraryDayCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itineraryDays?: LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutRecommendationsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutRecommendationsInput, LeadUncheckedCreateWithoutRecommendationsInput>
  }

  export type LeadUpsertWithoutRecommendationsInput = {
    update: XOR<LeadUpdateWithoutRecommendationsInput, LeadUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<LeadCreateWithoutRecommendationsInput, LeadUncheckedCreateWithoutRecommendationsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutRecommendationsInput, LeadUncheckedUpdateWithoutRecommendationsInput>
  }

  export type LeadUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationSession?: ConversationSessionUpdateOneWithoutLeadsNestedInput
    itineraryDays?: LeadItineraryDayUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itineraryDays?: LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutItineraryDaysInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationSession?: ConversationSessionCreateNestedOneWithoutLeadsInput
    recommendations?: LeadRecommendationCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutItineraryDaysInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutItineraryDaysInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutItineraryDaysInput, LeadUncheckedCreateWithoutItineraryDaysInput>
  }

  export type LeadUpsertWithoutItineraryDaysInput = {
    update: XOR<LeadUpdateWithoutItineraryDaysInput, LeadUncheckedUpdateWithoutItineraryDaysInput>
    create: XOR<LeadCreateWithoutItineraryDaysInput, LeadUncheckedCreateWithoutItineraryDaysInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutItineraryDaysInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutItineraryDaysInput, LeadUncheckedUpdateWithoutItineraryDaysInput>
  }

  export type LeadUpdateWithoutItineraryDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationSession?: ConversationSessionUpdateOneWithoutLeadsNestedInput
    recommendations?: LeadRecommendationUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutItineraryDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutNotesInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationSession?: ConversationSessionCreateNestedOneWithoutLeadsInput
    recommendations?: LeadRecommendationCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutNotesInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutNotesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
  }

  export type LeadUpsertWithoutNotesInput = {
    update: XOR<LeadUpdateWithoutNotesInput, LeadUncheckedUpdateWithoutNotesInput>
    create: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutNotesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutNotesInput, LeadUncheckedUpdateWithoutNotesInput>
  }

  export type LeadUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationSession?: ConversationSessionUpdateOneWithoutLeadsNestedInput
    recommendations?: LeadRecommendationUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutAssignmentsInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationSession?: ConversationSessionCreateNestedOneWithoutLeadsInput
    recommendations?: LeadRecommendationCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutAssignmentsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutAssignmentsInput, LeadUncheckedCreateWithoutAssignmentsInput>
  }

  export type LeadUpsertWithoutAssignmentsInput = {
    update: XOR<LeadUpdateWithoutAssignmentsInput, LeadUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<LeadCreateWithoutAssignmentsInput, LeadUncheckedCreateWithoutAssignmentsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutAssignmentsInput, LeadUncheckedUpdateWithoutAssignmentsInput>
  }

  export type LeadUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationSession?: ConversationSessionUpdateOneWithoutLeadsNestedInput
    recommendations?: LeadRecommendationUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateWithoutCrmDeliveriesInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversationSession?: ConversationSessionCreateNestedOneWithoutLeadsInput
    recommendations?: LeadRecommendationCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayCreateNestedManyWithoutLeadInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCrmDeliveriesInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    conversationSessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: LeadRecommendationUncheckedCreateNestedManyWithoutLeadInput
    itineraryDays?: LeadItineraryDayUncheckedCreateNestedManyWithoutLeadInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    assignments?: LeadAssignmentUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCrmDeliveriesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCrmDeliveriesInput, LeadUncheckedCreateWithoutCrmDeliveriesInput>
  }

  export type LeadUpsertWithoutCrmDeliveriesInput = {
    update: XOR<LeadUpdateWithoutCrmDeliveriesInput, LeadUncheckedUpdateWithoutCrmDeliveriesInput>
    create: XOR<LeadCreateWithoutCrmDeliveriesInput, LeadUncheckedCreateWithoutCrmDeliveriesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutCrmDeliveriesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutCrmDeliveriesInput, LeadUncheckedUpdateWithoutCrmDeliveriesInput>
  }

  export type LeadUpdateWithoutCrmDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationSession?: ConversationSessionUpdateOneWithoutLeadsNestedInput
    recommendations?: LeadRecommendationUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCrmDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversationSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type DestinationMonthCreateManyDestinationInput = {
    id?: string
    month: number
    seasonScore: number
    seasonLabel: string
    rainfall: string
    humidity: string
    crowdLevel: string
    highlights: JsonNullValueInput | InputJsonValue
    warnings: JsonNullValueInput | InputJsonValue
  }

  export type DestinationSourceCreateManyDestinationInput = {
    id?: string
    sourceName: string
    sourceType: string
    sourceReference?: string | null
    reliability: string
    accessedAt: Date | string
  }

  export type DestinationMonthUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
  }

  export type DestinationMonthUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    seasonScore?: IntFieldUpdateOperationsInput | number
    seasonLabel?: StringFieldUpdateOperationsInput | string
    rainfall?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    crowdLevel?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    warnings?: JsonNullValueInput | InputJsonValue
  }

  export type DestinationSourceUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationSourceUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationSourceUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceReference?: NullableStringFieldUpdateOperationsInput | string | null
    reliability?: StringFieldUpdateOperationsInput | string
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMessageCreateManySessionInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type LeadCreateManyConversationSessionInput = {
    id?: string
    reference: string
    idempotencyKey: string
    source?: string
    stage?: $Enums.LeadStage
    priority?: $Enums.LeadPriority
    customerName: string
    customerPhone: string
    customerEmail: string
    preferredContactChannel: string
    preferredContactTime?: string | null
    additionalNotes?: string | null
    consent: boolean
    consentTimestamp: Date | string
    tripBrief: JsonNullValueInput | InputJsonValue
    transcript: JsonNullValueInput | InputJsonValue
    selectedConceptId?: string | null
    selectedDestinationSlug?: string | null
    selectedDirection?: string | null
    itinerary: JsonNullValueInput | InputJsonValue
    leadScore: number
    leadScoreReasons: JsonNullValueInput | InputJsonValue
    crmStatus?: $Enums.CRMDeliveryStatus
    crmProvider?: string
    crmAttempts?: number
    crmReferenceId?: string | null
    crmLastError?: string | null
    crmLastAttempt?: Date | string | null
    crmNextRetryAt?: Date | string | null
    consultantOwner?: string | null
    followUpDueAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpdateWithoutConversationSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutConversationSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: LeadRecommendationUncheckedUpdateManyWithoutLeadNestedInput
    itineraryDays?: LeadItineraryDayUncheckedUpdateManyWithoutLeadNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    assignments?: LeadAssignmentUncheckedUpdateManyWithoutLeadNestedInput
    crmDeliveries?: CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutConversationSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    stage?: EnumLeadStageFieldUpdateOperationsInput | $Enums.LeadStage
    priority?: EnumLeadPriorityFieldUpdateOperationsInput | $Enums.LeadPriority
    customerName?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    preferredContactChannel?: StringFieldUpdateOperationsInput | string
    preferredContactTime?: NullableStringFieldUpdateOperationsInput | string | null
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    consent?: BoolFieldUpdateOperationsInput | boolean
    consentTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tripBrief?: JsonNullValueInput | InputJsonValue
    transcript?: JsonNullValueInput | InputJsonValue
    selectedConceptId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDestinationSlug?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDirection?: NullableStringFieldUpdateOperationsInput | string | null
    itinerary?: JsonNullValueInput | InputJsonValue
    leadScore?: IntFieldUpdateOperationsInput | number
    leadScoreReasons?: JsonNullValueInput | InputJsonValue
    crmStatus?: EnumCRMDeliveryStatusFieldUpdateOperationsInput | $Enums.CRMDeliveryStatus
    crmProvider?: StringFieldUpdateOperationsInput | string
    crmAttempts?: IntFieldUpdateOperationsInput | number
    crmReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastError?: NullableStringFieldUpdateOperationsInput | string | null
    crmLastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    crmNextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    consultantOwner?: NullableStringFieldUpdateOperationsInput | string | null
    followUpDueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadRecommendationCreateManyLeadInput = {
    id?: string
    conceptId: string
    destinationSlug: string
    direction: string
    score: JsonNullValueInput | InputJsonValue
    reasons: JsonNullValueInput | InputJsonValue
    tradeOff: string
  }

  export type LeadItineraryDayCreateManyLeadInput = {
    id?: string
    day: number
    title: string
    pace: string
    activities: JsonNullValueInput | InputJsonValue
    notes: JsonNullValueInput | InputJsonValue
  }

  export type LeadNoteCreateManyLeadInput = {
    id?: string
    authorName?: string
    body: string
    createdAt?: Date | string
  }

  export type LeadAssignmentCreateManyLeadInput = {
    id?: string
    consultantName: string
    assignedAt?: Date | string
  }

  export type CRMDeliveryAttemptCreateManyLeadInput = {
    id?: string
    provider: string
    attempt: number
    status: string
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type LeadRecommendationUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
  }

  export type LeadRecommendationUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
  }

  export type LeadRecommendationUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    conceptId?: StringFieldUpdateOperationsInput | string
    destinationSlug?: StringFieldUpdateOperationsInput | string
    direction?: StringFieldUpdateOperationsInput | string
    score?: JsonNullValueInput | InputJsonValue
    reasons?: JsonNullValueInput | InputJsonValue
    tradeOff?: StringFieldUpdateOperationsInput | string
  }

  export type LeadItineraryDayUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
  }

  export type LeadItineraryDayUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    pace?: StringFieldUpdateOperationsInput | string
    activities?: JsonNullValueInput | InputJsonValue
    notes?: JsonNullValueInput | InputJsonValue
  }

  export type LeadNoteUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadAssignmentUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadAssignmentUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadAssignmentUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultantName?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CRMDeliveryAttemptUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CRMDeliveryAttemptUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CRMDeliveryAttemptUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    attempt?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}