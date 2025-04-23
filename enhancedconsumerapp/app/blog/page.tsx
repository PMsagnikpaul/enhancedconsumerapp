import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Base Blog</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          News, updates, and insights from the Base team and community.
        </p>
      </div>

      <div className="mb-16">
        <div className="card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Featured Blog Post"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4" />
                <span>April 9, 2025</span>
                <span>•</span>
                <User className="h-4 w-4" />
                <span>Base Team</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Introducing Base's New Developer Tools</h2>
              <p className="text-gray-500 mb-6">
                We're excited to announce the release of new developer tools that make building on Base easier and more
                powerful than ever before. Learn about the latest features and how they can enhance your development
                workflow.
              </p>
              <div>
                <Link href="/blog/introducing-new-developer-tools">
                  <button className="btn-primary">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <div className="flex space-x-2">
            <button className="btn-secondary py-1 px-3 text-sm">All</button>
            <button className="btn-secondary py-1 px-3 text-sm">Tutorials</button>
            <button className="btn-secondary py-1 px-3 text-sm">Updates</button>
            <button className="btn-secondary py-1 px-3 text-sm">Community</button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Building NFT Marketplaces on Base",
              excerpt: "Learn how to build a decentralized NFT marketplace using Base's OnchainKit.",
              date: "April 5, 2025",
              author: "Alex Johnson",
              category: "Tutorials",
              image: "/placeholder.svg?height=200&width=300",
              slug: "building-nft-marketplaces",
            },
            {
              title: "Base Network Upgrade: What You Need to Know",
              excerpt: "An overview of the upcoming Base network upgrade and what it means for developers.",
              date: "April 2, 2025",
              author: "Base Team",
              category: "Updates",
              image: "/placeholder.svg?height=200&width=300",
              slug: "network-upgrade-overview",
            },
            {
              title: "Community Spotlight: DeFi Dashboard",
              excerpt: "Highlighting an innovative DeFi dashboard built by the Base community.",
              date: "March 28, 2025",
              author: "Sarah Chen",
              category: "Community",
              image: "/placeholder.svg?height=200&width=300",
              slug: "community-spotlight-defi-dashboard",
            },
            {
              title: "Optimizing Gas Usage on Base",
              excerpt: "Tips and tricks for optimizing gas usage in your smart contracts on Base.",
              date: "March 25, 2025",
              author: "Michael Rodriguez",
              category: "Tutorials",
              image: "/placeholder.svg?height=200&width=300",
              slug: "optimizing-gas-usage",
            },
            {
              title: "Base Hackathon 2025 Announcement",
              excerpt: "Announcing our upcoming global hackathon with over $500,000 in prizes.",
              date: "March 20, 2025",
              author: "Base Team",
              category: "Updates",
              image: "/placeholder.svg?height=200&width=300",
              slug: "hackathon-2025-announcement",
            },
            {
              title: "Integrating AI with Blockchain on Base",
              excerpt: "Exploring the intersection of artificial intelligence and blockchain technology on Base.",
              date: "March 15, 2025",
              author: "Emily Zhang",
              category: "Tutorials",
              image: "/placeholder.svg?height=200&width=300",
              slug: "integrating-ai-with-blockchain",
            },
          ].map((post, i) => (
            <div key={i} className="card overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-[var(--primary-color)] text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500">{post.excerpt}</p>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/blog/${post.slug}`}>
                  <button className="btn-primary w-full">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Development",
            "Tutorials",
            "Updates",
            "Community",
            "NFTs",
            "DeFi",
            "Smart Contracts",
            "OnchainKit",
            "AgentKit",
            "Smart Wallet",
            "Security",
            "Optimization",
            "Events",
            "Hackathons",
          ].map((tag, i) => (
            <Link key={i} href={`/blog/tag/${tag.toLowerCase()}`}>
              <div className="flex items-center bg-[var(--highlight-bg)] hover:bg-[var(--primary-color)] hover:text-white rounded-full px-3 py-1 text-sm transition-colors">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="card p-8 bg-[var(--highlight-bg)]">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-500 mb-6">
              Stay up-to-date with the latest news, tutorials, and updates from the Base team and community. We'll send
              you a monthly digest of the best content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="form-control flex-1" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Newsletter"
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