declare const __brand__type__: unique symbol;
type Brand<BaseType, BrandName> = BaseType & {
  readonly [__brand__type__]: BrandName;
};
