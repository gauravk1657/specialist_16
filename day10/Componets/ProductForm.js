import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/products", formState);
      console.log(response.data); // Handle success response if needed
      setFormState({ title: "", price: "", imageUrl: "" });
      setLoading(false);
    } catch (error) {
      setError("Error occurred while saving the product.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div id="product-create-form">
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formState.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={formState.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ProductForm;
