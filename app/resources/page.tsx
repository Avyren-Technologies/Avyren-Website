import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Video, BookOpen, Download, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Knowledge Hub
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Resources to Accelerate Your <span className="text-primary">Digital Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Access our comprehensive library of insights, guides, case studies, and tools to help you make informed
              decisions about your digital transformation initiatives.
            </p>
            <Button size="lg" asChild>
              <Link href="#featured-resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24" id="featured-resources">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Case Studies</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Real-world success stories showcasing how businesses have transformed their operations with our
                  digital solutions.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/resources/case-studies">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Implementation Guides</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Step-by-step guides and best practices for implementing digital transformation initiatives in your
                  organization.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/resources/guides">
                    Access Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Video className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Product Demos</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Video demonstrations of our products featuring expert insights and real-world usage scenarios.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/resources/demos">
                    Watch Demos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Tools & Templates</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Downloadable tools, templates, and frameworks to help you plan and execute your digital transformation
                  projects.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/resources/tools">
                    Download Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Industry Insights</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Industry-specific insights and trends to help you understand how digital transformation applies to your sector.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/resources/insights">
                    Read Insights <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Blog & Updates</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Latest blog posts, company updates, and thought leadership articles on digital transformation topics.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/blog">
                    Read Blog <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Featured Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and valuable resources to jumpstart your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    Case Study
                  </Badge>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    How TechCorp Improved Productivity by 40% with Avy Tracker
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Learn how a mid-size technology company transformed their workforce management and achieved significant 
                    productivity gains in just 3 months.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/resources/techcorp-case-study">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    Guide
                  </Badge>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    The Complete Guide to Workforce Management
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A comprehensive guide covering strategies, technologies, and best practices for modernizing 
                    workforce management operations.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/resources/workforce-guide">
                      Download Free <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    Demo
                  </Badge>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    E-commerce & Service Booking Platform Demo
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A 15-minute walkthrough of our dual-platform solution showing how businesses can manage both 
                    retail and service operations.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/resources/ecommerce-demo">
                      Watch Demo <Video className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    Tool
                  </Badge>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    Digital Readiness Assessment
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    A comprehensive assessment tool to evaluate your organization's readiness for digital transformation 
                    and identify key areas for improvement.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/resources/readiness-assessment">
                      Take Assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Stay Updated with the Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for regular updates on digital transformation trends, best practices, and new
            resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">Need Personalized Guidance?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our experts are ready to help you navigate your digital transformation journey with customized
            recommendations and strategies.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}