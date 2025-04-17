import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Accion Labs Sdn Bhd",
      role: "DevOps Engineer",
      period: "July 2023 – May 2024",
      location: "Kuala Lumpur",
      project: "United Overseas Bank",
      achievements: [
        "Standardized over 400 legacy applications to align with organizational standards and internal DevOps framework, enhancing CI/CD architecture by 95%",
        "Automated Bitbucket housekeep job using groovy to delete branches with no commits for over 30 days enhancing repository management",
        "Developed python script using OpenPyXl library to automate excel report generation for Resident Foreign Currency application improving data accuracy and efficiency",
        "Restructured existing monolithic application repository into separate modular application, reducing build time by over 25% and enhancing maintainability",
      ],
    },
    {
      company: "Fujitsu Consulting India",
      role: "Assistant Technical Service Engineer",
      period: "February 2020 – June 2023",
      location: "Bangalore",
      project: "Toyota Infra Management",
      achievements: [
        "Migrated 15 IoT-based on-premises VMs to AWS machine images, achieving a seamless transition with zero business impact",
        "Developed and maintained cloud infrastructure services by creating and managing AWS services using AWS CLI ensuring efficiency and scalability",
        "Designed and managed VPC network for private connections using client VPN service ensuring security compliance requirements",
        "Enhanced IOPS performance by upto 30% by enabling Elastic Network Adapter driver for EC2 instances running on legacy private images",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Professional Experience</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="relative timeline-container pl-10 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-12 md:grid md:grid-cols-12 md:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:col-span-4 mb-4 md:mb-0">
                <Card className="bg-white dark:bg-neutral-800 shadow-sm">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                    <p className="text-secondary font-medium mt-1">{exp.role}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 mt-1">{exp.period}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 mt-1">{exp.location}</p>
                    <div className="mt-3 inline-block px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-sm rounded-full">
                      {exp.project}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-8 relative timeline-dot">
                <Card className="bg-white dark:bg-neutral-800 shadow-sm">
                  <CardContent className="p-5">
                    <h4 className="text-lg font-medium text-secondary mb-3">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <i className="ri-check-line text-accent mt-1 mr-2 flex-shrink-0"></i>
                          <p className="text-neutral-700 dark:text-neutral-200">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
