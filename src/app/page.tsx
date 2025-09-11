import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/page.css";
import { Suspense } from "react";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <>
      {/* 🌿 Hero Section */}
      <header className="header-bg">
        <div className="header-content text-center text-white py-5">
          <h1
            className="display-4 fw-bold"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            🌿 Next.js Rendering Demo
          </h1>

          <p
            className="lead"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            Explore CSR, SSR, SSG & ISR with real product examples from the DummyJSON API.
          </p>

        </div>
      </header>

      {/* ✅ Wrap client-only content in Suspense */}
      <Suspense fallback={<p className="text-center py-5">⏳ Loading content...</p>}>
        <HomeContent />
      </Suspense>
    </>
  );
}
