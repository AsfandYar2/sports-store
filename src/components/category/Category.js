import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const Category = props => {
  const [products, setproducts] = useState("all");
  const { category } = useParams();

  useEffect(() => {
    if (category !== undefined) {
      setproducts(category);
      props.dispatch({
        type: category
      });
    } else {
      setproducts("all");
      props.dispatch({
        type: "all"
      });
    }
  }, [category]);

  const handleCategoryA = () => {
    //for style bg color
    setproducts("CATEGORY_A");
    //dispatch for filter
    props.dispatch({
      type: "CATEGORY_A"
    });
  };

  const handleCategoryB = () => {
    setproducts("CATEGORY_B");
    props.dispatch({
      type: "CATEGORY_B"
    });
  };
  const handleCategoryC = () => {
    setproducts("CATEGORY_C");
    props.dispatch({
      type: "CATEGORY_C"
    });
  };
  const handleAllProducts = () => {
    setproducts("all");
    props.dispatch({
      type: "all"
    });
  };
  const style1 = { backgroundColor: "rgb(54, 124, 54)" };
  const style2 = { backgroundColor: "white", color: "black" };
  return (
    <div>
      <NavLink to="/products/all">
        <button
          className=" btn btn-dark btn-block"
          id="btn"
          onClick={handleAllProducts}
          style={products === "all" ? style1 : style2}
        >
          All products
        </button>
      </NavLink>
      <div className="navbar-toggler">
        <NavLink to="/products/CATEGORY_A">
          <button
            className=" btn btn-dark btn-block"
            id="btn"
            onClick={handleCategoryA}
            style={products === "CATEGORY_A" ? style1 : style2}
          >
            CategoryA
          </button>
        </NavLink>
        <NavLink to="/products/CATEGORY_B">
          <button
            className=" btn btn-dark btn-block"
            id="btn"
            onClick={handleCategoryB}
            style={products === "CATEGORY_B" ? style1 : style2}
          >
            CategoryB
          </button>
        </NavLink>
        <NavLink to="/products/CATEGORY_C">
          <button
            className=" btn btn-dark btn-block"
            id="btn"
            onClick={handleCategoryC}
            style={products === "CATEGORY_C" ? style1 : style2}
          >
            CategoryC
          </button>
        </NavLink>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps)(Category);
