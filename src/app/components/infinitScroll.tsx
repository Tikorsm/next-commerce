'use client'

import { ProductType } from "@/types/ProductType";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Product from "./Product";
import { fetchProducts } from "../actioons";


export default function InfiniteScroll({
  initialProducts
}: { initialProducts: ProductType[]; 
}){
    const [products, setProducts] = useState<ProductType[]>(initialProducts);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [ref, inview] = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    const lastProductId = products[products.length - 1]?.id;

    const loadMoreProducts = useCallback(async () => {
        setIsLoading(true);
        const {formatedProducts, has_more} = await fetchProducts({ lastProductId });
        if(formatedProducts) {
            setProducts((prevProducts) => [...prevProducts, ...formatedProducts]);
            setHasMore(has_more)

        }

        setIsLoading(false);

    }, [lastProductId ])

    useEffect(() => {
        if (inview && hasMore && !isLoading){
            loadMoreProducts()
        } 
    }, [inview , hasMore , isLoading, loadMoreProducts])

    if (!products)
    return <div> carregando...</div>

    return (
       <>
        {products.map((products) => (
            <Product key={products.id} product={products}></Product>
          ))}

        {hasMore && (
          <div ref={ref}>
            carregando mais registro
          </div>
        )}          

          </>
    )
}

