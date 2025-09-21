"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { HoverDropdown } from "@/components/hover-dropdown"
import { Menu, X } from "lucide-react"
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-heading font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Avyren Technologies</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <HoverDropdown
                trigger={
                  <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Products
                  </button>
                }
              >
                <DropdownMenuItem asChild>
                  <Link href="/products">All Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/avy-tracker">Avy Tracker</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ecommerce-booking">E-commerce & Booking</Link>
                </DropdownMenuItem>
              </HoverDropdown>

              <HoverDropdown
                trigger={
                  <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Pricing
                  </button>
                }
              >
                <DropdownMenuItem asChild>
                  <Link href="/products/avy-tracker/pricing">Avy Tracker Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ecommerce-booking/pricing">E-commerce Pricing</Link>
                </DropdownMenuItem>
              </HoverDropdown>

              <HoverDropdown
                trigger={
                  <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Features
                  </button>
                }
              >
                <DropdownMenuItem asChild>
                  <Link href="/products/avy-tracker#features">Avy Tracker Features</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/ecommerce-booking#features">E-commerce Features</Link>
                </DropdownMenuItem>
              </HoverDropdown>

              <HoverDropdown
                trigger={
                  <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Company
                  </button>
                }
              >
                <DropdownMenuItem asChild>
                  <Link href="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about#team">Our Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about#clients">Our Clients</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/careers">Careers</Link>
                </DropdownMenuItem>
              </HoverDropdown>
            </div>
          </div>

          {/* Search, Theme Toggle and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <ModeToggle />
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/products/avy-tracker/pricing"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Avy Tracker Pricing
              </Link>
              <Link
                href="/products/ecommerce-booking/pricing"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                E-commerce Pricing
              </Link>
              <Link
                href="/products/avy-tracker#features"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Avy Tracker Features
              </Link>
              <Link
                href="/products/ecommerce-booking#features"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                E-commerce Features
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/about#team"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/about#clients"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Our Clients
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <SearchBar className="mb-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ModeToggle />
                  </div>
                  <Button asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
