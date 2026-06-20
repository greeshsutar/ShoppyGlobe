import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setProductsError,
  setProductsLoading,
} from "./productsSlice";

const ENDPOINT = "https://dummyjson.com/products";

export default function useProducts() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.products.list);
  const loading = useSelector((s) => s.products.loading);
  const error = useSelector((s) => s.products.error);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      dispatch(setProductsLoading(true));
      dispatch(setProductsError(null));
      try {
        const res = await fetch(ENDPOINT);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (!cancelled) dispatch(setProducts(data.products || []));
      } catch (e) {
        if (!cancelled) dispatch(setProductsError(e?.message || "Failed to fetch products"));
      } finally {
        if (!cancelled) dispatch(setProductsLoading(false));
      }
    }

    // fetch on mount
    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  return { products: list, loading, error };
}

