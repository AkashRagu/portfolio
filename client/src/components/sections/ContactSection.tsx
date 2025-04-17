import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { Download, Mail, Phone, Linkedin, Send, FileText } from "lucide-react";
import { BackgroundGradients } from "@/components/ui/background-gradient";
import CodeIcon from "@/components/icons/CodeIcon";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -bottom-10 right-10 rotate-12">
          <CodeIcon className="w-64 h-64" />
        </div>
      </div>
      
      {/* Background gradient shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-accent/5 to-transparent rounded-tr-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to contact me for any project or collaboration opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div className="card-hover mb-8">
              <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <Mail className="mr-3 text-primary" />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center shadow-sm mr-4">
                        <Mail className="text-xl text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 dark:text-neutral-200">Email</h4>
                        <a 
                          href="mailto:akashragu0@gmail.com" 
                          className="text-primary hover:text-accent transition-all font-medium"
                        >
                          akashragu0@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center shadow-sm mr-4">
                        <Phone className="text-xl text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 dark:text-neutral-200">Phone</h4>
                        <a 
                          href="tel:+353894917330" 
                          className="text-primary hover:text-accent transition-all font-medium"
                        >
                          +353 894917330
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center shadow-sm mr-4">
                        <Linkedin className="text-xl text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 dark:text-neutral-200">LinkedIn</h4>
                        <a 
                          href="https://www.linkedin.com/in/akash-r-devops" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:text-accent transition-all font-medium"
                        >
                          linkedin.com/in/akash-r-devops
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div className="card-hover">
              <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-accent to-secondary"></div>
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg flex items-center justify-center shadow-sm">
                        <FileText className="text-2xl text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Need My Resume?</h3>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        Download my full resume to learn more about my experience, skills, and qualifications.
                      </p>
                      <Button 
                        asChild 
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-md"
                      >
                        <a href="/attached_assets/AKASH%20Ragupathi.pdf" download>
                          Download CV <Download className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-hover"
          >
            <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden h-full">
              <div className="h-2 bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                  <Send className="mr-3 text-primary" />
                  Send Me a Message
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="border-neutral-200 focus:border-primary/50 dark:border-neutral-700 dark:bg-neutral-800 shadow-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              type="email" 
                              {...field} 
                              className="border-neutral-200 focus:border-primary/50 dark:border-neutral-700 dark:bg-neutral-800 shadow-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Subject" 
                              {...field} 
                              className="border-neutral-200 focus:border-primary/50 dark:border-neutral-700 dark:bg-neutral-800 shadow-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-secondary font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              rows={5} 
                              {...field} 
                              className="border-neutral-200 focus:border-primary/50 dark:border-neutral-700 dark:bg-neutral-800 shadow-sm"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-md"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
