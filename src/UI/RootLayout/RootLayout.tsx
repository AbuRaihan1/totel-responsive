import React from "react";
import Footer1 from "@/components/footer/Footer1";
import Nav from "@/components/home/NewNavbar/Nav";

interface RootLayout {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayout) {
  return (
    <div>
      <Nav />
      {children}
      <Footer1 />
    </div>
  );
}

export default RootLayout;
