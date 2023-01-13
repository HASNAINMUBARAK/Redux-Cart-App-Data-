import "./App.css";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container/Container";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      {isOpen && <Modal />}
      <Navbar />
      <Container />
     
    </div>
  );
}

export default App;
