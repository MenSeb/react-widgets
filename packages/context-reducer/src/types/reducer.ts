export type Actions = {
  [key: string]: (state: object, options: object) => object;
};

export type Reducer = (
  state: object,
  {
    action,
    options,
  }: {
    action: string;
    options: object;
  },
) => object;
