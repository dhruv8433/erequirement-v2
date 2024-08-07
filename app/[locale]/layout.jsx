import "./globals.css";
import "../style/style.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MyContainer from "../common/MyContainer";
import { ProviderStore } from "../store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <ProviderStore>
          <Navbar />
          <MyContainer>{children}</MyContainer>
          <Footer />
        </ProviderStore>
      </body>
    </html>
  );
}
