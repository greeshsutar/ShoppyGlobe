import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cartItems = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState(null);

  const total = useMemo(
    () => cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0),
    [cartItems]
  );

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onPlaceOrder = () => {
    // dummy validation not required
    setStatus("Order placed");
    dispatch(clearCart());
    setTimeout(() => navigate("/"), 800);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Checkout</h1>
        <p className="text-sm text-slate-500 mt-1">
          Securely place your order in seconds.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Details */}
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="font-bold text-slate-800 mb-3">Your Details</h2>

          <div className="space-y-3">
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={onChange}
            />
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
            />
            <input
              className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={onChange}
            />
          </div>

          <button
            className="mt-5 w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-xl shadow-md shadow-indigo-500/15 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
            onClick={onPlaceOrder}
            disabled={cartItems.length === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            Place Order
          </button>

          {status ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-emerald-600">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-emerald-800 font-semibold">{status}</span>
            </div>
          ) : null}
        </div>

        {/* Summary */}
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-100 shadow-sm p-5 lg:sticky lg:top-24">
          <h2 className="font-bold text-slate-800 mb-4">Order Summary</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 mx-auto mb-3 flex items-center justify-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <p className="text-slate-600 font-semibold">Cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((i) => (
                <div key={i.id} className="flex gap-3 justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                      {i.thumbnail ? (
                        <img src={i.thumbnail} alt={i.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-200" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-900 truncate">{i.title}</div>
                      <div className="text-sm text-slate-500">Qty: {i.quantity}</div>
                    </div>
                  </div>
                  <div className="font-extrabold text-slate-900 whitespace-nowrap">
                    ₹ {Math.ceil(i.price * 80 * i.quantity)}
                  </div>
                </div>
              ))}

              <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span className="text-slate-500 font-semibold">Total</span>
                <span className="text-indigo-600 font-extrabold text-lg">₹ {Math.ceil(total * 80)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


