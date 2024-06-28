// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Produk 1', description: 'Deskripsi Produk 1', price: 'IDR 50.000', image: 'images/tulus.png' },
//   { id: 2, name: 'Produk 2', description: 'Deskripsi Produk 2', price: 'Rp 200.000', image: 'url_gambar_produk_2' },
  // Tambahkan produk lainnya di sini
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
