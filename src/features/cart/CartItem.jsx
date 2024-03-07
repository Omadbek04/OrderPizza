import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className=" flex justify-between items-center py-3">
      <p className=" mb-1">
        {quantity}&times; {name}
      </p>
      <div className=" flex items-center space-x-4 font-bold ">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type={"small"}>delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
