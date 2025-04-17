import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundGradients } from "@/components/ui/background-gradient";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";
import ServerIcon from "@/components/icons/ServerIcon";

export default function EducationSection() {
  const education = [
    {
      institution: "University of Galway",
      location: "Ireland",
      degree: "Master of Science in Information Systems Management",
      period: "2024 - 2025",
      status: "In Progress",
      statusColor: "text-accent bg-accent/10",
      color: "from-blue-500 to-cyan-500",
      description: "Focusing on advanced information systems management and enterprise technologies."
    },
    {
      institution: "RMK Engineering College",
      location: "Anna University, India",
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      period: "2015 - 2019",
      status: "Completed",
      statusColor: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30",
      color: "from-purple-500 to-indigo-500",
      description: "Studied core electronics, communication systems, and computer networking fundamentals."
    },
  ];

  return (
    <section id="education" className="py-20 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-20 right-10 -rotate-12">
          <ServerIcon className="w-72 h-72" />
        </div>
        <div className="absolute top-40 left-10 rotate-12 opacity-50">
          <FaGraduationCap className="w-24 h-24 text-primary" />
        </div>
      </div>
      
      {/* Background gradient shapes */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-t from-accent/5 to-transparent rounded-tl-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My academic journey in technology and engineering.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card-hover"
            >
              <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mr-4 shadow-sm">
                      <FaGraduationCap className="text-3xl text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{edu.institution}</h3>
                          <div className="flex items-center text-secondary mt-1">
                            <FaMapMarkerAlt className="mr-2 text-sm" />
                            <p className="font-medium">{edu.location}</p>
                          </div>
                        </div>
                        <div className={`px-3 py-1.5 ${edu.statusColor} text-sm rounded-full font-medium`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-neutral-50 to-white dark:from-neutral-800/60 dark:to-neutral-800 rounded-lg p-5 border border-neutral-100 dark:border-neutral-700 shadow-sm">
                    <h4 className="font-semibold text-lg text-secondary mb-2 flex items-center">
                      <FaCertificate className="mr-2 text-accent" />
                      <span>{edu.degree}</span>
                    </h4>
                    
                    <div className="flex items-center text-neutral-600 dark:text-neutral-300 text-sm mb-3">
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <p className="text-neutral-700 dark:text-neutral-200">
                      {edu.description}
                    </p>
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
