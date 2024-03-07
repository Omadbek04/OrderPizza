import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const { cart, quantity, total } = useSelector((state) => state.cart);
  // function getTotalQuantitiy() {
  //   return cart.reduce((prev, current) => (prev += current.quantity), 0);
  // }
  // let res = getTotalQuantitiy(cart);

  if (!cart.length) {
    return null;
  }
  return (
    <div className=" bg-stone-800 uppercase tracking-widest text-white flex justify-between py-4 px-4">
      <p className=" space-x-4 font-semibold text-stone-300">
        <span>{quantity} pizzas</span>
        <span>${total}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
