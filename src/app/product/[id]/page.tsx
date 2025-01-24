'use client';

import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';
import { urlFor } from '@/sanity/lib/image';
import { addToCart } from '@/utils/cart';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductDetails() {
    const searchParams = useSearchParams();
    const { toast } = useToast()

    // Deserialize the product details
    const productDetails = searchParams.get('productDetails');
    const product = productDetails ? JSON.parse(productDetails) : null;

    if (!product) {
        return <p>No product details found.</p>;
    }

    return (
        <div>
            <Header title="Product Details" />

            <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-md shadow-2xl my-16">
                <div className="grid grid-cols-12 gap-6">
                    {/* Image Section */}
                    <div className="col-span-12 md:col-span-4 bg-gray-200 p-16">
                        <Image
                            src={product.image.asset.url}
                            alt={product.name}
                            className="object-cover w-full h-full"
                            width={100}
                            height={100}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="col-span-12 md:col-span-8 flex flex-col justify-center p-8">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-700 mb-4">
                            {product.description}
                        </p>
                        <div className='flex gap-8'>
                            <p className="text-gray-700">
                                ${product.price}
                            </p>
                            <s className="text-[#FB2E86]">
                                ${product.discountedPrice}
                            </s>
                        </div>
                        <p className='mt-4'>
                            Category: {product.category.name}
                        </p>
                        <div className='mt-4'>

                            <button
                            // onClick={() =>
                            //     addToCart({
                            //       _id: product._id,
                            //       name: product.name,
                            //       price: product.price,
                            //       image: urlFor(product.image).url(),
                            //       quantity: 1,
                            //     });
                                onClick={() => {
                                    toast({
                                      description: "Added to Cart!",
                                      duration: 1000,
                                    })
                                  }}
                            //   }
                            className="bg-[#FB2E86] text-white text-base py-2 px-8 hover:bg-pink-400 transition-colors duration-200">
                                Add to Cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
