import { Link } from "react-router";

const Product = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Product <span className="text-orange-500">Categories</span>
      </h1>
      <div className="flex justify-around">
      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://static.vecteezy.com/system/resources/previews/006/832/523/original/pink-perfume-bottle-with-pink-flowers-free-photo.jpg')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">perfume</p>
        <p className="text-xl font-serif mb-2">⭐3.5 (250 reviews)</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Add to Card</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://cdn.pixabay.com/photo/2023/02/08/22/41/teddy-bear-7777659_1280.jpg')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Teddy</p>
        <p className="text-xl font-serif mb-2">⭐5.0 (5000 reviews)</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Add to Card</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://cdn.pixabay.com/photo/2020/12/08/17/08/gifts-5815004_960_720.jpg')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Gifts</p>
        <p className="text-xl font-serif mb-2">⭐4.5 (200 reviews)</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Add to Card</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://i.pinimg.com/originals/05/a7/21/05a7214835b7324aebe5fd139132020a.jpg')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Sofa</p>
        <p className="text-xl font-serif mb-2">⭐4.3 (100 reviews)</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Add to Card</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gray-accent-chair-1662055979.png')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Chair</p>
        <p className="text-xl font-serif mb-2">⭐4.0 (2000 reviews)</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Add to Card</button>
      </div>

    </div>
    <button className="bg-red-600 text-white text-2xl py-2 px-4 rounded-xl shadow-xl font-serif mt-4 mx-auto block"><Link to='/product'>view more Product</Link></button>
    </div>
  );
};

export default Product;