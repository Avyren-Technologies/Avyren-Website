import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Star, Cog, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.muted.foreground/0.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.muted.foreground/0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Our Products
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Smart Digital Solutions for <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We currently offer two flagship applications designed to simplify business operations and deliver real-time efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Avy Tracker */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">Avy Tracker</CardTitle>
                    <p className="text-muted-foreground">AI-Powered Workforce Management</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Smart workforce management and HRMS solution for attendance, task management, and payroll. 
                  Make employee and task management simpler, transparent, and real-time.
                </CardDescription>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">AI-Powered Attendance:</span>
                        <span className="text-muted-foreground ml-1">Face recognition, GPS tracking, and geofencing</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Centralized HR Operations:</span>
                        <span className="text-muted-foreground ml-1">Attendance, shifts, leaves, and payroll management</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Task & Workflow Automation:</span>
                        <span className="text-muted-foreground ml-1">File attachments and task progress tracking</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Payroll & HR Reports:</span>
                        <span className="text-muted-foreground ml-1">Daily, monthly, and custom reporting</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-lg mb-3">Perfect for:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Construction</Badge>
                    <Badge variant="outline">Manufacturing</Badge>
                    <Badge variant="outline">Healthcare</Badge>
                    <Badge variant="outline">Retail</Badge>
                    <Badge variant="outline">Services</Badge>
                  </div>
                </div>

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
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Star className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl">E-Commerce & Service Booking</CardTitle>
                    <p className="text-muted-foreground">Dual Platform Solution</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  A loyalty-focused platform for product sales and service bookings with real-time tracking and customer exclusivity. 
                  Digitize local businesses while ensuring customer loyalty remains intact.
                </CardDescription>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-lg">Core Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Dual Functionality:</span>
                        <span className="text-muted-foreground ml-1">Retail + booking in one platform</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Customer Exclusivity:</span>
                        <span className="text-muted-foreground ml-1">UID/QR code login system</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Parent-Child Accounts:</span>
                        <span className="text-muted-foreground ml-1">Hierarchical account management</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Real-time Tracking:</span>
                        <span className="text-muted-foreground ml-1">Orders and appointments monitoring</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Seller Dashboards:</span>
                        <span className="text-muted-foreground ml-1">Onboarding, analytics, and promotions</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-lg mb-3">Ideal for:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Retail Stores</Badge>
                    <Badge variant="outline">Salons & Spas</Badge>
                    <Badge variant="outline">Clinics</Badge>
                    <Badge variant="outline">Service Providers</Badge>
                  </div>
                </div>

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


      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why Choose Avyren Technologies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions are designed with your business success in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">$</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Affordable</h3>
              <p className="text-muted-foreground text-sm">Cost-effective solutions that fit any budget</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Easy Setup</h3>
              <p className="text-muted-foreground text-sm">Quick deployment with minimal configuration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-lg">📈</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Scalable</h3>
              <p className="text-muted-foreground text-sm">Grows with your business needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">📊</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground text-sm">Live insights and comprehensive reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how our smart digital solutions can drive growth and efficiency for your business.
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
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Get Custom Quote 
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