import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function OnchainKitPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">OnchainKit</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          Build powerful decentralized applications on Base with OnchainKit.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://anyapp.in/api/uploads/ChatGPT%20Image%20Apr%209,%202025,%2012_22_00%20PM-256eb973a712.png"
              alt="OnchainKit Visualization"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">What is OnchainKit?</h2>
            <p className="text-gray-500">
              OnchainKit is a comprehensive toolkit for building decentralized applications on the Base blockchain. It
              provides developers with everything they need to create seamless user experiences for interacting with
              smart contracts, managing digital assets, and more.
            </p>
            <p className="text-gray-500 mt-4">
              With OnchainKit, you can easily integrate blockchain functionality into your web applications, mobile
              apps, and other platforms.
            </p>
          </div>
          <div>
            <Link href="/documentation/onchainkit">
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
              alt="Smart Contract Integration"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Smart Contract Integration</h3>
                <p>Easily interact with smart contracts on the Base blockchain with simple, intuitive APIs.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="Developer Tools"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Developer Tools</h3>
                <p>
                  Comprehensive suite of developer tools including SDKs, libraries, and utilities for building on Base.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="Documentation & Examples"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Documentation & Examples</h3>
                <p>Extensive documentation and example code to help you get started quickly and efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Getting Started</h2>
        <div className="tabs-container">
          <div className="tabs-header">
            <button className="tab-button active">Installation</button>
            <button className="tab-button">Configuration</button>
            <button className="tab-button">Usage</button>
          </div>
          <div className="tab-content active">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Install OnchainKit</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                <pre>
                  <code>npm install @base/onchainkit</code>
                </pre>
              </div>
              <p className="mt-4 text-gray-500">
                Install the OnchainKit package using npm, yarn, or your preferred package manager.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Build?</h2>
        <p className="text-gray-500 max-w-[700px] mx-auto mb-8">
          Start building your decentralized application with OnchainKit today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/documentation/onchainkit">
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