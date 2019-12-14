import InitialState from "./InitialState";

const SearchReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return [
        ...InitialState.filter(item => {
          const regex = new RegExp(`${action.text}`, "gi");
          return item.name.match(regex);
        })
      ];
    case "CLEAR":
      return (state = "");
    default:
      return state;
  }
};

export default SearchReducer;
