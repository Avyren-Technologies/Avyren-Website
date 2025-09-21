import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Database, Cloud, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Digital Platform
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              The Production Intelligence Platform for <span className="text-primary">Digital Success</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Harness operational and business data to drive the decisions that matter. Connect, analyze, and optimize
              every aspect of your digital operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/trial">Try It Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
                OPTIMIZE OPERATIONS WITH INTELLIGENCE
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tecosoft Digital Solutions Platform captures what's happening with your business operations, analyzes
                it, and delivers insights and guidance so you can adapt, pivot, and achieve your goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="font-heading font-bold text-2xl text-primary mb-2">01</div>
                  <h3 className="font-heading font-semibold mb-2">Complete Picture</h3>
                  <p className="text-sm text-muted-foreground">
                    Capture data from systems, operations, and processes in real-time.
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="font-heading font-bold text-2xl text-accent mb-2">02</div>
                  <h3 className="font-heading font-semibold mb-2">Deep Understanding</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify bottlenecks, optimize resources, and eliminate inefficiencies.
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="font-heading font-bold text-2xl text-secondary mb-2">03</div>
                  <h3 className="font-heading font-semibold mb-2">Better Decisions</h3>
                  <p className="text-sm text-muted-foreground">
                    Compare performance and adjust strategies to meet objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/platform-dashboard-overview.jpg"
                alt="Platform Dashboard Overview"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Configurable. Flexible. Extensible.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for modern businesses that need to adapt quickly and scale efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Universal Connectivity</CardTitle>
                <CardDescription>
                  Connect to any system or platform with our comprehensive integration capabilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading">Cloud-Native Platform</CardTitle>
                <CardDescription>
                  Secure, scalable, and reliable cloud infrastructure designed for enterprise applications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading">Automated Workflows</CardTitle>
                <CardDescription>
                  Intelligent automation that guides teams to better, faster decisions and optimized operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Advanced Analytics</CardTitle>
                <CardDescription>
                  Real-time insights and predictive analytics to drive data-driven decision making.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-heading font-bold text-3xl mb-6">Connect to Third-Party Systems</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Out-of-the-box connectors with ERP, CRM, and business systems to reduce manual data collection, drive
                automation, and improve planning and decision-making.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "ERP and CRM integrations",
                  "Real-time data synchronization",
                  "Custom API development",
                  "Legacy system connectivity",
                  "Cloud and on-premise support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/integrations">
                  Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/integration-ecosystem-diagram.png"
                alt="Integration Ecosystem"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Experience the Platform?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            See how Tecosoft Digital Solutions can transform your business operations.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/demo">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
