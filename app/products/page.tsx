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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Our Products & Services
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Smart Digital Solutions for <span className="text-primary">Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              From ready-to-deploy platforms to custom software development, we offer comprehensive solutions 
              that drive digital transformation across industries.
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
                  Comprehensive workforce management platform featuring AI-powered attendance tracking, 
                  centralized HR operations, and real-time analytics for businesses of all sizes.
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

                <Button asChild className="w-full">
                  <Link href="/products/avy-tracker">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
                  Innovative platform combining retail e-commerce with service booking capabilities, 
                  featuring customer exclusivity and comprehensive business management tools.
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

                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/products/ecommerce-booking">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Cog className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl">Custom Solutions & SDLC Services</h2>
                    <p className="text-muted-foreground">End-to-End Software Development</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Beyond our ready-to-deploy products, we offer comprehensive custom software development services 
                  with full Software Development Life Cycle (SDLC) support tailored to your unique business needs.
                </p>
                <Button size="lg" asChild>
                  <Link href="/products/custom-solutions">
                    Explore Custom Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-6">Our SDLC Process:</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Requirement Analysis", desc: "Understanding your business needs and objectives" },
                    { step: "2", title: "UI/UX Design", desc: "Creating intuitive and engaging user experiences" },
                    { step: "3", title: "Development", desc: "Building robust and scalable software solutions" },
                    { step: "4", title: "Quality Assurance", desc: "Comprehensive testing and quality validation" },
                    { step: "5", title: "Integration & Deployment", desc: "Seamless integration with existing systems" },
                    { step: "6", title: "Ongoing Support", desc: "Continuous maintenance and feature updates" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-secondary font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
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
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact">
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}