"use client";

import { useSearchParams } from "next/navigation";
import SearchResultsWrapper from "./SearchResultsWrapper";
import RenderingSection from "./RenderingSection";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const hasSearch = !!searchParams.get("search");

  // 🟢 Hydration Guard
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* ✅ Show Search Results if searching */}
      {hasSearch ? (
        <SearchResultsWrapper />
      ) : (
        <>
          {/* ✅ Rendering Section */}
          <RenderingSection />

          {/* ✅ Professional Section */}
          <section className="py-5 bg-white border-top">
            <div className="container">
              <h2
                className="display-4 fw-bold text-uppercase border-bottom pb-2 mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Professional
              </h2>

              <div className="row g-4 align-items-center">
                {/* Left Text */}
                <div
                  className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  {/* 🆕 Subheading added here */}
                  <h4 className="fw-bold text-success mb-3">
                    Why Next.js Stands Out
                  </h4>
                  <p>
                    Next.js gives developers the ability to build fast, scalable, and
                    professional-grade web applications. By understanding rendering
                    strategies, you can optimize performance and UX.
                  </p>
                  <p>
                    Whether you choose CSR, SSR, SSG, or ISR, each method can be applied
                    professionally to suit your project’s requirements.
                  </p>
                </div>

                {/* Right Images */}
                <div
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="row g-3">
                    <div className="col-6" data-aos="zoom-in" data-aos-delay="300">
                      <img
                        src="./develpor"
                        alt="Professional Developer"
                        className="img-fluid rounded shadow-sm"
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-6" data-aos="zoom-in" data-aos-delay="500">
                      <img
                        src="./team"
                        alt="Team Collaboration"
                        className="img-fluid rounded shadow-sm"
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Section */}
              <div className="row g-4 mt-4 align-items-center">
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="./work.jpg"
                    alt="Working on Laptop"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {/* 🆕 Subheading added here */}
                  <h4 className="fw-bold text-success mb-3">
                    Smart Technical Choices
                  </h4>
                  <p>
                    Professionalism is not only about design — it’s about making smart
                    technical choices. Next.js empowers you to deliver apps that are fast,
                    scalable, and user-friendly.
                  </p>
                  <p className="mb-0 text-end fw-bold fst-italic text-primary">
                    <Link
                      href="https://nextjs.org"
                      target="_blank"
                      className="text-decoration-none text-primary"
                    >
                      www.nextjs.org <FaExternalLinkAlt className="ms-1" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
