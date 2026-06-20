import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isInCart = product ? cartItems.some((i) => i.id === product.id) : false;

  useEffect(() => {
    let cancelled = false;

    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product details");
        const data = await res.json();
        if (!cancelled) setProduct(data);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to fetch product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const onAdd = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 animate-pulse">
        <div className="h-6 w-24 bg-slate-200 rounded mb-8" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="h-96 bg-slate-200 rounded-2xl w-full" />
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded w-1/4" />
            <div className="h-8 bg-slate-200 rounded w-3/4" />
            <div className="h-4 bg-slate-200 rounded w-1/3" />
            <div className="h-24 bg-slate-200 rounded w-full" />
            <div className="h-10 bg-slate-200 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto p-8 mt-12 text-center bg-white border border-red-100 rounded-2xl shadow-lg">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-slate-800">Error</h2>
        <p className="text-sm text-slate-500 mt-2 mb-6">{error}</p>
        <Link to="/" className="inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Products
        </Link>
      </div>

      {product ? (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-slate-50 rounded-2xl border border-slate-100/50 max-h-[480px] flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-auto object-cover max-h-[450px]"
              loading="lazy"
            />
            {product.discountPercentage && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                -{Math.round(product.discountPercentage)}% OFF
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-2.5 py-1 rounded-lg text-sm font-bold border border-amber-100/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <span>{product.rating}</span>
              </div>
              <span className="text-sm text-slate-400 font-medium">|</span>
              <span className="text-sm text-slate-500 font-medium">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
            </div>

            <div className="border-t border-b border-slate-100 py-4 mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold text-slate-900">₹ {Math.ceil(product.price * 80)}</span>
                {product.discountPercentage && (
                  <span className="text-sm text-slate-400 line-through">
                    ₹ {Math.ceil((product.price / (1 - product.discountPercentage / 100)) * 80)}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">Inclusive of all taxes</p>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">Description</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Product Meta Data */}
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-bold mb-0.5">Brand</span>
                <span className="text-slate-800">{product.brand || "N/A"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-bold mb-0.5">Warranty</span>
                <span className="text-slate-800">{product.warrantyInformation || "1 Year Warranty"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-bold mb-0.5">Shipping</span>
                <span className="text-slate-800">{product.shippingInformation || "Free Shipping"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-bold mb-0.5">Availability</span>
                <span className={`font-semibold ${product.stock < 5 ? "text-amber-600" : "text-slate-800"}`}>
                  {product.availabilityStatus || `${product.stock} items left`}
                </span>
              </div>
            </div>

            {/* Add to Cart button */}
            <div className="mt-auto pt-4">
              {isInCart ? (
                <button
                  disabled
                  className="w-full md:w-auto min-w-[200px] py-3.5 px-6 rounded-xl text-sm font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center gap-2 cursor-default transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-emerald-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>Added to Cart</span>
                </button>
              ) : (
                <button
                  onClick={onAdd}
                  className="w-full md:w-auto min-w-[200px] py-3.5 px-6 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">No Product Found</h3>
          <p className="text-sm text-slate-500 mt-1 mb-5">The product details are currently unavailable.</p>
          <Link to="/" className="px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-lg hover:bg-indigo-700 transition">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

