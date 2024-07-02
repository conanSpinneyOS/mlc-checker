import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className={`flex flex-col min-h-screen ${inter.className}`}>
          <div className="flex-grow">{children}</div>
          <Footer />
          <Toaster />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
