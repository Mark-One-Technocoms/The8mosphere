import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Headset,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const navItems = [
  { name: "Home", to: "/" },
  {
    name: "Membership",
    to: "",
    items: [
      { name: "Members Experience", to: "/membership/request-access" },
      { name: "Qualifications", to: "/membership/qualifications" },
      { name: "Family Office Group", to: "/membership/family-office-group" },
      { name: "FAQ", to: "/membership/faq" },
    ],
  },
  { name: "8Voiced", to: "/8voiced" },
  {
    name: "Insights",
    to: "",
    items: [
      { name: "Blog", to: "/insights/blog" },
      { name: "Podcast", to: "/insights/podcast" },
      { name: "News", to: "/insights/news" },
      {
        name: "Asset Allocation Report",
        to: "/insights/asset-allocation-report",
      },
    ],
  },
  {
    name: "Locations",
    to: "",
    items: [
      { name: "Delhi", to: "/locations/delhi" },
      { name: "Mumbai", to: "/locations/mumbai" },
      { name: "Bangalore", to: "/locations/bangalore" },
    ],
  },
  { name: "Lead a Group", to: "/lead-a-group" },
  {
    name: "Login",
    to: "",
    items: [
      { name: "Member", to: "/login/member" },
      { name: "Member Candidate", to: "/login/member-candidate" },
    ],
  },
];

export const requestAccessFormFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
    icon: User,
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
    icon: User,
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "john.doe@example.com",
    icon: Mail,
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+91 12345-67890",
    icon: Phone,
    required: true,
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "Delhi",
    icon: MapPin,
    required: true,
  },
  {
    name: "primaryMarket",
    label: "Choose your primary 8MOSPHERE Market",
    type: "select",
    placeholder: "Select Location",
    options: [
      { value: "virtual", label: "Virtual" },
      { value: "delhi", label: "Delhi" },
      { value: "mumbai", label: "Mumbai" },
      { value: "bangalore", label: "Bangalore" },
    ],
    icon: Globe,
    required: true,
  },
  {
    name: "howHearAboutUs",
    label: "How Did You Hear About Us?",
    type: "select",
    placeholder: "How did you hear about 8MOSPHERE?",
    options: [
      { value: "chairReferral", label: "Chair Referral" },
      { value: "internetSearch", label: "Internet Search" },
      { value: "memberReferral", label: "Member Referral" },
      { value: "pressTV", label: "Press & TV" },
      { value: "socialMedia", label: "Social Media" },
      { value: "podcast", label: "Podcast" },
      { value: "8mosphereStaff", label: "8MOSPHERE Staff" },
    ],
    icon: Headset,
    required: true,
  },
  {
    name: "goalsHelp",
    label: "How can 8MOSPHERE help you achieve your goals?",
    type: "textarea",
    placeholder:
      "Describe your goals and how you believe 8MOSPHERE can assist.",
    icon: MessageSquare,
  },
  {
    name: "netWorth",
    label:
      "Where do you currently see yourself in terms of qualifying net worth, excluding personal use assets (USD or equivalent in local currency)?",
    type: "radio",
    options: [
      { value: "20MM-49MM", label: "$20MM - 49MM" },
      { value: "50MM-99MM", label: "$50MM - 99MM" },
      { value: "100MM-199MM", label: "$100MM - 199MM" },
      { value: "200MM+", label: "$200MM +" },
    ],
    required: true,
  },
];

export const socialMediaLinks = [
  { label: "facebook", to: "#", icon: Facebook },
  { label: "instagram", to: "#", icon: Instagram },
  { label: "linkedin", to: "#", icon: Linkedin },
  { label: "twitter", to: "#", icon: Twitter },
];

export const footerQuickLinks = [
  { label: "Membership Inquiry", to: "/membership/request-access" },
  { label: "Qualifications", to: "#" },
  { label: "What is 8Voiced?", to: "/8voiced" },
  { label: "Family Office Groups", to: "#" },
  { label: "Contact Us", to: "/contact" },
];

export const footerResources = [
  { label: "Blog", to: "#" },
  { label: "Family Office Groups", to: "#" },
  { label: "FAQs", to: "#" },
  { label: "Privacy Policy", to: "#" },
  { label: "Terms of Service", to: "#" },
];

export const footerContacts = [
  {
    label:
      "D-3/3, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020",
    to: "",
    icon: MapPin,
  },
  { label: "info@8mosphere.com", to: "mailto:info@8mosphere.com", icon: Mail },
  { label: "+91-11-41611155", to: "tel:+91-11-41611155", icon: Phone },
];
