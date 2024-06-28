// src/components/ProductItem.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  margin: 10px 0;
  font-size: 1.2em;
`;

const ProductDescription = styled.div`
  text-align: left;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.1em;
  font-weight: bold;
`;

const HighlightText = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 1em;
  color: #555;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddToCartButton = styled.button`
  display: inline-block;
  margin: 10px 0;
  padding: 5px 10px;
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

const ProductItem = ({ product }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <ProductCard>
      <ProductImage
        src={product.image}
        alt={product.name}
        onClick={toggleAudio}
      />
      <ProductName>{product.name}</ProductName>
      <ProductDescription style={{textAlign: 'center'}}>
        <p>{product.description}</p>
        <HighlightText>Kuat dan Tahan Lama</HighlightText>
        <HighlightText>Lincah dan Pandai Menabung</HighlightText>
        <HighlightText>Anti Karat</HighlightText>
        <HighlightText>Free Telor 2</HighlightText>
      </ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <StyledLink to={`/product/${product.id}`}>View Details</StyledLink>
      <AddToCartButton>Add to Cart</AddToCartButton>
      <audio ref={audioRef} src="images/miaw.mp3" />
    </ProductCard>
  );
}

export default ProductItem;
