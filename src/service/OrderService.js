export default class OrderService {
  static async getOrderById(orderId) {
    return Promise.resolve({
      id: orderId,
      total: 3914.88,
      discountAmount: 495,
      totalWithoutDiscount: 4409.88,
      items: [
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
      ],
    });
  }
}
