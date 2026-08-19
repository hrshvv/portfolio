import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const skills = {
    languages: ["Python", "C++", "JavaScript", "TypeScript"],
    frontend: ["React", "Next.js"],
    backend: ["Node.js", "Express.js", "FastAPI", "Authentication"],
    databases: ["MongoDB", "PostgreSQL"],
    aiml: [
      "LLM Integration",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "NLP",
      "Computer Vision",
      "YOLOv8",
    ],
    tools: ["Git", "GitHub", "Vercel", "Supabase", "Postman"],
  };

  const projects = [
    {
      title: "Git Session",
      description:
        "Collaborative code-sharing platform that generates secure, temporary access links for Git repositories. Built an in-browser development environment enabling users to view, edit, and collaborate without local setup.",
      tech: ["React", "Node.js", "Git REST/GraphQL APIs"],
      projectLink: "#",
      githubLink: "#",
    },
    {
      title: "Session Story",
      description:
        "Session replay and debugging platform for visually replaying user journeys. Features a lightweight frontend SDK for capturing interactions and scalable event ingestion pipelines.",
      tech: ["React", "Frontend SDK", "Data Pipelines"],
      projectLink: "#",
      githubLink: "#",
    },
    {
      title: "EDC Official Website",
      description:
        "Collaborative code-sharing platform enabling secure, temporary access links. Features an interactive zero-install in-browser IDE with robust session-based authentication.",
      tech: ["React", "Node.js", "REST/GraphQL", "Session Auth"],
      projectLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col overflow-hidden text-[#E8DCC8]"
        style={{ backgroundColor: "#1C1C14" }}
      >
        {/* Brown vertical stripe behind the photo */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[28%] h-full z-[0]"
          style={{ backgroundColor: "#7A4E2D" }}
        />

        {/* Top Bar */}
        <div className="relative z-[5] flex items-center justify-between px-6 md:px-12 lg:px-16 pt-6 md:pt-8">
          {/* Top Left */}
          <a
            href="#contact"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-70 transition-opacity text-[#E8DCC8]"
          >
            Let&apos;s build something <span className="text-sm">↗</span>
          </a>

          {/* Top Right - Dot Grid */}
          <div className="grid grid-cols-3 gap-1.5">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#E8DCC8]"
              />
            ))}
          </div>
        </div>

        {/* Giant Background Text - behind the photo */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-6 lg:gap-8 -translate-y-8 md:-translate-y-18 lg:-translate-y-18 pointer-events-none select-none z-[1] ${anton.className}`}
        >
          <h1 className="text-[18vw] md:text-[18vw] uppercase leading-[0.85] tracking-tight text-center whitespace-nowrap text-[#FFF1D1]">
            HARSH VERMA
          </h1>
          <h1 className="text-[12vw] md:text-[12vw] uppercase leading-[0.85] tracking-tight text-center whitespace-nowrap text-[#FFF1D1]">
            FULL STACK DEVELOPER
          </h1>
        </div>

        {/* Photo - overlaps the text, sits in front */}
        <div className="absolute inset-0 flex items-end justify-center z-[2] pointer-events-none">
          <img
            src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1787094307/ChatGPT_Image_Aug_19_2026_04_34_53_AM_ammzui.png"
            alt="Harsh Verma"
            className="w-auto h-[90vh] md:h-[100vh] max-h-[96vh] object-contain object-bottom"
            style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))" }}
          />
        </div>

        {/* Bottom Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-[4] px-6 md:px-12 lg:px-16 pb-6 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.08em] leading-[1.8] max-w-[260px] text-[#E8DCC8]">
                Building modern, scalable web experiences with clean code,
                creative design and purpose.
              </p>
              <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.8] max-w-[260px] text-[#E8DCC8]/60">
                Turning ideas into intuitive digital products.
              </p>
              <div className="pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-8 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] border border-[#E8DCC8]/60 px-5 py-2.5 hover:bg-[#E8DCC8] hover:text-[#1C1C14] transition-all duration-300 group"
                >
                  View my work
                  <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end text-right space-y-4">
              {/* Skill Tags */}
              <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-[#E8DCC8]/80">
                <span>Frontend</span>
                <span className="text-[#E8DCC8]/30">|</span>
                <span>Backend</span>
                <span className="text-[#E8DCC8]/30">|</span>
                <span>UI/UX</span>
              </div>
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.08em] leading-[1.8] max-w-[260px] text-[#E8DCC8]">
                Passionate about technology, design and creating solutions that
                make an impact.
              </p>
              <div className="flex gap-3 pt-1">
                <span className="px-5 py-2 rounded-full border border-[#E8DCC8]/50 text-[10px] font-black tracking-[0.15em] uppercase text-[#E8DCC8]">
                  Developer
                </span>
                <span className="px-5 py-2 rounded-full border border-[#E8DCC8]/50 text-[10px] font-black tracking-[0.15em] uppercase text-[#E8DCC8]">
                  2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Experience Section */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/10 relative overflow-hidden"
      >
        <div className="absolute -right-40 top-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight flex items-center gap-2">
                  <GraduationCap className="text-primary w-8 h-8" /> Education
                </h2>
                <div className="border-l-2 border-primary/20 pl-6 pb-2 relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-[7px] before:top-2">
                  <h3 className="font-semibold text-xl">
                    B. Tech in Information Technology
                  </h3>
                  <p className="text-primary mt-1">JSS UNIVERSITY, NOIDA</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    2024 - present
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight flex items-center gap-2">
                  <Briefcase className="text-primary w-8 h-8" /> Roles &
                  Responsibilities
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6 relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-[7px] before:top-2">
                    <h3 className="font-semibold text-lg">
                      Co-Lead of Technical Team
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Entrepreneurship Development Cell (EDC), JSS UNIVERSITY
                    </p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-6 relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full before:-left-[7px] before:top-2">
                    <h3 className="font-semibold text-lg">Executive Member</h3>
                    <p className="text-muted-foreground mt-1">
                      CSE Technical Council (DCC), JSS UNIVERSITY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/10 bg-muted/30"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of languages, frameworks, and modern
              technologies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Languages", items: skills.languages },
              { title: "Frontend", items: skills.frontend },
              { title: "Backend", items: skills.backend },
              { title: "Databases", items: skills.databases },
              { title: "AI / ML", items: skills.aiml },
              { title: "Tools & Infra", items: skills.tools },
            ].map((category) => (
              <Card
                key={category.title}
                className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg tracking-wide text-foreground/80 group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/10 relative"
      >
        <div className="absolute -left-40 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing collaborative platforms, scalable architectures, and
              seamless user experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/80 leading-relaxed min-h-[120px]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/20 text-muted-foreground/90 bg-background/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="flex-1 text-xs hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <a href={project.projectLink}>
                        <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="flex-1 text-xs hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <a href={project.githubLink}>
                        <Github className="mr-2 w-4 h-4" /> Source
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12 animate-in fade-in duration-1000">
            <h2 className="text-4xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
          </div>

          <Card className="border-border/40 bg-card/30 backdrop-blur-md max-w-3xl mx-auto shadow-2xl">
            <CardContent className="p-10">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <a
                  href="mailto:contact.hv727@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">
                      contact.hv727@gmail.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">
                      +91 8445245727
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                >
                  <a href="mailto:contact.hv727@gmail.com">Send an Email</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:scale-105 transition-transform bg-background"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 w-5 h-5" /> LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:scale-105 transition-transform bg-background"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-5 h-5" /> GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8 px-4 bg-background">
        <div className="container mx-auto text-center text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Harsh Verma. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="font-semibold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              HV.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
