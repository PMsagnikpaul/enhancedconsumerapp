import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Code, GraduationCap, Users, Github } from "lucide-react"

export default function DevelopersPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Developers</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          Everything you need to build powerful applications on the Base blockchain.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://anyapp.in/api/uploads/ChatGPT%20Image%20Apr%209,%202025,%2012_27_43%20PM-66f520e8b6db.png"
              alt="Base Developers"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Build the Future of Web3</h2>
            <p className="text-gray-500">
              Base provides developers with the tools, infrastructure, and support needed to build innovative
              applications on the blockchain. Whether you're building a DeFi protocol, NFT marketplace, or something
              entirely new, Base has everything you need to succeed.
            </p>
            <p className="text-gray-500 mt-4">
              Get started with our comprehensive documentation, tutorials, and sample code to accelerate your development
              process.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/documentation">
              <button className="btn-primary">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
            <Link href="/learn">
              <button className="btn-secondary">Tutorials</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Developer Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-500 mb-6">
                Comprehensive guides, API references, and examples for building on Base.
              </p>
              <Link href="/documentation" className="w-full">
                <button className="btn-primary w-full">View Docs</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">SDKs & Tools</h3>
              <p className="text-gray-500 mb-6">
                Libraries, SDKs, and developer tools to streamline your development workflow.
              </p>
              <Link href="/documentation/tools" className="w-full">
                <button className="btn-primary w-full">Explore Tools</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tutorials</h3>
              <p className="text-gray-500 mb-6">
                Step-by-step guides and tutorials for building different types of applications on Base.
              </p>
              <Link href="/learn" className="w-full">
                <button className="btn-primary w-full">Start Learning</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Github className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sample Code</h3>
              <p className="text-gray-500 mb-6">
                Example projects and code snippets to help you get started quickly.
              </p>
              <a href="https://github.com/base" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">View on GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Developer Pathways</h2>
        <div className="tabs-container">
          <div className="tabs-header">
            <button className="tab-button active">Smart Contract Development</button>
            <button className="tab-button">Frontend Integration</button>
            <button className="tab-button">Full-Stack dApps</button>
          </div>
          <div className="tab-content active">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Smart Contract Development</h3>
              <p className="text-gray-500 mb-6">
                Learn how to build, test, and deploy smart contracts on the Base blockchain.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="card">
                  <div className="p-4">
                    <h4 className="font-bold mb-2">Getting Started</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Set up your development environment and write your first smart contract.
                    </p>
                    <Link href="/learn/smart-contracts/getting-started" className="text-[var(--primary-color)] text-sm">
                      Learn more →
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="p-4">
                    <h4 className="font-bold mb-2">Testing & Deployment</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Learn how to test and deploy your smart contracts to the Base blockchain.
                    </p>
                    <Link href="/learn/smart-contracts/testing-deployment" className="text-[var(--primary-color)] text-sm">
                      Learn more →
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="p-4">
                    <h4 className="font-bold mb-2">Security Best Practices</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Ensure your smart contracts are secure and follow best practices.
                    </p>
                    <Link href="/learn/smart-contracts/security" className="text-[var(--primary-color)] text-sm">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-8 bg-[var(--highlight-bg)]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Join the Developer Community</h2>
          <p className="text-gray-500 max-w-[700px] mx-auto">
            Connect with other developers, share knowledge, and get help with your projects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Discord</h3>
              <p className="text-gray-500 mb-6 text-center">
                Join our Discord server to connect with other developers and get help with your projects.
              </p>
              <a href="https://discord.gg/base" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">Join Discord</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4 mx-auto">
                <Github className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">GitHub</h3>
              <p className="text-gray-500 mb-6 text-center">
                Explore our open-source repositories, contribute to projects, and report issues.
              </p>
              <a href="https://github.com/base" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">View GitHub</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Forum</h3>
              <p className="text-gray-500 mb-6 text-center">
                Participate in discussions, ask questions, and share your knowledge on our developer forum.
              </p>
              <a href="https://forum.base.org" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">Visit Forum</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}