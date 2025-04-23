import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="footer-title">BASE</h4>
            <p className="text-gray-400 mb-4">
              Building the future of blockchain technology together. Experience seamless integration with our powerful
              tools.
            </p>
            <ul className="social-links flex">
              <li>
                <a href="#" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li>
                <Link href="/products/onchainkit">OnchainKit</Link>
              </li>
              <li>
                <Link href="/products/agentkit">AgentKit</Link>
              </li>
              <li>
                <Link href="/products/smartwallet">Smart Wallet</Link>
              </li>
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/learn">Tutorials</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 Base Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}