import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = props => {
  const handleAlertBox = product => {
    alert(JSON.stringify(product));
  };

  return (
    <Fragment>
      <div id="modal1" className="modal">
        <h4>Cart is Empty</h4>
        <h6>There are no products</h6>
        <button className="modal-close">OK</button>
      </div>

      {props.addcart.length > 0 ? (
        <Link to="/Cart">
          <a className="" onClick={() => handleAlertBox(props.addcart)}>
            {props.addcart.length}Product_Added
            <i className="fas fa-cart-arrow-down" />
          </a>
        </Link>
      ) : (
        <Link to="/Cart">
          <a className=" modal-trigger">
            <i class="material-icons">add_shopping_cart</i>
          </a>
        </Link>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { addcart } = state;
  return { addcart };
};

export default connect(mapStateToProps)(Navbar);
