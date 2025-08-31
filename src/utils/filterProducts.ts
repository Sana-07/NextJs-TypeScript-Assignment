// utils/filterProducts.ts
export function searchProducts(products: any[], query?: string) {
  if (!query) return products;
  const lower = query.toLowerCase().trim();
  return products.filter((p) =>
    p.title.toLowerCase().includes(lower)
  );
}
