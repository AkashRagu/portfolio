import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaJava, FaLanguage, FaGlobe, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SiAmazon } from "react-icons/si";
import { BackgroundGradients } from "@/components/ui/background-gradient";
import CloudIcon from "@/components/icons/CloudIcon";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: <FaJava className="text-[#007396]" />,
      title: "Oracle Certification",
      description: "Programming in Core Java",
      issuer: "Oracle Corporation",
      date: "Aug 2018",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <FaLanguage className="text-[#E03131]" />,
      title: "Japanese NAT-N5",
      description: "Japanese Language Proficiency",
      issuer: "Japan Foundation",
      date: "Dec 2019",
      color: "from-red-600 to-red-400",
    },
    {
      icon: <FaGlobe className="text-[#2563EB]" />,
      title: "Business English Vantage",
      description: "University of Cambridge",
      issuer: "Cambridge Assessment English",
      date: "Jun 2017",
      color: "from-green-600 to-green-400",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 right-10 -rotate-12">
          <CloudIcon className="w-64 h-64" />
        </div>
        <div className="absolute -bottom-10 left-1/4 rotate-12 opacity-30">
          <FaAward className="w-32 h-32 text-accent" />
        </div>
      </div>
      
      {/* Background gradient shapes */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and language skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card-hover"
            >
              <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="flex items-center justify-center mb-6 magic-sparkles">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-md">
                      <span className="text-4xl">{cert.icon}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{cert.title}</h3>
                    <p className="text-secondary font-medium">{cert.description}</p>
                  </div>
                  
                  <div className="bg-neutral-50 dark:bg-neutral-800/60 w-full rounded-lg p-4 border border-neutral-100 dark:border-neutral-700 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">Issued by:</div>
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{cert.issuer}</div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">Date:</div>
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{cert.date}</div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-2">
                    <Button variant="outline" size="sm" className="rounded-full bg-white dark:bg-neutral-800 border border-primary/50 text-primary hover:text-white hover:bg-primary transition-all shadow-sm">
                      <FaExternalLinkAlt className="mr-2 h-3 w-3" />
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
