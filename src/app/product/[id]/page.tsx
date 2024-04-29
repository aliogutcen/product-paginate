
import ProductDetail from "@/components/productDetail";
import useFetchProduct from "@/hooks/useFetchProduct";

export default function ProductDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {

    return (
        <section role="products-page" className="mt-16 container m-auto grid grid-cols-12 gap-4">
          <ProductDetail productId={params.id}/>
        </section>
    );
}
