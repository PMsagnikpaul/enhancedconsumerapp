"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme") || "light"
    setIsDarkTheme(savedTheme === "dark")
    document.body.setAttribute("data-theme", savedTheme)

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark"
    setIsDarkTheme(!isDarkTheme)
    document.body.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="logo flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
            <div className="w-4 h-0.5 bg-white"></div>
          </div>
          <span className="text-xl font-bold">BASE</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center">
            <button className="theme-toggle mr-4" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="text-[var(--text-color)]" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        ) : (
          <nav className="flex items-center gap-6">
            <Link href="/products" className="nav-link">
              Products
            </Link>
            <Link href="/developers" className="nav-link">
              Developers
            </Link>
            <Link href="/community" className="nav-link">
              Community
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/login" className="btn-primary py-2 px-4 text-sm">
              Log In
            </Link>
            <Link href="/signup" className="btn-secondary py-2 px-4 text-sm">
              Sign Up
            </Link>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 bg-[var(--card-bg)]">
          <nav className="flex flex-col space-y-4">
            <div className="border-b pb-2">
              <Link href="/products" className="nav-link font-medium" onClick={toggleMenu}>
                Products
              </Link>
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/products/onchainkit" className="block text-sm text-gray-500" onClick={toggleMenu}>
                  OnchainKit
                </Link>
                <Link href="/products/agentkit" className="block text-sm text-gray-500" onClick={toggleMenu}>
                  AgentKit
                </Link>
                <Link href="/products/smartwallet" className="block text-sm text-gray-500" onClick={toggleMenu}>
                  Smart Wallet
                </Link>
              </div>
            </div>
            <div className="border-b pb-2">
              <Link href="/developers" className="nav-link font-medium" onClick={toggleMenu}>
                Developers
              </Link>
              <div className="pl-4 mt-2 space-y-2">
                <Link href="/documentation" className="block text-sm text-gray-500" onClick={toggleMenu}>
                  Documentation
                </Link>
                <Link href="/learn" className="block text-sm text-gray-500" onClick={toggleMenu}>
                  Tutorials
                </Link>
                <Link href="/community" className="block text-sm text-gray-500" onClick={toggleMenu}>
                  Community
                </Link>
              </div>
            </div>
            <Link href="/community" className="nav-link" onClick={toggleMenu}>
              Community
            </Link>
            <Link href="/blog" className="nav-link" onClick={toggleMenu}>
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/login" onClick={toggleMenu}>
                <button className="btn-primary w-full">Log In</button>
              </Link>
              <Link href="/signup" onClick={toggleMenu}>
                <button className="btn-secondary w-full">Sign Up</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}