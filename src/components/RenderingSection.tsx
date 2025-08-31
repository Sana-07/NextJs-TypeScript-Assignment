"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/page.css";
import '../app/globals.css';
import { FaBolt, FaServer, FaFileAlt, FaSyncAlt } from "react-icons/fa"; // ✅ React Icons

export default function RenderingSection() {
  const methods = [
    {
      icon: <FaBolt className="text-primary" size={40} />,
      title: "CSR",
      text: "Loads content instantly in the browser for dynamic apps.",
      border: "primary",
    },
    {
      icon: <FaServer className="text-success" size={40} />,
      title: "SSR",
      text: "Renders pages on the server, improving SEO and performance.",
      border: "success",
    },
    {
      icon: <FaFileAlt className="text-warning" size={40} />,
      title: "SSG",
      text: "Generates pages at build time for speed and scalability.",
      border: "warning",
    },
    {
      icon: <FaSyncAlt className="text-info" size={40} />,
      title: "ISR",
      text: "Combines static speed with on-demand content updates.",
      border: "info",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container my-5">
        {/* Section Heading */}
        <div className="mb-5 text-center">
          <h1
            className="display-5 fw-bold text-uppercase text-dark border-bottom d-inline-block pb-2 px-3"
            data-aos="fade-up"
          >
            Next.js Rendering
          </h1>

          <p className="text-muted fs-5 mt-3" data-aos="fade-up">
            Learn about different rendering techniques:{" "}
            <strong>CSR</strong>, <strong>SSR</strong>, <strong>SSG</strong>, and{" "}
            <strong>ISR</strong>.
          </p>
        </div>

        {/* Rendering Method Cards in Grid */}
        <div
          className="row g-4"
          data-aos="fade-up"
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
          style={{
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
        >
          {methods.map((card, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div
                className={`card h-100 text-center p-4 rounded-4 border border-${card.border} shadow-sm`}
                style={{
                  borderWidth: "2px",
                }}
              >
                {/* Icon */}
                <div className="mb-3">{card.icon}</div>
                {/* Title */}
                <h5 className={`fw-bold text-${card.border}`}>{card.title}</h5>
                {/* Text */}
                <p className="text-muted small">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
