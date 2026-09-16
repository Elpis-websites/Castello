"use client";
import { useState } from "react";
import "../globals.css";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const openMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }


    return (
        <header className="site-header" id="top">
          <div className="container header-inner">
            <a href="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <img src="/castello.png" alt="logo_castello" />
                {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V10L6 7V4H8V6L10 4V6L12 4V6L14 4V6L16 4V7L18 4H16L18 7L21 10V21H3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 21V15H15V21" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg> */}
              </span>
              <span className="brand-name">Castello</span>
              <span className="brand-sub">Ristorante · Pizzeria</span>
            </a>

            <button className="nav-toggle" id="navToggle" onClick={openMobileMenu} aria-expanded={mobileMenuOpen} aria-controls="primaryNav" aria-label="Apri il menu di navigazione">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>

            <nav className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`} id="primaryNav">
              <a href="/">Panoramica</a>
              <a href="/menu">Menu</a>
              <a href="/info">Informazioni</a>
              <a className="nav-cta" href="tel:+390227302158">Chiama ora</a>
            </nav>
          </div>
        </header>
    )
}