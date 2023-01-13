import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
const CartItem = ({ id, img, price, title, amount }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={img} alt="sd" className={classes.image} />
      <div>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <h4 style={{ margin: 5, fontFamily: "monospace" }}>${price}</h4>
        <button
          className={classes.remove}
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ArrowDropUpIcon onClick={() => dispatch(increase({ id }))} />
        <label>{amount}</label>
        <ArrowDropDownIcon
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 90,
  },
  remove: {
    color: "red",
    all: "unset",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
