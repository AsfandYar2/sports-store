import React from "react";
import { connect } from "react-redux";

const SearchBar = props => {
  const onChange = e => {
    console.log("change", e.target.value);
    if (e.target.value !== "") {
      props.dispatch({
        type: "FILTER",
        text: e.target.value
      });
    } else {
      props.dispatch({ type: "CLEAR" });
    }
  };
  return (
    <div>
      <form>
        <input
          type="Search"
          placeholder="Filter Products..."
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
};

export default connect()(SearchBar);
