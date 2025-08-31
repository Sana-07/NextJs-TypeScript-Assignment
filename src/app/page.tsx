
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/page.css";
import SearchResults from "../components/SearchResults";
import { useSearchParams } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";  // ✅ Yeh line add karo
import '../../src/app/globals.css';
// ✅ import RenderingSection
import RenderingSection from "../components/RenderingSection";

export default function Home() {
  const searchParams = useSearchParams();
  const hasSearch = !!searchParams.get("search");

  return (
    <>
      {/* 🌿 Hero Section */}
      <header className="header-bg">
        <div className="header-content text-center text-white py-5">
          <h1 className="display-4 fw-bold">🌿 Next.js Rendering Demo</h1>
          <p className="lead">
            Explore CSR, SSR, SSG & ISR with real product examples from the DummyJSON API.
          </p>
        </div>
      </header>

      {/* ✅ Show Search Results if searching */}
      {hasSearch ? (
        <SearchResults />
      ) : (
        <>
          {/* ✅ Rendering Section from component */}
          <RenderingSection />
          {/* ✅ Professional Section */}
          <section className="py-5 bg-white border-top">
            <div className="container" data-aos="fade-up">
              <div className="d-flex justify-content-between text-muted small mb-2">
                <span>New Article</span>
                <span>{new Date().getFullYear()}</span>
              </div>

              <h2
                className="display-4 fw-bold text-uppercase border-bottom pb-2 mb-4"
                data-aos="fade-up"
              >
                Professional
              </h2>

              <div className="row g-4">
                <div className="col-md-6" data-aos="fade-right">
                  <main>
                    Next.js gives developers the ability to build fast, scalable, and
                    professional-grade web applications. By understanding how rendering
                    works, you can take your projects to the next level with optimized
                    performance and excellent user experience.
                  </main>
                  <p>
                    Whether you choose Client-Side Rendering (CSR), Server-Side Rendering
                    (SSR), Static Site Generation (SSG), or Incremental Static Regeneration
                    (ISR), each method can be applied professionally to suit your project’s
                    requirements.
                  </p>
                </div>

                <div className="col-md-6" data-aos="fade-left">
                  <div className="row g-3">
                    <div className="col-6" data-aos="zoom-in">
                      <img
                        src="./develpor"
                        alt="Professional Developer"
                        className="img-fluid rounded shadow-sm"
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-6" data-aos="zoom-in" data-aos-delay="200">
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

              <h3
                className="mt-5 mb-3 fw-bold text-uppercase"
                data-aos="fade-up"
              >
                Maintain a Professional Demeanor
              </h3>

              <main data-aos="fade-up" data-aos-delay="100">
                A professional approach means choosing the right rendering strategy for
                your use case. For example, an eCommerce website benefits from SSR for SEO,
                while a blog can use SSG for lightning-fast performance.
              </main>
              <main data-aos="fade-up" data-aos-delay="200">
                By combining the right rendering method with clean UI design, you can
                ensure your project looks and performs like a top-tier professional
                application.
              </main>

              <div className="row g-4 mt-4 align-items-center">
                <div className="col-md-6" data-aos="fade-right">
                  <img
                    src="./work"
                    alt="Working on Laptop"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-md-6" data-aos="fade-left">
                  <p>
                    Professionalism is not only about design — it’s about making smart
                    technical choices. Next.js empowers you to deliver apps that are fast,
                    scalable, and user-friendly. With CSR, SSR, SSG, and ISR, you can adapt
                    your rendering strategy to any project.
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
