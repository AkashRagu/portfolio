import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaClipboardCheck, FaPython, FaAws, FaCode } from "react-icons/fa";
import { SiVmware } from "react-icons/si";
import { BackgroundGradients } from "@/components/ui/background-gradient";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Accion Labs Sdn Bhd",
      companyLogo: <FaBuilding className="text-primary" />,
      role: "DevOps Engineer",
      period: "July 2023 – May 2024",
      location: "Kuala Lumpur",
      project: "United Overseas Bank",
      color: "from-blue-500 to-indigo-600",
      keyTechIcons: [
        { icon: <FaCode className="text-[#4298B8]" />, name: "Groovy" },
        { icon: <FaPython className="text-[#3776AB]" />, name: "Python" },
      ],
      achievements: [
        "Standardized over 400 legacy applications to align with organizational standards and internal DevOps framework, enhancing CI/CD architecture by 95%",
        "Automated Bitbucket housekeep job using groovy to delete branches with no commits for over 30 days enhancing repository management",
        "Developed python script using OpenPyXl library to automate excel report generation for Resident Foreign Currency application improving data accuracy and efficiency",
        "Restructured existing monolithic application repository into separate modular application, reducing build time by over 25% and enhancing maintainability",
      ],
    },
    {
      company: "Fujitsu Consulting India",
      companyLogo: <FaBuilding className="text-red-600" />,
      role: "Assistant Technical Service Engineer",
      period: "February 2020 – June 2023",
      location: "Bangalore",
      project: "Toyota Infra Management",
      color: "from-red-500 to-orange-500",
      keyTechIcons: [
        { icon: <FaAws className="text-[#FF9900]" />, name: "AWS" },
        { icon: <SiVmware className="text-[#183A61]" />, name: "VM" },
      ],
      achievements: [
        "Migrated 15 IoT-based on-premises VMs to AWS machine images, achieving a seamless transition with zero business impact",
        "Developed and maintained cloud infrastructure services by creating and managing AWS services using AWS CLI ensuring efficiency and scalability",
        "Designed and managed VPC network for private connections using client VPN service ensuring security compliance requirements",
        "Enhanced IOPS performance by upto 30% by enabling Elastic Network Adapter driver for EC2 instances running on legacy private images",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
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
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My career journey as a DevOps Engineer specializing in cloud infrastructure and automation.
          </p>
        </motion.div>
        
        <div className="relative timeline-container pl-10 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-16 md:grid md:grid-cols-12 md:gap-8 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Year indicator for large screens */}
              <div className="hidden md:block absolute left-1/3 transform -translate-x-1/2 -translate-y-12 z-10">
                <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full shadow-lg text-sm font-medium">
                  {exp.period.split('–')[0].trim()}
                </div>
              </div>

              {/* Company Card */}
              <div className="md:col-span-4 mb-6 md:mb-0">
                <motion.div
                  className="card-hover"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden h-full">
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                          <span className="text-2xl">{exp.companyLogo}</span>
                        </div>
                        <div className="flex space-x-2">
                          {exp.keyTechIcons.map((tech, i) => (
                            <div 
                              key={i} 
                              className="w-8 h-8 bg-white dark:bg-neutral-700 rounded-full shadow-sm flex items-center justify-center"
                              title={tech.name}
                            >
                              <span className="text-lg">{tech.icon}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-primary mb-2">{exp.company}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-secondary">
                          <FaBriefcase className="mr-2 text-sm" />
                          <p className="font-medium">{exp.role}</p>
                        </div>
                        
                        <div className="flex items-center text-neutral-600 dark:text-neutral-300 text-sm">
                          <FaCalendarAlt className="mr-2" />
                          <p>{exp.period}</p>
                        </div>
                        
                        <div className="flex items-center text-neutral-600 dark:text-neutral-300 text-sm">
                          <FaMapMarkerAlt className="mr-2" />
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 inline-block px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm rounded-full font-medium">
                        {exp.project}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              {/* Achievements Card */}
              <div className="md:col-span-8 relative timeline-dot">
                <motion.div
                  className="card-hover"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-secondary mb-6 flex items-center">
                        <FaClipboardCheck className="mr-3 text-primary" />
                        Key Achievements
                      </h4>
                      
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <span className="text-primary text-sm">✓</span>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-200">{achievement}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              {/* Connector line for timeline */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-1/3 top-full h-16 w-px bg-gradient-to-b from-primary to-accent/30 transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
