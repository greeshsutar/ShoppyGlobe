import { useDispatch } from "react-redux";
import { addItem } from "./utils/Slice";
import { Link } from "react-router-dom";

const Productitem = ({ fetchdata, datafilter }) => {
  let data = datafilter.length > 0 ? datafilter : fetchdata;

  const dispatchaction = useDispatch();

  function handleclick(elem) {
    dispatchaction(addItem(elem));
  }

  if (!data || data.length === 0) {
    return <h2>No Products Found</h2>;
  }

  return (
    <div className="flex flex-wrap gap-5 p-4">
      {data.map((elem) => (
        <div
          key={elem.id}
          className="w-60 border rounded-xl shadow-md p-3 hover:scale-105 transition"
        >
          {/* Clickable card */}
          <Link to={`/products/${elem.id}`}>
            <img
              src={elem.thumbnail}
              alt={elem.title}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="font-semibold mt-2">{elem.title}</h3>

            <p className="text-green-600 font-bold">
              ₹ {Math.ceil(elem.price * 100)}
            </p>

            <p className="text-yellow-500">⭐ {elem.rating}</p>
          </Link>

          {/* Button outside Link */}
          <button
            onClick={() => handleclick(elem)}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productitem;