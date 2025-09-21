import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              About Tecosoft
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Transforming Businesses Through <span className="text-primary">Digital Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are a team of digital transformation experts dedicated to helping organizations unlock their full
              potential through cutting-edge technology solutions and strategic innovation.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower organizations with intelligent digital solutions that drive operational excellence, enhance
                productivity, and create sustainable competitive advantages in an increasingly digital world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that every business deserves access to enterprise-grade technology solutions that can scale
                with their growth and adapt to their unique challenges.
              </p>
            </div>
            <div className="relative">
              <img src="/company-mission-visual.jpg" alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/20">
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
                  We continuously explore new technologies and methodologies to deliver cutting-edge solutions that keep
                  our clients ahead of the curve.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Client Success</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Our clients' success is our success. We're committed to delivering measurable results and building
                  long-term partnerships based on trust and value.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Excellence</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We maintain the highest standards in everything we do, from code quality to customer service, ensuring
                  exceptional outcomes for every project.
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
                  We work closely with our clients as true partners, combining our expertise with their industry
                  knowledge to create optimal solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Results-Driven</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Every solution we deliver is designed with clear objectives and measurable outcomes, ensuring tangible
                  business value and ROI.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Global Perspective</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We bring a global perspective to local challenges, leveraging international best practices and
                  emerging technologies from around the world.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">500+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Projects Delivered</h3>
              <p className="text-muted-foreground">Successful digital transformation initiatives across industries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-accent">150+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Happy Clients</h3>
              <p className="text-muted-foreground">Organizations trusting us with their digital transformation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-secondary">10+</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Years Experience</h3>
              <p className="text-muted-foreground">Deep expertise in digital transformation and technology</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-2xl text-primary">98%</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Client Satisfaction</h3>
              <p className="text-muted-foreground">Consistently high satisfaction rates and long-term partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                15+ years leading digital transformation initiatives for Fortune 500 companies. Expert in strategic
                technology planning and organizational change management.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Michael Chen</h3>
              <p className="text-accent font-medium mb-4">Chief Technology Officer</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technology visionary with deep expertise in cloud architecture, AI/ML, and enterprise software
                development. Former senior architect at leading tech companies.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Emily Rodriguez</h3>
              <p className="text-secondary font-medium mb-4">Chief Operations Officer</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Operations excellence leader focused on delivering exceptional client experiences and scalable business
                processes. Expert in project management and team development.
              </p>
            </Card>
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
            Let's discuss how Tecosoft Digital Solutions can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demo">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/careers">
                Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
