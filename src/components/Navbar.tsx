

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

  // Memoize search value
  const searchValue = useMemo(
    () => searchParams.get("search") ?? "",
    [searchParams]
  );

  // Sync with URL params
  useEffect(() => {
    setSearchTerm(searchValue);
  }, [searchValue]);

  // Toggle navbar
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  // Handle search submit
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border-bottom sticky-top">
      <div className="container">
        {/* Brand / Logo */}
        <Link className="navbar-brand d-flex align-items-center text-dark" href="/">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="ms-2 fw-bold"></span>
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
                className={`nav-link px-3 fw-bold ${pathname === "/client" ? "active text-success" : "text-dark"}`}
                href="/client"
                onClick={closeNavbar}
              >
                CSR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-bold ${pathname === "/server" ? "active text-success" : "text-dark"}`}
                href="/server"
                onClick={closeNavbar}
              >
                SSR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-bold ${pathname === "/static" ? "active text-success" : "text-dark"}`}
                href="/static"
                onClick={closeNavbar}
              >
                SSG
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 fw-bold ${pathname === "/isr" ? "active text-success" : "text-dark"}`}
                href="/isr"
                onClick={closeNavbar}
              >
                ISR
              </Link>
            </li>
          </ul>
          {/* Search Form */}
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search courses..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}










