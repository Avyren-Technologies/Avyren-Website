import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Cog, BarChart3, Zap, Shield, Database } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Digital Solutions
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Transform Your Business with <span className="text-primary">Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive digital transformation solutions designed to optimize operations, enhance productivity, and
              drive sustainable growth across your organization.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Digital Transformation</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Modernize your business processes and technology infrastructure to stay competitive in the digital
                  age. Our comprehensive approach ensures seamless transformation.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/digital-transformation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Cog className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Process Optimization</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Streamline workflows, eliminate bottlenecks, and maximize efficiency across all business operations.
                  Data-driven insights guide continuous improvement.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/process-optimization">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Automation Solutions</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Implement intelligent automation to reduce manual tasks, improve accuracy, and free up your team to
                  focus on strategic initiatives.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/automation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Business Intelligence</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Transform raw data into actionable insights with advanced analytics, real-time dashboards, and
                  predictive modeling capabilities.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/business-intelligence">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Data Integration</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Unify data from multiple sources into a single, coherent view. Enable real-time synchronization and
                  ensure data quality across systems.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/data-integration">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Security & Compliance</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Protect your digital assets with enterprise-grade security measures and ensure compliance with
                  industry regulations and standards.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/security-compliance">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why Choose Tecosoft Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology and expert team ensure successful digital transformation outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">85%</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Efficiency Improvement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Average efficiency gains achieved by our clients through process optimization and automation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">6M</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Faster Implementation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Typical time to see measurable results from our digital transformation initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-secondary">24/7</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Expert Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Round-the-clock support from our team of digital transformation specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how our solutions can address your specific business challenges.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/demo">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
