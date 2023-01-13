import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0px 2px 10px black",
      }}
    >
      <div>
        <h2>Redux Cart App</h2>
      </div>
      <div>
        <Badge badgeContent={amount} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </div>
    </div>
  );
};

export default Navbar;
