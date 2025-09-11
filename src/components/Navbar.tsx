


"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🔹 Memoize search value
  const searchValue = useMemo(
    () => searchParams.get("search") ?? "",
    [searchParams]
  );

  // 🔹 Sync with URL params
  useEffect(() => {
    setSearchTerm(searchValue);
  }, [searchValue]);

  // 🔹 Toggle navbar
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  // 🔹 Handle search submit
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const s = searchTerm.trim();
    if (s) {
      router.push(`${pathname}?search=${encodeURIComponent(s)}`);
    } else {
      router.push(pathname);
    }
    closeNavbar();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom sticky-top">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <Image src="/logo.png" alt="EcoMart" width={40} height={40} />
        </Link>

        {/* Toggler (Mobile) */}
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${pathname === "/client" ? "active" : ""}`}
                href="/client"
                onClick={closeNavbar}
              >
                CSR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${pathname === "/server" ? "active" : ""}`}
                href="/server"
                onClick={closeNavbar}
              >
                SSR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${pathname === "/static" ? "active" : ""}`}
                href="/static"
                onClick={closeNavbar}
              >
                SSG
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${pathname === "/isr" ? "active" : ""}`}
                href="/isr"
                onClick={closeNavbar}
              >
                ISR
              </Link>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
