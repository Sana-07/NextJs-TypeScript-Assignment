"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-top py-3 shadow-sm">
      <div className="container d-flex justify-content-center align-items-center">
        {/* Copyright */}
        <p className="text-center text-dark small mb-0 fw-bold">
          © {new Date().getFullYear()} EcoMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
