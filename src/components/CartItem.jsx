import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const price = Math.ceil(item.price * 80);

  return (
    <div className="group flex gap-4 items-center border border-slate-100 bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
      {/* Thumbnail */}
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
        {item.thumbnail ? (
          <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-8 h-8 rounded-lg bg-slate-200" />
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-slate-900 truncate">{item.title}</h3>
        <p className="text-sm text-slate-500">₹ {price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition"
          aria-label="Decrease quantity"
        >
          <span className="inline-flex items-center justify-center">-</span>
        </button>

        <span className="min-w-[28px] text-center font-bold text-slate-900">{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition"
          aria-label="Increase quantity"
        >
          <span className="inline-flex items-center justify-center">+</span>
        </button>
      </div>

      {/* Remove (trash icon) */}
      <button
        onClick={() => dispatch(removeItem(item.id))}
        className="ml-2 w-10 h-10 rounded-xl border border-red-100 bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 hover:border-red-200 active:scale-[0.98] transition"
        aria-label="Remove item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M19 6l-1 14H6L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};





