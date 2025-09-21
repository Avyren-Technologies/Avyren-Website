import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, MapPin, Clock, FileText, BarChart3, Shield, Smartphone, Zap } from "lucide-react"
import Link from "next/link"

export default function AvyTrackerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                AI-Powered Workforce Management
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
                <span className="text-primary">Avy Tracker</span>
                <br />
                Smart Attendance & HR Management
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Revolutionary workforce management platform featuring AI-powered attendance tracking, comprehensive HR operations, 
                and real-time analytics designed for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?product=avy-tracker">
                    Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">View Features</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Avy Tracker Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Comprehensive Workforce Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently in one intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI-Powered Attendance */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">AI-Powered Attendance</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Advanced biometric and location-based attendance tracking with multiple verification methods.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Face Recognition Technology
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    GPS Location Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Geofencing Capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Anti-Spoofing Protection
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Centralized HR Operations */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">Centralized HR Operations</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Complete HR management system handling all aspects of employee lifecycle and operations.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Attendance Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Shift Scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Leave Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Payroll Integration
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Task & Workflow Automation */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">Task & Workflow Automation</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Streamlined task management with automated workflows and progress tracking capabilities.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Task Assignment & Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    File Attachments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Progress Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Automated Notifications
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Payroll & HR Reports */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">Payroll & HR Reports</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Comprehensive reporting system with customizable reports and real-time analytics.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Daily Reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Monthly Summaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Custom Report Builder
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Export Capabilities
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Avy Tracker adapts to the unique needs of various industries with specialized features and configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">🏗️</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Construction</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  GPS tracking for remote sites, geofencing for safety compliance, and project-based time tracking 
                  with equipment and material management integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-accent font-bold">🏭</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Manufacturing</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Shift management, production line tracking, safety compliance monitoring, and integration 
                  with quality control systems for comprehensive workforce oversight.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-secondary font-bold">🏥</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Healthcare</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Compliance with healthcare regulations, patient care scheduling, staff certification tracking, 
                  and integration with medical record systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">🏪</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Retail</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Multi-location management, sales performance tracking, inventory-based scheduling, 
                  and customer service metrics integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-accent font-bold">🎓</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Education</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Faculty attendance tracking, class scheduling, student interaction monitoring, 
                  and academic performance correlation analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-secondary font-bold">🔧</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Services</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Client site tracking, service completion verification, technician performance monitoring, 
                  and customer satisfaction integration.
                </CardDescription>
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
              Why Choose Avy Tracker?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of modern workforce management technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Easy Setup</h3>
              <p className="text-muted-foreground text-sm">
                Quick deployment with minimal configuration required. Get started in minutes, not days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Scalable</h3>
              <p className="text-muted-foreground text-sm">
                Grows with your business from small teams to enterprise-level organizations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Live insights and comprehensive reporting for informed decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">$</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Affordable</h3>
              <p className="text-muted-foreground text-sm">
                Cost-effective solution that delivers enterprise features at competitive pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Transform Your Workforce Management?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of businesses that have streamlined their HR operations with Avy Tracker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?product=avy-tracker">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact?product=avy-tracker&type=pricing">
                Get Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}