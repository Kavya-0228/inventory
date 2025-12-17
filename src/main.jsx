// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />


// )
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'

import HomeLayout from './Layouts/HomeLayout.jsx'
import ProductList from './components/ProductList.jsx'
import Order from './components/Order.jsx'
import LoginForm from './components/LoginForm.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Admin from './components/Admin.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Cart from './components/Cart.jsx'

const products = [
  { id: 1, name: "Perfume", price: 200, img: "https://static.vecteezy.com/system/resources/previews/006/832/523/original/pink-perfume-bottle-with-pink-flowers-free-photo.jpg" },
  { id: 2, name: "Teddy", price: 300, img: "https://cdn.pixabay.com/photo/2023/02/08/22/41/teddy-bear-7777659_1280.jpg" },
  { id: 3, name: "Gifts", price: 120, img: "https://cdn.pixabay.com/photo/2020/12/08/17/08/gifts-5815004_960_720.jpg" },
  { id: 4, name: "God", price: 550, img: "https://5.imimg.com/data5/SELLER/Default/2022/12/CU/EU/BK/82564527/brass-murugan-with-peacock-big-idol-hindu-god-statues-pooja-items-home-decor-gift-buy-online-coimbatore-6056-1--1000x1000.jpg" },
  { id: 5, name: "Sofa", price: 1500, img: "https://i.pinimg.com/originals/05/a7/21/05a7214835b7324aebe5fd139132020a.jpg" },
  { id: 6, name: "Chair", price: 2000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gray-accent-chair-1662055979.png" }
]

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<App />} />

        <Route path="product">
          <Route index element={<ProductList products={products} />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        <Route
          path="orders"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="login" element={<LoginForm />} />
      <Route
        path="admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
)
