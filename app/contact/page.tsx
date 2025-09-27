"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Mail,
    MapPin,
    Calendar,
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
    Zap,
    Clock,
    Star,
    Heart,
    ArrowRight,
    ExternalLink,
    Coffee,
    Sparkles,
    Mic,
    Video,
    Handshake
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeInteraction, setActiveInteraction] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            description: "Send me a detailed message",
            value: "whizydan",
            link: "mailto:whizydan@gmail.com",
            color: "text-red-400",
            bgColor: "bg-red-400/10",
            interaction: "email",
            delay: "0ms"
        },
        {
            icon: MessageCircle,
            title: "Social DM",
            description: "Quick chat on social media",
            value: "@whizydan",
            link: "https://x.com/whizydan",
            color: "text-blue-400",
            bgColor: "bg-blue-400/10",
            interaction: "social",
            delay: "100ms"
        },
        {
            icon: Calendar,
            title: "Schedule Call",
            description: "Book a meeting directly",
            value: "30-min session",
            link: "https://cal.com/whizydan",
            color: "text-green-400",
            bgColor: "bg-green-400/10",
            interaction: "schedule",
            delay: "200ms"
        },
        {
            icon: Video,
            title: "Video Call",
            description: "Face-to-face discussion",
            value: "Google Meet/Zoom",
            link: "https://meet.google.com",
            color: "text-purple-400",
            bgColor: "bg-purple-400/10",
            interaction: "video",
            delay: "300ms"
        }
    ];

    const socialPlatforms = [
        {
            icon: Github,
            name: "GitHub",
            handle: "@whizydan",
            description: "Check out my code and projects",
            link: "https://github.com/whizydan",
            followers: "2.4k",
            color: "text-gray-400",
            bgColor: "bg-gray-400/10"
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            handle: "Whizydan Dev",
            description: "Professional network and updates",
            link: "https://linkedin.com/in/whizydan",
            followers: "1.8k",
            color: "text-blue-500",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: Twitter,
            name: "Twitter",
            handle: "@whizydan",
            description: "Daily tech insights and updates",
            link: "https://x.com/whizydan",
            followers: "3.2k",
            color: "text-sky-400",
            bgColor: "bg-sky-400/10"
        },
        {
            icon: MessageCircle,
            name: "Discord",
            handle: "whizydan#1234",
            description: "Community and quick chats",
            link: "https://discord.com/users/whizydan",
            followers: "500+",
            color: "text-indigo-400",
            bgColor: "bg-indigo-400/10"
        }
    ];

    const availability = [
        {
            day: "Monday - Friday",
            hours: "9:00 AM - 6:00 PM",
            status: "Available",
            color: "text-green-400",
            icon: Zap
        },
        {
            day: "Weekends",
            hours: "10:00 AM - 4:00 PM",
            status: "Limited",
            color: "text-yellow-400",
            icon: Clock
        },
        {
            day: "Response Time",
            hours: "Within 24 hours",
            status: "Guaranteed",
            color: "text-blue-400",
            icon: Star
        }
    ];

    const funInteractions = [
        {
            icon: Coffee,
            title: "Virtual Coffee",
            description: "Let's have a casual chat over coffee",
            duration: "15-30 min",
            emoji: "☕"
        },
        {
            icon: Mic,
            title: "Tech Discussion",
            description: "Deep dive into technology and trends",
            duration: "30-60 min",
            emoji: "💻"
        },
        {
            icon: Handshake,
            title: "Project Kickoff",
            description: "Discuss your project requirements",
            duration: "45-90 min",
            emoji: "🚀"
        },
        {
            icon: Sparkles,
            title: "Brainstorming",
            description: "Creative session for new ideas",
            duration: "30-60 min",
            emoji: "✨"
        }
    ];

    useEffect(() => {
        setIsVisible(true);

        // Update time every minute
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const isWorkingHours = () => {
        const hour = currentTime.getHours();
        const day = currentTime.getDay();
        return day >= 1 && day <= 5 && hour >= 9 && hour < 18;
    };

    const ContactMethodCard = ({ method, index }: { method: typeof contactMethods[0], index: number }) => (
        <Card
            className={cn(
                "group relative overflow-hidden transition-all duration-500 hover:shadow-xl border-2",
                activeInteraction === method.interaction ? "border-primary scale-105" : "border-transparent hover:border-primary/20"
            )}
            onMouseEnter={() => setActiveInteraction(method.interaction)}
            onMouseLeave={() => setActiveInteraction(null)}
            style={{ transitionDelay: method.delay }}
        >
            <CardContent className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className={cn("p-3 rounded-xl", method.bgColor)}>
                        <method.icon className={cn("h-6 w-6", method.color)} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                        {index + 1}
                    </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{method.value}</span>
                    <Button size="sm" variant="ghost" className="gap-1 group-hover:gap-2 transition-all" asChild>
                        <Link href={method.link} target="_blank">
                            Connect
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </CardContent>

            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                method.bgColor
            )} />
        </Card>
    );

    const SocialPlatformCard = ({ platform }: { platform: typeof socialPlatforms[0] }) => (
        <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className={cn("p-3 rounded-xl", platform.bgColor)}>
                        <platform.icon className={cn("h-6 w-6", platform.color)} />
                    </div>
                    <div>
                        <h3 className="font-semibold">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                    {platform.description}
                </p>

                <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                        {platform.followers} followers
                    </Badge>
                    <Button size="sm" variant="outline" className="gap-1" asChild>
                        <Link href={platform.link} target="_blank">
                            Follow
                            <ExternalLink className="h-3 w-3" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );

    const AvailabilityCard = ({ slot }: { slot: typeof availability[0] }) => (
        <Card className="text-center group hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <slot.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{slot.day}</h4>
                <p className="text-sm text-muted-foreground mb-2">{slot.hours}</p>
                <Badge variant="secondary" className={slot.color}>
                    {slot.status}
                </Badge>
            </CardContent>
        </Card>
    );

    const InteractionCard = ({ interaction, index }: { interaction: typeof funInteractions[0], index: number }) => (
        <Card
            className={cn(
                "group relative overflow-hidden transition-all duration-500 hover:shadow-xl",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="text-2xl">{interaction.emoji}</div>
                        <interaction.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                        {interaction.duration}
                    </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {interaction.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                    {interaction.description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                </div>
            </CardContent>

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                <MessageCircle className="h-3 w-3 mr-1" />
                                Let&apos;s Connect
                            </Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                Let&apos;s <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Work Together</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Ready to bring your ideas to life? I&apos;m always excited to discuss new projects,
                                collaborate on innovative solutions, or just have a great conversation about technology.
                            </p>

                            {/* Current Status */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border">
                                <div className={cn(
                                    "w-2 h-2 rounded-full animate-pulse",
                                    isWorkingHours() ? "bg-green-400" : "bg-yellow-400"
                                )} />
                                <span className="text-sm font-medium">
                  {isWorkingHours() ? "Available now" : "Available soon"}
                </span>
                                <span className="text-xs text-muted-foreground">
                  • {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Choose Your Connection Method</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Pick the way that works best for you. I&apos;m flexible and ready to connect
                                through your preferred channel.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {contactMethods.map((method, index) => (
                                <ContactMethodCard key={method.title} method={method} index={index} />
                            ))}
                        </div>

                        {/* Quick Action Buttons */}
                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button size="lg" className="gap-2" asChild>
                                    <Link href="mailto:whizydan@gmail.com">
                                        <Mail className="h-4 w-4" />
                                        Send Quick Email
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="gap-2" asChild>
                                    <Link href="https://cal.com/whizydan" target="_blank">
                                        <Calendar className="h-4 w-4" />
                                        Schedule Meeting
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Platforms */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Follow My Journey</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Stay updated with my latest projects, tech insights, and behind-the-scenes content.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {socialPlatforms.map((platform) => (
                                <SocialPlatformCard key={platform.name} platform={platform} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Availability */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">When I&apos;m Available</h2>
                            <p className="text-muted-foreground">
                                Based in Nairobi, Kenya (EAT). I strive to respond to all inquiries within 24 hours.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {availability.map((slot) => (
                                <AvailabilityCard key={slot.day} slot={slot} />
                            ))}
                        </div>

                        {/* Timezone Info */}
                        <Card className="text-center">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span className="font-semibold">Nairobi, Kenya (EAT)</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Current time: {currentTime.toLocaleTimeString('en-KE', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZone: 'Africa/Nairobi'
                                })}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Fun Interactions */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Fun Ways to Connect</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Not everything has to be business! Here are some enjoyable ways we can interact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {funInteractions.map((interaction, index) => (
                                <InteractionCard key={interaction.title} interaction={interaction} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <Sparkles className="h-8 w-8 text-primary/20 animate-pulse" />
                        </div>
                        <CardContent className="p-8 sm:p-12 text-center relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                                <Heart className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">Let&apos;s create something amazing</span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                Ready to Start Our Conversation?
                            </h2>

                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Whether you have a project in mind, want to collaborate, or just want to say hello,
                                I&apos;d love to hear from you. Let&apos;s make something extraordinary together!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="gap-2" asChild>
                                    <Link href="mailto:whizydan@gmail.com">
                                        <Mail className="h-4 w-4" />
                                        Send Message
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="gap-2" asChild>
                                    <Link href="https://cal.com/whizydan" target="_blank">
                                        <Video className="h-4 w-4" />
                                        Video Call
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-6 text-xs text-muted-foreground">
                                <p>P.S. I love discussing new ideas over virtual coffee! ☕</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}