import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/30 dark:to-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div 
            className="md:w-7/12 mt-10 md:mt-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Akash Ragupathi
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-secondary mb-6">
              DevOps Engineer
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-8 leading-relaxed">
              DevOps Engineer with 4 years of AWS, On-premises infrastructure and banking sector
              experience. Result-oriented performer in implementing high quality solutions that are scalable,
              highly available and fault tolerant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/10">
                <a href="/attached_assets/AKASH%20Ragupathi.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <a href="mailto:akashragu0@gmail.com" className="text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors">
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/akash-r-devops" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors">
                <i className="ri-linkedin-box-fill text-xl"></i>
              </a>
              <a href="tel:+353894917330" className="text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors">
                <i className="ri-phone-line text-xl"></i>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-5/12 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                  <i className="ri-user-3-line text-7xl text-neutral-400"></i>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
