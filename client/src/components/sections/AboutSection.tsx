import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const competencies = [
    {
      icon: "ri-cloud-line",
      title: "Cloud Infrastructure",
      description: "AWS services management, cloud migration, VPC network design",
    },
    {
      icon: "ri-git-branch-line",
      title: "CI/CD Implementation",
      description: "Build automation, deployment pipelines, repository management",
    },
    {
      icon: "ri-code-box-line",
      title: "Infrastructure as Code",
      description: "Automation scripts, configuration management, Terraform",
    },
    {
      icon: "ri-server-line",
      title: "System Administration",
      description: "Linux/Windows servers, containerization, database management",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-2">About Me</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="md:flex md:items-start md:gap-12">
          <motion.div 
            className="mb-8 md:mb-0 md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-secondary mb-4">Who I Am</h3>
            <p className="mb-6 text-neutral-700 dark:text-neutral-200 leading-relaxed">
              I'm a DevOps Engineer with extensive experience in AWS, On-premises infrastructure, and the banking sector. I specialize in implementing high-quality solutions that are scalable, highly available, and fault-tolerant.
            </p>
            <p className="mb-6 text-neutral-700 dark:text-neutral-200 leading-relaxed">
              With a strong background in cloud infrastructure, I've successfully migrated on-premises virtual machines to AWS cloud and designed virtual private cloud environments. I'm passionate about automating software development workflows using CI/CD pipelines and optimizing system performance.
            </p>
            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-md border-l-4 border-primary">
              <p className="text-primary font-medium">
                Eligible to work as an intern under the Stamp 2 visa scheme without sponsorship between October 2024 and May 2025, with a view to securing a Graduate 1G visa in July 2025.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-secondary mb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competencies.map((item, index) => (
                <Card key={index} className="bg-neutral-100 dark:bg-neutral-800 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <i className={`${item.icon} text-xl mr-2 text-primary`}></i>
                      <h4 className="font-medium">{item.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
