"use client"
import GridShopCard from "../../components/GridShopCard"
import ListShopCard from "../../components/ListShopCard"
import Header from "../../components/Header"
import Img1 from "../../../public/images/Shop/image 9.png"
import Img1List from "../../../public/images/img 1 list.jpg"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
export default function Shop() {
    interface Product {
        _id: string;
        name: string;
        price: number;
        discountedPrice: number;
        image: {
            asset: {
                url: string;
            };
        };
    }
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        const query = `*[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountedPrice,
        image{
          asset->{
            url
          }
        },
        category->{
      name
    }
      }`;
        const data = await client.fetch(query);
        setProducts(data);
        setLoading(false);

    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Header title="Shop Grid Default" />
            <div className="flex items-center justify-center min-h-screen">
                {loading ?
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-500 border-opacity-50"></div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">

                        {products.map((product) => (

                            <Link
                                key={product._id}
                                href={{
                                    pathname: `/product/${product._id}`,
                                    query: { productDetails: JSON.stringify(product) }, // Optional query params
                                }}
                            >
                                <GridShopCard
                                    key={product._id} // Always add a key when mapping over a list
                                    img={product.image.asset.url} discountedPrice={product.discountedPrice} name={product.name} price={product.price} />
                            </Link>
                        ))}

                    </div>
                }
            </div>
            {/* <ListShopCard img={Img1List} /> */}
        </div>
    );
}
