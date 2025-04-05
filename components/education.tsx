"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
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

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Engineering University",
      period: "2022 - 2026",
      description:
        "Currently pursuing a BTech in Computer Science with a focus on web development and software engineering. Maintaining a Good GPA and actively participating in technical clubs and hackathons.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "DAFFODIL PUBLIC SCHOOL",
      period: "2021 - 2022",
      description:
        "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry. Graduated with distinction and received merit scholarship.",
    },
    {
      degree: "Secondary Education",
      institution: "SBP DAV CENTUARY PUBLIC SCHOOL",
      period: "2019 - 2020",
      description:
        "Completed secondary education with excellent academic performance. Participated in various competitions and science exhibitions.",
    },
  ]

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
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
              My <span className="text-primary">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and educational background</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`p-6 bg-card rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 ${
                        index % 2 === 0
                          ? "transform-gpu md:translate-x-2 hover:md:translate-x-0"
                          : "transform-gpu md:-translate-x-2 hover:md:translate-x-0"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary whitespace-nowrap">
                          <Calendar className="mr-1 h-3 w-3" />
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-3">{item.institution}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

