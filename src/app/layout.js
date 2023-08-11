import "./globals.css";
import { Inter } from "next/font/google";

import NavItem from "./navbar/NavItem";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "online translator",
  description: "Online translator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NavItem></NavItem>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
