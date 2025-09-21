import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card/50 to-muted/30 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Get in Touch
            </Badge>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-6">
              Let's Start Your <span className="text-primary">Digital Transformation</span> Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ready to transform your business? Our team of experts is here to help you navigate your digital
              transformation journey and achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact-form">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">How Can We Help You?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">General Inquiry</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Have questions about our services or want to learn more about how we can help your business?
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="#contact-form">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Schedule a Demo</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  See our platform in action and discover how it can transform your business operations.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/demo">
                    Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Enterprise Sales</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Looking for enterprise solutions? Connect with our sales team for custom pricing and features.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="mailto:sales@tecosoft.com">
                    Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-muted/20" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-8">Send Us a Message</h2>
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

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="pricing">Pricing & Plans</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <Button size="lg" className="w-full">
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Send us an email and we'll get back to you within 24 hours.
                    </p>
                    <Link href="mailto:hello@tecosoft.com" className="text-primary hover:underline">
                      hello@tecosoft.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak directly with our team during business hours.</p>
                    <Link href="tel:+1-555-123-4567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">Come visit our headquarters for an in-person meeting.</p>
                    <address className="text-primary not-italic">
                      123 Innovation Drive
                      <br />
                      Tech District, CA 94105
                      <br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-card rounded-lg border">
                <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="/demo"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Schedule a Demo
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    View Pricing Plans
                  </Link>
                  <Link
                    href="/resources"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Browse Resources
                  </Link>
                  <Link
                    href="/support"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Support Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions about getting started.</p>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">How quickly can we get started?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We can typically begin your digital transformation project within 1-2 weeks of our initial consultation.
                The timeline depends on the complexity of your requirements and current systems.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we specialize in creating custom digital solutions tailored to your specific business needs. Our
                team works closely with you to understand your requirements and develop the perfect solution.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">What industries do you serve?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We serve a wide range of industries including manufacturing, healthcare, finance, retail, and logistics.
                Our solutions are designed to be flexible and adaptable to various business models and requirements.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">What kind of support do you provide?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide comprehensive support including implementation assistance, training, ongoing technical
                support, and strategic consulting. Our support levels vary by plan, with 24/7 support available for
                enterprise customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
