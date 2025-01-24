import Image from "next/image";
import BG from "../../public/images/promotion bg.png"
import Sofa from "../../public/images/sofa promotional header.png"
import Sofa2 from "../../public/images/Group 153.png"
import Light from "../../public/images/image 32.png"
import NewsLetterBg from "../../public/images/Rectangle 102.png"
import SofaBg from "../../public/images/Rectangle 101.png"
import TopCt1 from "../../public/images/Top Catagories/image 20.png"
import TopCt2 from "../../public/images/Top Catagories/image 1168.png"
import TopCt3 from "../../public/images/Top Catagories/image 1171.png"
import TopCTCard from "../components/TopCTCard"
import TrendProdCard from "../components/TrendProdCard"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>
        <div className="relative w-full h-auto">

          <Image
            src={BG}
            alt="Promotion"
            className="object-cover w-full h-full"
          />

          {/* Text and Button Container */}
          <div className="absolute top-0 left-0">
            <Image
              src={Light}
              alt="Overlay Image"
            // width={100}
            // height={100}
            />
          </div>

          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 space-y-6  md:w-1/3">
            <div className="text-xl mb-2">Best Furniture For Your Castle....</div>
            <div className="text-5xl font-bold mb-2">
              New Furniture Collection
              <br />
              Trends in 2020
            </div>
            <div className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.
            </div>
            <Link href="/shop">
              <button className="bg-[#FB2E86] text-white text-base py-2 px-8 hover:bg-pink-400 transition-colors duration-200">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Sofa Image */}
          <div className="absolute top-1/2 right-32 transform -translate-y-1/2">
            <Image
              src={Sofa}
              alt="Overlay Image"
            // width={100}
            // height={100}
            />
          </div>
        </div>


        {/* Top Categories */}
        <section className="py-12 my-4">

          <h1 className="text-4xl font-bold text-center mb-8">Top Categories</h1>
          <div className="grid grid-cols-4 grid-rows-1 px-64 gap-8">
            <TopCTCard img={TopCt1} />
            <TopCTCard img={TopCt2} />
            <TopCTCard img={TopCt3} />
            <TopCTCard img={TopCt1} />



          </div>

        </section>



        <section className="py-12 my-4 relative">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={SofaBg}
              alt="Promotion"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between w-full">
              <div className="relative">
                <Image
                  src={Sofa2}
                  alt="Promotion"
                  className="object-contain"
                />
              </div>

              <div>
                <div className="text-4xl font-bold mb-4">
                  Unique Features Of Latest &<br />
                  Trending Products
                </div>

                <button className="bg-[#FB2E86] text-white text-base py-2 px-8 hover:bg-pink-400 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Trending Products */}
        <section className="py-12 my-4">

          <h1 className="text-4xl font-bold text-center mb-8">Trending Products</h1>
          <div className="grid grid-cols-4 grid-rows-1 px-64 gap-8">
            <TrendProdCard img={TopCt1} />
            <TrendProdCard img={TopCt1} />
            <TrendProdCard img={TopCt1} />
            <TrendProdCard img={TopCt1} />

          </div>
        </section>



        <section className="py-12 my-4">

          <div className="relative w-full h-auto">

            <Image
              src={NewsLetterBg}
              alt="Promotion"
              className="object-cover w-full h-full"
            />


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">

              <div className="text-4xl font-bold mb-4">
                Get Leatest Update By Subscribe
                <br />
                0ur Newslater
              </div>

              <button className="bg-[#FB2E86] text-white text-base py-2 px-8 hover:bg-pink-400 transition-colors duration-200">
                Shop Now
              </button>
            </div>


          </div>

        </section>
      </div>
    </>
  );
}
