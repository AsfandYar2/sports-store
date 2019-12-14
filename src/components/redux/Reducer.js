import InitialState from "./InitialState";
let catA = InitialState;

const Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "CATEGORY_A":
      return [...catA.filter(product => product.category === "SportsA")];
    case "CATEGORY_B":
      return [...catA.filter(product => product.category === "SportsB")];
    case "CATEGORY_C":
      return [...catA.filter(product => product.category === "king")];
    case "all":
      return [...catA];
    default:
      return state;
  }
};

export default Reducer;
