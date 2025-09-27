"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 10);
        });
    }

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-mono text-lg font-bold text-primary-foreground">
                W
              </span>
                        </div>
                        <span className="font-mono text-xl font-bold">Whizydan</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                asChild
                                variant={pathname === item.href ? "default" : "ghost"}
                                className={cn(
                                    "transition-all duration-200",
                                    pathname === item.href && "shadow-lg"
                                )}
                            >
                                <Link href={item.href}>{item.name}</Link>
                            </Button>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}