export interface Controller<T = any> {
  handle: (_: T) => Promise<void>
}
