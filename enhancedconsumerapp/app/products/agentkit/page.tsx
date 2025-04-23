import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function AgentKitPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">AgentKit</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">Build AI-powered blockchain agents on Base with AgentKit.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://anyapp.in/api/uploads/ChatGPT%20Image%20Apr%209,%202025,%2012_24_59%20PM-0d9d2b5057ec.png"
              alt="AgentKit Visualization"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">What is AgentKit?</h2>
            <p className="text-gray-500">
              AgentKit is a powerful toolkit for building AI-powered agents that can interact with the Base blockchain.
              These agents can autonomously execute transactions, monitor blockchain activity, and make decisions based
              on predefined rules or AI models.
            </p>
            <p className="text-gray-500 mt-4">
              With AgentKit, you can create intelligent agents that handle complex blockchain operations without
              requiring constant user intervention.
            </p>
          </div>
          <div>
            <Link href="/documentation/agentkit">
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
              alt="Autonomous Agents"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Autonomous Agents</h3>
                <p>
                  Create agents that can autonomously monitor blockchain activity and execute transactions based on
                  predefined conditions.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="AI Integration"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>AI Integration</h3>
                <p>
                  Integrate machine learning models to enable intelligent decision-making for your blockchain agents.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <Image
              src="/placeholder.svg?height=350&width=350"
              alt="Advanced Analytics"
              width={350}
              height={350}
              className="feature-img"
            />
            <div className="feature-overlay">
              <div className="feature-content">
                <span className="feature-location">Core Feature</span>
                <h3>Advanced Analytics</h3>
                <p>Analyze blockchain data and generate insights to inform agent behavior and optimize performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to Build?</h2>
        <p className="text-gray-500 max-w-[700px] mx-auto mb-8">
          Start building AI-powered blockchain agents with AgentKit today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/documentation/agentkit">
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