// components/PageWrapper.tsx
import type { ReactNode } from "react";
import "../styles/pagewrapper.css";

type PageWrapperProps = {
  title: string;
  description?: string; // ✅ optional
  children: ReactNode;
};

export default function PageWrapper({
  title,
  description,
  children,
}: PageWrapperProps) {
  return (
    <section className="container py-4">
      <h1
        className="text-center mb-5 mt-5 mb-md-3 fw-bold text-success"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {title}
      </h1>

      {description && (
        <p
          className="text-center text-muted mb-4 mb-md-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {description}
        </p>
      )}

      {children}
    </section>
  );
}
