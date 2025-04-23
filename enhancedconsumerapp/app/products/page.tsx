import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Bot, Wallet } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Base Products</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          Discover our suite of powerful tools for building on the Base blockchain.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <div className="card">
          <div className="aspect-video relative bg-[var(--highlight-bg)] flex items-center justify-center">
            <Code className="h-16 w-16 text-[var(--primary-color)]" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">OnchainKit</h2>
            <p className="text-gray-500 mb-6">
              A comprehensive toolkit for building decentralized applications on Base. OnchainKit provides developers with
              everything they need to create seamless user experiences for interacting with smart contracts, managing
              digital assets, and more.
            </p>
            <Link href="/products/onchainkit" className="w-full">
              <button className="btn-primary w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="aspect-video relative bg-[var(--highlight-bg)] flex items-center justify-center">
            <Bot className="h-16 w-16 text-[var(--primary-color)]" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">AgentKit</h2>
            <p className="text-gray-500 mb-6">
              Build AI-powered blockchain agents that can autonomously execute transactions, monitor blockchain activity,
              and make decisions based on predefined rules or AI models. AgentKit enables intelligent automation for
              blockchain applications.
            </p>
            <Link href="/products/agentkit" className="w-full">
              <button className="btn-primary w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="aspect-video relative bg-[var(--highlight-bg)] flex items-center justify-center">
            <Wallet className="h-16 w-16 text-[var(--primary-color)]" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Smart Wallet</h2>
            <p className="text-gray-500 mb-6">
              A next-generation cryptocurrency wallet built specifically for the Base blockchain. Smart Wallet provides
              enhanced security, improved user experience, and advanced features for managing digital assets and
              interacting with dApps.
            </p>
            <Link href="/products/smartwallet" className="w-full">
              <button className="btn-primary w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card p-8 bg-[var(--highlight-bg)]">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-gray-500 mb-6">
              Start building your decentralized application with Base's powerful tools today. Access comprehensive
              documentation, tutorials, and resources to accelerate your development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/documentation">
                <button className="btn-primary">View Documentation</button>
              </Link>
              <Link href="/demo">
                <button className="btn-secondary">Try Demo</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Base Development"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}