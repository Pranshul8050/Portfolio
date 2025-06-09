"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const isMobile = useMobile()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isMobile || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 150

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = "#8b5cf6"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      if (!ctx) return
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }
      connectParticles()
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    init()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {!isMobile && <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />}

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              MERN Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
          >
            Pranshul Kumar Gera
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            <TypeAnimation
              sequence={[
                "I build web applications",
                1000,
                "I create user experiences",
                1000,
                "I develop MERN stack solutions",
                1000,
                "I'm a BTech CSE student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white cursor-hover" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-hover" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/Pranshul8050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-hover"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pranshul-kumar-gera-9857a5269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-hover"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/Pranshul_8050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-hover"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-hover"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </motion.div>
    </section>
  )
}
