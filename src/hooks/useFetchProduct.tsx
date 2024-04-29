"use client"
import { get } from "@/lib/fetch";
import { Products } from "@/lib/type";
import exp from "constants";
import { useState, useEffect } from "react";

type Props = {
    id: any;};

const useFetchProduct = (props: Props) => {
  const [product, setProduct] = useState<Products>({} as Products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    get(`/products/${props.id}`)
      .then((data: any) => {
        if (data.status === 200) {
          setProduct(data.data);
        }
      })
      .catch((error) => {
        return (
            setProduct({} as Products),
          setError(error.response.data)
        );
      })
      .finally(() => setLoading(false));
  }, [props.id]);

  return { product, loading, error };
};

export default useFetchProduct;
