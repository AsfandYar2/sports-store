import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = props => {
  let { category } = useParams();
  return (
    <div>
      <h4>{category}</h4>
      <div className="row">
        {props.search !== ""
          ? props.search.map(product => (
              <ProductItem key={product.id} product={product} />
            ))
          : props.products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const { products, search } = state;
  return { products, search };
};

export default connect(mapStateToProps)(Products);
