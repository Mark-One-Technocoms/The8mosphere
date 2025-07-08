import { Link } from "react-router-dom";
import logo from "../assets/logo/8mosphere-logo.PNG";
import {
  footerContacts,
  footerQuickLinks,
  footerResources,
  socialMediaLinks,
} from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-black text-white px-4 sm:px-6 lg:px-8 shadow-inner-2xl">
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16">
        {/* Section 1: Brand Info */}
        <div className="md:col-span-1 text-center md:text-left">
          <h3 className="font-playfair text-3xl font-extrabold text-blue-300 mb-4 place-self-center drop-shadow-md">
            <Link to="/">
              <img
                className="h-10 sm:h-12 md:h-14"
                src={logo}
                alt="8mosphere Logo"
              />
            </Link>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs md:max-w-full mx-auto md:mx-0">
            Our cinematic AI turns your property into a feeling — using voice,
            sound, and style.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {socialMediaLinks.map((socialMediaLink) => (
              <Link
                to={socialMediaLink.to}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <socialMediaLink.icon className="size-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-gray-100">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-300 text-base">
            {footerQuickLinks.map((quickLink) => (
              <li>
                <Link
                  to={quickLink.to}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {quickLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Resources/Support */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-gray-100">
            Resources
          </h4>
          <ul className="space-y-3 text-gray-300 text-base">
            {footerResources.map((resource) => (
              <li>
                <a
                  href={resource.to}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-gray-100">
            Contact Us
          </h4>
          <div className="space-y-3 px-16 sm:px-0 text-gray-300 text-base not-italic">
            {footerContacts.map((contact) => (
              <Link
                to={contact.to}
                className="flex items-center justify-center md:justify-start text-gray-400 hover:text-blue-400 gap-3"
              >
                <contact.icon className="size-5 shrink-0" />
                {contact.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-2 border-gray-700 py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} 8MOSPHERE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
