import Hero from "@/components/hero"
import About from "@/components/about"
import Resume from "@/components/resume"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Resume />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

