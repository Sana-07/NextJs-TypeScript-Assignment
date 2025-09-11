import ProductCard from "@/components/ProductCard";
import PageWrapper from "@/components/PageWrapper";
import { searchProducts } from "@/utils/filterProducts";
// import "../globals.css";

export const revalidate = 10;

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

interface ISRPageProps {
  searchParams?: {
    search?: string;
  };
}

export default async function ISRPage({ searchParams }: ISRPageProps) {
  const { products } = await getProducts();
  const filtered = searchProducts(products, searchParams?.search);

  return (
    <PageWrapper title="Experience the Power of ISR ⏳">
      {filtered.length > 0 ? (
        <div className="row">
          {filtered.map((p: any) => (
            <div
              key={p.id}
              className="col-md-3 mb-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <ProductCard product={p} from="/isr" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </PageWrapper>
  );
}
