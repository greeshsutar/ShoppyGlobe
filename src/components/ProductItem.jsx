import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";



export default function ProductItem({ product }) {

  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);

  const isInCart = cartItems.some((i) => i.id === product.id);

  const onAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem(product));
  };





  return (
    <div className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full">
      <Link to={`/products/${product.id}`} className="flex-1 flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-slate-50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Floating Rating Tag */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1 border border-slate-100/50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-500">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-1">
              {product.title}
            </h3>
            <p className="text-xs text-slate-400 capitalize">{product.category || "General"}</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-indigo-500">₹</span>
            <span className="text-xl font-extrabold text-slate-900">{Math.ceil(product.price * 80)}</span>
          </div>
        </div>
      </Link>

      {/* Button Wrapper */}
      <div className="px-4 pb-4">
        {isInCart ? (
          <button
            disabled
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center gap-1.5 cursor-default transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>Added to Cart</span>
          </button>
        ) : (
          <button
            onClick={onAdd}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-1.5 shadow-sm hover:shadow shadow-indigo-500/10 active:scale-[0.98] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add to Cart</span>
          </button>
        )}
      </div>
    </div>
  );
}




