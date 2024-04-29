
import ProductTable from "@/components/productTable";
import Image from "next/image";

export default function Home() {
  return (
   <section role="products-page" className="mt-16 container m-auto max-h-dvh">
   <h1 className="text-xl font-bold mb-4">
    Products List
    </h1>
    <ProductTable/>
   </section>
  );
}
