// import { useState } from "react";

// const Admin = () => {
//   const [products, setProducts] = useState(() => {
//     // Load existing products from localStorage or start empty
//     return JSON.parse(localStorage.getItem("products")) || [];
//   });

//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     price: "",
//     image: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddProduct = () => {
//     const newProduct = {
//       id: formData.id,
//       name: formData.name,
//       price: parseFloat(formData.price),
//       image: formData.image,
//     };

//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));

//     // Reset form
//     setFormData({ id: "", name: "", price: "", image: "" });
//     alert("Product added successfully!");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">👩‍💼 Admin Panel</h1>

//       {/* Product Form */}
//       <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-md mx-auto mb-10">
//         <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
//         <input
//           type="text"
//           name="id"
//           placeholder="Product ID"
//           value={formData.id}
//           onChange={handleChange}
//           className="border p-2 w-full mb-3 rounded"
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 w-full mb-3 rounded"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border p-2 w-full mb-3 rounded"
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//           className="border p-2 w-full mb-3 rounded"
//         />
//         <button
//           onClick={handleAddProduct}
//           className="bg-purple-700 text-white px-4 py-2 rounded-lg w-full"
//         >
//           Add Product
//         </button>
//       </div>

//       {/* Product List Preview */}
//       <h2 className="text-2xl font-bold mb-4 text-center">📦 Product List</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {products.map((p) => (
//           <div key={p.id} className="bg-gray-200 p-4 rounded-xl w-[300px] shadow-xl text-center">
//             <img src={p.image} alt={p.name} className="w-[250px] h-[250px] mx-auto mb-3 rounded-lg" />
//             <p className="text-xl font-semibold">{p.name}</p>
//             <p className="text-lg">₹ {p.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Admin;

import { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    const product = {
      product_id: Number(formData.id),
      name: formData.name,
      original_price: Number(formData.price),
      selling_price: Number(formData.price),
      category: "general",
      ratings: 4.5,
      image_url: formData.image
    };

    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    setFormData({ id: "", name: "", price: "", image: "" });
    alert("Product added to MongoDB!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>

      <input name="id" placeholder="Product ID" value={formData.id} onChange={handleChange}
        className="border p-2 w-full mb-3 rounded" />

      <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange}
        className="border p-2 w-full mb-3 rounded" />

      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange}
        className="border p-2 w-full mb-3 rounded" />

      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}
        className="border p-2 w-full mb-3 rounded" />

      <button onClick={handleAddProduct}
        className="bg-purple-700 text-white px-4 py-2 rounded-lg w-full">
        Add Product
      </button>
    </div>
  );
};

export default Admin;
