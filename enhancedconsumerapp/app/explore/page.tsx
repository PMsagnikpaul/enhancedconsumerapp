import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Wallet, Code, Bot, ImageIcon, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExplorePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Base</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
          Discover the future of blockchain technology with Base's powerful ecosystem.
        </p>
      </div>

      <Tabs defaultValue="products" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px] mx-auto">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Code className="h-8 w-8 text-blue-500" />
                <div className="grid gap-1">
                  <CardTitle>OnchainKit</CardTitle>
                  <CardDescription>Build decentralized applications</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500">
                  OnchainKit provides developers with the tools they need to build powerful decentralized applications
                  on Base.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/products/onchainkit" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Bot className="h-8 w-8 text-blue-500" />
                <div className="grid gap-1">
                  <CardTitle>AgentKit</CardTitle>
                  <CardDescription>AI-powered blockchain agents</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500">
                  AgentKit enables the creation of autonomous agents that can interact with the blockchain on behalf of
                  users.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/products/agentkit" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <Wallet className="h-8 w-8 text-blue-500" />
                <div className="grid gap-1">
                  <CardTitle>Smart Wallet</CardTitle>
                  <CardDescription>Next-gen crypto wallets</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500">
                  Smart Wallet provides a secure and user-friendly way to manage digital assets and interact with
                  decentralized applications.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/products/smartwallet" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="use-cases" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <ImageIcon className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>NFT Marketplaces</CardTitle>
                <CardDescription>Create and trade digital collectibles</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500">
                  Build NFT marketplaces with low gas fees and high throughput on Base. Enable creators and collectors
                  to mint, buy, and sell digital assets seamlessly.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/use-cases/nft-marketplaces" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>DeFi Applications</CardTitle>
                <CardDescription>Decentralized finance solutions</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500">
                  Create lending platforms, decentralized exchanges, and yield farming applications on Base with
                  improved scalability and reduced costs.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/use-cases/defi" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <Bot className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>AI-Powered dApps</CardTitle>
                <CardDescription>Combine AI with blockchain</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-500">
                  Build applications that leverage both artificial intelligence and blockchain technology to create
                  innovative user experiences and autonomous systems.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/use-cases/ai-dapps" className="w-full">
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="community" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Developer Community</CardTitle>
                <CardDescription>Join the Base developer ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Connect with other developers building on Base, share knowledge, and collaborate on projects. Access
                  resources, tutorials, and support to accelerate your development process.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">D</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Discord Community</h4>
                      <p className="text-sm text-gray-500">Join 25,000+ developers</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">G</span>
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub Repositories</h4>
                      <p className="text-sm text-gray-500">Explore open-source code</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/community/developers" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Community</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Connect with the Base community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium">Base Hackathon 2025</h4>
                    <p className="text-sm text-gray-500">May 15-17, 2025 • Virtual</p>
                    <p className="mt-2 text-sm">
                      Join developers from around the world to build innovative applications on Base and compete for
                      prizes.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium">Base Developer Conference</h4>
                    <p className="text-sm text-gray-500">June 10-12, 2025 • San Francisco</p>
                    <p className="mt-2 text-sm">
                      A three-day conference featuring workshops, talks, and networking opportunities for Base
                      developers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Base Community Meetup</h4>
                    <p className="text-sm text-gray-500">Monthly • Various Locations</p>
                    <p className="mt-2 text-sm">
                      Regular community meetups in major cities around the world. Connect with local Base enthusiasts.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 rounded-xl p-8 mb-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ready to start building?</h2>
            <p className="text-gray-600 mb-6">
              Get started with Base today and build the future of blockchain applications. Access documentation,
              tutorials, and resources to accelerate your development.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/documentation">
                <Button className="bg-blue-600 hover:bg-blue-700">View Documentation</Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline">Try Demo</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video">
              <Image
                src="https://anyapp.in/api/uploads/Screenshot%202025-04-09%20121656-07695b712942.png"
                alt="Base Development"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "NFT Marketplace",
              description: "A decentralized marketplace for buying and selling NFTs on Base.",
              image: "/placeholder.svg?height=200&width=300",
              link: "/projects/nft-marketplace",
            },
            {
              title: "DeFi Dashboard",
              description: "Track and manage your DeFi investments across multiple protocols on Base.",
              image: "/placeholder.svg?height=200&width=300",
              link: "/projects/defi-dashboard",
            },
            {
              title: "AI-Powered Wallet",
              description: "A smart wallet with AI capabilities for optimized transactions and security.",
              image: "/placeholder.svg?height=200&width=300",
              link: "/projects/ai-wallet",
            },
          ].map((project, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={project.link} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}