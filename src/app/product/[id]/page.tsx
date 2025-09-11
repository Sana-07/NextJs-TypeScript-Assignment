import { Metadata } from "next";
import ProductDetailsClient from "./ProductDetailsClient";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

// ✅ Props ko `any` type de do taake Next.js build-time type mismatch na kare
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.thumbnail],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.thumbnail],
    },
  };
}

// ✅ Page Component
export default function ProductDetailsPage({
  params,
  searchParams,
}: any) {
  return (
    <ProductDetailsClient id={params.id} from={searchParams?.from || "/"} />
  );
}
