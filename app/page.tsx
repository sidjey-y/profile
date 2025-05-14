"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Brain,
  Database,
  Globe,
  Phone,
  MapPin,
  Award,
  Camera,
  Wine,
  HeartPulse,
  Users,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { MobileNav } from "@/components/mobile-nav"
import { motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  function handleScroll(id: string) {
    const targetId = id.startsWith('#') ? id : `#${id}`;
    window.location.href = targetId;
  }

  const projects = [
    {
      id: 1,
      title: "(A)I Plant",
      description:
        "An intelligent agriculture monitoring system that leverages artificial intelligence to provide real-time soil analysis, nutrient monitoring, and farming recommendations.",
      image: "/images/ai-plant-new.png",
      link: "https://github.com/sidjey-y/ai-plant",
      tags: ["AI", "IoT", "Agriculture"],
      category: "ai",
    },
    {
      id: 2,
      title: "WeAId",
      description:
        "A smart healthcare waiting system for efficient patient management, using AI to optimize waiting times and improve the patient experience.",
      image: "/images/weaid.png",
      link: "https://github.com/sidjey-y/weaid",
      tags: ["AI", "Healthcare", "Patient Management"],
      category: "ai",
    },
    {
      id: 3,
      title: "mAInd The Polls",
      description:
        "An AI-powered election insights platform that analyzes voting patterns, predicts outcomes, and provides data visualization for election trends.",
      image: "/images/maind-new.png",
      link: "https://github.com/sidjey-y/ai-election-insights",
      tags: ["AI", "Data Analysis", "Visualization"],
      category: "ai",
    },
    {
      id: 4,
      title: "Roaster Chatbot",
      description:
        "A humorous chatbot that analyzes messaging patterns and responds with light-hearted roasts while dynamically updating a 'Roast-O-Meter' that tracks various attributes.",
      image: "/images/roaster-chatbot-new.png",
      link: "https://github.com/sidjey-y/roaster-chatbot",
      tags: ["NLP", "Chatbot", "Humor"],
      category: "ai",
    },
    {
      id: 5,
      title: "Predicting Dementia Status",
      description:
        "A machine learning model that predicts dementia status using the OASIS dataset, helping in early diagnosis and treatment planning.",
      icon: <HeartPulse className="h-16 w-16 text-primary" />,
      link: "https://github.com/sidjey-y/dementia-ml",
      tags: ["Machine Learning", "Healthcare", "Data Science"],
      category: "ml",
    },
    {
      id: 6,
      title: "Wine Quality Prediction",
      description:
        "A machine learning model that predicts wine quality based on physicochemical properties, helping vintners improve their production processes.",
      icon: <Wine className="h-16 w-16 text-primary" />,
      link: "https://github.com/sidjey-y/wine-quality-machine-learning",
      tags: ["Machine Learning", "Data Analysis", "Classification"],
      category: "ml",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const achievements = [
    {
      title: "Campus Organizer",
      description: "Selected as the Campus Organizer for Google Developer Groups UP Manila",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Academic Excellence",
      description: "Part of the top 7.5% of the UP chapter of The International Honor Society of Phi Kappa Phi",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Tech Community Leader",
      description: "Leading a team of 20 core officers and engaging with 250+ members in the tech community",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollIndicator />
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <span>Carla Joy Haboc</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Achievements
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/sidjey-y" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/cj-haboc/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild className="hidden md:flex">
              <a href="#contact">Contact Me</a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Sidjey!</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Computer Science student passionate about AI, machine learning, and data science.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="#projects">View My Projects</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-primary/20 bg-muted md:w-[400px]">
                  <Image
                    src="/images/profile-new.jpeg"
                    alt="Carla Joy Haboc"
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="#about"
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
              >
                Scroll Down <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        <AnimatedSection id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  <User className="h-4 w-4 inline mr-1" /> About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get to know me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a Computer Science student at the University of the Philippines Manila, specializing in
                  Statistical Computing. I'm passionate about AI, machine learning, and data science.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection
                delay={0.3}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              >
                <Image
                  src="/images/about-me-new.jpeg"
                  alt="About Me"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </AnimatedSection>
              <div className="flex flex-col justify-center space-y-4">
                <AnimatedSection delay={0.4} className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">My Background</h3>
                  <p className="text-muted-foreground">
                    As a student at UP Manila, I've been focusing on building a strong foundation in computer science
                    with a specialization in statistical computing.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.5} className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">My Passion</h3>
                  <p className="text-muted-foreground">
                    I believe in the power of AI and ML to transform our world. I enjoy exploring new technologies and
                    approaches to solve complex problems and create innovative solutions that can make a positive impact
                    on society.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.6} className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">Community Involvement</h3>
                  <p className="text-muted-foreground">
                    I'm deeply involved in the tech community as the CEO and Chapter Organizer of Google Developer
                    Groups on Campus, where I lead a team of 20+ core officers and engage with 250+ members. I'm
                    passionate about giving back through mentorship and organizing events.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  <Code className="h-4 w-4 inline mr-1" /> Skills & Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What I bring to the table</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've developed a diverse set of technical and leadership skills throughout my academic journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection delay={0.2}>
                <Card className="flex flex-col items-center text-center p-6 space-y-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                  <p className="text-muted-foreground">
                    Proficient in multiple programming languages for various applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">C#</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">C/C++</Badge>
                    <Badge variant="outline">PHP</Badge>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="flex flex-col items-center text-center p-6 space-y-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Brain className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI & Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Experience with AI frameworks and machine learning techniques.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">Scikit-learn</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">R</Badge>
                    <Badge variant="outline">Data Analysis</Badge>
                    <Badge variant="outline">Predictive Modeling</Badge>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Card className="flex flex-col items-center text-center p-6 space-y-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Globe className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Full-Stack Development</h3>
                  <p className="text-muted-foreground">Building complete web applications from frontend to backend.</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="outline">React.js</Badge>
                    <Badge variant="outline">Spring Boot</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">Vue.js</Badge>
                    <Badge variant="outline">HTML/CSS</Badge>
                    <Badge variant="outline">TailwindCSS</Badge>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <Card className="flex flex-col items-center text-center p-6 space-y-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Database className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Databases & Backend</h3>
                  <p className="text-muted-foreground">Managing data storage and server-side operations.</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Firebase</Badge>
                    <Badge variant="outline">RESTful APIs</Badge>
                    <Badge variant="outline">Database Design</Badge>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <Card className="flex flex-col items-center text-center p-6 space-y-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Game Development</h3>
                  <p className="text-muted-foreground">Creating interactive gaming experiences.</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="outline">Unity</Badge>
                    <Badge variant="outline">C#</Badge>
                    <Badge variant="outline">Game Mechanics</Badge>
                    <Badge variant="outline">Animation</Badge>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <Card className="flex flex-col items-center text-center p-6 space-y-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Briefcase className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Leadership & Management</h3>
                  <p className="text-muted-foreground">Leading teams and managing projects effectively.</p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="outline">Team Leadership</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Analytical Thinking</Badge>
                    <Badge variant="outline">Public Speaking</Badge>
                    <Badge variant="outline">Problem-Solving</Badge>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  <Briefcase className="h-4 w-4 inline mr-1" /> Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on recently. Each one represents a unique challenge and
                  solution in the world of AI and machine learning.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 mb-8">
              <Tabs defaultValue="all" className="w-full max-w-md" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="ai">AI Projects</TabsTrigger>
                  <TabsTrigger value="ml">ML Projects</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={0.2 + index * 0.1}>
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <div className="relative">
                      {project.image ? (
                        <div className="w-full h-48 relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105 duration-500"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-full h-48 bg-muted flex items-center justify-center">{project.icon}</div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm" asChild>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            View Project <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="https://github.com/sidjey-y" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  <Award className="h-4 w-4 inline mr-1" /> Achievements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Milestones & Recognition</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Some of my proudest moments and accomplishments along my journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                  <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full flex flex-col">
                    <div className="flex justify-center mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-bold text-center mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-center">{achievement.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5} className="max-w-4xl mx-auto mt-8 bg-muted/20 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/images/gdg-upm.jpeg"
                    alt="Google Developer Groups"
                    width={400}
                    height={300}
                    className="rounded-lg w-full"
                    unoptimized
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Google Developer Groups Campus Lead</h3>
                  <p className="text-muted-foreground mb-4">
                    As the CEO and Chapter Organizer of Google Developer Groups on Campus at UP Manila, I lead
                    initiatives to foster tech learning and community building among students.
                  </p>
                  <Button variant="outline" asChild>
                    <Link
                      href="https://gdg.community.dev/gdg-on-campus-university-of-the-philippines-manila-manila-philippines/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Visit GDG UP Manila <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  <Camera className="h-4 w-4 inline mr-1" /> Gallery
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Photo Dump</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A glimpse into my life, events, and memorable moments.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { src: "/images/photo1.jpeg", alt: "Speaking at a tech event" },
                  { src: "/images/photo2.jpeg", alt: "Presenting at a webinar" },
                  { src: "/images/photo3.jpeg", alt: "Google Developer Groups merchandise" },
                  { src: "/images/photo4.jpeg", alt: "Award ceremony with team" },
                  { src: "/images/photo8.jpeg", alt: "Google Developer Groups swag" },
                  { src: "/images/photo9-new.jpeg", alt: "Tech booth with team" },
                  { src: "/images/photo11.jpeg", alt: "At Venom tech event" },
                  { src: "/images/photo12.jpeg", alt: "Sonder 2023 Core Team" },
                  { src: "/images/photo13.jpeg", alt: "Speaking on stage" },
                  { src: "/images/photo14.jpeg", alt: "TEDx Women in Tech event" },
                  { src: "/images/photo15.jpeg", alt: "ECHELON Philippines tech event" },
                  { src: "/images/photo16.jpeg", alt: "Group photo with tech community" },
                ].map((item, index) => (
                  <AnimatedSection key={index} delay={0.1 * index} className="overflow-hidden rounded-lg aspect-square">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  <Mail className="h-4 w-4 inline mr-1" /> Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project idea, question, or just want to say hi? I'd love to hear from you!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <AnimatedSection delay={0.2} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">haboc.carlajoy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">09953095304</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-muted-foreground">Santolan, Pasig City, 1610</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <p className="text-muted-foreground">
                      <Link
                        href="https://www.linkedin.com/in/cj-haboc/"
                        className="hover:underline hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/cj-haboc
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">GitHub</h3>
                    <p className="text-muted-foreground">
                      <Link
                        href="https://github.com/sidjey-y"
                        className="hover:underline hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/sidjey-y
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm6.5 8.5-4 4-1.5-1.5 2.5-2.5-2.5-2.5 1.5-1.5 4 4z" />
                      <path d="m10 10-4 4 4 4 1.5-1.5L9 14l2.5-2.5L10 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">GDG UP Manila</h3>
                    <p className="text-muted-foreground">
                      <Link
                        href="https://gdg.community.dev/gdg-on-campus-university-of-the-philippines-manila-manila-philippines/"
                        className="hover:underline hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GDG Community
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-bold">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    I'm always open to discussing new projects, creative ideas, or opportunities to collaborate on
                    interesting initiatives.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                          placeholder="What's this about?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                          placeholder="Your message"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Carla Joy Haboc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
