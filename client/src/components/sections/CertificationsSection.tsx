import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CertificationsSection() {
  const certifications = [
    {
      icon: "ri-code-box-line",
      title: "Oracle Certification",
      description: "Programming in Core Java",
    },
    {
      icon: "ri-translate-2",
      title: "Japanese NAT-N5",
      description: "Japanese Language Proficiency",
    },
    {
      icon: "ri-english-input",
      title: "Business English Vantage",
      description: "University of Cambridge",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Certifications</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-100 dark:bg-neutral-800 shadow-sm group hover:shadow-md transition-all h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <i className={`${cert.icon} text-3xl text-primary`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center text-primary mb-3 group-hover:text-secondary transition-colors">{cert.title}</h3>
                  <p className="text-center text-neutral-700 dark:text-neutral-200">{cert.description}</p>
                  <div className="mt-4 flex justify-center mt-auto pt-4">
                    <Button variant="outline" className="border border-primary text-primary text-sm rounded-full group-hover:bg-primary group-hover:text-white transition-all">
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
