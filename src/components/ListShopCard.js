import Image from "next/image";

export default function GridShopCard({ img }) {
    return <>
        <div className="w-full mx-64 flex m-8">
            <div className="bg-gray-200 h-40">

                <Image
                    src={img}
                    alt="Image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-8">
                <h3 className="my-2 font-bold">Mini LCW Chair</h3>
                <h5>$56.00 <s className="text-[#FB2E86]">$80.00</s></h5>
                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            </div>
        </div>
    </>
}