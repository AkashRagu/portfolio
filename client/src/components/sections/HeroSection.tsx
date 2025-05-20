import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Phone } from "lucide-react";
import { BackgroundGradients } from "@/components/ui/background-gradient";
import DevOpsIcon from "@/components/icons/DevOpsIcon";
import { Parallax } from "react-parallax";

export default function HeroSection() {
  return (
    <section id="home" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundGradients />
      
      <div className="absolute top-20 left-10 opacity-5 rotate-12">
        <DevOpsIcon className="w-64 h-64" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-7/12 mt-12 md:mt-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-6 inline-block">
              <span className="bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                AWS & Cloud Infrastructure Specialist
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Akash Ragupathi
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-6">
              DevOps Engineer
            </h2>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-8 leading-relaxed max-w-xl">
              DevOps Engineer with 4+ years of experience in AWS, on-premises infrastructure and banking sector.
              Result-oriented performer implementing high-quality solutions that are scalable,
              highly available and fault tolerant.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/10 shadow-sm"
              >
                <a
                  href="http://portfolio.akash-r.com/Akash_Ragupathi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
              >
                  Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <a 
                href="mailto:akashragu0@gmail.com" 
                className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-primary hover:bg-white dark:hover:bg-neutral-700 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/akash-r-devops" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-primary hover:bg-white dark:hover:bg-neutral-700 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="tel:+353894917330" 
                className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-primary hover:bg-white dark:hover:bg-neutral-700 transition-all shadow-sm"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
              
              {/* Profile image container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl relative z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src="/assets/IMG_0427.jpeg" 
                    alt="Akash Ragupathi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
