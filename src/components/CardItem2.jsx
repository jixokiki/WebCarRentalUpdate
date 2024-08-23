import { numberToRupiah } from "@/utils/rupiah";
import React from "react";
import { useRouter } from "next/navigation";

const CardItem2 = ({
  imageUrl,
  judul,
  deskripsi,
  harga,
  fakultas,
  addToCart,
  removeFromCart,
  isInCart,
}) => {
  const router = useRouter();
  const handleAddToCart = () => {
    router.push("/product"); // Ganti "/navbar-product" dengan rute yang sesuai
  };
  return (
    <div className="bg-yellow-600 w-full rounded overflow-hidden shadow-lg">
      <img className="w-full h-44 object-cover" src={imageUrl} alt={judul} />
      <div className= "px-6 py-3">
        {fakultas && (
          <p className="text-gray-400 font-semibold text-base mt-2 uppercase">
            {fakultas}
          </p>
        )}
        <div className=" text-xl mb-2">{judul}</div>
        <p className="text-gray-700 text-base">{deskripsi}</p>
        {harga && (
          <p className="text-red-600 text-base mt-2">{numberToRupiah(harga)}</p>
        )}
      </div>
      <div className="px-6 py-3">
        {isInCart ? ( // ubah teks tombol berdasarkan properti inCart
          <button
            className="bg-red-500 hover:bg-red-600 text-white hover:text-white font-bold py-2 px-4 rounded"
            onClick={removeFromCart} // tambahkan event onClick removeFromCart
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="bg-gray-200 hover:bg-teal-500 text-gray-900 hover:text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CardItem2;
