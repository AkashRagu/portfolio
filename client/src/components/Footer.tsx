import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-2xl font-bold">
              <span className="font-['Poppins']">Akash</span>
              <span className="text-accent">.dev</span>
            </Link>
            <p className="mt-2 text-sm text-neutral-200">DevOps Engineer & Cloud Specialist</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:akashragu0@gmail.com" className="text-white hover:text-accent transition-colors">
              <i className="ri-mail-line text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/akash-r-devops" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
            <a href="tel:+353894917330" className="text-white hover:text-accent transition-colors">
              <i className="ri-phone-line text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm text-neutral-200">© {new Date().getFullYear()} Akash Ragupathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
