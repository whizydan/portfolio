import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background/50 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} Whizydan. Built with Next.js & shadcn/ui.
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com/whizydan" target="_blank">
                                <Github className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://linkedin.com/in/whizydan" target="_blank">
                                <Linkedin className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://twitter.com/whizydan" target="_blank">
                                <Twitter className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="mailto:whizydan@gmail.com">
                                <Mail className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}