import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// ✅ Your Projects Data
const projects = [
  {
    id: 1,
    title: "Therapy Booking Web App",
    description:
      "Therapy session scheduler with a modern React (Vite) + Tailwind UI and a robust Django backend, supporting appointment booking, therapist approvals, and secure session management.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    techStack: ["React(Vite)", "Tailwind CSS", "Django(REST API)"],
    liveUrl: "https://emerge-e9bz.vercel.app/login",
    githubUrl: "https://github.com/Debby-arch/Emerge",
  },
  {
    id: 2,
    title: "Rust Server",
    description:
      "A lightweight Rust TCP Echo Server that listens on 127.0.0.1:6000, handles multiple clients concurrently, and echoes back received messages. Ideal for learning TCP networking in Rust with threading, error handling, and message size limits.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    techStack: ["Rust"],
    liveUrl: "https://github.com/Debby-arch/rust-server",
    githubUrl: "https://github.com/Debby-arch/rust-server",
  },
]

// ✅ Example GitHub Repos Data (you can expand this)
const githubRepos = [
  {
    id: 1,
    title: "Emerge",
    description: "Therapy booking system built with React, Tailwind, Django.",
    language: "TypeScript",
    url: "https://github.com/Debby-arch/Emerge",
  },
  {
    id: 2,
    title: "Rust Server",
    description: "Simple TCP echo server in Rust with concurrency.",
    language: "Rust",
    url: "https://github.com/Debby-arch/rust-server",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      {/* 🔹 Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-sm bg-pink-100 text-pink-700 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔹 Fixed Buttons with Links */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-white/90 hover:bg-white text-gray-700 shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-white/90 hover:bg-white text-gray-700 shadow-lg">
                    <Github className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 GitHub Section */}
      <h2 className="text-3xl font-bold mt-20 mb-12 text-center">GitHub Repositories</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubRepos.map((repo) => (
          <Card
            key={repo.id}
            className="p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">{repo.title}</h3>
              <p className="text-gray-600 mb-3">{repo.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{repo.language}</span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
