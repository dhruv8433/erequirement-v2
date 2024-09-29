"use client";

import "./globals.css";
import "../scss/style.scss";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import MyContainer from "../custom/MyContainer";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ProviderStore } from "../store/StoreProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/theme";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      // once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <ProviderStore>
          {/* Now the theme can be selected properly */}
          <ThemeSelector>
            <CssBaseline />
            <Navbar />
            <MyContainer>{children}</MyContainer>
            <Footer />
          </ThemeSelector>
          <Toaster />
        </ProviderStore>
      </body>
    </html>
  );
}

function ThemeSelector({ children }) {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}
