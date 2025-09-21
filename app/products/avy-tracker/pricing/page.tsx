import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Star, Users, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AvyTrackerPricingPage() {
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
              Avy Tracker Pricing
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Choose the Right Plan for Your <span className="text-primary">Workforce</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Affordable, scalable pricing designed to grow with your business. From small teams to enterprise organizations, 
              we have a plan that fits your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline">Perfect for Small Teams</Badge>
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Starter</CardTitle>
                <CardDescription className="text-base mb-6">
                  Ideal for small businesses and startups with up to 25 employees.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">₹2,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button 
                  className="w-full mb-8 group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="/contact?product=avy-tracker&plan=starter">
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to 25 employees",
                    "AI-powered attendance tracking",
                    "Basic GPS & geofencing",
                    "Centralized HR operations",
                    "Task & workflow automation",
                    "Basic reporting & analytics",
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
                  Perfect for growing companies with 26-100 employees.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">₹4,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button 
                  className="w-full mb-8 group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
                  asChild
                >
                  <Link href="/contact?product=avy-tracker&plan=professional">
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to 100 employees",
                    "Advanced AI attendance tracking",
                    "Advanced GPS & geofencing",
                    "Complete HR management suite",
                    "Advanced workflow automation",
                    "Advanced reporting & analytics",
                    "Priority phone & email support",
                    "Multi-location support",
                    "API access",
                    "Custom integrations",
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
                  Comprehensive solution for large organizations with 100+ employees.
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
                  <Link href="/contact?product=avy-tracker&plan=enterprise">
                    <span className="relative z-10 flex items-center justify-center">
                      Contact Sales 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Unlimited employees",
                    "Enterprise-grade AI features",
                    "Advanced security & compliance",
                    "White-label solutions",
                    "Custom workflow development",
                    "Enterprise reporting & BI",
                    "24/7 dedicated support",
                    "Multi-tenant architecture",
                    "Custom API development",
                    "On-premise deployment option",
                    "SLA guarantees",
                    "Dedicated account manager",
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
              Core features that make Avy Tracker the best choice for workforce management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">AI-Powered Attendance</h3>
              <p className="text-muted-foreground text-sm">
                Face recognition, GPS tracking, and geofencing for accurate workforce monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Live insights and comprehensive reporting for informed decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-grade security with 99.9% uptime guarantee and data protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Easy Setup</h3>
              <p className="text-muted-foreground text-sm">
                Quick deployment with minimal configuration. Get started in minutes, not days.
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
            <p className="text-xl text-muted-foreground">Common questions about Avy Tracker pricing and features.</p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Can I upgrade or downgrade my plan anytime?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take
                effect at the next billing cycle. Our team will help ensure a smooth transition.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Is there a setup fee or long-term contract?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No setup fees for Starter and Professional plans. We offer both monthly and annual billing options,
                with discounts available for annual commitments. No long-term contracts are required.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                What kind of support do you provide?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Support levels vary by plan, from email support for Starter customers to 24/7 dedicated support teams
                for Enterprise clients. All plans include access to our knowledge base and documentation.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Can I try Avy Tracker before purchasing?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we offer a 14-day free trial for all plans. You can test all features with up to 10 employees
                to see how Avy Tracker fits your business needs.
              </p>
            </Card>
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
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/contact?product=avy-tracker">
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
              <Link href="/products/avy-tracker">
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
