import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Wallet, Code, Bot } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('https://anyapp.in/api/uploads/ChatGPT%20Image%20Apr%209,%202025,%2012_22_17%20PM-1761d70bfc29.png')" }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="animate-fadeIn">Experience the Future of Web3</h1>
            <p className="animate-fadeIn delay-100">
              Discover a new way to interact with blockchain technology using Base's powerful tools.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center animate-fadeIn delay-200">
              <Link href="/explore">
                <button className="btn-primary">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
              <Link href="/learn">
                <button className="btn-outline">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Base Products</h2>
            <p className="section-subtitle">
              Explore the powerful tools that make Base the future of blockchain consumer experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center">
                  <Code className="h-6 w-6 text-[var(--primary-color)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">OnchainKit</h3>
                  <p className="text-sm text-gray-500">Build decentralized applications</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-500">
                  OnchainKit provides developers with the tools they need to build powerful decentralized applications
                  on Base.
                </p>
              </div>
              <div className="card-footer">
                <Link href="/products/onchainkit">
                  <button className="btn-primary w-full">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center">
                  <Bot className="h-6 w-6 text-[var(--primary-color)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AgentKit</h3>
                  <p className="text-sm text-gray-500">AI-powered blockchain agents</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-500">
                  AgentKit enables the creation of autonomous agents that can interact with the blockchain on behalf of
                  users.
                </p>
              </div>
              <div className="card-footer">
                <Link href="/products/agentkit">
                  <button className="btn-primary w-full">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-[var(--primary-color)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Smart Wallet</h3>
                  <p className="text-sm text-gray-500">Next-gen crypto wallets</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-500">
                  Smart Wallet provides a secure and user-friendly way to manage digital assets and interact with
                  decentralized applications.
                </p>
              </div>
              <div className="card-footer">
                <Link href="/products/smartwallet">
                  <button className="btn-primary w-full">Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Demo Visualization"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Interactive Demo</h2>
                <p className="text-gray-500 text-lg">
                  Experience our consumer application built with Base's OnchainKit. Connect your wallet, explore NFTs,
                  and interact with smart contracts seamlessly.
                </p>
              </div>
              <div>
                <Link href="/demo">
                  <button className="btn-primary">
                    Try Demo
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Ready to Build?</h2>
              <p className="text-xl text-white/80 max-w-[700px] mx-auto">
                Start creating your own consumer experiences on Base today.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link href="/signup">
                <button className="btn-outline">Sign Up</button>
              </Link>
              <Link href="/documentation">
                <button className="btn-outline">View Documentation</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}