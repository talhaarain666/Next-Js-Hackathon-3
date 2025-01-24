import Image from "next/image";

export default function GridShopCard({ img, name, price, discountedPrice }) {
    return <>
        <div className="w-[270px]">
            <div className="bg-[#F6F7FB] p-12 w-full h-[300px] flex justify-center items-center space-y-4">
                <div className="w-full h-full flex justify-center items-center p-4">
                    <Image
                        src={img}
                        alt={name}
                        className="object-contain w-full h-full"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <h3 className="mt-4 font-bold text-center">{name}</h3>
            <h5 className="text-center">
                {discountedPrice} <s className="text-[#FB2E86]">{price}</s>
            </h5>
        </div>

    </>
}