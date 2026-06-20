import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./utils/Slice";
import { Link } from "react-router-dom";

const Productitem = ({ fetchdata, datafilter }) => {
  let data = datafilter.length > 0 ? datafilter : fetchdata;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  function handleclick(elem) {
    dispatch(addItem(elem));
  }

  if (!data || data.length === 0) {
    return <h2>No Products Found</h2>;
  }

  return (
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((elem) => (
        <div
          key={elem.id}
          className="w-60 border rounded-xl shadow-md p-3 hover:scale-105 transition"
        >
          <Link to={`/products/${elem.id}`}>
            <img
              src={elem.thumbnail}
              alt={elem.title}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="font-semibold mt-2">{elem.title}</h3>

            <p className="text-green-600 font-bold">
              ₹ {Math.ceil(elem.price * 80)}
            </p>

            <p className="text-yellow-500">⭐ {elem.rating}</p>
          </Link>

          <button
            onClick={() => handleclick(elem)}
            disabled={isInCart(elem.id)}
            className={`mt-2 px-3 py-1 rounded ${
              isInCart(elem.id)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white"
            }`}
          >
            {isInCart(elem.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productitem;