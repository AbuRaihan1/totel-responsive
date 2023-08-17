import FindBestWay from "@/components/home/BestWay/FindBestWay";
import Categories from "@/components/home/Categories/Categories";
import GetInspiration from "@/components/home/GetInspiration/GetInspiration";
import AdSection from "@/components/home/NewAdSection/AdSection";
import Footer from "@/components/home/NewFooter/Footer";
import Nav from "@/components/home/NewNavbar/Nav";
import Partners from "@/components/home/Partners/Partners";
import BrowseFromCategory from "@/components/home/BrowseFromCategory/BrowseFromCategory";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head data-theme="cupcake">
        <title>Totel - Book your comfort hotel</title>
      </Head>
      <Nav />
      <Categories />
      <BrowseFromCategory />
      <GetInspiration />
      <Partners />
      <AdSection />
      <FindBestWay />
      <Footer />
    </div>
  );
}
