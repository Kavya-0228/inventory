import { Link } from "react-router";
const Header=()=>{
    return(
        <div>
            <div className="flex justify-between p-6 bg-red-400 text-white font-serif px-8 items-center">
                <p className="text-3xl font-semibold hover:text-purple-300 right-3">Shop</p>
                <nav className="flex gap-20 text-2xl hover:text-purple-300">
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/login" Class="hover:text-blue-400">Login</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;