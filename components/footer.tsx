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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Get In Touch With Us */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Get In Touch With Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">844-822-0664</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">info@tecosoft.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-gray-300 text-sm">Tecosoft Office</span>
              </li>
              <li className="text-gray-300 text-sm ml-6">
                <div>123 Business St, Suite 100</div>
                <div>Tech City, TC 12345</div>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/platform" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link href="/intelligent-mes" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Intelligent MES
                </Link>
              </li>
              <li>
                <Link href="/machine-monitoring" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Machine Monitoring
                </Link>
              </li>
              <li>
                <Link href="/edge-platform" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Edge Platform
                </Link>
              </li>
              <li>
                <Link href="/cloud-platform" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Cloud Platform
                </Link>
              </li>
              <li>
                <Link href="/apis" className="text-gray-300 hover:text-white text-sm transition-colors">
                  APIs & Applications
                </Link>
              </li>
              <li>
                <Link href="/iot-platform" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Industrial IoT Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Applications</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/production-monitoring" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Production Monitoring
                </Link>
              </li>
              <li>
                <Link href="/condition-monitoring" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Condition Monitoring
                </Link>
              </li>
              <li>
                <Link href="/predictive-maintenance" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Predictive Maintenance
                </Link>
              </li>
              <li>
                <Link href="/process-optimization" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link href="/machine-builders" className="text-gray-300 hover:text-white text-sm transition-colors">
                  For Machine Builders and Distributors
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-gray-300 hover:text-white text-sm transition-colors">
                  For Developers
                </Link>
              </li>
              <li>
                <Link href="/production-schedule" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Production Schedule Intelligence
                </Link>
              </li>
              <li>
                <Link href="/job-tracking" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Job Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Solutions */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Industry Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aerospace" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Aerospace & Defense
                </Link>
              </li>
              <li>
                <Link href="/automotive" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="/contract-manufacturers" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contract Manufacturers
                </Link>
              </li>
              <li>
                <Link href="/heavy-machinery" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Heavy Machinery
                </Link>
              </li>
              <li>
                <Link href="/medical-devices" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Medical devices
                </Link>
              </li>
              <li>
                <Link href="/oil-gas" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <Separator className="my-2 bg-gray-600" />
              <li>
                <Link href="/machine-monitoring" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Machine Monitoring
                </Link>
              </li>
              <li>
                <Link href="/precision-metalworking" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Precision Metalworking
                </Link>
              </li>
              <li>
                <Link href="/swiss-cnc" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Swiss CNC
                </Link>
              </li>
              <li>
                <Link href="/erp-integration" className="text-gray-300 hover:text-white text-sm transition-colors">
                  ERP Integration
                </Link>
              </li>
              <li>
                <Link href="/metal-stamping" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Metal Stamping & Fabrication
                </Link>
              </li>
              <li>
                <Link href="/tool-die-mold" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Tool, Die & Mold CNC
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/roi-calculator" className="text-gray-300 hover:text-white text-sm transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/waste-calculator" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Waste Calculator
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/connectivity-hub" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Connectivity Hub
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-white text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/partner-program" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Partner Program
                </Link>
              </li>
              <li className="pt-4">
                <h4 className="font-heading font-semibold text-white text-base">Support</h4>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/data-processing" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Data Processing Addendum
                </Link>
              </li>
              <li>
                <Link href="/service-level" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Service Level Agreement
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Website Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/signin" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-heading font-bold text-lg">T</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">tecosoft</span>
            </div>
            <div className="bg-accent/20 px-3 py-1 rounded text-sm text-accent">
              https://www.tecosoft.com
            </div>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-gray-300 text-sm">All Rights Reserved by Tecosoft ©2025</p>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://facebook.com/tecosoft" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://linkedin.com/company/tecosoft" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://twitter.com/tecosoft" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-300 hover:text-white">
              <Link href="https://youtube.com/tecosoft" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
