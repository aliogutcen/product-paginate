/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import useFetchProducts from "@/hooks/useFetchProducts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Products } from "@/lib/type";
import { Card } from "./ui/card";
import { PackageSearch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { calculatePages, getStockColor } from "@/lib/helpers";
import TableOperation from "./tablePagination";
import { Input } from "./ui/input";
import { debounce } from 'lodash';
import PerPage from "./perPage";
import { useRouter } from "next/router";
const productTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [limit, setLimit] = useState('');
  const { products, error, loading } = useFetchProducts(searchTerm,limit);

  if (loading) {
    return <Card className="min-h-[80dvh]">Loading...</Card>;
  }

  // search
  const debouncedSetSearchTerm = debounce((value: string) => setSearchTerm(value), 50);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchTerm(e.target.value);
  };

  const page = calculatePages(products.total, 10);

  return (
    <Card className="">
      <TableCaption className="flex  px-4 py-4 gap-4">
        <Input placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
       
        <TableOperation page={page}/>
      </TableCaption>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead className="w-[300px]">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="w-[200px]">Brand</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.products.length > 0 &&
            products?.products?.map((product: Products) => (
              <TableRow key={product.id}>
                <TableCell className="w-24 h-20 ">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="rounded-md w-full h-full  object-contain"
                  />
                </TableCell>
                <TableCell className="font-medium w-fit">
                  {product.title}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>

                <TableCell>{product.price}</TableCell>
                <TableCell
                  className={`${getStockColor(product.stock)} cursor-pointer`}
                >
                  {product.stock}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/product/${product.id}`}>
                    <PackageSearch
                      className="text-muted-foreground cursor-pointer "
                      size={18}
                    />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

      </Table>

      {error && <div>Error: {error}</div>}
    </Card>
  );
};

export default productTable;
