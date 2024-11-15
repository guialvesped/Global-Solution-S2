"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {

  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
    <Header/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row gap-8 row-start-2 items-center sm:items-start">

      </main>
    </div>
    <Footer/>
    </>
  );
}
