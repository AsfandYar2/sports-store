const val = () => {
  const LS = localStorage.getItem("c");
  return LS ? JSON.parse(LS) : [];
};

const AddCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDCART":
      return [...state, action.addCart];

    case "UPDATECART":
      return [
        ...state.filter(product =>
          product.id === action.addCart.id ? action.addCart : product
        )
      ];
    case "DELETECART":
      return [...state.filter(product => product.id !== action.id)];

    default:
      return state;
  }
};

export default AddCartReducer;
