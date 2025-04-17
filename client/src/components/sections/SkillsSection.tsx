import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const cloudInfraSkills = [
    { name: "Amazon Web Services", percentage: 90 },
    { name: "Red Hat Enterprise Linux", percentage: 85 },
    { name: "Windows Server", percentage: 80 },
    { name: "Docker", percentage: 75 },
  ];

  const devopsSkills = [
    { name: "Jenkins", percentage: 90 },
    { name: "Ansible", percentage: 85 },
    { name: "Terraform", percentage: 80 },
    { name: "Bitbucket", percentage: 90 },
  ];

  const programmingSkills = [
    "Bash Scripting",
    "Groovy",
    "C#",
    "Python",
    "Java",
  ];

  const buildSkills = [
    "Maven",
    "ANT",
    "NPM",
    "Rocket Aldon",
    "CI/CD Pipelines",
  ];

  const additionalSkills = [
    "Microsoft SQL",
    "CloudWatch Monitoring",
    "JIRA",
    "Confluence",
    "Technical Documentation",
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">Technical Skills</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-neutral-100 dark:bg-neutral-800 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-6">Cloud & Infrastructure</h3>
                
                <div className="space-y-5">
                  {cloudInfraSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-neutral-700 dark:text-neutral-200">{skill.name}</span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-neutral-100 dark:bg-neutral-800 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-6">DevOps & Automation</h3>
                
                <div className="space-y-5">
                  {devopsSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-neutral-700 dark:text-neutral-200">{skill.name}</span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-level" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-neutral-100 dark:bg-neutral-800 shadow-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Programming & Scripting</h3>
                <ul className="space-y-2">
                  {programmingSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-accent"></i>
                      <span className="text-neutral-700 dark:text-neutral-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-neutral-100 dark:bg-neutral-800 shadow-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Build & Deployment</h3>
                <ul className="space-y-2">
                  {buildSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-accent"></i>
                      <span className="text-neutral-700 dark:text-neutral-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-neutral-100 dark:bg-neutral-800 shadow-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">Additional Skills</h3>
                <ul className="space-y-2">
                  {additionalSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <i className="ri-checkbox-circle-line text-accent"></i>
                      <span className="text-neutral-700 dark:text-neutral-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
