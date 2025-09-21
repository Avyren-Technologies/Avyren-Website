import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Users, Zap, CheckCircle, Play, Monitor } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Live Demo
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              See Our Platform in <span className="text-primary">Action</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Experience firsthand how Tecosoft Digital Solutions can transform your business operations. Book a
              personalized demo with our experts and discover the power of digital transformation.
            </p>
            <Button size="lg" asChild>
              <Link href="#demo-form">Schedule Your Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              What You'll Experience in Your Demo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our personalized demos are tailored to your industry and specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Live Platform Walkthrough</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  See our platform in action with real data and scenarios relevant to your business. Explore key
                  features and capabilities that matter most to you.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Personalized Use Cases</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We'll demonstrate specific use cases and workflows that align with your industry and business
                  challenges, showing exactly how our solution fits your needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">ROI Analysis</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Get a customized ROI analysis showing potential cost savings, efficiency gains, and business value you
                  can expect from implementing our solution.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Integration Overview</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Learn how our platform integrates with your existing systems and tools, ensuring a smooth transition
                  and minimal disruption to your operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Implementation Roadmap</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Receive a detailed implementation timeline and roadmap tailored to your organization's size,
                  complexity, and goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Q&A Session</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Get all your questions answered by our experts. We'll address technical concerns, pricing questions,
                  and any other aspects of our solution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Choose Your Demo Format</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the demo format that works best for your schedule and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl">Live Online Demo</h3>
                  <p className="text-muted-foreground">30-45 minutes via video call</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Interactive platform walkthrough</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time Q&A with our experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Customized to your use cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Screen sharing and collaboration</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="#demo-form">Schedule Live Demo</Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl">On-Site Demo</h3>
                  <p className="text-muted-foreground">1-2 hours at your location</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">In-person presentation and demo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Team collaboration and discussion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Current system assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Detailed implementation planning</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="#demo-form">Request On-Site Demo</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-24" id="demo-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">Book Your Demo</h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input id="company" placeholder="Your Company" required />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground mb-2">
                    Job Title *
                  </label>
                  <Input id="jobTitle" placeholder="CEO, CTO, etc." required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                    Industry *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-foreground mb-2">
                    Company Size *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="demoType" className="block text-sm font-medium text-foreground mb-2">
                  Preferred Demo Format *
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select demo format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Live Online Demo (30-45 min)</SelectItem>
                    <SelectItem value="onsite">On-Site Demo (1-2 hours)</SelectItem>
                    <SelectItem value="flexible">I'm flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium text-foreground mb-2">
                  Implementation Timeframe
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="When are you looking to implement?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately (within 1 month)</SelectItem>
                    <SelectItem value="quarter">This quarter (1-3 months)</SelectItem>
                    <SelectItem value="half-year">Within 6 months</SelectItem>
                    <SelectItem value="year">Within a year</SelectItem>
                    <SelectItem value="exploring">Just exploring options</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="challenges" className="block text-sm font-medium text-foreground mb-2">
                  Current Challenges
                </label>
                <Textarea
                  id="challenges"
                  placeholder="Tell us about your current business challenges and what you're hoping to achieve..."
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-foreground">
                  Areas of Interest (select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Digital Transformation",
                    "Process Optimization",
                    "Automation Solutions",
                    "Business Intelligence",
                    "System Integration",
                    "Data Analytics",
                    "Workflow Management",
                    "Custom Development",
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox id={interest.toLowerCase().replace(/\s+/g, "-")} />
                      <label
                        htmlFor={interest.toLowerCase().replace(/\s+/g, "-")}
                        className="text-sm text-foreground cursor-pointer"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="consent" required />
                <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                  I agree to receive communications from Tecosoft Digital Solutions and understand I can unsubscribe at
                  any time. *
                </label>
              </div>

              <Button size="lg" className="w-full">
                Schedule My Demo <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">What Happens Next?</h2>
            <p className="text-xl text-muted-foreground">
              Here's what you can expect after submitting your demo request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-xl text-primary">1</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">We'll Contact You</h3>
              <p className="text-muted-foreground leading-relaxed">
                Within 24 hours, one of our solution experts will reach out to confirm your demo details and understand
                your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-xl text-accent">2</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Demo Preparation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We'll prepare a customized demo based on your industry, company size, and specific use cases to make it
                as relevant as possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-heading font-bold text-xl text-secondary">3</span>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-4">Your Demo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience our platform firsthand, get your questions answered, and receive a customized proposal for
                your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
