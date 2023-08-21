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
        <div className="bg-white pt-3 text-[0.94rem] text-gray-50 grid grid-cols-[17.5rem,1fr]">
          <ListingSideBar />
          <ListingUserCards />
        </div>
      </RootLayout>
    </div>
  );
}
