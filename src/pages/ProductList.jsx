import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, selectFilteredProducts } from "../store/productsSlice";
import useProducts from "../store/useProducts";
import ProductItem from "../components/ProductItem";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useProducts();

  const search = useSelector((s) => s.products.search);
  const filteredProducts = useSelector(selectFilteredProducts);

  const uiList = useMemo(() => {
    return filteredProducts;
  }, [filteredProducts]);

  const onChange = (e) => dispatch(setSearch(e.target.value));
  const onClear = () => dispatch(setSearch(""));

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="h-48 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl animate-pulse mb-8" />
        <div className="w-full max-w-md h-10 bg-slate-200 rounded-lg animate-pulse mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="border border-slate-100 rounded-2xl p-3 space-y-3 animate-pulse bg-white shadow-sm">
              <div className="h-40 bg-slate-200 rounded-xl w-full" />
              <div className="h-4 bg-slate-200 rounded w-3/4" />
              <div className="h-4 bg-slate-200 rounded w-1/4" />
              <div className="h-8 bg-slate-200 rounded-lg w-full pt-1" />
            </div>
          ))}
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
        <h2 className="text-xl font-bold text-slate-800">Failed to load products</h2>
        <p className="text-sm text-slate-500 mt-2 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-8 md:p-12 mb-8 shadow-xl border border-slate-800">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
          <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Discover Your Style
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-0 font-light">
            Shop the latest premium collections, check ratings, and experience express checkout with ShoppyGlobe.
          </p>
        </div>
      </div>

      {/* Search Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
            </svg>
          </span>
          <input
            value={search}
            onChange={onChange}
            type="search"
            placeholder="Search products by title..."
            className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white transition shadow-sm"
          />
          {search && (
            <button 
              onClick={onClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <div className="text-sm font-medium text-slate-500">
          Showing {uiList.length} of {products?.length || 0} products
        </div>
      </div>

      {/* Product Grid */}
      {uiList.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uiList.map((p) => (
            <ProductItem key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-800">No Products Found</h3>
          <p className="text-sm text-slate-500 mt-1 mb-5">We couldn't find anything matching "{search}". Try checking for spelling or use simpler terms.</p>
          <button 
            onClick={onClear} 
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}




