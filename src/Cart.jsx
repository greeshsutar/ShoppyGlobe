import { useSelector, useDispatch } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from "./utils/Slice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // ✅ Correct total
  const total = cartitems.reduce(
    (acc, elem) => acc + elem.price * elem.quantity,
    0
  );

  // ✅ Empty cart
  if (cartitems.length === 0) {
    return <h2 className="text-center mt-10">Your Cart is Empty 🛒</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Cart Items</h1>

      {cartitems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-3 mb-3 rounded"
        >
          {/* Left */}
          <div>
            <h3>{item.title}</h3>
            <p>₹ {Math.ceil(item.price * 80)}</p>
          </div>

          {/* Middle */}
          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>

          {/* Right */}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <h2 className="mt-4 font-bold text-lg">
        Total: ₹ {Math.ceil(total * 80)}
      </h2>
    </div>
  );
};

export default Cart;