"use client";
import useAuth from "@/app/hooks/useAuth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const About = () => {
  const { user, userProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && userProfile.role === "admin") {
      router.push("/admin");
    }
  }, [user, userProfile, router]);

  return (
    <div>
      <Navbar />
      <div className="relative mt-20 md:mt-14">
        <Image
          src={"/assets/Tanams.jpeg"}
          width={1410 / 2}
          height={675 / 2}
          priority
          sizes="(max-width: 768px) 600px, 1410px"
          alt="about page"
          className="relative w-full h-[600px] md:h-screen object-cover object-center mx-auto"
        />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center flex flex-col gap-3">
          <h1 className="text-5xl font-extrabold text-gray-950">About</h1>
        </div>
      </div>
      <div className="p-8 md:p-24 flex flex-col gap-6 text-justify">
        <h2 className="font-bold text-3xl text-center md:text-left">VISI</h2>
        <p>
        Menjadi pilihan utama dan terpercaya dalam penyediaan layanan rental mobil yang memberikan kemudahan, keamanan, dan kenyamanan bagi pelanggan di seluruh wilayah.
        </p>
        <h2 className="font-bold text-3xl text-center md:text-left">MISI</h2>
        <p>
          TANAMS RENT memiliki sejumlah misi yang menjadi pilar strategis
          perusahaan.
          <br />
          <br />
          Memberikan Pilihan Mobil Berkualitas: Menyediakan beragam pilihan mobil berkualitas dengan kondisi prima dan terawat, sehingga pelanggan dapat menemukan mobil yang sesuai dengan kebutuhan dan preferensi mereka.
          <br />
          <br />
          Pelayanan Pelanggan Unggul: Menyediakan layanan pelanggan yang ramah, responsif, dan profesional, mulai dari proses pemesanan hingga pengembalian mobil, untuk memastikan pengalaman menyewa mobil yang memuaskan bagi setiap pelanggan.
          <br />
          <br />
          Kemudahan Akses dan Transparansi: Menghadirkan platform pemesanan yang user-friendly dan transparan, serta memberikan informasi yang jelas mengenai harga, syarat dan ketentuan, serta kondisi mobil yang disewakan, sehingga pelanggan dapat melakukan pemesanan dengan mudah dan tanpa keraguan.
          <br />
          <br />
          Keamanan dan Kepuasan Pelanggan: Menjamin keamanan pelanggan dengan menyediakan mobil-mobil yang dilengkapi dengan fitur keamanan terkini, serta menjamin kepuasan pelanggan dengan menyediakan layanan bantuan darurat 24/7 dan menanggapi masukan serta keluhan pelanggan dengan cepat dan tepat.
          <br />
          <br />
          Inovasi Berkelanjutan: Terus melakukan inovasi dalam penyediaan layanan, baik dari segi teknologi maupun layanan tambahan, untuk meningkatkan kualitas dan nilai tambah dari pengalaman menyewa mobil bagi pelanggan.
          <br />
          <br />
          Kemitraan yang Berkelanjutan: Membangun hubungan kemitraan yang berkelanjutan dengan pihak-pihak terkait, seperti perusahaan asuransi dan bengkel, guna memastikan kelancaran operasional dan memberikan jaminan terhadap kualitas layanan yang disediakan.
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
