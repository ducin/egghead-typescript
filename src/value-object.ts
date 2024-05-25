type Currency = "USD" | "EUR";

export class Money {
  private constructor(
    private amount: number,
    private currency: Currency
  ) {}

  static from(amount: number, currency: Currency) {
    if (amount < 0) {
      throw new Error(
        "Impossible to create money with negative value"
      );
    }
    return new Money(amount, currency);
  }

  add(another: Money) {
    if (this.currency != another.currency) {
      throw new Error(`Cannot add different currencies`);
    }
    return new Money(
      this.amount + another.amount,
      this.currency
    );
  }

  multiply(factor: number) {
    return new Money(this.amount * factor, this.currency);
  }
}
