import React from "react";
import OrderService from "../service/OrderService";
import Order from "../components/Order";

export default class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
    };
  }

  componentDidMount() {
    OrderService.getOrderById(this.props.id).then((order) =>
      this.setState({
        order: order,
      })
    );
  }

  render() {
    if (!this.state.order) <div>Loading...</div>;

    return (
      <div className="container mt-5">
        <Order order={this.state.order} />
      </div>
    );
  }
}
