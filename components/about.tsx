"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

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

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know me better - my background, interests, and what drives me as a developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-primary/20">
                <img
                  src="/images/profile-shadow.jpg"
                  alt="Pranshul Kumar Gera"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-lg -z-10"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold">
                Hi, I'm <span className="text-primary">Pranshul Kumar Gera</span>
              </h3>
              <p className="text-muted-foreground">
                I'm a MERN stack developer and a 3rd-year BTech CSE student, driven by a passion for turning ideas into
                powerful web experiences.
              </p>
              <p className="text-muted-foreground">
                I craft full-stack applications with MongoDB, Express.js, React, and Node.js, blending clean code with
                real-world impact.
              </p>
              <p className="text-muted-foreground">
                From building sleek UIs to solving complex problems, I thrive on innovation, collaboration, and
                continuous learning.
              </p>
              <p className="text-muted-foreground">
                Outside the code editor? You'll find me exploring cutting-edge tech or leveling up at hackathons.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-medium mb-2">Name:</h4>
                  <p className="text-muted-foreground">Pranshul Kumar Gera</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Email:</h4>
                  <p className="text-muted-foreground">pranshulgera0508@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Education:</h4>
                  <p className="text-muted-foreground">BTech CSE (3rd Year)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Location:</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>

              <Button className="mt-6 cursor-hover" asChild>
                <a href="/resume/pranshul-kumar-gera-resume.txt" download="Pranshul_Kumar_Gera_Resume.txt">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
