import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  maxWidth: "100%",
  height: "200px",
  cursor: "pointer",
});

const ProductItem = ({ product, onAddToList }) => {
  const handleAddClick = () => {
    onAddToList(product);
  };

  return (
    <Grid item xs={3}>
      <div>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <Image src={product.images[0]} alt={product.title} />
          <Typography variant="body2" noWrap>
            {product.description}
          </Typography>
        </Link>
        <Button onClick={handleAddClick} variant="outlined" color="primary">
          Add to List
        </Button>
      </div>
    </Grid>
  );
};

export default ProductItem;
