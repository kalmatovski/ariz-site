"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import TechCard from "@/components/ui/tech-card";
import Layout from "@/components/layout/Layout";
import { useSafeTranslation } from "@/hooks/useSafeTranslation";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useSafeTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address', 'Address'),
      content: "123 Tech Street, Future City, FC 12345",
      description: "Visit our headquarters"
    },
    {
      icon: Phone,
      title: t('contact.phone', 'Phone'),
      content: "+1 (555) 123-4567",
      description: "24/7 support available"
    },
    {
      icon: Mail,
      title: t('contact.email', 'Email'),
      content: "info@supplychainsolutions.tech",
      description: "Quick response guaranteed"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Support Available",
      description: "Global timezone coverage"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      country: "USA",
      address: "123 Tech Street, NY 10001",
      phone: "+1 (555) 123-4567",
      timezone: "EST"
    },
    {
      city: "London",
      country: "UK",
      address: "45 Innovation Ave, London SW1A 1AA",
      phone: "+44 20 7946 0958",
      timezone: "GMT"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "78 Marina Bay Blvd, Singapore 018956",
      phone: "+65 6234 5678",
      timezone: "SGT"
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "90 Business Bay, Dubai, UAE",
      phone: "+971 4 123 4567",
      timezone: "GST"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              {t('contact.title').split(' ')[0]}
            </span>{" "}
            <span className="text-foreground">{t('contact.title').split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your supply chain? Get in touch with our experts 
            for personalized solutions and support.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              <TechCard className="text-center h-full" hover>
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {info.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
              </TechCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TechCard gradient glow>
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.form.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project or requirements..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.form.send')}
                    </div>
                  )}
                </Button>
              </form>
            </TechCard>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <TechCard>
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Global Offices</h2>
              </div>
              
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    className="p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {office.city}, {office.country}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {office.address}
                        </p>
                      </div>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {office.timezone}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TechCard>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8"
            >
              <TechCard gradient>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    24/7 Expert Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our team of specialists is available around the clock to assist you
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">2h</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </TechCard>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <TechCard className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  question: "How quickly can you respond to inquiries?",
                  answer: "We typically respond to all inquiries within 2 hours during business hours."
                },
                {
                  question: "Do you offer custom solutions?",
                  answer: "Yes, we specialize in creating tailored solutions for specific industry needs."
                },
                {
                  question: "What regions do you serve?",
                  answer: "We operate globally with offices in North America, Europe, Asia, and the Middle East."
                },
                {
                  question: "How can I become a partner?",
                  answer: "Visit our Partners page or contact us directly to learn about partnership opportunities."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                  className="p-4 rounded-lg bg-background/30 border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </TechCard>
        </motion.div>
      </div>
    </Layout>
  );
}