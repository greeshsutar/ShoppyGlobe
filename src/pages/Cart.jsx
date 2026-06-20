import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartItems = useSelector((s) => s.cart.items);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-md mx-auto px-6 py-16 text-center mt-12 bg-white border border-slate-100 rounded-3xl shadow-sm">
        <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-2">Your Cart is Empty</h2>
        <p className="text-sm text-slate-500 mb-8 max-w-xs mx-auto">Looks like you haven't added anything to your cart yet. Discover our catalog and find the best deals!</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-500/10 active:scale-[0.98] transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <span className="text-sm font-semibold text-slate-500">Products</span>
            <span className="text-sm font-semibold text-slate-500">Quantity / Price</span>
          </div>
          <div className="space-y-4 pt-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-slate-800 mb-5 pb-4 border-b border-slate-100">Order Summary</h2>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between text-slate-500 font-medium">
              <span>Subtotal ({totalItemsCount} items)</span>
              <span>₹ {Math.ceil(total * 80)}</span>
            </div>
            <div className="flex justify-between text-slate-500 font-medium">
              <span>Shipping</span>
              <span className="text-emerald-600 font-bold">FREE</span>
            </div>
            <div className="flex justify-between text-slate-500 font-medium">
              <span>Tax</span>
              <span>Included</span>
            </div>
            <div className="border-t border-slate-100 pt-4 flex justify-between font-extrabold text-slate-900 text-base">
              <span>Estimated Total</span>
              <span className="text-indigo-600 text-lg">₹ {Math.ceil(total * 80)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


