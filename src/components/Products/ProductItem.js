import React, { useEffect } from "react";
import { connect } from "react-redux";

const ProductItem = props => {
  const { name, img, brand, price, gurantee, category } = props.product;

  const addCart = product => {
    let index = props.addcart.findIndex(item => item.name === product.name);
    if (index === -1) {
      let addCart = { ...product, quantity: 1 };
      // product.quantity = 1;
      props.dispatch({
        type: "ADDCART",
        addCart
      });
    } else {
      let addCart = { ...product, quantity: props.addcart[index].quantity + 1 };
      // props.addCart[index].quantity += 1;
      props.dispatch({
        type: "UPDATECART",
        addCart
      });
      console.log(addCart);
    }
  };

  return (
    <div className="col-md-4">
      <div className="card bg-light ">
        <img src={`/${img}`} alt="img" />
        <div className="card-body">
          <h4
            className={`badge ${
              price > 1000 ? "badge-danger" : "badge-primary"
            }`}
            style={{ float: "right" }}
          >
            Rs: {price}.00
          </h4>
          <h3 className="card-title text-secondary">{name}</h3>
          <p className="card-text">
            Brand: <b>{brand}</b>
          </p>
          <p className="card-text">
            Catygory: <b>{category}</b>
          </p>
          <button
            className="btn btn-block btn-info stretched-link"
            id="addcartbtn"
            onClick={() => addCart(props.product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const { addcart } = state;
  return { addcart };
};

export default connect(mapStateToProps)(ProductItem);
