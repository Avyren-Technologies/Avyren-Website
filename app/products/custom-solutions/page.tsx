import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Cog, Code, Palette, TestTube, Rocket, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

export default function CustomSolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              End-to-End Software Development
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              <span className="text-primary">Custom Solutions</span> &<br />
              SDLC Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive software development lifecycle support tailored to your unique business needs. 
              From concept to deployment and beyond, we deliver custom solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?product=custom-solutions">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#sdlc-process">View Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SDLC Process */}
      <section className="py-24" id="sdlc-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Our Complete SDLC Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Requirement Analysis */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Requirement Analysis</CardTitle>
                    <p className="text-muted-foreground text-sm">Discovery & Planning</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Deep dive into your business needs, objectives, and technical requirements to create a comprehensive project roadmap.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Business Process Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Technical Feasibility Study</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Project Scope Definition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Timeline & Budget Planning</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* UI/UX Design */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Palette className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">UI/UX Design</CardTitle>
                    <p className="text-muted-foreground text-sm">User Experience Focus</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Create intuitive and engaging user experiences with modern design principles and user-centered approach.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">User Research & Personas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Visual Design & Branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Responsive Design</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Development */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Development</CardTitle>
                    <p className="text-muted-foreground text-sm">Robust & Scalable</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Build robust and scalable software solutions using modern technologies and best practices.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Frontend Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Backend Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Database Design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">API Development</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Quality Assurance */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <TestTube className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Quality Assurance</CardTitle>
                    <p className="text-muted-foreground text-sm">Comprehensive Testing</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Rigorous testing and quality validation to ensure your software meets the highest standards.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Functional Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Security Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">User Acceptance Testing</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Integration & Deployment */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Integration & Deployment</CardTitle>
                    <p className="text-muted-foreground text-sm">Seamless Launch</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Smooth integration with existing systems and seamless deployment to production environments.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">System Integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Data Migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Production Deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance Monitoring</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>

            {/* Ongoing Support */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <HeadphonesIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Ongoing Support</CardTitle>
                    <p className="text-muted-foreground text-sm">Continuous Care</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Continuous maintenance, updates, and support to ensure your software remains current and effective.
                </CardDescription>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Bug Fixes & Updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Feature Enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Technical Support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Training & Documentation</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and future-ready solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-lg mb-4">Frontend</CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>React / Next.js</div>
                  <div>Vue.js / Nuxt.js</div>
                  <div>Angular</div>
                  <div>TypeScript</div>
                  <div>Tailwind CSS</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-lg mb-4">Backend</CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Node.js / Express</div>
                  <div>Python / Django</div>
                  <div>PHP / Laravel</div>
                  <div>Java / Spring</div>
                  <div>.NET Core</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-lg mb-4">Database</CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>PostgreSQL</div>
                  <div>MySQL</div>
                  <div>MongoDB</div>
                  <div>Redis</div>
                  <div>Elasticsearch</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-lg mb-4">Cloud & DevOps</CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>AWS / Azure / GCP</div>
                  <div>Docker / Kubernetes</div>
                  <div>CI/CD Pipelines</div>
                  <div>Monitoring & Logging</div>
                  <div>Security & Compliance</div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Types of Custom Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From web applications to mobile apps and enterprise systems, we create solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Web Applications</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Custom web applications built with modern frameworks, responsive design, and optimized performance 
                  for desktop and mobile users.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Mobile Applications</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Native and cross-platform mobile apps for iOS and Android with intuitive user interfaces 
                  and seamless performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Enterprise Systems</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Large-scale enterprise solutions including ERP, CRM, and business process management systems 
                  with advanced integrations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">E-commerce Platforms</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Custom e-commerce solutions with payment gateways, inventory management, and customer 
                  relationship features.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">API Development</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  RESTful and GraphQL APIs for system integrations, third-party connections, and 
                  microservices architecture.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading text-xl mb-4">Data Analytics</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Business intelligence dashboards, data visualization tools, and analytics platforms 
                  for data-driven decision making.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why Choose Avyren for Custom Development?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven approach and expertise ensure successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">💡</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-sm">
                Experienced developers, designers, and project managers with proven track records.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Agile Methodology</h3>
              <p className="text-muted-foreground text-sm">
                Flexible development approach with regular updates and client collaboration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-lg">🔒</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Security First</h3>
              <p className="text-muted-foreground text-sm">
                Built-in security measures and compliance with industry standards and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">📈</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Scalable Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Future-ready architecture that grows with your business needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss your project requirements and create a solution that perfectly fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact?product=custom-solutions">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact?product=custom-solutions&type=consultation">
                Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}