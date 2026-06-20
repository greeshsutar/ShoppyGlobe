# ShoppyGlobe (React + Vite)

ShoppyGlobe is a shopping web application built with **React**, **Vite**, **React Router**, and **Redux Toolkit**.

---

## Implemented (as per assignment)

### Pages / Components
- **App**: main layout + routing outlet
- **Header**: navigation + cart icon/link
- **ProductList**: fetches products and shows search-filtered list
- **ProductItem**: renders a single product with **Add to Cart** button
- **ProductDetail**: fetches product by route param
- **Cart**: shows cart items, quantity controls, remove actions
- **CartItem**: renders a single item in the cart
- **Checkout**: dummy form + order summary; clicking **Place Order** shows **“Order placed”**, clears cart, and redirects home
- **NotFound**: 404 page for unknown routes (with error details)

### Data fetching & error handling
- Products are fetched in **ProductList** via a custom hook (`useProducts`).
- Product details are fetched in **ProductDetail** via `useEffect` using `useParams()`.
- Failed fetch requests show a friendly error UI.

### State management (Redux)
- Cart stored in Redux with actions for add/remove/increase/decrease/clear.
- Product search term stored in Redux and used to filter results.

### Routing
- Uses **createBrowserRouter** and dynamic route params for product details.
- Routes include: Home (`/`), Product Detail (`/products/:id`), Cart (`/cart`), Checkout (`/checkout`), and catch-all `*`.

### Performance / Optimization
- **React.lazy** + **Suspense** for page/component code splitting.
- Lazy-loaded images using `loading="lazy"`.

---

## Live API used
- `https://dummyjson.com/products` (and product detail endpoint `https://dummyjson.com/products/:id`)

---

## Setup

### 1) Install dependencies
```bash
npm install
```

### 2) Run development server
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Lint
```bash
npm run lint
```

---

## Notes / References
- `UPDATED.md` — implementation checklist & confirmation notes
- `TODO.md` — remaining tasks (e.g., manual verification for mobile/tablet/desktop)

---

## Project structure (high level)
- `src/pages/` — ProductList, ProductDetail, Cart, Checkout, NotFound
- `src/components/` and `src/Component/` — reusable UI pieces (Header, ProductItem, CartItem, etc.)
- `src/store/` — Redux slices, hooks, and store setup


