import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Logos3 } from "@/components/ui/logos3"
import { IndustriesCarousel } from "@/components/ui/industries-carousel"
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.muted.foreground/0.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.muted.foreground/0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Smart Digital Solutions
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance leading-tight tracking-tight mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Avyren Technologies
              </span>
              <br />
              Powering Smart Digital Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              We bring innovation, efficiency, and intelligence together to transform businesses with modern software solutions. 
              From HRMS portals like Avy Tracker to E-Commerce and Service Booking Platforms, we create products that solve real business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg px-8 py-6"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Request Demo 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg text-lg px-8 py-6"
              >
                <Link href="/products">
                  <span className="relative z-10">Explore Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Companies */}
      <Logos3 heading="Trusted by companies worldwide" />

      {/* Value Proposition Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why Choose Avyren Technologies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in building mobile and web applications that make business operations simpler, faster, and more transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg mb-2">Affordable Solutions</CardTitle>
                <CardDescription className="text-sm">
                  Digital solutions that empower even small and medium businesses to embrace technology without huge costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg mb-2">Transparency & Productivity</CardTitle>
                <CardDescription className="text-sm">
                  Our platforms ensure real-time insights and data-driven decision-making for enhanced productivity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-lg mb-2">Digital Transformation</CardTitle>
                <CardDescription className="text-sm">
                  Helping businesses across industries simplify operations and become smarter and more connected.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg mb-2">Smart & Reliable</CardTitle>
                <CardDescription className="text-sm">
                  Technology-driven solutions that are smart, reliable, and user-friendly for businesses of all sizes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We currently offer two flagship applications designed to simplify business operations and deliver real-time efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Avy Tracker */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">Avy Tracker</CardTitle>
                    <p className="text-muted-foreground">Workforce Management Platform</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Smart workforce management and HRMS solution for attendance, task management, and payroll. Make employee and task management simpler, transparent, and real-time.
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    AI-Powered Attendance (Face Recognition, GPS, Geofencing)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Centralized HR Operations (Shifts, Leaves, Payroll)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Task & Workflow Automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    Real-time Payroll & HR Reports
                  </li>
                </ul>
                <Button 
                  asChild 
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/products/avy-tracker">
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            {/* E-commerce & Service Booking */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">E-Commerce & Service Booking</CardTitle>
                    <p className="text-muted-foreground">Dual Platform Solution</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  A loyalty-focused platform for product sales and service bookings with real-time tracking and customer exclusivity. Digitize local businesses while ensuring customer loyalty remains intact.
                </CardDescription>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    Dual Retail + Booking Functionality
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    Customer Exclusivity via UID/QR Login
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    Parent-Child Account Management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    Seller Dashboards & Analytics
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full group relative overflow-hidden border-2 border-accent/20 hover:border-accent/40 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Link href="/products/ecommerce-booking">
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <IndustriesCarousel />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Your vision, our technology – together, we create success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Request Demo 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-white/30 hover:border-white/50 bg-transparent hover:bg-white/10 text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg backdrop-blur-sm"
              asChild
            >
              <Link href="/products">
                <span className="relative z-10 flex items-center">
                  Explore Products 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}