import Link from "next/link"
import { Search } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">Comprehensive guides and references for building on Base.</p>
        <div className="w-full max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input type="search" placeholder="Search documentation..." className="form-control w-full pl-10" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <div className="card">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Getting Started</h3>
            <p className="text-gray-500 mb-4">Everything you need to start building on Base</p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/documentation/introduction" className="text-[var(--primary-color)] hover:underline">
                  Introduction to Base
                </Link>
              </li>
              <li>
                <Link href="/documentation/setup" className="text-[var(--primary-color)] hover:underline">
                  Setting Up Your Environment
                </Link>
              </li>
              <li>
                <Link href="/documentation/quickstart" className="text-[var(--primary-color)] hover:underline">
                  Quickstart Guide
                </Link>
              </li>
              <li>
                <Link href="/documentation/architecture" className="text-[var(--primary-color)] hover:underline">
                  Base Architecture
                </Link>
              </li>
            </ul>
            <Link href="/documentation/getting-started">
              <button className="btn-primary w-full">View All</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Product Documentation</h3>
            <p className="text-gray-500 mb-4">Detailed documentation for Base products</p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/documentation/onchainkit" className="text-[var(--primary-color)] hover:underline">
                  OnchainKit Documentation
                </Link>
              </li>
              <li>
                <Link href="/documentation/agentkit" className="text-[var(--primary-color)] hover:underline">
                  AgentKit Documentation
                </Link>
              </li>
              <li>
                <Link href="/documentation/smartwallet" className="text-[var(--primary-color)] hover:underline">
                  Smart Wallet Documentation
                </Link>
              </li>
              <li>
                <Link href="/documentation/api" className="text-[var(--primary-color)] hover:underline">
                  API Reference
                </Link>
              </li>
            </ul>
            <Link href="/documentation/products">
              <button className="btn-primary w-full">View All</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Guides & Tutorials</h3>
            <p className="text-gray-500 mb-4">Step-by-step guides for common tasks</p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/documentation/guides/smart-contracts"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  Smart Contract Development
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation/guides/frontend-integration"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  Frontend Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation/guides/nft-development"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  NFT Development
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation/guides/defi-integration"
                  className="text-[var(--primary-color)] hover:underline"
                >
                  DeFi Integration
                </Link>
              </li>
            </ul>
            <Link href="/documentation/guides">
              <button className="btn-primary w-full">View All</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card p-8 bg-[var(--highlight-bg)]">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-500 mb-6">
              Can't find what you're looking for? Our support team and community are here to help you with any questions
              or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/community">
                <button className="btn-primary">Join Community</button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">Contact Support</button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Popular Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/documentation/faq"
                  className="text-[var(--primary-color)] hover:underline flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation/troubleshooting"
                  className="text-[var(--primary-color)] hover:underline flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Troubleshooting Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation/best-practices"
                  className="text-[var(--primary-color)] hover:underline flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Best Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation/security"
                  className="text-[var(--primary-color)] hover:underline flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Security Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}