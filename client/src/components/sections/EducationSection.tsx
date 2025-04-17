import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  const education = [
    {
      institution: "University of Galway",
      location: "Ireland",
      degree: "Master of Science in Information Systems Management",
      period: "2024 - 2025",
      status: "In Progress",
      statusColor: "text-accent bg-accent/10",
    },
    {
      institution: "RMK Engineering College",
      location: "Anna University, India",
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      period: "2015 - 2019",
      status: "Completed",
      statusColor: "text-green-800 dark:text-green-100 bg-green-100 dark:bg-green-900",
    },
  ];

  return (
    <section id="education" className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Education</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="transition-transform hover:scale-105"
            >
              <Card className="bg-white dark:bg-neutral-800 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full mr-4">
                      <i className="ri-building-4-line text-2xl text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{edu.institution}</h3>
                      <p className="text-secondary text-lg">{edu.location}</p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-lg font-medium text-neutral-700 dark:text-neutral-200">{edu.degree}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 mt-2">{edu.period}</p>
                    <div className={`mt-4 inline-block px-3 py-1 ${edu.statusColor} text-sm rounded-full`}>
                      {edu.status}
                    </div>
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
