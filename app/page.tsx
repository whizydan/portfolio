"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cpu,
  Download,
  ExternalLink,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    "Next.js", "React", "TypeScript", "Kotlin", "Flutter", "ASP.NET", "Arduino"
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const featuredSkills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web applications with Next.js, React, and TypeScript",
      color: "text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform apps with Flutter and native Android with Kotlin",
      color: "text-green-400"
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems",
      description: "Hardware programming with Arduino and embedded C++",
      color: "text-purple-400"
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(techInterval);
  }, []);

  return (
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className={cn(
                  "text-center space-y-8 transition-all duration-1000 transform",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium">Full Stack Developer</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Whizydan
                </span>
                </h1>

                {/* Animated Tech Stack */}
                <div className="h-12">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
                    I build amazing experiences with{" "}
                    <span className="text-primary font-semibold transition-all duration-500">
                    {technologies[currentTech]}
                  </span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Passionate software developer specializing in creating modern web and mobile
                  applications. I transform ideas into functional, beautiful, and user-friendly
                  digital solutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                  <Button size="lg" className="group gap-2" asChild>
                    <Link href="/projects">
                      View My Work
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="group gap-2" asChild>
                    <Link href="/contact">
                      Get In Touch
                      <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <ChevronDown className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                  <div
                      key={stat.label}
                      className={cn(
                          "text-center space-y-2 transition-all duration-700 delay-200",
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      )}
                      style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-sm">
                What I Do
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Specialized In Modern Tech Stack
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to deployment, I handle every aspect of the development
                process with cutting-edge technologies and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredSkills.map((skill, index) => (
                  <Card
                      key={skill.title}
                      className={cn(
                          "group hover:shadow-lg transition-all duration-500 border-2 hover:border-primary/20 hover:scale-105",
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      )}
                      style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <skill.icon className={cn("h-8 w-8", skill.color)} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Projects Preview */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 text-sm">
                Recent Work
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A glimpse of some exciting projects I&apos;ve worked on recently
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Project 1 */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-500">
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <Image width={1314} height={629} title={'Stellar marketplace image'} src={'/projects/stellar-marketplace.png'} className="text-blue-400" alt={"Stellar marketplace"} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
                      <Badge variant="outline">Next.js</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Full-stack e-commerce solution with modern UI and seamless user experience.
                    </p>
                    <Button onClick={()=>{
                      const link = 'https://stellarmarketplacekenya.com';
                      window.open(link);
                    }} variant="ghost" size="sm" className="gap-2 group-hover:text-primary">
                      View Project <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-500">
                <CardContent className="p-0 relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                    <Smartphone className="h-16 w-16 text-green-400 opacity-50" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">Healthcare App</h3>
                      <Badge variant="outline">Kotlin</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      Android Health tracking application with real-time analytics.
                    </p>
                    <Button onClick={()=>window.open('https://github.com/whizydan/medico')} variant="ghost" size="sm" className="gap-2 group-hover:text-primary">
                      View Project <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ready to Bring Your Ideas to Life?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let&apos;s collaborate to create something amazing. I&apos;m always excited to take on
                  new challenges and help bring innovative ideas to reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/contact">
                      Start a Project
                      <Sparkles className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link href="/about">
                      Learn More About Me
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
  );
}