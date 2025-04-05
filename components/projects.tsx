"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const projects = [
    {
      id: 1,
      title: "AI Image Generator using Stable Diffusion",
      description:
        "Overview This project is an AI-powered image generation system that uses a Stable Diffusion model to generate images based on user input. The user provides a text prompt, and the model generates a unique image accordingly.",
      image: "https://ibb.co/ynXrNLR0?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/pranshul8050/Project-1",
      category: "AI",
    },
    {
      id: 2,
      title: "Petpal",
      description: "A website designed for Pet Services such as pet sitting, pet walking, and other pet care services.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Typescript", "Framer Motion", "UI Components"],
      liveLink: "https://pet-sitting-platform.vercel.app/",
      githubLink: "https://github.com/pranshul8050/Pet",
      category: "frontend",
    },
    {
      id: 3,
      title: "UserAccess Portal (Frontend)",
      description:
        "Designed and developed a responsive and user-friendly Login and Sign Up interface for a web application. The project focuses on clean UI/UX principles to ensure an intuitive experience for users.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Html", "Css", "Javascript"],
      liveLink: "user-access-portal-frontend.vercel.app",
      githubLink: "https://github.com/Pranshul8050/UserAccess-Portal-Frontend-",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/pranshul8050/Portfolio",
      category: "frontend",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my latest projects and see my skills in action
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="cursor-hover"
            >
              All
            </Button>
            <Button
              variant={filter === "frontend" ? "default" : "outline"}
              onClick={() => setFilter("frontend")}
              className="cursor-hover"
            >
              Frontend
            </Button>
            <Button
              variant={filter === "backend" ? "default" : "outline"}
              onClick={() => setFilter("backend")}
              className="cursor-hover"
            >
              Backend
            </Button>
            <Button
              variant={filter === "fullstack" ? "default" : "outline"}
              onClick={() => setFilter("fullstack")}
              className="cursor-hover"
            >
              Full Stack
            </Button>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="relative overflow-hidden group">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="secondary" className="rounded-full cursor-hover" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full cursor-hover" asChild>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" className="cursor-hover" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="cursor-hover" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

