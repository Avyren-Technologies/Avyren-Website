import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Star, Zap, Building2, Globe } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Flexible Pricing
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Choose the Right Plan for Your <span className="text-primary">Digital Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transparent, scalable pricing designed to grow with your business. From startups to enterprises, we have a
              solution that fits your needs and budget.
            </p>
            <Button size="lg" asChild>
              <Link href="#pricing-plans">View Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24" id="pricing-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <Badge variant="outline">Most Popular</Badge>
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Starter</CardTitle>
                <CardDescription className="text-base mb-6">
                  Perfect for small businesses and startups looking to begin their digital transformation journey.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">$2,500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button className="w-full mb-8" asChild>
                  <Link href="/demo?plan=starter">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to 5 system integrations",
                    "Basic analytics dashboard",
                    "Email support",
                    "Monthly strategy sessions",
                    "Standard implementation timeline",
                    "Basic training materials",
                    "Community forum access",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardHeader>
            </Card>

            {/* Professional Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2 border-primary/50 bg-primary/5">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
              </div>
              <CardHeader className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Professional</CardTitle>
                <CardDescription className="text-base mb-6">
                  Ideal for growing companies that need comprehensive digital transformation solutions.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">$7,500</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <Button className="w-full mb-8" asChild>
                  <Link href="/demo?plan=professional">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to 15 system integrations",
                    "Advanced analytics & reporting",
                    "Priority phone & email support",
                    "Bi-weekly strategy sessions",
                    "Accelerated implementation",
                    "Comprehensive training program",
                    "Dedicated customer success manager",
                    "Custom workflow automation",
                    "API access & documentation",
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
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge variant="outline">Enterprise</Badge>
                </div>
                <CardTitle className="font-heading text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-base mb-6">
                  Comprehensive solutions for large organizations with complex digital transformation needs.
                </CardDescription>
                <div className="mb-8">
                  <span className="font-heading font-bold text-4xl">Custom</span>
                  <span className="text-muted-foreground">/pricing</span>
                </div>
                <Button variant="outline" className="w-full mb-8 bg-transparent" asChild>
                  <Link href="/demo?plan=enterprise">
                    Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Unlimited system integrations",
                    "Enterprise-grade analytics platform",
                    "24/7 dedicated support team",
                    "Weekly executive briefings",
                    "White-glove implementation",
                    "Custom training & certification",
                    "Dedicated technical account manager",
                    "Advanced security & compliance",
                    "Custom development & APIs",
                    "Multi-region deployment",
                    "SLA guarantees",
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

      {/* Pricing FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Common questions about our pricing and services.</p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                What's included in the implementation process?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our implementation process includes system analysis, integration setup, data migration, user training,
                and ongoing support. The timeline varies by plan, with Enterprise customers receiving white-glove
                service and dedicated project management.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take
                effect at the next billing cycle. Our team will help ensure a smooth transition and maintain your
                existing integrations where possible.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Are there any setup fees or long-term contracts?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Setup fees vary by plan complexity, but we're transparent about all costs upfront. We offer both monthly
                and annual billing options, with discounts available for annual commitments. No long-term contracts are
                required for Starter and Professional plans.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">What kind of support do you provide?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Support levels vary by plan, from email support for Starter customers to 24/7 dedicated support teams
                for Enterprise clients. All plans include access to our knowledge base, community forums, and regular
                strategy sessions with our experts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why Choose Tecosoft Digital Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology and expert team ensure you get maximum value from your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">ROI</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Proven ROI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our clients typically see a return on investment within 6-12 months, with many achieving 40%+ efficiency
                improvements in the first year.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">24/7</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Expert Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team of digital transformation experts provides ongoing support and guidance to ensure your success
                at every stage of your journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-secondary">500+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Proven Track Record</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 500 successful implementations across various industries, we have the experience to handle
                projects of any size and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule a consultation to discuss your needs and find the perfect plan for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demo">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/trial">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
