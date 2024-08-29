import { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
