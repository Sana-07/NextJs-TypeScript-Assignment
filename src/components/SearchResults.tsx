"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [searchTerm]);

  if (!searchTerm) return null;

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">
        Results for <span className="text-success">"{searchTerm}"</span>
      </h2>

      {loading ? (
        <p className="text-center">⏳ Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <ProductCard product={product} from="/" />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-danger fw-bold">
          ❌ No products found matching <em>{searchTerm}</em>
        </p>
      )}
    </div>
  );
}
