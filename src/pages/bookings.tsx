import RootLayout from "@/UI/RootLayout/RootLayout";
import BookingRoom from "@/components/listing/BookingRoom";
import Head from "next/head";
import Link from "next/link";
import ListingSideBar from "./ListingSideBar";

function bookings() {
  return (
    <div>
      <Head>
        <title>Bookings</title>
      </Head>
      <RootLayout>
        <div className="bg-white pt-3 flex flex-row items-start justify-start text-[0.94rem] text-gray-50  lg:h-auto  md:flex-row sm:flex-col">
          <ListingSideBar />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 py-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
              <BookingRoom key={i} />
            ))}
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default bookings;
