import {
  calculateOrderDiscountAmount,
  calculateOrderTotalWithoutDiscount,
} from "./helper";

import { items } from "../service/OrderData";

describe("calculateOrderDiscountAmount()", () => {
  it("should return the amount of order discount", () => {
    expect(calculateOrderDiscountAmount(items)).toBe(495);
  });
});

describe("calculateOrderTotalWithoutDiscount()", () => {
  it("should return the order amount before discount", () => {
    expect(calculateOrderTotalWithoutDiscount(items)).toBe(4409.88);
  });
});
