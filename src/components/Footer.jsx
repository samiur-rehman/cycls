import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { GradientText } from './ui/gradient-text';

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerSections = {
    product: [
      { label: "Overview", href: "#overview" },
      { label: "Pricing", href: "#pricing" },
      { label: "Marketplace", href: "#marketplace" },
      { label: "Features", href: "#features" }
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" }
    ],
    resources: [
      { label: "Help", href: "#help" },
      { label: "Sales", href: "#sales" },
      { label: "Advertise", href: "#advertise" },
      { label: "Privacy", href: "#privacy" }
    ]
  };

  const socialLinks = [
    {
      href: "https://twitter.com/cycls_ai",
      icon: Twitter,
      label: "Twitter"
    },
    {
      href: "https://www.linkedin.com/in/samiurrehman1/",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/cycls",
      icon: Github,
      label: "GitHub"
    }
  ];

  return (
    <footer className="relative border-t-2 border-white/10 py-16 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <GradientText
                as="span"
                className="flex items-center gap-2 text-2xl font-bold"
                gradient="from-blue-400 to-purple-400"
              >
                <img src="https://cycls.com/cycls.ico" alt="Cycls" className="w-5 h-5" />
                Cycls
              </GradientText>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Cycls is a delightful tool for creating and monetizing AI agents.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Columns */}
          <FooterColumn title="Product" links={footerSections.product} />
          <FooterColumn title="Company" links={footerSections.company} />
          <FooterColumn title="Resources" links={footerSections.resources} />
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © 2025 Cycls. Built in Riyadh, KSA
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Developed By: <a 
                  href="https://www.linkedin.com/in/samiurrehman1/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Sami ur Rehman
                </a>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms and Conditions
              </a>
              <a 
                href="#privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="flex mt-8 justify-center gap-2 items-center text-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <g clipPath="url(#:R6mumqdb:_clip0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.6716 5.85035L16.6453 0.918945H18.1053L15.94 4.99201C17.639 5.57349 18.8605 7.18428 18.8605 9.08035C18.8605 11.4663 16.9263 13.4005 14.5405 13.4005C12.1546 13.4005 10.2205 11.4663 10.2205 9.08035C10.2205 7.96714 10.6415 6.95226 11.333 6.1863H11.3328L11.3354 6.1837C11.4413 6.06657 11.5536 5.95527 11.6716 5.85035Z" fill="#B9B9B7" fillOpacity="0.7"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.92502 5.85035L6.89873 0.918945H8.35875L6.19343 4.99201C7.8924 5.57349 9.11388 7.18428 9.11388 9.08035C9.11388 11.4663 7.17975 13.4005 4.79388 13.4005C2.40801 13.4005 0.473877 11.4663 0.473877 9.08035C0.473877 7.96714 0.894925 6.95226 1.58645 6.1863H1.58618L1.5888 6.1837C1.69472 6.06657 1.80698 5.95527 1.92502 5.85035Z" fill="#B9B9B7" fillOpacity="0.7"></path>
              </g>
              <defs>
                <clipPath id=":R6mumqdb:_clip0">
                  <rect width="19" height="19" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <span className="text-lg font-serif italic text-[#B9B9B7]">
              Less is more.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
