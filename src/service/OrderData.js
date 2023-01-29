// This data is for doing jest in helper.test.js

export const items = [
  {
    quantity: 1,
    unitPrice: 2959.95,
    description: "Red velvet sofa",
    discount: {
      type: "dollar-amount",
      value: 300,
    },
    discountAmount: 300,
    total: 2659.95,
    totalWithoutDiscount: 2959.95,
  },
  {
    quantity: 2,
    unitPrice: 649.99,
    description: "Yellow Harmed chair",
    discount: {
      type: "percentage",
      value: 0.15,
    },
    discountAmount: 195,
    total: 1104.98,
    totalWithoutDiscount: 1299.98,
  },
  {
    quantity: 5,
    unitPrice: 29.99,
    description: "Blue squared cushion",
    discount: null,
    discountAmount: 0,
    total: 149.95,
    totalWithoutDiscount: 149.95,
  },
];
