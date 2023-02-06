import React from "react";
import OrderItem from "./OrderItem";
import {
  calculateOrderDiscountAmount,
  calculateOrderTotalWithoutDiscount,
} from "../helper/helper";

export default function OrderItems(props) {
  const items = props.items || [];
  const total = props.total || 0;
  const discountAmount = items.every((item) => item.discountAmount === 0);

  return (
    <ul className="list-group mb-3">
      {items.map((item, key) => (
        <OrderItem key={key} item={item} />
      ))}
      <li className="list-group-item d-flex">
        <span>Total (USD):</span>&nbsp;
        {discountAmount ? (
          <strong>${total}</strong>
        ) : (
          <>
            <strong>${total}</strong>
            <div>{`[Reg: $${calculateOrderTotalWithoutDiscount(
              items
            )} - $${calculateOrderDiscountAmount(items)}]`}</div>
          </>
        )}
        &nbsp;&nbsp;
      </li>
    </ul>
  );
}
