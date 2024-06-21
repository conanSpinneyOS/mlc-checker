import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MLC Checker",
  description: "This is a MLC Checking app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`p-5 ${inter.className}`}>
          {children}
        </body>
      </html>
    </>
  );
}
