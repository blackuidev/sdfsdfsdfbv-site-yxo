import * as React from "react";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Home, Menu } from "lucide-react";

export function AppHeader() {
  return (
    <Header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo/Site Title */}
        <div className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" /> {/* Placeholder for logo */}
          <span className="font-bold text-lg text-foreground">My App</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/products"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>

        {/* Mobile Navigation Toggle (placeholder) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
    </Header>
  );
}
