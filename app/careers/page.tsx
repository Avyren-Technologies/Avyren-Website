import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
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
              Join Our Team
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Build the Future with <span className="text-primary">Avyren Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're looking for passionate individuals who want to make a difference in the world of technology. 
              Join us in creating innovative solutions that transform businesses and empower people.
            </p>
            <Button 
              size="lg" 
              asChild 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg px-8 py-6"
            >
              <Link href="/contact?subject=careers">
                <span className="relative z-10 flex items-center">
                  View Open Positions 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we offer a career path in an innovative, supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl mb-4">Innovation First</CardTitle>
              <CardDescription className="text-base">
                Work on cutting-edge projects using the latest technologies and methodologies.
              </CardDescription>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-heading text-xl mb-4">Collaborative Culture</CardTitle>
              <CardDescription className="text-base">
                Join a team that values collaboration, learning, and mutual support.
              </CardDescription>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="font-heading text-xl mb-4">Growth Opportunities</CardTitle>
              <CardDescription className="text-base">
                Continuous learning opportunities and clear career progression paths.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="font-heading text-2xl mb-2">Senior Full Stack Developer</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Remote / Hybrid
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    Lead development of our flagship products using React, Node.js, and modern cloud technologies.
                  </CardDescription>
                </div>
                <Button 
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact?position=senior-full-stack-developer">
                    <span className="relative z-10 flex items-center">
                      Apply Now 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="font-heading text-2xl mb-2">UI/UX Designer</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Remote / Hybrid
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    Design intuitive and beautiful user experiences for our mobile and web applications.
                  </CardDescription>
                </div>
                <Button 
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact?position=ui-ux-designer">
                    <span className="relative z-10 flex items-center">
                      Apply Now 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="font-heading text-2xl mb-2">DevOps Engineer</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Remote / Hybrid
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Full-time
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    Manage our cloud infrastructure and deployment pipelines for scalable, reliable systems.
                  </CardDescription>
                </div>
                <Button 
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact?position=devops-engineer">
                    <span className="relative z-10 flex items-center">
                      Apply Now 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            We're always interested in meeting talented people. Send us your resume and let's start a conversation.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild
            className="group relative overflow-hidden bg-white text-primary hover:bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <Link href="/contact?subject=careers">
              <span className="relative z-10 flex items-center">
                Send Your Resume 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
