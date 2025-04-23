import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function SmartWalletPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Smart Wallet</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          Next-generation crypto wallets for seamless blockchain interactions on Base.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Smart Wallet Visualization"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">What is Smart Wallet?</h2>
            <p className="text-gray-500">
              Smart Wallet is a next-generation cryptocurrency wallet built specifically for the Base blockchain. It
              provides enhanced security, improved user experience, and advanced features that make interacting with
              decentralized applications seamless and intuitive.
            </p>
            <p className="text-gray-500 mt-4">
              With Smart Wallet, users can manage their digital assets, interact with smart contracts, and participate
              in the decentralized economy with confidence and ease.
            </p>
          </div>
          <div>
            <Link href="/documentation/smartwallet">
              <button className="btn-primary">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="Enhanced Security"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Enhanced Security</h3>
                <p>Multi-factor authentication, social recovery, and advanced encryption to keep your assets safe.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="Account Abstraction"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Account Abstraction</h3>
                <p>
                  Simplified user experience with gasless transactions, batched operations, and customizable security
                  rules.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="Seamless Integration"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Seamless Integration</h3>
                <p>Easily integrate Smart Wallet into your applications with our comprehensive SDK and APIs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Build?</h2>
        <p className="text-gray-500 max-w-[700px] mx-auto mb-8">
          Start integrating Smart Wallet into your applications today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/documentation/smartwallet">
            <button className="btn-secondary">View Documentation</button>
          </Link>
          <Link href="/demo">
            <button className="btn-primary">
              Try Demo
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}