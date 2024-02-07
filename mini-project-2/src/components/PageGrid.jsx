import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Image = styled("img")({
  maxWidth: "100%",
  height: "200px",
  cursor: "pointer",
});

const ItemDetail = ({ product }) => (
  <div>
    <Typography variant="h5">{product.title}</Typography>
    <Typography variant="body1">{product.description}</Typography>
  </div>
);

export default function PageGrid() {
  const [products, setProducts] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productIndex) => {
    if (!addedItems.includes(productIndex)) {
      setAddedItems([...addedItems, productIndex]);
    } else {
      setAddedItems(addedItems.filter((index) => index !== productIndex));
    }
  };

  if (!Array.isArray(products)) {
    console.error("Products data is not an array:", products);
    return null;
  }

  return (
    <Grid container spacing={4} my={2}>
      {products.map((product, index) => (
        <Grid item xs={3} key={index}>
          {product.images &&
            product.images.length > 0 &&
            product.description && (
              <div>
                <Link
                  to={`/product/${index}`}
                  style={{ textDecoration: "none" }}
                >
                  <Image src={product.images[0]} alt={product.title} />
                  <Typography variant="body2" noWrap>
                    {product.description}
                  </Typography>
                </Link>
                <Button
                  variant="contained"
                  onClick={() => handleAddToCart(index)}
                  color={addedItems.includes(index) ? "secondary" : "primary"}
                >
                  {addedItems.includes(index)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </Button>
              </div>
            )}
        </Grid>
      ))}
    </Grid>
  );
}
