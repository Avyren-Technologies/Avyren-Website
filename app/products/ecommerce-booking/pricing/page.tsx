import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Star, ShoppingCart, Calendar, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function EcommerceBookingPricingPage() {
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
              E-Commerce & Booking Pricing
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Grow Your Business with <span className="text-primary">Smart Commerce</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transform your local business with our dual platform solution. Sell products online and manage service bookings 
              while maintaining customer loyalty through our exclusive UID/QR system.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Perfect for Small Businesses</Badge>
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Basic</CardTitle>
                <CardDescription className="text-base mb-6">
                  Ideal for small retail shops and service providers starting their digital journey.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">₹3,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button 
                  className="w-full mb-8 group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="/contact?product=ecommerce-booking&plan=basic">
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to 100 products",
                    "Basic e-commerce store",
                    "Service booking calendar",
                    "Customer UID/QR system",
                    "Basic inventory management",
                    "Order tracking & notifications",
                    "Basic analytics dashboard",
                    "Email support",
                    "Mobile app access",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>

            {/* Professional Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary/50 bg-primary/5">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Professional</CardTitle>
                <CardDescription className="text-base mb-6">
                  Perfect for growing businesses with multiple services and product lines.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">₹6,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button 
                  className="w-full mb-8 group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="/contact?product=ecommerce-booking&plan=professional">
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to 500 products",
                    "Advanced e-commerce features",
                    "Multi-service booking system",
                    "Advanced customer loyalty system",
                    "Advanced inventory management",
                    "Real-time order tracking",
                    "Advanced analytics & reporting",
                    "Priority phone & email support",
                    "Multi-location support",
                    "API access",
                    "Custom payment gateways",
                    "Marketing automation tools",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge variant="outline">Enterprise</Badge>
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-base mb-6">
                  Comprehensive solution for large businesses and franchise operations.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">Custom</span>
                  <span className="text-muted-foreground">/pricing</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mb-8 group relative overflow-hidden border-2 border-secondary/20 hover:border-secondary/40 bg-background/50 backdrop-blur-sm hover:bg-secondary/5 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" 
                  asChild
                >
                  <Link href="/contact?product=ecommerce-booking&plan=enterprise">
                    <span className="relative z-10 flex items-center justify-center">
                      Contact Sales 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Unlimited products",
                    "Enterprise e-commerce suite",
                    "Multi-tenant booking system",
                    "White-label customer portal",
                    "Enterprise inventory management",
                    "Advanced order management",
                    "Business intelligence dashboard",
                    "24/7 dedicated support",
                    "Multi-brand support",
                    "Custom API development",
                    "On-premise deployment option",
                    "SLA guarantees",
                    "Dedicated account manager",
                    "Custom integrations",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              All Plans Include
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Core features that make our platform the best choice for local business digitization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">E-Commerce Store</h3>
              <p className="text-muted-foreground text-sm">
                Complete online store with product catalog, shopping cart, and secure checkout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Service Booking</h3>
              <p className="text-muted-foreground text-sm">
                Online appointment scheduling with calendar management and automated reminders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Customer Loyalty</h3>
              <p className="text-muted-foreground text-sm">
                UID/QR-based login system to maintain customer exclusivity and loyalty.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-grade security with 99.9% uptime guarantee and data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Common questions about our E-Commerce & Booking platform pricing.</p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                How does the customer UID/QR system work?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each customer gets a unique UID/QR code that they use to access your platform. This ensures only your
                existing customers can make purchases or book services, maintaining exclusivity and loyalty.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Can I manage both products and services on the same platform?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, our platform is designed as a dual solution. You can sell physical products through the e-commerce
                store and manage service bookings through the integrated calendar system, all in one place.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                What payment methods do you support?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We support all major payment gateways including Razorpay, PayU, Stripe, and more. Professional and
                Enterprise plans also support custom payment integrations based on your business needs.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Is there a setup fee or long-term contract?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No setup fees for Basic and Professional plans. We offer both monthly and annual billing options,
                with discounts available for annual commitments. No long-term contracts are required.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Can I try the platform before purchasing?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we offer a 14-day free trial for all plans. You can test all features with up to 20 products
                and basic booking functionality to see how our platform fits your business needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Digitize Your Local Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of local businesses that have successfully digitized their operations while maintaining customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/contact?product=ecommerce-booking">
                <span className="relative z-10 flex items-center">
                  Start Free Trial 
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
              <Link href="/products/ecommerce-booking">
                <span className="relative z-10 flex items-center">
                  Learn More 
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
