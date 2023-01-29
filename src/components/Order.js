import React from "react";
import OrderItems from "../components/OrderItems";

export default function Order(props) {
  const order = props.order || {};
  const { id, items, total } = order;

  return (
    <div>
      <h4 className="mb-3">#{id}</h4>
      <OrderItems items={items} total={total} />
    </div>
  );
}
