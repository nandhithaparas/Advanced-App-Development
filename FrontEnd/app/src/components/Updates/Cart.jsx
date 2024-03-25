import React, { useEffect, useState } from "react";
import './Cart.css'

import { useSelector, useDispatch } from "react-redux";
import {
  removeSingleIteams,
  addToCart,
  removeToCart,

} from "../../Redux/features/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../Main/NavigationBar";

function Cart() {
  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();

  // Fetch cart items from Redux store
  const { carts } = useSelector((state) => state.allCart);

  // add to cart
  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  // remove from cart
  const handleDecrement = (itemId) => {
    dispatch(removeToCart(itemId));
  };

  // remove single item
  const handleSingleDecrement = (item) => {
    dispatch(removeSingleIteams(item));
  };
  
  // count total price
  const total = () => {
    let totalprice = 0;
  
    carts.forEach((ele, ind) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });
  
    // Round the totalprice to 2 decimal places
    totalprice = Number(totalprice.toFixed(2));
  
    setPrice(totalprice);
  };

  // count total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);
  const nav=useNavigate();

  return (
    <div>
    <NavigationBar/>
      <div className="cart-container">
        {carts.length === 0 ? (
          <div className="no-items">
            <h1>No items in cart</h1>
          </div>
        ) : (
          <div>
            <h1>Your Cart</h1>
            <div className="cart-items">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "150px", height: "150px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <div className="quantity-controls">
                          <button
                            onClick={
                              item.qnty <= 1
                                ? () => handleDecrement(item.id)
                                : () => handleSingleDecrement(item)
                            }
                          >
                            -
                          </button>
                          <span>{item.qnty}</span>
                          <button onClick={() => handleIncrement(item)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>&#8377; {item.qnty * item.price}</td>
                      <td>
                     <Link to="/cus" style={{textDecoration:"none"}}><button
                        className="button-edit">
                        Edit
                      </button></Link> 
                    </td>
                      <td>
                        <button
                          className="button-remove"
                          onClick={() => handleDecrement(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                      </tr>
                      ))}
                      <tr className="total1">
                      <td colSpan="6">
                      <div className="total">
                        <h3>Items In Cart: {totalquantity}</h3>
                        <h3>Total Price: &#8377; {totalprice}</h3>
                      </div>
                      </td>
                      </tr>
                </tbody>
              </table>
              <div className="final-bottom">
              <button>Continue Shopping</button>
              <button>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;