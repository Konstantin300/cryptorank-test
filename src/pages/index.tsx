import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import MainLayout from "../components/ui/MainLayout";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div>Test for Cryptorank.io</div>
    </MainLayout>
  );
}
