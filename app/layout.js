import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className={`flex flex-col min-h-screen ${inter.className}`}>
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
