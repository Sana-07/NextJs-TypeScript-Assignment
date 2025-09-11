import ProductCard from "@/components/ProductCard";
import PageWrapper from "@/components/PageWrapper";
import { searchProducts } from "@/utils/filterProducts";


async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function StaticPage({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const { products } = await getProducts();
  const filtered = searchProducts(products, searchParams?.search);

  return (
    <PageWrapper title="📄 Static Site Generation (SSG)">
      {filtered.length > 0 ? (
        <div className="row">
          {filtered.map((p: any) => (
            <div
              key={p.id}
              className="col-md-3 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <ProductCard product={p} from="/static" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </PageWrapper>
  );
}
 