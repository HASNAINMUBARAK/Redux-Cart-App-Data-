import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { makeStyles } from "@material-ui/core";
import { openModel } from "../../features/modal/modalSlice";
const Container = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount === 0) {
    return (
      <div>
        <h3>Your Cart is Empty</h3>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3>Your Cart</h3>
      </div>
      <div>
        {cartItems.map((item) => {
          return (
            <>
              <div>
                <CartItem key={item.id} {...item} />
              </div>
            </>
          );
        })}
        <div className={classes.footer}>
          <hr style={{ border: "1px solid #666464", width: "80%" }} />
          <div className={classes.f1}>
            <h4>Total</h4>
            <h4>${total.toFixed(2)}</h4>
          </div>
          <div className={classes.f2}>
            <button
              className={classes.btn}
              onClick={() => dispatch(openModel())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
  },
  f1: {
    display: "flex",
    justifyContent: "space-around",
  },
  f2: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    color: "red",
    width: 150,
    height: 40,
    borderRadius: "40px",
    border: "2px solid red",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
