import React from "react";
import AddCart from "../pages/AddCart";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = props => {
  return (
    <div className="navbar bg-primay">
      <h3>
        <i className="fab fa-angellist">Sports_</i>
        <i className="fab fa-stripe-s">tore</i>
      </h3>

      <ul>
        <NavLink style={{ color: "white" }} to="/">
          <li>Home</li>
        </NavLink>

        <li>
          {props.addcart.length > 0 ? (
            <NavLink style={{ color: "white" }} to="/Cart">
              <a className="" onClick={""}>
                {props.addcart.length}Product_Added
                <i className="fas fa-cart-arrow-down" />
              </a>
            </NavLink>
          ) : (
            <NavLink to="/Cart">
              <a className=" modal-trigger">
                <i class="material-icons">add_shopping_cart</i>
              </a>
            </NavLink>
          )}
        </li>

        <li></li>
      </ul>
    </div>
  );
};
const mapStateToProps = state => {
  const { addcart } = state;
  return { addcart };
};

export default connect(mapStateToProps)(Navbar);
