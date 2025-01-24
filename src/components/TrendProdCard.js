import Image from "next/image";

export default function TrendProdCard({ img }) {
    return <>
        <div className="bg-white p-2 shadow-md	">
            <div className="bg-[#F6F7FB] p-12">

                <Image
                    src={img}
                    alt="Image"
                    className="object-cover w-full h-full"
                />
            </div>
            <h3 className="mt-4 text-2xl text-center">Mini LCW Chair</h3>
            <h5 className="text-center mb-4">$56.00</h5>
        </div>
    </>
}