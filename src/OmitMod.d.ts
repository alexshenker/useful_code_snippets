/**
 * OmitMod is a modification of 'Omit' that captures the contents of a given object
 * improving type-safety and dev-x when trying to omit types from an object.
 *
 * Currently, the built-in 'Omit' utility in typescript does not list
 * properties that exist within a given object while the 'Pick' utility does.
 */
type OmitMod<Obj, Key extends keyof Obj> = {
  [K in keyof Obj as K extends Key ? never : K]: Obj[K];
};

export default OmitMod;
