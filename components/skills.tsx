"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
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

  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "RESTful APIs", level: 85 },
    { name: "GraphQL", level: 50 },
    { name: "Firebase", level: 70 },
  ]

  const otherSkills = [
    { name: "Git/GitHub", level: 90 },
    { name: "Responsive Design", level: 95 },
    { name: "UI/UX Principles", level: 80 },
    { name: "Testing (Jest)", level: 70 },
    { name: "Performance Optimization", level: 75 },
    { name: "Deployment", level: 85 },
  ]

  const programmingLanguages = [
    { name: "C", level: 85 },
    { name: "C++", level: 85 },
    { name: "Java", level: 75 },
    { name: "Python", level: 85 },
  ]

  const technologies = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "REST API",
    "GraphQL",
    "Firebase",
    "Material UI",
    "Bootstrap",
    "Figma",
    "Webpack",
    "Babel",
    "npm",
    "Vercel",
    "Netlify",

    "C",
    "C++",
    "Java",
    "Python",
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
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
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I work with</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="frontend" className="cursor-hover">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="cursor-hover">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="other" className="cursor-hover">
                  Other
                </TabsTrigger>
                <TabsTrigger value="languages" className="cursor-hover">
                  Languages
                </TabsTrigger>
              </TabsList>

              <TabsContent value="frontend" className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="backend" className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="other" className="space-y-6">
                {otherSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="languages" className="space-y-6">
                {programmingLanguages.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-xl font-bold mb-6 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-2 bg-card rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 cursor-hover"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
