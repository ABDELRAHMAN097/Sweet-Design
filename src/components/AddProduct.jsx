import React, { useState } from 'react'
import { API_URL, API_HEADERS } from '../apiConfig'
const AddProduct = () => {

    const [newProduct , setNewProduct] = useState({
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        thumbnail: "",
        images: []
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        fetch(`${API_URL}/add`, {
          method: "POST",
          headers: API_HEADERS,
          body: JSON.stringify(newProduct)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Product added:", data);
          })
          .catch((err) => console.error(err));
      };
      
  return (
    <div className='w-full grid grid-cols-1 gap-6'>
       <form
  onSubmit={handleSubmit}
  className="max-w-2xl mx-auto bg-white p-6 m-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4"
>
  <h2 className="col-span-full text-2xl font-bold text-gray-800 mb-4">
    Add New Product
  </h2>

  <input
    type="text"
    name="title"
    value={newProduct.title}
    onChange={handleChange}
    placeholder="Product Title"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="number"
    name="price"
    value={newProduct.price}
    onChange={handleChange}
    placeholder="Price"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="number"
    name="discountPercentage"
    value={newProduct.discountPercentage}
    onChange={handleChange}
    placeholder="Discount (%)"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="number"
    name="rating"
    value={newProduct.rating}
    onChange={handleChange}
    placeholder="Rating (0-5)"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="number"
    name="stock"
    value={newProduct.stock}
    onChange={handleChange}
    placeholder="Stock Quantity"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="text"
    name="brand"
    value={newProduct.brand}
    onChange={handleChange}
    placeholder="Brand"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="text"
    name="category"
    value={newProduct.category}
    onChange={handleChange}
    placeholder="Category"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="text"
    name="thumbnail"
    value={newProduct.thumbnail}
    onChange={handleChange}
    placeholder="Thumbnail URL"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  <input
    type="text"
    name="images"
    value={newProduct.images}
    onChange={handleChange}
    placeholder="Images URLs (comma separated)"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 col-span-full"
  />

  <textarea
    name="description"
    value={newProduct.description}
    onChange={handleChange}
    placeholder="Product Description"
    rows="4"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 col-span-full"
  ></textarea>

  <button
    type="submit"
    className="col-span-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
  >
    Add Product
  </button>
</form>

    </div>
  )
}

export default AddProduct