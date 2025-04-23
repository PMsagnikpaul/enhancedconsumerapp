import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, GraduationCap, Video, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LearnPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn Base</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
          Everything you need to know about building on Base blockchain.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Learning Base"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Start Your Blockchain Journey</h2>
            <p className="text-gray-500">
              Whether you're new to blockchain development or an experienced developer, our comprehensive learning
              resources will help you master building on Base.
            </p>
            <p className="text-gray-500 mt-4">
              Explore tutorials, documentation, and interactive examples to accelerate your development process.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#beginner-tutorials">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Beginner Tutorials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/documentation">
              <Button variant="outline">View Documentation</Button>
            </Link>
          </div>
        </div>
      </div>

      <Tabs defaultValue="tutorials" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px] mx-auto">
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        <TabsContent value="tutorials" className="mt-6">
          <div id="beginner-tutorials" className="mb-8">
            <h3 className="text-xl font-bold mb-4">Beginner Tutorials</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Introduction to Base",
                  description: "Learn the fundamentals of Base blockchain and its ecosystem.",
                  icon: BookOpen,
                  time: "15 min",
                },
                {
                  title: "Setting Up Your Development Environment",
                  description: "Configure your local environment for Base development.",
                  icon: Code,
                  time: "20 min",
                },
                {
                  title: "Creating Your First Smart Contract",
                  description: "Build and deploy a simple smart contract on Base.",
                  icon: Code,
                  time: "30 min",
                },
              ].map((tutorial, i) => (
                <Card key={i} className="flex flex-col h-full">
                  <CardHeader>
                    <tutorial.icon className="h-8 w-8 text-blue-500 mb-2" />
                    <CardTitle>{tutorial.title}</CardTitle>
                    <CardDescription>{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center">
                        <Video className="mr-2 h-4 w-4" />
                        {tutorial.time} read
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Start Tutorial
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Intermediate Tutorials</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Building with OnchainKit",
                  description: "Learn how to use OnchainKit to build decentralized applications.",
                  icon: Code,
                  time: "45 min",
                },
                {
                  title: "NFT Development on Base",
                  description: "Create and deploy NFT collections on Base blockchain.",
                  icon: Code,
                  time: "60 min",
                },
                {
                  title: "DeFi Protocol Integration",
                  description: "Integrate with DeFi protocols on Base.",
                  icon: Code,
                  time: "90 min",
                },
              ].map((tutorial, i) => (
                <Card key={i} className="flex flex-col h-full">
                  <CardHeader>
                    <tutorial.icon className="h-8 w-8 text-blue-500 mb-2" />
                    <CardTitle>{tutorial.title}</CardTitle>
                    <CardDescription>{tutorial.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center">
                        <Video className="mr-2 h-4 w-4" />
                        {tutorial.time} read
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/tutorials/${tutorial.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Start Tutorial
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="courses" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Base Developer Bootcamp</CardTitle>
                <CardDescription>A comprehensive course for becoming a proficient Base developer</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <p className="text-gray-500">
                    This 4-week bootcamp covers everything you need to know to build production-ready applications on
                    Base. From smart contract development to frontend integration.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {[
                        "Smart contract development with Solidity",
                        "OnchainKit integration",
                        "Building frontend applications",
                        "Security best practices",
                        "Deployment and monitoring",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/bootcamp" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Advanced Base Development</CardTitle>
                <CardDescription>Master advanced techniques for building on Base</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <p className="text-gray-500">
                    This advanced course is designed for experienced developers who want to master complex techniques
                    and patterns for building sophisticated applications on Base.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {[
                        "Advanced smart contract patterns",
                        "Gas optimization techniques",
                        "Cross-chain integration",
                        "Layer 2 scaling solutions",
                        "MEV protection strategies",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/advanced" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="documentation" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "OnchainKit Documentation",
                description: "Comprehensive documentation for OnchainKit.",
                icon: BookOpen,
                link: "/documentation/onchainkit",
              },
              {
                title: "AgentKit Documentation",
                description: "Learn how to build AI-powered blockchain agents.",
                icon: BookOpen,
                link: "/documentation/agentkit",
              },
              {
                title: "Smart Wallet Documentation",
                description: "Documentation for Base's Smart Wallet technology.",
                icon: BookOpen,
                link: "/documentation/smartwallet",
              },
              {
                title: "API Reference",
                description: "Complete API reference for Base's developer tools.",
                icon: Code,
                link: "/documentation/api",
              },
              {
                title: "Smart Contract Examples",
                description: "Example smart contracts for common use cases.",
                icon: Code,
                link: "/documentation/examples",
              },
              {
                title: "Security Guidelines",
                description: "Best practices for secure development on Base.",
                icon: BookOpen,
                link: "/documentation/security",
              },
            ].map((doc, i) => (
              <Card key={i} className="flex flex-col h-full">
                <CardHeader>
                  <doc.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle>{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Link href={doc.link} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Documentation
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 rounded-xl p-8">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Join the Base Developer Community</h2>
            <p className="text-gray-600 mb-6">
              Connect with other developers, share knowledge, and get help with your projects. Our active community is
              here to support your journey building on Base.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/community">
                <Button className="bg-blue-600 hover:bg-blue-700">Join Community</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline">Upcoming Events</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Base Community"
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