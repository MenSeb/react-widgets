export default function createError(source: string): Error {
  return new Error(`Unknown Context, ${source} must be use within a Provider.`);
}
