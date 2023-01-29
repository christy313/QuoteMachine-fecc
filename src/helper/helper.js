export const showDiscount = (type, total, discount) => {
  switch (type) {
    case "dollar-amount":
      return <div>{`[Reg: $${total} - $${discount}]`}</div>;
    case "percentage":
      return (
        <div>{`[Reg: $${total} - $${discount} (${(
          (discount / total) *
          100
        ).toFixed(0)}%)]`}</div>
      );
    default:
      return null;
  }
};

export const calculateOrderDiscountAmount = (items) =>
  items.reduce((acc, item) => acc + item.discountAmount, 0);

export const calculateOrderTotalWithoutDiscount = (items) =>
  items.reduce((acc, item) => acc + item.totalWithoutDiscount, 0);
