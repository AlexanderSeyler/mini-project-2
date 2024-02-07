import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import Return from "../components/return";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
        setError("");
      } catch (error) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    fetchProduct();
    return () => {};
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <Return />;
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {product && (
        <div>
          <h2>Product Details</h2>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <img
            src={product.images[0]}
            alt={product.name}
            style={{ maxWidth: "100%", height: "200px" }}
          />
          <Return />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;