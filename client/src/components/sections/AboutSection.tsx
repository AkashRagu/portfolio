import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CloudIcon from "@/components/icons/CloudIcon";
import CodeIcon from "@/components/icons/CodeIcon";
import ServerIcon from "@/components/icons/ServerIcon";
import DevOpsIcon from "@/components/icons/DevOpsIcon";
import { BackgroundGradients } from "@/components/ui/background-gradient";

export default function AboutSection() {
  const competencies = [
    {
      icon: <CloudIcon className="w-10 h-10" />,
      title: "Cloud Infrastructure",
      description: "AWS services management, cloud migration, VPC network design, EC2, S3, Lambda",
    },
    {
      icon: <DevOpsIcon className="w-10 h-10" />,
      title: "CI/CD Implementation",
      description: "Jenkins, build automation, deployment pipelines, Bitbucket repository management",
    },
    {
      icon: <CodeIcon className="w-10 h-10" />,
      title: "Infrastructure as Code",
      description: "Automation scripts, Ansible configuration management, Terraform, CloudFormation",
    },
    {
      icon: <ServerIcon className="w-10 h-10" />,
      title: "System Administration",
      description: "Red Hat Linux, Windows Server, Docker containerization, database management",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 rotate-12">
          <CloudIcon className="w-64 h-64" />
        </div>
        <div className="absolute bottom-1/4 left-10 -rotate-12">
          <DevOpsIcon className="w-72 h-72" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="md:flex md:items-start md:gap-16">
          <motion.div 
            className="mb-12 md:mb-0 md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-1 rounded-lg shadow-lg mb-8">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-secondary mb-6 relative">
                  Who I Am
                  <div className="h-1 w-12 bg-accent absolute -bottom-2 left-0"></div>
                </h3>
                <p className="mb-6 text-neutral-700 dark:text-neutral-200 leading-relaxed">
                  I'm a DevOps Engineer with extensive experience in AWS, On-premises infrastructure, and the banking sector. I specialize in implementing high-quality solutions that are scalable, highly available, and fault-tolerant.
                </p>
                <p className="mb-6 text-neutral-700 dark:text-neutral-200 leading-relaxed">
                  With a strong background in cloud infrastructure, I've successfully migrated on-premises virtual machines to AWS cloud and designed virtual private cloud environments. I'm passionate about automating software development workflows using CI/CD pipelines and optimizing system performance.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-accent p-px rounded-lg shadow-xl">
              <div className="bg-primary/10 dark:bg-primary/20 p-5 rounded-lg">
                <p className="text-primary font-medium">
                  Eligible to work as an intern under the Stamp 2 visa scheme without sponsorship between October 2024 and May 2025, with a view to securing a Graduate 1G visa in July 2025.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-6 relative">
              Core Competencies
              <div className="h-1 w-12 bg-accent absolute -bottom-2 left-0"></div>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {competencies.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Card className="bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <CardContent className="p-6 relative">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 text-primary">{item.icon}</div>
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
