"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Code,
    Smartphone,
    Cpu,
    Database,
    Globe,
    Zap,
    Award,
    Calendar,
    MapPin,
    Download,
    Mail,
    Github,
    Linkedin,
    Twitter,
    ArrowRight,
    ChevronRight,
    Star,
    Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("skills");
    const [isVisible, setIsVisible] = useState(false);
    const [progressValues, setProgressValues] = useState<number[]>([]);
    const experienceRef = useRef<HTMLDivElement>(null);

    const skills = {
        frontend: [
            { name: "Next.js", level: 95, icon: "⚡" },
            { name: "React", level: 90, icon: "⚛️" },
            { name: "TypeScript", level: 85, icon: "🔷" },
            { name: "Tailwind CSS", level: 88, icon: "🎨" },
            { name: "vite", level: 92, icon: "⚛️"},
            { name: "Wordpress", level: 98, icon: "🎨"}
        ],
        mobile: [
            { name: "Flutter", level: 82, icon: "📱" },
            { name: "Kotlin", level: 78, icon: "🤖" },
            { name: ".NET MAUI", level: 40, icon: "🎯" },
        ],
        backend: [
            { name: "ASP.NET", level: 75, icon: "🔷" },
            { name: "Node.js", level: 80, icon: "🟢" },
            { name: "Python", level: 50, icon: "🐍" },
            { name: "PostgreSQL", level: 72, icon: "🐘" },
            { name: "MySQL", level: 95, icon: "📅"},
            { name: "swagger", level: 78, icon: "📃"}
        ],
        tools: [
            { name: "Git", level: 90, icon: "📚" },
            { name: "Docker", level: 65, icon: "🐳" },
            { name: "Arduino", level: 85, icon: "🔌" },
            { name: "Figma", level: 75, icon: "🎨" },
        ]
    };

    const experience = [
        {
            year: "2024 - Present",
            role: "Web Developer",
            company: "Taskweavers LTD",
            description: "Part-time Software Developer, contributed to the design, development, and maintenance of software solutions across web, mobile, and desktop platforms",
            technologies: ["Next.js", "React", "Wordpress", "TypeScript"],
        },
        {
            year: "2023 - 2024",
            role: "Wordpress Developer Intern",
            company: "Samson's Safaris LTD",
            description: "Worked in the IT department as developer and maintenance for record keeping, payment gateway, SEO optimization, tech infrastructure and the company websites.",
            technologies: ["Wordpress", "PHP"],
        },
        {
            year: "2023 - 2023",
            role: "IT Attachment",
            company: "Mabati Technical Training Institute",
            description: "Collaborated with the IT department to manage student records on cloud platforms, configure networks and access points, troubleshoot technical equipment, and maintain software solutions",
            technologies: ["Networking", "HTML5"],
        },
        {
            year: "2022 - 2025",
            role: "Full Stack Developer",
            company: "Mbivu Tech",
            description: "Part-time Remote Software Developer at Mbivu Tech – developed and maintained web, mobile, desktop, and Arduino-based applications, delivering functional and user centric solutions.",
            technologies: ["React", "Flutter", "ASP .NET", "Java/ Kotlin", "ExpressJS", "MySQL"],
        },
    ];

    const funFacts = [
        { icon: "☕", value: "1000+", label: "Cups of Coffee" },
        { icon: "🚀", value: "50+", label: "Projects Launched" },
        { icon: "🌙", value: "100+", label: "Late Nights" },
        { icon: "💡", value: "∞", label: "Ideas Generated" },
    ];

    useEffect(() => {
        setIsVisible(true);

        // Animate progress bars
        const timer = setTimeout(() => {
            setProgressValues([95, 90, 85, 88, 82, 78, 80, 75, 80, 70, 72, 90, 65, 85, 75]);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className={cn(
                            "text-center space-y-6 transition-all duration-1000",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}>
                            <Badge variant="secondary" className="text-sm mb-4">
                                Get to Know Me
                            </Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                About <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Whizydan</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Passionate software developer with a love for creating digital experiences
                                that make a difference. Based in Kenya, working with clients worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Profile Image */}
                        <div className="relative group">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                    <div className="text-8xl">👨‍💻</div>
                                </div>
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border">
                                <Code className="h-8 w-8 text-blue-400" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border">
                                <Smartphone className="h-6 w-6 text-green-400" />
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="space-y-6">
                            <div>
                                <Badge variant="outline" className="mb-4">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    Nairobi, Kenya
                                </Badge>
                                <h2 className="text-3xl font-bold mb-4">Duncan &ldquo;Whizydan&ldquo; Developer</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    I&apos;m a passionate Web & Mobile developer with over 3 years of experience
                                    creating digital solutions that solve real-world problems. My journey
                                    started with curiosity and has evolved into a career I truly love.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    When I&apos;m not coding, you can find me exploring new technologies,
                                    contributing to open-source projects, or sharing knowledge with
                                    the developer community.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 rounded-lg bg-muted/50">
                                    <div className="text-2xl font-bold text-primary">3+</div>
                                    <div className="text-sm text-muted-foreground">Years Experience</div>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/50">
                                    <div className="text-2xl font-bold text-primary">50+</div>
                                    <div className="text-sm text-muted-foreground">Projects</div>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/50">
                                    <div className="text-2xl font-bold text-primary">25+</div>
                                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/50">
                                    <div className="text-2xl font-bold text-primary">10+</div>
                                    <div className="text-sm text-muted-foreground">Technologies</div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button asChild>
                                    <Link href="/contact" className="gap-2">
                                        Get In Touch <Mail className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/projects" className="gap-2">
                                        View Projects <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                            <p className="text-muted-foreground">
                                Here&apos;s a breakdown of my technical expertise across different domains
                            </p>
                        </div>

                        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                            <TabsList className="grid grid-cols-4 w-full">
                                <TabsTrigger value="skills" className="gap-2">
                                    <Zap className="h-4 w-4" />
                                    Skills
                                </TabsTrigger>
                                <TabsTrigger value="experience" className="gap-2">
                                    <Calendar className="h-4 w-4" />
                                    Experience
                                </TabsTrigger>
                                <TabsTrigger value="tools" className="gap-2">
                                    <Code className="h-4 w-4" />
                                    Tools
                                </TabsTrigger>
                                <TabsTrigger value="fun" className="gap-2">
                                    <Heart className="h-4 w-4" />
                                    Fun Facts
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="skills" className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Frontend Skills */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Globe className="h-5 w-5 text-blue-500" />
                                                <h3 className="font-semibold">Frontend Development</h3>
                                            </div>
                                            <div className="space-y-4">
                                                {skills.frontend.map((skill, index) => (
                                                    <div key={skill.name} className="space-y-2">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-sm font-medium">{skill.name}</span>
                                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                                        </div>
                                                        <Progress
                                                            value={progressValues[index] || 0}
                                                            className="h-2"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Mobile & Backend Skills */}
                                    <div className="space-y-6">
                                        <Card>
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Smartphone className="h-5 w-5 text-green-500" />
                                                    <h3 className="font-semibold">Mobile Development</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    {skills.mobile.map((skill, index) => (
                                                        <div key={skill.name} className="space-y-2">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-sm font-medium">{skill.name}</span>
                                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                                            </div>
                                                            <Progress
                                                                value={progressValues[index + 4] || 0}
                                                                className="h-2"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <Card>
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Database className="h-5 w-5 text-purple-500" />
                                                    <h3 className="font-semibold">Backend & Tools</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    {skills.backend.slice(0, 2).map((skill, index) => (
                                                        <div key={skill.name} className="space-y-2">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-sm font-medium">{skill.name}</span>
                                                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                                            </div>
                                                            <Progress
                                                                value={progressValues[index + 7] || 0}
                                                                className="h-2"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="experience">
                                <div className="space-y-8">
                                    {experience.map((exp, index) => (
                                        <Card key={index} className="group hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                                                        <p className="text-primary font-medium">{exp.company}</p>
                                                    </div>
                                                    <Badge variant="secondary" className="w-fit">
                                                        <Calendar className="h-3 w-3 mr-1" />
                                                        {exp.year}
                                                    </Badge>
                                                </div>
                                                <p className="text-muted-foreground mb-4">{exp.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <Badge key={tech} variant="outline" className="text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="tools">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.entries(skills).map(([category, items]) => (
                                        <Card key={category}>
                                            <CardContent className="p-6">
                                                <h3 className="font-semibold mb-4 capitalize">{category} Tools</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {items.map((item) => (
                                                        <div key={item.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                                                            <span className="text-2xl">{item.icon}</span>
                                                            <div>
                                                                <div className="font-medium text-sm">{item.name}</div>
                                                                <div className="text-xs text-muted-foreground">{item.level}%</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="fun">
                                <div className="text-center">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                        {funFacts.map((fact, index) => (
                                            <Card key={fact.label} className="text-center">
                                                <CardContent className="p-6">
                                                    <div className="text-3xl mb-2">{fact.icon}</div>
                                                    <div className="text-2xl font-bold text-primary">{fact.value}</div>
                                                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    <Card>
                                        <CardContent className="p-8">
                                            <h3 className="text-xl font-semibold mb-4">Beyond Coding</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                                                <div>
                                                    <h4 className="font-semibold mb-2">🎮 Hobbies & Interests</h4>
                                                    <ul className="text-sm text-muted-foreground space-y-1">
                                                        <li>• Open Source Contributions</li>
                                                        <li>• Tech Community Mentoring</li>
                                                        <li>• Exploring New Frameworks</li>
                                                        <li>• Gaming & VR Development</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">🌟 Current Focus</h4>
                                                    <ul className="text-sm text-muted-foreground space-y-1">
                                                        <li>• Advanced React Patterns</li>
                                                        <li>• Mobile App Optimization</li>
                                                        <li>• Cloud Architecture</li>
                                                        <li>• AI Integration</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                        <CardContent className="p-8 sm:p-12 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Let&apos;s Build Something Amazing Together
                            </h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                I&apos;m always excited to take on new challenges and collaborate on innovative projects.
                                Whether you need a website, mobile app, or custom solution, I&apos;m here to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/contact" className="gap-2">
                                        Start a Conversation <Mail className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/projects" className="gap-2">
                                        See My Work <ArrowRight className="h-4 w-4" />
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