import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Cart = props => {
  useEffect(() => localStorage.setItem("c", JSON.stringify(props.addcart)), [
    props.addcart
  ]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      props.addcart.reduce((amount, c) => (amount += c.quantity * c.price), 0)
    );
  }, [props.addcart]);

  const handleQuantity = item =>
    props.addcart.map(p => {
      const addCart =
        p.id === item.id ? { ...item, quantity: ++item.quantity } : item;
      props.dispatch({
        type: "UPDATECART",
        addCart
      });
    });

  const handleDecrement = item =>
    props.addcart.map(p => {
      const addCart =
        p.id === item.id ? { ...item, quantity: --item.quantity } : item;
      props.dispatch({
        type: "UPDATECART",
        addCart
      });
    });
  const handelDelete = id => {
    props.dispatch({
      type: "DELETECART",
      id
    });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <table className="table">
          <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove Item</th>
          </thead>

          {props.addcart.length > 0 ? (
            <tbody>
              {props.addcart.map(item => (
                <tr>
                  <td style={{ width: "25%", height: "25%" }}>
                    {item.name}
                    <img src={item.img} style={{ height: "20vh" }} />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-secondary"
                      style={{ margin: "10px" }}
                      onClick={() => handleDecrement(item)}
                      disabled={item.quantity == 0}
                    >
                      Decrement
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-secondary"
                      style={{ margin: "10px" }}
                      onClick={() => handleQuantity(item)}
                    >
                      Increment
                    </button>
                  </td>
                  <td>
                    <button
                      className="badge badge-danger"
                      onClick={() => handelDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div>
              <h1>Your Cart is Empty</h1>
            </div>
          )}
        </table>
      </div>
      <div className="col-md-6">
        <table className="table">
          <tr>
            <th>Your Bill</th>
            <th></th>
          </tr>
          <tr>
            <th>Price of products</th>
            <td>{total}</td>
          </tr>
          <tr>
            <th>Shipping charge</th>
            <td>Rs: 0.00</td>
          </tr>
          <tr>
            <th>Charge</th>
            <td>Rs: 0.00</td>
          </tr>
          <tr>
            <th>Tex</th>
            <td>Rs: 0.00</td>
          </tr>
          <tr>
            <th>Total cost is</th>
            <th>Rs: {total}</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const { addcart } = state;
  return { addcart };
};
export default connect(mapStateToProps)(Cart);

// {props.addcart.length > 0 ? (
//   <div>
//     <h1>Your Cart is Just Loading...</h1>

//     {props.addcart.map(item => (
//       <div className="row">
//         <div className="col-md-2">{item.name}</div>
//         <div className="col-md-2">
//           <img src={item.img} />
//         </div>
//         <div className="col-md-2">{item.price}</div>

//         <div className="col-md-2">
//           <button
//             className="btn btn-sm btn-secondary"
//             onClick={() => handleDecrement(item)}
//             disabled={item.quantity == 0}
//           >
//             Decrement
//           </button>
//         </div>
//         <div className="col-md-1">{item.quantity}</div>

//         <div className="col-md-2">
// <button
//   className="btn btn-sm btn-secondary"
//   onClick={() => handleQuantity(item)}
// >
//   Increment
// </button>
//         </div>
//       </div>
//     ))}
//   </div>
// ) : (
//   <h1 style={{ textAlign: "center" }}>Cart Is Empty</h1>
// )}
