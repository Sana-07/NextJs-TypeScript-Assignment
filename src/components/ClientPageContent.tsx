'use client';

import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import PageWrapper from "@/components/PageWrapper";
import { searchProducts } from "@/utils/filterProducts";

export default function ClientPageContent() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = searchProducts(products, search);

  return (
    <PageWrapper title="🤝 Client-Side Rendering (CSR)">
      <div className="my-5">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : filtered.length > 0 ? (
          <div className="row">
            {filtered.map((p) => (
              <div key={p.id} className="col-md-3 mb-4" data-aos="fade-up">
                <ProductCard product={p} from={pathname} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </PageWrapper>
  );
}
