import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail(){
  const { id } = useParams();

  const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  useEffect(() => {
  async function fetchProduct() {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      setError("Failed to fetch product");
    } finally {
      setLoading(false);
    }
  }

  fetchProduct();
}, [id]);

if (loading) return <h2>Loading...</h2>;
if (error) return <h2>{error}</h2>;
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} />
      <p>{product.description}</p>
      <p>₹ {product.price}</p>

    </div>
  );
};