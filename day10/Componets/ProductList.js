import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    const lastPage = Math.ceil(products.length / productsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div id="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {currentProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
          <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );
};

export default ProductList;
