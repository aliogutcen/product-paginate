"use client";
import useFetchProduct from "@/hooks/useFetchProduct";
import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import ProductGallery from "./productGallery";
import ProductInfo from "./productInfo";

type Props = {
  productId: any;
};

const ProductDetail = (props: Props) => {
  const { product, error, loading } = useFetchProduct({ id: props.productId });
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card className="col-span-5">
        <CardContent className=" py-4 ">
          <ProductGallery
            thumbnail={product.thumbnail}
            gallery={product.images}
            title={product.title}
          />
        </CardContent>
      </Card>

      <Card className="col-span-7">
        <CardContent className=" py-4 ">
          <ProductInfo
            rating={product.rating}
            title={product.title}
            brand={product.brand}
            category={product.category}
            price={product.price}
            stock={product.stock}
            desc= {product.description}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetail;
