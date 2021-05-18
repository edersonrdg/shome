export interface Controller<T = any> {
  handle: (data: T) => Promise<void>
}
