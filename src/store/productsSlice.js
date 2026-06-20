import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
    search: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    setProductsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProductsError: (state, action) => {
      state.error = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setProducts, setProductsLoading, setProductsError, setSearch } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;

export const selectFilteredProducts = (state) => {
  const q = state.products.search.trim().toLowerCase();
  const products = state.products.list;
  if (!q) return products;
  return products.filter((p) => (p.title || "").toLowerCase().includes(q));
};

export default productsSlice.reducer;

