export type Dispatch = (payload: object) => object;

export type Dispatcher = (options: object) => object;

export type Dispatchers = { [key: string]: Dispatcher };
