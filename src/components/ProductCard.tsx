"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/ProductCard.module.css"; // CSS module import

type ProductCardProps = {
  product: any;
  from?: string;
};

export default function ProductCard({ product, from }: ProductCardProps) {
  const pathname = usePathname();

  return (
    <div
      className={`card ${styles.productCard}`}
      data-aos="zoom-in"       // 👈 AOS animation add
      data-aos-duration="800"  // 👈 optional speed
    >
      <img
        src={product.thumbnail}
        className={styles.productImg}
        alt={product.title}
      />
      <div className={`card-body text-center d-flex flex-column justify-content-between ${styles.cardBody}`}>
        <div>
          <p className={styles.categoryText}>{product.category || "Product"}</p>
          <h6 className={styles.productTitle}>{product.title}</h6>
          <p className={styles.price}>${product.price}</p>
        </div>
        <Link
          href={`/product/${product.id}?from=${from || pathname}`}
          className={styles.viewBtn}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
