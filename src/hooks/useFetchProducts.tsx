import { useState, useEffect } from "react";
import { get } from "@/lib/fetch";
import { Products } from "@/lib/type";

type Product = {
  products: Products[];
  limit: number;
  skip: number;
  total: number;
};

type Props = {
  search?: string;
};

const useFetchProducts = (searchTerm = "", limit="") => {
  const [products, setProducts] = useState<Product>({
    products: [],
    limit: 0,
    skip: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (Number(params.get("skip")) === null || Number(params.get("skip")) === undefined || Number(params.get("skip")) === 0){
      params.set("skip", "0");
    }

    const endpoint = `/products${
      searchTerm ? `/search?q=${encodeURIComponent(searchTerm)}&limit=10${Number(params.get("skip")) === 0 ? "" : `&skip=${params.get("skip")}`}` : `?limit=10${Number(params.get("skip")) === 0 ? "" : `&skip=${params.get("skip")}`}`
    }`;

    get(endpoint)
      .then((data: any) => {
        if (data.status === 200) {
          setProducts(data.data);
        }
      })
      .catch((error) => {
        setError(error.response ? error.response.data : "An error occurred");
        setProducts({ products: [], limit: 0, skip: 0, total: 0 });
      })
      .finally(() => setLoading(false));
  }, [searchTerm,limit]);

  return { products, loading, error };
};

export default useFetchProducts;
