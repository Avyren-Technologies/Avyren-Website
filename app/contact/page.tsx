import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
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
              Ready to transform your business with smart digital solutions? Our team of experts is here to help you 
              navigate your journey and achieve your goals.
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
                  Have questions about our products or want to learn more about how we can help your business?
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
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Request Demo</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  See our products in action and discover how they can transform your business operations.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="#contact-form">
                    Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-heading text-xl mb-4">Custom Solutions</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Need a custom solution? Connect with our development team for tailored software development.
                </CardDescription>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="#contact-form">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
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
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input id="company" placeholder="Your Company" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
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
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="services">Professional Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                      Product of Interest *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="avy-tracker">Avy Tracker</SelectItem>
                        <SelectItem value="ecommerce-booking">E-commerce & Service Booking</SelectItem>
                        <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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

                <div>
                  <label htmlFor="demo-time" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Demo Time (Optional)
                  </label>
                  <Input id="demo-time" type="datetime-local" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" required />
                  <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to receive communications from Avyren Technologies and understand I can unsubscribe at
                    any time. *
                  </label>
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
                    <Link href="mailto:info@avyrentechnologies.com" className="text-primary hover:underline">
                      info@avyrentechnologies.com
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
                    <Link href="tel:+91-98765-43210" className="text-primary hover:underline">
                      +91 98765 43210
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">Come visit our office for an in-person meeting.</p>
                    <address className="text-primary not-italic">
                      [Office Address]
                      <br />
                      [City, State - PIN Code]
                      <br />
                      India
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
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM IST</p>
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
                    href="/products/avy-tracker"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Avy Tracker Demo
                  </Link>
                  <Link
                    href="/products/ecommerce-booking"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    E-commerce Platform Demo
                  </Link>
                  <Link
                    href="/products/custom-solutions"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Custom Development
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    About Avyren Technologies
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
                We can typically begin your project within 1-2 weeks of our initial consultation. For our ready-to-deploy 
                products like Avy Tracker, implementation can start immediately after the demo and requirements discussion.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we specialize in creating custom digital solutions tailored to your specific business needs. 
                Our team provides complete SDLC support from requirement analysis to deployment and ongoing maintenance.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">What industries do you serve?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We serve a wide range of industries including construction, healthcare, retail, education, manufacturing, 
                and professional services. Our solutions are designed to be flexible and adaptable to various business models.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-semibold text-xl mb-4">What kind of support do you provide?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide comprehensive support including implementation assistance, training, ongoing technical support, 
                and feature updates. Our support varies by product and service level, with dedicated support available for enterprise customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}