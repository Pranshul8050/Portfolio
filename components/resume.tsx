"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Award, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Resume() {
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

  const experiences = [
    {
      title: "Aicte Intership on AI Technologies",
      company: "Edunet Foundation",
      period: "Jan 2025 - Feb 2025",
      description:
        "Developed responsive user interfaces using React.js and implemented state management with Redux. Collaborated with the design team to create pixel-perfect UI components.",
    },
    {
      title: "Frontend Development Intern",
      company: "Ceeras",
      period: "Jun 2024 - Aug 2024",
      description:
        "Converted high-fidelity Figma designs into responsive, pixel-perfect frontend code using HTML, CSS, JavaScript, and React.js. Collaborated with the design team to ensure UI/UX consistency across devices, optimized components for performance, and maintained clean, scalable codebase aligned with modern web standards.",
    },
    {
      title: "Web Development Freelancer",
      company: "Self-employed",
      period: "Jan 2024 - Present",
      description:
        "Help in Building custom websites for small businesses and startups. Implemented full-stack solutions using the MERN stack, focusing on performance and user experience.",
    },
  ]

  const achievements = [
    {
      title: "Hackathon Winner",
      organization: "Konark Fest 2025",
      period: "Feb 2025",
      description:
        "Won third place in a 24-hour hackathon by developing an innovative solution on Education by using Artificial Intelligence",
    },
    {
      title: "Web Development Certification",
      organization: "IBM",
      period: "Aug 2024",
      description:
        "Completed an advanced web development course covering modern JavaScript frameworks and backend technologies.",
    },
    {
      title: "Group Discussion",
      organization: "University",
      period: "2022-2023",
      description: "Recognized for 1st Position in Group Discussion",
    },
  ]

  return (
    <section id="resume" className="py-20 md:py-32">
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
              My <span className="text-primary">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A summary of my professional experience and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{exp.title}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold">{achievement.title}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          <Calendar className="mr-1 h-3 w-3" />
                          {achievement.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-3">{achievement.organization}</p>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
