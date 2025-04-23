import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, MessageSquare, Calendar, Globe } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Base Community</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          Connect with developers, creators, and enthusiasts building on Base.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Base Community"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Join Our Growing Community</h2>
            <p className="text-gray-500">
              The Base community is a global network of developers, creators, and enthusiasts working together to build
              the future of blockchain technology. Connect with like-minded individuals, share knowledge, and
              collaborate on projects.
            </p>
            <p className="text-gray-500 mt-4">
              Whether you're a seasoned blockchain developer or just getting started, there's a place for you in the
              Base community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#community-channels">
              <button className="btn-primary">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </Link>
            <Link href="/events">
              <button className="btn-secondary">Upcoming Events</button>
            </Link>
          </div>
        </div>
      </div>

      <div id="community-channels" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Community Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discord</h3>
              <p className="text-gray-500 mb-6">
                Connect with over 25,000 developers and enthusiasts in our Discord server. Get help, share your
                projects, and collaborate with others.
              </p>
              <a href="https://discord.gg/base" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">Join Discord</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Forum</h3>
              <p className="text-gray-500 mb-6">
                Engage in in-depth technical discussions, share knowledge, and get help with your projects on our
                community forum.
              </p>
              <a href="https://forum.base.org" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">Visit Forum</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-500 mb-6">
                Explore our open-source repositories, contribute to projects, and collaborate with other developers on
                GitHub.
              </p>
              <a href="https://github.com/base" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-primary w-full">View GitHub</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--highlight-bg)] flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[var(--primary-color)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p className="text-gray-500 mb-6">
                Join our virtual and in-person events, including hackathons, workshops, meetups, and conferences.
              </p>
              <Link href="/events" className="w-full">
                <button className="btn-primary w-full">View Events</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container mb-16">
        <div className="tabs-header">
          <button className="tab-button active">Featured Projects</button>
          <button className="tab-button">Developer Spotlight</button>
          <button className="tab-button">Community Resources</button>
        </div>
        <div className="tab-content active">
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "NFT Marketplace",
                  description: "A decentralized marketplace for buying and selling NFTs on Base.",
                  image: "/placeholder.svg?height=200&width=300",
                  author: "CryptoCreators",
                  link: "/projects/nft-marketplace",
                },
                {
                  title: "DeFi Dashboard",
                  description: "Track and manage your DeFi investments across multiple protocols on Base.",
                  image: "/placeholder.svg?height=200&width=300",
                  author: "DeFi Devs",
                  link: "/projects/defi-dashboard",
                },
                {
                  title: "AI-Powered Wallet",
                  description: "A smart wallet with AI capabilities for optimized transactions and security.",
                  image: "/placeholder.svg?height=200&width=300",
                  author: "Blockchain AI",
                  link: "/projects/ai-wallet",
                },
              ].map((project, i) => (
                <div key={i} className="card overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">By {project.author}</p>
                    <p className="text-gray-500 mb-4">{project.description}</p>
                    <Link href={project.link} className="w-full">
                      <button className="btn-primary w-full">View Project</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="card p-8 bg-[var(--highlight-bg)]">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Community Events</h2>
          <p className="text-gray-500 max-w-[700px] mx-auto">
            Join us for virtual and in-person events to learn, connect, and collaborate with the Base community.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Base Hackathon 2025",
              date: "May 15-17, 2025",
              location: "Virtual",
              description:
                "Join developers from around the world to build innovative applications on Base and compete for prizes.",
              link: "/events/hackathon-2025",
            },
            {
              title: "Base Developer Conference",
              date: "June 10-12, 2025",
              location: "San Francisco, CA",
              description:
                "A three-day conference featuring workshops, talks, and networking opportunities for Base developers.",
              link: "/events/devcon-2025",
            },
            {
              title: "Base Community Meetup",
              date: "Monthly",
              location: "Various Locations",
              description:
                "Regular community meetups in major cities around the world. Connect with local Base enthusiasts.",
              link: "/events/meetups",
            },
          ].map((event, i) => (
            <div key={i} className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {event.date} • {event.location}
                </p>
                <p className="text-gray-500 mb-4">{event.description}</p>
                <Link href={event.link} className="w-full">
                  <button className="btn-primary w-full">Learn More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/events">
            <button className="btn-primary">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}