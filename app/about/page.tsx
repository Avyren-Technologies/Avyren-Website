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
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.muted.foreground/0.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.muted.foreground/0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              About Avyren Technologies
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              About <span className="text-primary">Avyren Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are a technology-driven software development company passionate about delivering smart, reliable, and user-friendly 
              solutions to help businesses stay ahead in the digital era.
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
                Avyren Technologies is a technology-driven software development company passionate about delivering 
                smart, reliable, and user-friendly solutions to help businesses stay ahead in the digital era.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine creative thinking, technical expertise, and industry knowledge to develop tailored applications 
                that solve real-world challenges for organizations of all sizes.
              </p>
              <Button 
                size="lg" 
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Get in Touch 
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <p className="text-sm text-muted-foreground mt-4">
                  This vision drives every solution we build, ensuring our products are innovative, affordable, and future-ready.
                </p>
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
                    <span className="text-muted-foreground">Develop Affordable & Accessible Applications: Digital solutions that empower even small and medium businesses to embrace technology without huge costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Enhance Transparency & Productivity: Our platforms ensure real-time insights and data-driven decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Drive Digital Transformation: Helping businesses across industries simplify operations and become smarter and more connected</span>
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
            <Button 
              size="lg" 
              variant="secondary" 
              asChild
              className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Get Started 
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
              <Link href="/products">
                <span className="relative z-10 flex items-center">
                  View Our Products 
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