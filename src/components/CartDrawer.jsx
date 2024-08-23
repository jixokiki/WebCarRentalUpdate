import useAuth from "@/app/hooks/useAuth";
import useProduct from "@/app/hooks/useProduct";
import { numberToRupiah } from "@/utils/rupiah";
import React from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const CartDrawer = () => {
  const { cart, removeFromCart } = useProduct();
  const { userProfile } = useAuth();

  const totalPrice = cart.reduce((acc, item) => acc + parseInt(item.price), 0);

  const generateWhatsAppMessage = () => {
    const message = cart
      .map((item) => `- Pesanan ${item.title}: ${numberToRupiah(item.price)}`)
      .join("\n");
    const total = numberToRupiah(totalPrice);
    return `*Pesanan Baru TANAMS RENT*\n-------------------------------------\nUser\nNama : _${userProfile.name}_\nEmail : _${userProfile.email}_\n-------------------------------------\nDetail pesanan\n-------------------------------------\n${message}\n-------------------------------------\n*Total*: ${total}\n-------------------------------------\n*Silahkan Melakukan Transaksi Ke No Rekening*: 327506240902`;
  };

  const handlePesanClick = () => {
    // const message = generateWhatsAppMessage();
    // const phoneNumber = "6285817298071"; // Ganti dengan nomor WhatsApp yang diinginkan
    // const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    //   message
    // )}`;
    // window.open(whatsappLink, "_blank");
    if (cart.length > 5) {
      // Jika jumlah pesanan lebih dari 5 kali, tampilkan alert
      alert("Maaf, Anda hanya diperbolehkan melakukan pesanan maksimal 5 kali.");
    } else {
      const message = generateWhatsAppMessage();
      const phoneNumber = "6285817298071"; // Ganti dengan nomor WhatsApp yang diinginkan
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <>
      <div className="drawer  drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {cart.length != 0 ? (
            <div className="indicator">
              <span className="indicator-item badge badge-error text-white">
                {cart && cart.length}
              </span>
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-accent text-teal-100"
              >
                <FaShoppingCart size={25} />
              </label>
            </div>
          ) : (
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-accent text-teal-100"
            >
              <FaShoppingCart size={25} />
            </label>
          )}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-[500px] min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {cart.length === 0 && (
              <li className="text-center p-10">
                Anda Tidak Memiliki Pesanan...
              </li>
            )}
            {cart &&
              cart.map((data) => (
                <li
                  key={data.id}
                  className="flex flex-row items-center justify-between mt-4"
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    width={70}
                    height={70}
                    className="object-cover rounded-2xl"
                  />
                  <p>{data.title}</p>
                  <p>{numberToRupiah(data.price)}</p>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => removeFromCart(data)}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            <hr className="mt-6" />
            <li className="my-3 mx-3 text-2xl text-red-600">
              Total: {numberToRupiah(totalPrice)}
            </li>
            <hr />
            <button
              className="btn btn-accent mt-6 w-full"
              onClick={handlePesanClick}
            >
              Pesan
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
