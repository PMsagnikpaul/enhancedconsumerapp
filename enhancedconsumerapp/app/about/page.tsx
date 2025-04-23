import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Globe, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">About Base</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">Building the future of blockchain technology together.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="About Base"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500">
              Base is on a mission to make blockchain technology accessible to everyone. We're building a platform that
              empowers developers to create innovative applications that can transform industries and improve lives.
            </p>
            <p className="text-gray-500 mt-4">
              Our goal is to provide the tools, infrastructure, and community support needed to accelerate the adoption
              of blockchain technology and create a more open, transparent, and equitable digital economy.
            </p>
          </div>
          <div>
            <Link href="/vision">
              <button className="btn-primary">
                Our Vision
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-gray-500">
                We believe in the power of community. Our platform is built by and for the community, with a focus on
                collaboration, inclusivity, and shared success.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Open & Transparent</h3>
              <p className="text-gray-500">
                We're committed to openness and transparency in everything we do. Our code is open-source, our
                decision-making is transparent, and we welcome feedback from all stakeholders.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-500">
                We're constantly pushing the boundaries of what's possible with blockchain technology. We encourage
                experimentation, embrace new ideas, and strive to create solutions that address real-world challenges.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security & Trust</h3>
              <p className="text-gray-500">
                We prioritize security and trust in all aspects of our platform. We're committed to building robust,
                secure systems that users can rely on for their most important applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Alex Johnson", role: "CEO & Co-Founder", image: "/placeholder.svg?height=200&width=200" },
            { name: "Sarah Chen", role: "CTO & Co-Founder", image: "/placeholder.svg?height=200&width=200" },
            { name: "Michael Rodriguez", role: "Head of Engineering", image: "/placeholder.svg?height=200&width=200" },
            { name: "Emily Zhang", role: "Head of Product", image: "/placeholder.svg?height=200&width=200" },
            { name: "David Kim", role: "Head of Research", image: "/placeholder.svg?height=200&width=200" },
            { name: "Jessica Patel", role: "Head of Community", image: "/placeholder.svg?height=200&width=200" },
            {
              name: "Robert Wilson",
              role: "Head of Business Development",
              image: "/placeholder.svg?height=200&width=200",
            },
            { name: "Lisa Thompson", role: "Head of Marketing", image: "/placeholder.svg?height=200&width=200" },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-8 bg-[var(--highlight-bg)]">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-500 mb-6">
              We're always looking for talented individuals who are passionate about blockchain technology and share our
              vision for the future. Join us in building the next generation of blockchain applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/careers">
                <button className="btn-primary">View Open Positions</button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary">Contact Us</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Join Our Team"
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