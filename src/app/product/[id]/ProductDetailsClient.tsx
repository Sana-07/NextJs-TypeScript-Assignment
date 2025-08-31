"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/ProductDetails.module.css";

type ProductDetailsProps = {
  id: string;
  from: string;
};

export default function ProductDetailsClient({ id, from }: ProductDetailsProps) {
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setActiveImage(data.thumbnail); // default image
      })
      .catch(console.error);
  }, [id]);

  if (!product) {
    return <p className="text-center py-5">Loading...</p>;
  }

  const originalPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className={styles.pageWrapper}>
      <div className="container py-5">
        <div className="row g-5 align-items-stretch">
          {/* Left Section (Main Image + Thumbnails) */}
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div className={`${styles.imageBox} h-100`}>
              <img
                src={activeImage}
                alt={product.title}
                className={`${styles.mainImage} img-fluid h-100 object-fit-contain`}
              />
            </div>

            <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
              {product.images.slice(0, 4).map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt="thumb"
                  className={`${styles.thumbImage} ${
                    activeImage === img ? styles.activeThumb : ""
                  }`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right Section (Details) */}
          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              <p className={styles.categoryText}>{product.category}</p>
              <h1 className={styles.productTitle}>{product.title}</h1>

              {/* Ratings */}
              <p className={styles.rating}>
                ⭐ {product.rating} / 5{" "}
                <span className={styles.reviewText}>
                  ({product.stock} reviews)
                </span>
              </p>

              <p className={styles.description}>{product.description}</p>

              {/* Pricing */}
              <div className={styles.priceSection}>
                <span className={styles.price}>${product.price}</span>
                {originalPrice && (
                  <span className={styles.oldPrice}>${originalPrice}</span>
                )}
                {product.discountPercentage > 0 && (
                  <span className={styles.discountBadge}>
                    -{product.discountPercentage}%
                  </span>
                )}
              </div>

              {/* API-driven Benefits (3 items) */}
              <div className={styles.benefits}>
                <h5>Why you’ll love it</h5>
                <ul>
                  <li>💪 Brand: {product.brand}</li>
                  <li>✨ Rating: {product.rating} / 5</li>
                  <li>🛡️ Stock Available: {product.stock}</li>
                </ul>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-4">
              <button
                onClick={() => (from ? router.push(from) : router.back())}
                className="btn btn-outline-success"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
