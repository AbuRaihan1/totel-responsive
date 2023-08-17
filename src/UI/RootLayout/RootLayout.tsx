import React from "react";
import Footer1 from "@/components/footer/Footer1";
import Nav from "@/components/home/NewNavbar/Nav";
// import Footer from "@/components/home/NewFooter/Footer";
import Footer from "../../components/footer/Footer1";
interface RootLayout {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayout) {
  return (
    <div>
      {/* <Nav /> */}
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
