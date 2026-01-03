import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Hackathons } from "@/components/sections/hackathons";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground antialiased selection:bg-foreground selection:text-background relative">
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
      <Certificates />
      <Contact />

      <Footer />
    </main>
  );
}
