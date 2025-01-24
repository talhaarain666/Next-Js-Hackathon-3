import Image from "next/image";

export default function TopCTCard({ img }) {
    return <>
        <div>
            <div className="bg-[#F6F7FB] p-16 rounded-full">

                <Image
                    src={img}
                    alt="Image"
                    className="object-cover w-full h-full"
                />
            </div>
            <h3 className="mt-4 text-2xl text-center">Mini LCW Chair</h3>
            <h5 className="text-center">$56.00</h5>
        </div>
    </>
}