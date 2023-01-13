import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/modal/modalSlice";
import { makeStyles } from "@material-ui/core";

const Modal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalContainer}>
        <div className={classes.titleCloseBtn}>
          <button
            className={classes.xbtn}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            X
          </button>
        </div>
        <div className={classes.title}>
          <h2 className={classes.titletxt}>
            Are You Sure You Want to Continue?
          </h2>
        </div>
        <div className={classes.footer}>
          <button
            className={classes.f1}
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className={classes.f2}
            onClick={() => {
              dispatch(closeModal());
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
const useStyles = makeStyles((theme) => ({
  modalBackground: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(200, 200, 200)",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    borderRadius: 5,
    width: "350px",
    height: "250px",
    borderradius: "12px",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    display: "flex",
    flexDirection: "column",
    padding: "25px",
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 200,
    },
  },

  title: {
    display: "inline-block",
    textalign: "center",
    marginTop: "10px",
  },
  titletxt: {
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  titleCloseBtn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  xbtn: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "25px",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  footer: {
    flex: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  f1: {
    width: "150px",
    height: "45px",
    margin: "10px",
    border: "none",
    backgroundColor: "cornflowerblue",
    color: "white",
    borderRadius: "8px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  f2: {
    width: "150px",
    height: "45px",
    margin: "10px",
    border: "none",
    backgroundColor: "crimson",
    color: "white",
    borderRadius: "8px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
