import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Marquee from "@/components/ui/marquee"
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, BarChart3, Cog, Database } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">Digital Transformation Experts</span>
                  </div>
                </div>

                <h1 className="font-heading font-bold text-5xl lg:text-7xl text-balance leading-[0.95] tracking-tight">
                  A{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SMARTER</span>{" "}
                  WAY
                  <br />
                  TO RUN YOUR
                  <br />
                  <span className="text-primary">OPERATIONS</span>
                </h1>

                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                  The intelligent platform for modern businesses — connecting systems, optimizing processes, and
                  automating operations while driving digital transformation at every level.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
                >
                  <Link href="/demo" className="flex items-center gap-2">
                    Book a Demo
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-10 py-7 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 bg-transparent"
                >
                  <Link href="/trial">Try It Now</Link>
                </Button>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground font-medium">Companies Transformed</div>
                </div>
                <div className="w-px h-12 bg-border/50"></div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground font-medium">Uptime Guarantee</div>
                </div>
                <div className="w-px h-12 bg-border/50"></div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground font-medium">Expert Support</div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-2xl">
                  <img
                    src="/modern-digital-dashboard-interface.jpg"
                    alt="Tecosoft Digital Solutions Platform Dashboard"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-8">
              Trusted by Companies Worldwide
            </h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
              <Marquee pauseOnHover className="[--duration:20s]">
                {[
                  { name: "Microsoft", logo: "/generic-company-logo.png" },
                  { name: "Google", logo: "/generic-company-logo.png" },
                  { name: "Amazon", logo: "/generic-company-logo.png" },
                  { name: "Apple", logo: "/generic-company-logo.png" },
                  { name: "Meta", logo: "/generic-company-logo.png" },
                  { name: "Tesla", logo: "/generic-company-logo.png" },
                  { name: "Netflix", logo: "/generic-company-logo.png" },
                  { name: "Spotify", logo: "/generic-company-logo.png" },
                ].map((company, i) => (
                  <div key={i} className="flex items-center justify-center mx-8">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* ONE PLATFORM TO STREAMLINE YOUR PRODUCTION FLOWS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
              ONE PLATFORM TO STREAMLINE YOUR{" "}
              <span className="text-primary">PRODUCTION FLOWS</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The intelligent platform for modern businesses — connecting systems, optimizing processes, and
              automating operations while driving digital transformation at every level.
            </p>
          </div>
        </div>
      </section>

      {/* GET THE MOST FROM YOUR PRODUCTION */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
                GET THE MOST FROM YOUR{" "}
                <span className="text-accent">PRODUCTION</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Capture data from systems, operations, and processes. Integrate with your existing tools to see
                everything happening in your business environment, in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time data synchronization",
                  "API-first architecture", 
                  "Pre-built connectors",
                  "Custom integration support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-lg">
                    <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-2xl">
                  <img
                    src="/integration-ecosystem-diagram.jpg"
                    alt="Production Optimization Platform"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              OPTIMIZE OPERATIONS WITH INTELLIGENCE
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tecosoft Digital Solutions Platform captures what's happening in your business, analyzes it, and delivers
              insights so you can adapt, pivot, and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading">01. Get Complete Visibility</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Capture data from systems, operations, and processes. Integrate with your existing tools to see
                  everything happening in your business environment, in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-heading">02. Understand Your Operations</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Identify bottlenecks and optimization opportunities. Recognize patterns and eliminate inefficiencies
                  in your workflows. Make data-driven decisions with confidence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="font-heading">03. Drive Better Decisions</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Compare performance across teams and processes. Discover hidden opportunities and adjust strategies on
                  the fly to meet your business objectives.
                </CardDescription>
              </CardHeader>
            </Card>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Universal System Connectivity</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Connect and standardize data across any system or platform, from modern cloud applications to legacy
                systems, and manual processes.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time data synchronization",
                  "API-first architecture",
                  "Pre-built connectors",
                  "Custom integration support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/system-connectivity-diagram.jpg"
                alt="System Connectivity"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="/automation-workflow-interface.png"
                alt="Automation Workflows"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-heading font-bold text-2xl mb-6">Intelligent Automation</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Automate repetitive tasks and complex workflows with AI-powered decision making that adapts to your
                business needs.
              </p>
              <ul className="space-y-3">
                {["Smart workflow automation", "Predictive analytics", "Anomaly detection", "Automated reporting"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT TO CONNECT. DESIGNED TO SCALE. */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
              BUILT TO CONNECT. DESIGNED TO SCALE.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⏰", title: "Real-time Monitoring", description: "Track performance across all systems instantly" },
              { icon: "✅", title: "Automated Workflows", description: "Streamline processes with intelligent automation" },
              { icon: "🌱", title: "Scalable Growth", description: "Scale your operations without limits" },
              { icon: "🛡️", title: "Enterprise Security", description: "Bank-level security for your data" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
                EVERYTHING WE WANTED TO BUILD IN A PACKAGED SOLUTION
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                "Tecosoft Digital Solutions transformed our operations completely. We achieved 16.3% increase in productivity 
                within the first quarter of implementation."
              </p>
              <div className="mt-8">
                <p className="font-semibold text-lg">Sarah Johnson</p>
                <p className="opacity-80">CTO, TechCorp Industries</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-2xl">
                  <div className="bg-white/5 rounded-xl p-8 text-center">
                    <div className="text-6xl font-bold text-white mb-4">16.3%</div>
                    <div className="text-xl text-white/90">INCREASE IN PRODUCTIVITY</div>
                    <div className="mt-4 w-16 h-1 bg-white mx-auto rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTELLIGENT SOLUTIONS FOR MODERN MANUFACTURERS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
              INTELLIGENT SOLUTIONS FOR MODERN MANUFACTURERS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Production Dashboard",
                description: "Real-time visibility into your manufacturing operations",
                image: "/platform-dashboard-overview.jpg"
              },
              {
                title: "Automation Workflows", 
                description: "Streamline processes with intelligent automation",
                image: "/automation-workflow-interface.png"
              },
              {
                title: "System Integration",
                description: "Connect all your systems seamlessly",
                image: "/system-connectivity-diagram.jpg"
              }
            ].map((solution, i) => (
              <div key={i} className="relative group">
                <div className="relative z-10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-2xl">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-xl mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNLOCK YOUR TEAM'S TRUE POTENTIAL */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
              UNLOCK YOUR TEAM'S TRUE POTENTIAL
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Automated Scheduling",
              "Work Order Tracking", 
              "Quality Management",
              "Performance Analytics",
              "Predictive Maintenance",
              "Resource Optimization",
              "Compliance Monitoring",
              "Real-time Reporting"
            ].map((feature, i) => (
              <div key={i} className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL-TIME EXECUTION UPDATES */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
                REAL-TIME EXECUTION UPDATES.
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Monitor your operations with live dashboards and instant notifications. Get alerts when issues arise 
                and track performance metrics in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  "Live performance monitoring",
                  "Instant alert notifications", 
                  "Real-time data visualization",
                  "Automated reporting",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-lg">
                    <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-2xl">
                  <img
                    src="/modern-digital-dashboard-interface.jpg"
                    alt="Real-time Execution Dashboard"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT ANY MACHINE */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
                CONNECT ANY MACHINE
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Seamlessly integrate with any machine or system. Our platform supports over 200+ machine types 
                and protocols out of the box.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Haas", "Mazak", "Okuma", "Doosan", "Steiger", "Toucan"
              ].map((brand, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-6 text-center hover:bg-muted/80 transition-colors">
                  <div className="text-2xl font-bold text-muted-foreground">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POWER ANY SYSTEM */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-3 gap-4">
              {[
                "ECI", "Infor", "JobBOSS", "Sage X3", "Epicor", "Amazon"
              ].map((system, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                  <div className="text-2xl font-bold text-white">{system}</div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
                POWER ANY SYSTEM
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Integrate with your existing ERP, MES, and business systems. Our platform works with 
                all major enterprise software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              An intelligent platform for any business stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg">Connectivity</CardTitle>
                <CardDescription>
                  Universal system connectivity to monitor and integrate any platform or application.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-lg">Security</CardTitle>
                <CardDescription>
                  Enterprise-grade security with encryption, compliance, and robust access controls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-lg">Automation</CardTitle>
                <CardDescription>
                  Intelligent workflows that guide teams to better, faster decisions and optimize operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg">Scalability</CardTitle>
                <CardDescription>
                  Deploy fast and scale with ease. Out-of-the-box reports, dashboards, and analytics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPLORE THE POWER OF CONNECTED OPERATIONS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
              EXPLORE THE POWER OF CONNECTED OPERATIONS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Guide",
                description: "Complete guide to modernizing your operations",
                type: "Whitepaper"
              },
              {
                title: "ROI Calculator",
                description: "Calculate your potential savings and returns",
                type: "Tool"
              },
              {
                title: "Implementation Webinar",
                description: "Learn best practices from industry experts",
                type: "Webinar"
              }
            ].map((resource, i) => (
              <Card key={i} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-lg">{resource.type[0]}</span>
                  </div>
                  <CardTitle className="font-heading text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 leading-tight">
            READY FOR YOUR FREE TRIAL?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="text-lg px-10 py-6 bg-white text-accent hover:bg-white/90">
              <Link href="/demo">
                Get Started
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
        {/* Large arrow graphic */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <path
              d="M20 80 L80 80 L80 60 L100 80 L80 100 L80 80 L20 80 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  )
}
