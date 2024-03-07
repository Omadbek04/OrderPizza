import { Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { createOrder } from "../../servers/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const { username } = useSelector((state) => state.user);
  return (
    <div className=" px-4 py-6">
      <h2 className="  text-xl font-semibold tracking-wide mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className=" flex items-center mb-8 gap-2">
          <label className=" basis-40">First Name</label>
          <input type="text" name="customer" required className=" input grow" defaultValue={username} />
        </div>

        <div className=" flex items-center gap-2 mb-8">
          <label className=" basis-40">Phone number</label>
          <div className=" grow ">
            <input type="tel" name="phone" required className=" input w-full" />
          </div>
        </div>

        <div className=" flex items-center gap-2 mb-8">
          <label className=" basis-40">Address</label>
          <div className=" grow">
            <input type="text" name="address" required className=" input w-full" />
          </div>
        </div>

        <div className=" flex items-center gap-2 mb-8">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className=" w-4 h-4 accent-yellow-400  text-stone-800 scale-150 mr-8"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="  tracking-wide text-lg text-stone-800 font-semibold">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type={"primary"} disabled={navigation.state === "submitting"}>
            Order now
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const object = Object.fromEntries(formData);
  const newOrder = { ...object, cart: JSON.parse(object.cart), priority: object.priority == "on" };

  const order = await createOrder(newOrder);

  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
