import RootLayout from "@/UI/RootLayout/RootLayout";
import BottomBar from "@/components/partnerhosting/BottomBar";
import Feature from "@/components/partnerhosting/Feature";

// import home from '/Images/icons/home.png';
import Container from "@/components/Container";
import UpperNavigation from "@/components/partnerhosting/UpperNavigation";
import Head from "next/head";
import { FaBars } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdOutlineBedroomChild, MdSingleBed } from "react-icons/md";

type Props = {};

function RoomType({}: Props) {
  return (
    <div>
      <Head>
        <title>Partner hosting</title>
      </Head>
      <RootLayout>
        <Container>
          <div className="mt-24">
            <UpperNavigation />
            <div className="lg:w-[1050px] w-full mt-8 ">
              <p className="text-[18px] font-semibold mb-3">Step 2</p>
              <h2 className="lg:text-[52px] sm:text-[32px] font-semibold my-0 py-0">
                Which of these best describes your place?
              </h2>
              <p className="text-[18px] font-normal mt-4">
                In this step, we'll ask you which type of stays you have and if
                guests will book the entire place or just a room. Then let us
                know the location and how many guests can stay.
              </p>
            </div>

            <div className="flex gap-4 items-center my-8">
              <Feature text="Hotel" Icon={FaBars} />
              {/* <Feature text="Shared Room" Icon={home} /> */}
              <Feature text="Single Room" Icon={MdSingleBed} />
            </div>
            <div className="ring-1 ring-card w-full " />

            <div className="lg:w-[1050px] w-full  pt-7">
              <h2 className="lg:text-[52px] sm:text-[32px] font-semibold my-0 py-0">
                What type of place will roommate have?
              </h2>
              <p className="text-[18px] font-normal mt-4">
                In this step, we'll ask you which type of stays you have and if
                guests will book the entire place or just a room. Then let us
                know the location and how many guests can stay.
              </p>
            </div>

            <div className="flex gap-4 items-center my-8">
              <Feature text="Birstol" Icon={FiHome} />
              <Feature text="Birmingham" Icon={MdOutlineBedroomChild} />
              <Feature text="Southampton" Icon={MdSingleBed} />
              <Feature text="Northampton" Icon={MdSingleBed} />
            </div>
            <div className="ring-1 ring-card w-full " />

            <div className="lg:w-[700px] w-full py-7">
              <h2 className="lg:text-[52px] sm:text-[32px] font-semibold my-0 py-0">
                Where's your place located?
              </h2>
              <p className="text-[18px] font-normal mt-2">
                Your address is only shared with guests after they’ve made a
                reservation.
              </p>
            </div>

            <div className=" w-full mb-4 ">
              <div className="">
                <div className="maprouter">
                  <input
                    type="text"
                    className="border-2 outline-none border-[#DAE0E6] w-[327px]  px-5 py-3 absolute mt-6 ml-6 rounded-full shadow-2xl placeholder:text-[#272D37] placeholder:font-[500] placeholder:text-[18px] font-[500] text-[18px]"
                    placeholder="Enter your address"
                  />
                  <iframe
                    className="gmap_iframe rounded-2xl"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=564&amp;height=480&amp;hl=en&amp;q=Banani, Dhaka, Bangladesh&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
                <style>
                  {`
          .mapouter{position:relative;}
          .gmap_canvas{overflow:hidden;background:none!important;height:480px;}
          .gmap_iframe{height:400px!important;}
        `}
                </style>
              </div>
            </div>
            <hr className="border border-card w-full my-8" />

            <div>
              <div>
                <h2 className="lg:text-[52px] sm:text-[32px] font-semibold my-0 py-0">
                  Who can stay in your place?
                </h2>
                <p className="text-[18px] font-normal">
                  You'll add more details later, such as bed types.
                </p>
              </div>

              <div>
                <p className="text-[14px] text-[#919BA7] font-[500]">
                  Who can stay there?{" "}
                </p>
              </div>
            </div>

            <BottomBar
              back="/partner-hosting"
              next="/partner-hosting/standout"
            />
          </div>
        </Container>
      </RootLayout>
    </div>
  );
}

export default RoomType;
