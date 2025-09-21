"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/ui/search"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
                <span className="text-primary-foreground font-heading font-bold text-lg">T</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Tecosoft Digital Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Platform <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/platform">Platform Overview</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/connectivity">Connectivity Hub</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/integrations">Integrations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/apis">API Documentation</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/solutions">All Solutions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/digital-transformation">Digital Transformation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/process-optimization">Process Optimization</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/automation">Automation Solutions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/business-intelligence">Business Intelligence</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Industries <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/industries">All Industries</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/manufacturing">Manufacturing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/healthcare">Healthcare</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/finance">Financial Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/retail">Retail & E-commerce</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/logistics">Logistics & Supply Chain</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/company">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/team">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/careers">Careers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/news">News & Press</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/resources">All Resources</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/case-studies">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/whitepapers">White Papers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/webinars">Webinars</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/blog">Blog</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/pricing"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Search and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <Button variant="outline" asChild>
              <Link href="/demo">Book a Demo</Link>
            </Button>
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
                href="/platform"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Platform
              </Link>
              <Link
                href="/solutions"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/industries"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/company"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <SearchBar className="mb-2" />
                  <Button variant="outline" asChild>
                    <Link href="/demo">Book a Demo</Link>
                  </Button>
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
