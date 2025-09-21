import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, ShoppingCart, Calendar, Users, BarChart3, Shield, Smartphone, QrCode } from "lucide-react"
import Link from "next/link"

export default function EcommerceBookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Dual Platform Solution
              </Badge>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
                <span className="text-accent">E-Commerce</span> &<br />
                <span className="text-primary">Service Booking</span>
                <br />
                Platform
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Revolutionary dual-functionality platform that seamlessly combines retail e-commerce with service booking capabilities, 
                featuring customer exclusivity and comprehensive business management tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?product=ecommerce-booking">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center space-x-4 mb-4">
                        <ShoppingCart className="h-12 w-12 text-accent" />
                        <Calendar className="h-12 w-12 text-primary" />
                      </div>
                      <p className="text-muted-foreground">E-Commerce & Booking Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Dual Functionality, Single Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run both retail and service businesses in one comprehensive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dual Retail + Booking */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    <ShoppingCart className="h-4 w-4 text-accent" />
                    <Calendar className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <CardTitle className="font-heading text-lg mb-3">Dual Functionality</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Seamlessly combine retail e-commerce with service booking in a single, unified platform.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Product Catalog Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Service Appointment Booking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Unified Shopping Cart
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Integrated Payment Processing
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Customer Exclusivity */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">Customer Exclusivity</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Advanced customer access control with UID/QR code login system for exclusive experiences.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Unique ID Generation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    QR Code Authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Exclusive Access Control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                    Membership Tiers
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Parent-Child Accounts */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">Parent-Child Accounts</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Hierarchical account management system for complex organizational structures.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Multi-level Account Hierarchy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Permission Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Consolidated Billing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                    Shared Resources
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Real-time Tracking */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg mb-3">Real-time Tracking</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  Live monitoring of orders, appointments, and business performance metrics.
                </CardDescription>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Order Status Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Appointment Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Live Analytics Dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                    Performance Metrics
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Seller Dashboard Features */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Comprehensive Seller Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools for sellers to manage their business operations, analytics, and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <CardTitle className="font-heading text-2xl mb-6">Seller Onboarding & Management</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Quick Setup Process</h4>
                      <p className="text-muted-foreground text-sm">Streamlined onboarding with guided setup wizard</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Document Management</h4>
                      <p className="text-muted-foreground text-sm">Secure storage and verification of business documents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Profile Customization</h4>
                      <p className="text-muted-foreground text-sm">Branded storefronts with custom themes and layouts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Multi-location Support</h4>
                      <p className="text-muted-foreground text-sm">Manage multiple business locations from single dashboard</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <CardTitle className="font-heading text-2xl mb-6">Analytics & Promotions</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Sales Analytics</h4>
                      <p className="text-muted-foreground text-sm">Detailed insights into sales performance and trends</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Customer Insights</h4>
                      <p className="text-muted-foreground text-sm">Behavioral analysis and customer segmentation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Promotion Management</h4>
                      <p className="text-muted-foreground text-sm">Create and manage discounts, coupons, and campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Revenue Tracking</h4>
                      <p className="text-muted-foreground text-sm">Real-time revenue monitoring and forecasting</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business operations with our comprehensive dual-platform solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Retain Loyal Customers</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Build stronger customer relationships with exclusive access, personalized experiences, 
                  and integrated loyalty programs that keep customers coming back.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Scalable Growth</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Expand your business effortlessly with our flexible platform that grows with you, 
                  supporting multiple locations, services, and product lines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Multi-Industry Support</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for retail stores, healthcare providers, salons, spas, and service businesses 
                  that need both product sales and appointment booking capabilities.
                </CardDescription>
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
              Perfect for Various Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dual-platform solution adapts to the unique needs of different business types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">🏪</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Retail Stores</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Sell products online while offering in-store services like consultations, 
                  fittings, or personalized shopping experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-accent font-bold">💇</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Salons & Spas</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Book appointments for services while selling beauty products, 
                  gift cards, and membership packages to clients.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-secondary font-bold">🏥</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Healthcare Clinics</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Schedule patient appointments while selling health products, 
                  supplements, and medical equipment directly to patients.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">🔧</span>
                  </div>
                  <CardTitle className="font-heading text-lg">Service Providers</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  Offer professional services through bookings while selling 
                  related products, tools, or maintenance packages.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Revolutionize Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the power of combining e-commerce and service booking in one intelligent platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?product=ecommerce-booking">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-accent"
              asChild
            >
              <Link href="/contact?product=ecommerce-booking&type=pricing">
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