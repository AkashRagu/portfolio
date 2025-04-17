import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaAws, FaLinux, FaWindows, FaDocker, FaJenkins, FaGitAlt, FaPython, FaJava, FaNpm, FaCode } from "react-icons/fa";
import { SiAnsible, SiTerraform, SiBitbucket, SiJira, SiConfluence, SiApache } from "react-icons/si";
import { BackgroundGradients } from "@/components/ui/background-gradient";
import CloudIcon from "@/components/icons/CloudIcon";
import CodeIcon from "@/components/icons/CodeIcon";
import { PiRocketLaunch } from "react-icons/pi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";

export default function SkillsSection() {
  const cloudInfraSkills = [
    { name: "Amazon Web Services", percentage: 90, icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Red Hat Enterprise Linux", percentage: 85, icon: <FaLinux className="text-[#EE0000]" /> },
    { name: "Windows Server", percentage: 80, icon: <FaWindows className="text-[#0078D7]" /> },
    { name: "Docker", percentage: 75, icon: <FaDocker className="text-[#2496ED]" /> },
  ];

  const devopsSkills = [
    { name: "Jenkins", percentage: 90, icon: <FaJenkins className="text-[#D33833]" /> },
    { name: "Ansible", percentage: 85, icon: <SiAnsible className="text-[#EE0000]" /> },
    { name: "Terraform", percentage: 80, icon: <SiTerraform className="text-[#7B42BC]" /> },
    { name: "Bitbucket", percentage: 90, icon: <SiBitbucket className="text-[#2684FF]" /> },
  ];

  const programmingSkills = [
    { name: "Bash Scripting", icon: <FaLinux className="text-neutral-600 dark:text-neutral-300" /> },
    { name: "Groovy", icon: <FaCode className="text-[#4298B8] dark:text-[#6BD1FF]" /> },
    { name: "C#", icon: <FaCode className="text-[#239120] dark:text-[#33D62A]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB] dark:text-[#4DA7E8]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396] dark:text-[#00A3D3]" /> },
  ];

  const buildSkills = [
    { name: "Maven", icon: <SiApache className="text-[#C71A36] dark:text-[#FF2346]" /> },
    { name: "ANT", icon: <SiApache className="text-neutral-600 dark:text-neutral-300" /> },
    { name: "NPM", icon: <FaNpm className="text-[#CB3837]" /> },
    { name: "Rocket Aldon", icon: <PiRocketLaunch className="text-neutral-600 dark:text-neutral-300" /> },
    { name: "CI/CD Pipelines", icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  const additionalSkills = [
    { name: "Microsoft SQL", icon: <DiMsqlServer className="text-[#CC2927] dark:text-[#FF3230]" /> },
    { name: "CloudWatch Monitoring", icon: <MdOutlineMonitorHeart className="text-[#FF9900]" /> },
    { name: "JIRA", icon: <SiJira className="text-[#0052CC] dark:text-[#2684FF]" /> },
    { name: "Confluence", icon: <SiConfluence className="text-[#0052CC] dark:text-[#2684FF]" /> },
    { name: "Technical Documentation", icon: <IoDocumentTextOutline className="text-neutral-600 dark:text-neutral-300" /> },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 rotate-12">
          <CloudIcon className="w-72 h-72" />
        </div>
        <div className="absolute -bottom-20 -left-10 -rotate-12">
          <CodeIcon className="w-72 h-72" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            My technical expertise spans cloud infrastructure, DevOps practices, and programming languages that enable me to deliver robust and scalable solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-hover"
          >
            <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center">
                  <CloudIcon className="w-8 h-8 mr-3 text-primary" />
                  <span>Cloud & Infrastructure</span>
                </h3>
                
                <div className="space-y-6">
                  {cloudInfraSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-neutral-700 dark:text-neutral-200 flex items-center">
                          <span className="mr-2 text-xl">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-primary dark:text-primary/80">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar magic-sparkles">
                        <motion.div 
                          className="skill-level" 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 * index }}
                        ></motion.div>
                      </div>
                    </motion.div>
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
            className="card-hover"
          >
            <Card className="bg-white dark:bg-neutral-800 shadow-md border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-secondary to-accent"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center">
                  <FaGitAlt className="w-7 h-7 mr-3 text-primary" />
                  <span>DevOps & Automation</span>
                </h3>
                
                <div className="space-y-6">
                  {devopsSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-neutral-700 dark:text-neutral-200 flex items-center">
                          <span className="mr-2 text-xl">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-primary dark:text-primary/80">{skill.percentage}%</span>
                      </div>
                      <div className="skill-bar magic-sparkles">
                        <motion.div 
                          className="skill-level" 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 * index }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Programming & Scripting", skills: programmingSkills, icon: <CodeIcon className="w-7 h-7" />, delay: 0.3 },
            { title: "Build & Deployment", skills: buildSkills, icon: <PiRocketLaunch className="w-7 h-7" />, delay: 0.4 },
            { title: "Additional Skills", skills: additionalSkills, icon: <MdOutlineMonitorHeart className="w-7 h-7" />, delay: 0.5 }
          ].map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: category.delay }}
              className="card-hover"
            >
              <Card className="bg-white dark:bg-neutral-800 shadow-md h-full border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary/70 via-secondary/70 to-accent/70"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center">
                    <span className="mr-2 text-primary">{category.icon}</span>
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <span className="text-xl flex-shrink-0">{skill.icon}</span>
                        <span className="text-neutral-700 dark:text-neutral-200">{skill.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
