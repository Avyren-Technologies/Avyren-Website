import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-heading font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Avyren Technologies</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Powering Smart Digital Solutions for businesses across industries with affordable, 
              scalable, and intelligent platforms.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">info@avyrentechnologies.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">[Office Address], India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/avy-tracker" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Avy Tracker
                </Link>
              </li>
              <li>
                <Link href="/products/ecommerce-booking" className="text-gray-300 hover:text-white text-sm transition-colors">
                  E-commerce & Service Booking
                </Link>
              </li>
              <li>
                <Link href="/products/custom-solutions" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white text-sm transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white text-sm transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white text-sm transition-colors">
                  All Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        {/* Newsletter Signup */}
        <div className="mb-8">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold text-white text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm">
              © 2024 Avyren Technologies. All rights reserved.
            </p>
          </div>

          {/* Center - Legal Links */}
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://facebook.com/avyrentechnologies" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://linkedin.com/company/avyrentechnologies" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://twitter.com/avyrentech" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://youtube.com/avyrentechnologies" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}