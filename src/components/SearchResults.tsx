"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard"; // ✅ Import your card
import '../app/globals.css';
export default function SearchResults() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";
  const [products, setProducts] = useState([]);
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

  const filteredProducts = products.filter((p: any) =>
    p.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">
        Results for <span className="text-success">"{searchTerm}"</span>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: any) => (
              <div key={product.id} className="col-md-3 mb-4">
                <ProductCard product={product} from="/" /> {/* ✅ Same UI as other cards */}
              </div>
            ))
          ) : (
            <p className="text-danger">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
