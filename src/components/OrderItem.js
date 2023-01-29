import React from "react";
import { showDiscount } from "../helper/helper";

export default function OrderItem(props) {
  const item = props.item || {};
  const {
    description,
    quantity,
    unitPrice,
    total,
    totalWithoutDiscount,
    discount,
    discountAmount,
  } = item;
  const type = Object.values(discount?.type || []).join("");

  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 className="my-0">{description}</h6>
        <small className="text-muted">
          {quantity} x ${unitPrice}
        </small>
      </div>
      <div className="d-flex justify-content-between">
        {showDiscount(type, totalWithoutDiscount, discountAmount)}&nbsp;&nbsp;
        <span className="text-muted">${total}</span>
      </div>
    </li>
  );
}
