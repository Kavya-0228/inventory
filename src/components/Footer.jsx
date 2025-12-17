const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-3">Grocery Store</h2>
            <p className="text-gray-400 text-sm">
              Fresh products delivered to your doorstep. Quality and trust guaranteed.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-3">Get the latest offers & updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 w-full rounded-l-lg text-black focus:outline-none"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700">
                Go
              </button>
            </div>
          </div>

        </div>

        <hr className="border-gray-700 mt-10" />

        <p className="text-center text-gray-400 text-sm mt-5">
          © 2024 Grocery Store. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;