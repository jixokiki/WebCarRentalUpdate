"use client";
import CardItem from "@/components/CardItem";
import DivisionItem from "@/components/DivisionItem";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CardItem2 from "@/components/CardItem2";


export default function Home() {
  const { user, userProfile } = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState(""); // Inisialisasi state userName dengan nilai awal kosong
  useEffect(() => {
    if (user && userProfile.role === "admin") { //user
      router.push("/admin");// /
    }else if (user && userProfile.role === "user") { //admin
      // Jika user adalah admin, kita dapat menampilkan alert selamat datang
      // dan menampilkan nama admin dari userProfile
      alert("Selamat datang, " + userProfile.name);
      setUserName(userProfile.name);
    }
  }, [user, userProfile, router]);

  return (
    <div>
      <Navbar />
      <div className="relative">
        <Image
          src={"/assets/Tanams.jpeg"}
          width={3000 / 3}
          height={2000 / 3}
          className="relative w-full h-screen object-cover"
          alt="Home Page"
          priority
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center flex flex-col gap-3 w-3/4 md:w-fit">
          <h1 className="text-5xl font-extrabold text-yellow-650">
            TANAMS RENT
          </h1>
          <p className="text-xl">Make Your Destination a Reality</p>
          <button className="bg-orange-500 p-4 rounded-lg font-bold text-xl">
            TANAMS PRODUCTION
          </button>
        </div>
      </div>
      <div className="bg-yellow-900 p-5 md:p-24">
        <div className="text-center my-10 ">
          <h2 className="text-3xl mb-3">Our Products</h2>
          <p>Product Offer from DIAM Production</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CardItem2
            judul={"Hyundai Stargezer"}
            deskripsi={"Hyundai Stargezer"}
            imageUrl={"/assets/HyundaiStargezer/mobil3.jpg"}
          />
          <CardItem2
            judul={"Mitsubishi Xpander Ultimate"}
            deskripsi={"Mitsubishi Xpander Ultimate at 2023 Hitam Genap"}
            imageUrl={"/assets/Mitsubishi Xpander Ultimate at 2023 Hitam Genap/WhatsApp Image 2024-01-12 at 13.45.21.jpeg"}
          />
          <CardItem2
            judul={"Toyota Agya G"}
            deskripsi={"Toyota Agya G at 1,2 2018 Hitam Ganjil"}
            imageUrl={"/assets/Toyota Agya G at 1,2 2018 Hitam Ganjil/WhatsApp Image 2024-01-12 at 13.46.04.jpeg"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}