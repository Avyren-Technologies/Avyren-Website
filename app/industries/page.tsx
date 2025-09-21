import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Heart, DollarSign, ShoppingCart, Factory, Truck } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Industry Solutions
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Tailored Solutions for <span className="text-primary">Every Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Deep industry expertise combined with cutting-edge technology to solve your unique business challenges and
              drive measurable results.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">Explore Industry Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Manufacturing</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Optimize production processes, improve quality control, and enhance supply chain visibility with
                  Industry 4.0 solutions tailored for modern manufacturing.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Production monitoring & optimization</li>
                  <li>• Quality management systems</li>
                  <li>• Predictive maintenance</li>
                  <li>• Supply chain integration</li>
                </ul>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/manufacturing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Healthcare</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Improve patient outcomes, streamline operations, and ensure compliance with healthcare-specific
                  digital solutions and data management platforms.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Electronic health records integration</li>
                  <li>• Patient flow optimization</li>
                  <li>• Compliance management</li>
                  <li>• Telemedicine platforms</li>
                </ul>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/healthcare">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <DollarSign className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Financial Services</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Enhance security, improve customer experience, and ensure regulatory compliance with fintech solutions
                  designed for the financial industry.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Risk management systems</li>
                  <li>• Fraud detection & prevention</li>
                  <li>• Regulatory compliance</li>
                  <li>• Customer onboarding automation</li>
                </ul>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/finance">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Retail & E-commerce</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Transform customer experiences, optimize inventory management, and drive sales growth with
                  comprehensive retail technology solutions.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Omnichannel customer experience</li>
                  <li>• Inventory optimization</li>
                  <li>• Personalization engines</li>
                  <li>• Point-of-sale integration</li>
                </ul>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/retail">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Logistics & Supply Chain</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Optimize logistics operations, improve visibility across the supply chain, and reduce costs with
                  advanced tracking and management systems.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Real-time shipment tracking</li>
                  <li>• Warehouse management systems</li>
                  <li>• Route optimization</li>
                  <li>• Supplier integration</li>
                </ul>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/logistics">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Professional Services</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Streamline project management, improve client relationships, and enhance service delivery with
                  solutions designed for professional service firms.
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Project management automation</li>
                  <li>• Client portal solutions</li>
                  <li>• Resource planning & allocation</li>
                  <li>• Time tracking & billing</li>
                </ul>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/professional-services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our industry-specific solutions have helped organizations achieve measurable improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">40%</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Cost Reduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Average operational cost savings achieved through process optimization and automation across all
                industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">60%</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Faster Processing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Improvement in processing times through digital transformation and workflow automation initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-secondary">95%</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Client Satisfaction</h3>
              <p className="text-muted-foreground leading-relaxed">
                Client satisfaction rate with our industry-specific solutions and ongoing support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how our industry-specific solutions can address your unique challenges.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/demo">
              Schedule Industry Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
