import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

function RootLayout({ children }) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
