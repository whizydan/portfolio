"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Search,
    Filter,
    ExternalLink,
    Github,
    ArrowRight,
    Eye,
    Code,
    Smartphone,
    Globe,
    Cpu,
    Zap,
    Star,
    Heart,
    Calendar,
    Users,
    ArrowUpRight,
    Play
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const categories = [
        { id: "all", label: "All Projects", icon: Globe, count: 12 },
        { id: "web", label: "Web Apps", icon: Code, count: 6 },
        { id: "mobile", label: "Mobile Apps", icon: Smartphone, count: 4 },
        { id: "iot", label: "IoT & Embedded", icon: Cpu, count: 2 },
    ];

    const technologies = [
        "Next.js", "React", "TypeScript", "Flutter", "Kotlin", "ASP.NET",
        "Node.js", "Python", "Arduino", "Tailwind CSS", "MongoDB", "PostgreSQL"
    ];

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with modern UI, real-time inventory management, and secure payment integration.",
            category: "web",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
            status: "completed",
            featured: true,
            githubUrl: "https://github.com/whizydan/ecommerce-platform",
            liveUrl: "https://ecommerce-demo.vercel.app",
            year: "2024",
            highlights: ["Real-time analytics", "Payment integration", "Admin dashboard"]
        },
        {
            id: 2,
            title: "Fitness Tracker Mobile App",
            description: "Cross-platform fitness application with workout plans, progress tracking, and social features.",
            category: "mobile",
            image: "/api/placeholder/600/400",
            technologies: ["Flutter", "Dart", "Firebase", "Node.js"],
            status: "completed",
            featured: true,
            githubUrl: "https://github.com/whizydan/fitness-tracker",
            liveUrl: "https://play.google.com/store/apps/details?id=com.whizydan.fitness",
            year: "2024",
            highlights: ["Cross-platform", "Real-time sync", "Social features"]
        },
        {
            id: 3,
            title: "Smart Home IoT System",
            description: "IoT-based home automation system with mobile control, sensors, and energy monitoring.",
            category: "iot",
            image: "/api/placeholder/600/400",
            technologies: ["Arduino", "React Native", "Node.js", "MQTT"],
            status: "in-progress",
            featured: true,
            githubUrl: "https://github.com/whizydan/smart-home-iot",
            liveUrl: null,
            year: "2024",
            highlights: ["Real-time control", "Energy monitoring", "Mobile app"]
        },
        {
            id: 4,
            title: "Project Management Dashboard",
            description: "Collaborative project management tool with task tracking, team collaboration, and analytics.",
            category: "web",
            image: "/api/placeholder/600/400",
            technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
            status: "completed",
            featured: false,
            githubUrl: "https://github.com/whizydan/project-dashboard",
            liveUrl: "https://project-mgmt.vercel.app",
            year: "2023",
            highlights: ["Team collaboration", "Real-time updates", "Analytics"]
        },
        {
            id: 5,
            title: "Food Delivery App",
            description: "Mobile application for food delivery with real-time tracking, reviews, and payment system.",
            category: "mobile",
            image: "/api/placeholder/600/400",
            technologies: ["Flutter", "Dart", "Firebase", "Stripe"],
            status: "completed",
            featured: false,
            githubUrl: "https://github.com/whizydan/food-delivery-app",
            liveUrl: "https://apps.apple.com/app/food-delivery",
            year: "2023",
            highlights: ["Real-time tracking", "Payment system", "Reviews"]
        },
        {
            id: 6,
            title: "Weather Station Arduino",
            description: "Arduino-based weather monitoring system with web dashboard and data logging.",
            category: "iot",
            image: "/api/placeholder/600/400",
            technologies: ["Arduino", "C++", "React", "WebSocket"],
            status: "completed",
            featured: false,
            githubUrl: "https://github.com/whizydan/weather-station",
            liveUrl: "https://weather-station-demo.vercel.app",
            year: "2023",
            highlights: ["Real-time data", "Web dashboard", "Data logging"]
        },
        {
            id: 7,
            title: "Portfolio Website",
            description: "Modern portfolio website with animations, dark mode, and project showcase.",
            category: "web",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            status: "completed",
            featured: false,
            githubUrl: "https://github.com/whizydan/portfolio",
            liveUrl: "https://whizydan.vercel.app",
            year: "2023",
            highlights: ["Dark mode", "Animations", "Responsive"]
        },
        {
            id: 8,
            title: "Chat Application",
            description: "Real-time chat application with rooms, file sharing, and user authentication.",
            category: "web",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            status: "completed",
            featured: false,
            githubUrl: "https://github.com/whizydan/chat-app",
            liveUrl: "https://chat-demo.vercel.app",
            year: "2023",
            highlights: ["Real-time messaging", "File sharing", "Rooms"]
        }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === "all" || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            );
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const FeaturedProject = ({ project }: { project: typeof projects[0] }) => (
        <Card className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    Featured
                </Badge>
            </div>

            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Globe className="h-20 w-20 text-primary/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                        {project.liveUrl && (
                            <Button size="sm" className="gap-2" asChild>
                                <Link href={project.liveUrl} target="_blank">
                                    <Play className="h-4 w-4" />
                                    Live Demo
                                </Link>
                            </Button>
                        )}
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                            <Link href={project.githubUrl} target="_blank">
                                <Github className="h-4 w-4" />
                                Code
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                        {project.status === "completed" ? "Completed" : "In Progress"}
                    </Badge>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                        </Badge>
                    )}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.year}</span>
                    <div className="flex items-center gap-4">
                        {project.highlights.slice(0, 2).map((highlight, index) => (
                            <span key={index} className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-yellow-500" />
                                {highlight}
              </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
        <Card
            className={cn(
                "group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
        >
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    {project.category === "web" && <Code className="h-16 w-16 text-primary/20" />}
                    {project.category === "mobile" && <Smartphone className="h-16 w-16 text-primary/20" />}
                    {project.category === "iot" && <Cpu className="h-16 w-16 text-primary/20" />}
                </div>

                <div className={cn(
                    "absolute inset-0 bg-primary/5 transition-opacity duration-300",
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )} />

                <div className="absolute top-4 right-4 z-10">
                    <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                        {project.status === "completed" ? "Live" : "In Progress"}
                    </Badge>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                        {project.liveUrl && (
                            <Button size="sm" variant="secondary" className="gap-2 rounded-full" asChild>
                                <Link href={project.liveUrl} target="_blank">
                                    <Eye className="h-4 w-4" />
                                    Demo
                                </Link>
                            </Button>
                        )}
                        <Button size="sm" variant="secondary" className="gap-2 rounded-full" asChild>
                            <Link href={project.githubUrl} target="_blank">
                                <Github className="h-4 w-4" />
                                Code
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-1.5 py-0">
                            {tech}
                        </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                        <Badge variant="outline" className="text-xs px-1.5 py-0">
                            +{project.technologies.length - 2}
                        </Badge>
                    )}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{project.year}</span>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.category}
                    </div>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className={cn(
                            "space-y-6 transition-all duration-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}>
                            <Badge variant="secondary" className="text-sm mb-4">
                                <Code className="h-3 w-3 mr-1" />
                                My Creations
                            </Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                Featured <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                A collection of my latest work showcasing expertise in web development,
                                mobile applications, and IoT solutions. Each project tells a story of
                                innovation and technical excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                            {/* Search Bar */}
                            <div className="relative w-full lg:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search projects by name, tech, or description..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4"
                                />
                            </div>

                            {/* Category Filters */}
                            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full lg:w-auto">
                                <TabsList className="flex-wrap h-auto p-1">
                                    {categories.map((category) => (
                                        <TabsTrigger
                                            key={category.id}
                                            value={category.id}
                                            className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                        >
                                            <category.icon className="h-4 w-4" />
                                            {category.label}
                                            <Badge variant="secondary" className="ml-1 px-1.5 py-0 h-5 text-xs">
                                                {category.count}
                                            </Badge>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <Star className="h-5 w-5 text-yellow-500" />
                                Featured Projects
                            </h2>
                            <Badge variant="outline" className="text-sm">
                                Best Work
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                            {projects.filter(p => p.featured).map((project) => (
                                <FeaturedProject key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Projects Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">
                                All Projects ({filteredProjects.length})
                            </h2>
                            <div className="text-sm text-muted-foreground">
                                Showing {filteredProjects.length} of {projects.length} projects
                            </div>
                        </div>

                        {filteredProjects.length === 0 ? (
                            <div className="text-center py-16">
                                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                                <p className="text-muted-foreground mb-4">
                                    Try adjusting your search or filter criteria
                                </p>
                                <Button onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
                                    Clear Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Technologies Used */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-8">Technologies I Work With</h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {technologies.map((tech, index) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="text-sm px-3 py-1.5 transition-all hover:scale-105 cursor-pointer"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                        <CardContent className="p-8 sm:p-12 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Have an idea in mind? Let&apos;s collaborate to bring it to life with
                                cutting-edge technology and exceptional user experience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/contact" className="gap-2">
                                        Start a Project <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/about" className="gap-2">
                                        Learn More About Me <ArrowRight className="h-4 w-4" />
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