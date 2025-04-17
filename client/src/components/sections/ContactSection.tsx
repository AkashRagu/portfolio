import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { Download } from "lucide-react";

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
    <section id="contact" className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Get In Touch</h2>
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
            <Card className="bg-white dark:bg-neutral-800 shadow-sm mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <i className="ri-mail-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-700 dark:text-neutral-200">Email</h4>
                      <a href="mailto:akashragu0@gmail.com" className="text-primary hover:text-secondary transition-colors">akashragu0@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <i className="ri-phone-line text-xl text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-700 dark:text-neutral-200">Phone</h4>
                      <a href="tel:+353894917330" className="text-primary hover:text-secondary transition-colors">+353 894917330</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <i className="ri-linkedin-box-fill text-xl text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-700 dark:text-neutral-200">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/akash-r-devops" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">linkedin.com/in/akash-r-devops</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-neutral-800 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Need My Resume?</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Download my full resume to learn more about my experience, skills, and qualifications.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <a href="/attached_assets/AKASH%20Ragupathi.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-neutral-800 shadow-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-6">Send Me a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="border-neutral-300 dark:border-neutral-700 dark:bg-neutral-700"
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              type="email" 
                              {...field} 
                              className="border-neutral-300 dark:border-neutral-700 dark:bg-neutral-700"
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
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Subject" 
                              {...field} 
                              className="border-neutral-300 dark:border-neutral-700 dark:bg-neutral-700"
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              rows={5} 
                              {...field} 
                              className="border-neutral-300 dark:border-neutral-700 dark:bg-neutral-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
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
