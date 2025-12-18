// import { Link, useNavigate } from "react-router";

// const ProductList = () => {
//    const products = [
//     {
//       id: 1,
//       name: "Perfume",
//       price: 100,
//       img: "https://static.vecteezy.com/system/resources/previews/006/832/523/original/pink-perfume-bottle-with-pink-flowers-free-photo.jpg"
//     },
//     {
//       id: 2,
//       name: "Teddy",
//       price: 60,
//       img: "https://cdn.pixabay.com/photo/2023/02/08/22/41/teddy-bear-7777659_1280.jpg"
//     },
//     {
//       id: 3,
//       name: "Gifts",
//       price: 120,
//       img: "https://cdn.pixabay.com/photo/2020/12/08/17/08/gifts-5815004_960_720.jpg"
//     },
//     {
//       id: 4,
//       name: "God",
//       price: 50,
//       img: "https://5.imimg.com/data5/SELLER/Default/2022/12/CU/EU/BK/82564527/brass-murugan-with-peacock-big-idol-hindu-god-statues-pooja-items-home-decor-gift-buy-online-coimbatore-6056-1--1000x1000.jpg",
//     },
//      {
//       id: 5,
//       name: "Sofa",
//       price: 1500,
//       img: "https://i.pinimg.com/originals/05/a7/21/05a7214835b7324aebe5fd139132020a.jpg"
//     },
//     {
//       id: 6,
//       name: "Chair",
//       price: 2000,
//       img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gray-accent-chair-1662055979.png"
//     }
//   ];
//     const Navigate=useNavigate();

//   return (
//     <div className="p-6">
//   <h1 className="text-3xl font-bold mb-8 text-center">
//     Product <span className="text-green-600">Categories</span>
//   </h1>

//   {/* FLEX WRAPPER */}
//   <div className="flex flex-wrap justify-center gap-6">

//     {products.map((p) => (
//       <div
//         key={p.id}
//         className="m-2 p-3 bg-gray-200 shadow-2xl w-[300px] text-center rounded-xl"
//       >
//         {/* IMAGE */}
//         <div
//           onClick={()=>Navigate(`/product/${p.id}`)}
//           style={{ backgroundImage: `url(${p.image})` }}
//           className="bg-cover bg-center bg-no-repeat 
//           w-[250px] h-[250px] rounded-lg mx-auto mb-4"
//         ></div>

//         {/* TEXT */}
//         <p className="text-xl font-serif font-semibold mb-1">{p.name}</p>
//         <p className="text-lg font-serif mb-3">₹ {p.price}</p>

//         {/* BUTTON */}
//         <button
//   onClick={() => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const found = existingCart.find(item => item.id === p.id);
//     if (found) {
//       found.qty += 1;
//     } else {
//       existingCart.push({ ...p, qty: 1 });
//     }
//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     alert(`${p.name} added to cart`);
//   }}
//   className="p-2 border rounded-xl hover:bg-green-600 hover:text-white hover:font-semibold"
// >
//   Add to Cart
// </button>

//       </div>
//     ))}

//   </div>
//   <button className="bg-purple-900 py-3 px-5 rounded-xl shadow-xl mx-auto mt-10 text-white text-center block"><Link to='/cart'>Proceed to buy</Link></button>
// </div>

//   );
// };

// export default ProductList;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { URL } from "../api";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
      <span className="text-orange-600">Products</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(p => (
            <div
              key={p._id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                onClick={() => navigate(`/product/${p.product_id}`)}
                style={{ backgroundImage: `url(${p.image_url})` }}
                className="bg-cover bg-center w-full h-48 rounded-xl mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              ></div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h2>
              <p className="text-2xl font-bold text-purple-600 mb-4">₹ {p.selling_price}</p>

            <button
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                const found = cart.find(i => i.id === p.product_id);
                if (found) found.qty += 1;
                else cart.push({ id: p.product_id, name: p.name, price: p.selling_price, image: p.image_url, qty: 1 });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Added to cart");
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/cart"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
