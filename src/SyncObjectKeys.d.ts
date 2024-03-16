/**
 * Allows defining a new object type that only contains keys that exist within another object type
 *
 * @example
 * ```
 * type SomeObject = {
 *    name: string;
 *    phone: number;
 * }
 *
 * type NewObject = SyncObjectKeys<SomeObject, {
 *    phone: string;
 * }>
 *
 * const data: NewObject = {
 *    phone: '123-123-1234'
 * }
 * ```
 */
type SyncObjectKeys<
  OriginalObject,
  NewObject extends {
    [K in keyof NewObject]: K extends keyof OriginalObject
      ? OriginalObject[K]
      : never;
  }
> = NewObject;

export default SyncObjectKeys;
