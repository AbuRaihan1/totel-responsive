import RootLayout from "@/UI/RootLayout/RootLayout";
import ListingUserCards from "@/components/listing/ListingUserCards";
import Head from "next/head";
import Link from "next/link";
import ListingSideBar from "./ListingSideBar";

export default function Listing() {
  return (
    <div>
      <Head>
        <title>Listing</title>
      </Head>
      <RootLayout>
        <div className="bg-white pt-3 flex flex-row items-start justify-start text-[0.94rem] text-gray-50  lg:h-auto  md:flex-row sm:flex-col">
          <ListingSideBar />
          <ListingUserCards />
        </div>
      </RootLayout>
    </div>
  );
}
