// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetailContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  text-align: left;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProductVideo = styled.video`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-top: 20px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <ProductDetailContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      {/* <AddToCartButton>Add to Cart</AddToCartButton> */}
      {product.video && (
        <ProductVideo controls>
          <source src={product.video} type="video/mp4" />
          Your browser does not support the video tag
        </ProductVideo>
      )}
    </ProductDetailContainer>
  );
}

export default ProductDetail;
