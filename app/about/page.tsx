import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              About Avyren Technologies
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Powering Smart Digital Solutions for <span className="text-primary">Every Business</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are a technology company dedicated to delivering affordable, scalable, and intelligent digital platforms 
              that drive transformation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-8">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Avyren Technologies is a forward-thinking software solutions company that specializes in creating 
                smart digital platforms for businesses across various industries. We understand that every business, 
                regardless of size, deserves access to powerful technology solutions that can drive growth and efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of experienced developers, designers, and business analysts work together to deliver 
                end-to-end software development lifecycle support, ensuring that our clients receive not just 
                products, but complete digital transformation solutions.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-background/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-4">500+</div>
                    <div className="text-xl text-muted-foreground mb-4">Businesses Transformed</div>
                    <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl">Our Vision</CardTitle>
                </div>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-6">
                  "To become a trusted and affordable technology partner delivering smart and scalable digital 
                  platforms across industries."
                </blockquote>
              </CardHeader>
            </Card>

            {/* Mission */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-2xl">Our Mission</CardTitle>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Deliver affordable applications that democratize access to advanced technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Ensure transparency and productivity in all our solutions and processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Drive digital transformation across industries with smart, scalable platforms</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Innovation</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We continuously explore new technologies and methodologies to deliver cutting-edge solutions that 
                  keep our clients ahead of the curve.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Affordability</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We believe powerful technology should be accessible to all businesses, regardless of size or budget. 
                  Our solutions are designed to be cost-effective.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Quality</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We maintain the highest standards in development, testing, and deployment to ensure our solutions 
                  are reliable, secure, and performant.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Collaboration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We work closely with our clients as true partners, combining our technical expertise with their 
                  industry knowledge to create optimal solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Transparency</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We believe in open communication, clear processes, and honest relationships with our clients 
                  throughout every project phase.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Scalability</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Our solutions are built to grow with your business, ensuring long-term value and adaptability 
                  to changing market needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Our Impact by Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">500+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Businesses Served</h3>
              <p className="text-muted-foreground">Companies across various industries trust our solutions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">50+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Custom Projects</h3>
              <p className="text-muted-foreground">Tailored solutions delivered with complete SDLC support</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-secondary">5+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Years Experience</h3>
              <p className="text-muted-foreground">Deep expertise in software development and digital transformation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">98%</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Client Satisfaction</h3>
              <p className="text-muted-foreground">High satisfaction rates and long-term partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how Avyren Technologies can help transform your business with smart digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/products">
                View Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}