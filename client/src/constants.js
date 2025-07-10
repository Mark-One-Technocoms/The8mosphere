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
  Camera,
  Award,
  Monitor,
  Users,
  Heart,
  Lightbulb,
  Home,
} from "lucide-react";
import OurWorkImage1 from "./assets/images/our-work-1.jpg";
import OurWorkImage2 from "./assets/images/our-work-2.jpg";
import OurWorkImage3 from "./assets/images/our-work-3.jpg";
import OurWorkImage4 from "./assets/images/our-work-4.jpg";

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
  { id: 1, label: "facebook", to: "#", icon: Facebook },
  { id: 2, label: "instagram", to: "#", icon: Instagram },
  { id: 3, label: "linkedin", to: "#", icon: Linkedin },
  { id: 4, label: "twitter", to: "#", icon: Twitter },
];

export const footerQuickLinks = [
  { id: 1, label: "Membership Inquiry", to: "/membership/request-access" },
  { id: 2, label: "Qualifications", to: "#" },
  { id: 3, label: "What is 8Voiced?", to: "/8voiced" },
  { id: 4, label: "Family Office Groups", to: "#" },
  { id: 5, label: "Contact Us", to: "/contact" },
];

export const footerResources = [
  { id: 1, label: "Blog", to: "#" },
  { id: 2, label: "Family Office Groups", to: "#" },
  { id: 3, label: "FAQs", to: "#" },
  { id: 4, label: "Privacy Policy", to: "#" },
  { id: 5, label: "Terms of Service", to: "#" },
];

export const footerContacts = [
  {
    id: 1,
    label:
      "D-3/3, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020",
    to: "",
    icon: MapPin,
  },
  {
    id: 2,
    label: "info@8mosphere.com",
    to: "mailto:info@8mosphere.com",
    icon: Mail,
  },
  { id: 3, label: "+91-11-41611155", to: "tel:+91-11-41611155", icon: Phone },
];

export const serviceSnapshorts = [
  {
    title: "Cinematic Campaigns",
    description: "Editorial-style photo & video shoots",
    icon: Camera,
  },
  {
    title: "Brand Decks",
    description: "Story-driven investor and buyer presentations",
    icon: Award,
  },
  {
    title: "Digital Launch Kits",
    description: "Instagram-ready, built for buzz",
    icon: Monitor,
  },
  {
    title: "Private Events",
    description: "Discreet showings, influencer showcases",
    icon: Users,
  },
  {
    title: "Styling & Scenting",
    description: "Visual and sensory curation",
    icon: Heart,
  },
  {
    title: "ff-Market Pitching",
    description: "Quiet launches to our exclusive network",
    icon: Lightbulb,
  },
];

export const selectedProjects = [
  {
    title: "Midnight Marble",
    location: "LA Hills penthouse",
    image: OurWorkImage1,
  },
  {
    title: "Warm Modern",
    location: "London townhouse",
    image: OurWorkImage2,
  },
  {
    title: "Ocean Whisper",
    location: "Ibiza cliff villa",
    image: OurWorkImage3,
  },
  {
    title: "Desert Soul",
    location: "Dubai private compound",
    image: OurWorkImage4,
  },
];

export const fitCriteria = [
  "Launching a one-of-a-kind listing",
  "Building a luxury development",
  "Marketing to discreet, high-end clients",
];

export const formFields = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
    icon: User,
    component: "input",
    rules: {
      required: "Full Name is required",
      minLength: {
        value: 3,
        message: "Full Name must be at least 3 characters long",
      },
      maxLength: {
        value: 100,
        message: "Full Name must not exceed 100 characters",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "john.doe@example.com",
    type: "email",
    icon: Mail,
    component: "input",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "+91 12345-67890",
    type: "tel",
    icon: Phone,
    component: "input",
    rules: {},
  },
  {
    name: "propertyType",
    label: "Property Type",
    placeholder: "e.g., Penthouse, Villa, Development",
    type: "text",
    icon: Home,
    component: "input",
    rules: {
      required: "Property Type must be specified",
      minLength: {
        value: 2,
        message: "Property Type must be at least 2 characters",
      },
    },
  },
  {
    name: "vibeAimingFor",
    label: "What vibe are you aiming for?",
    placeholder:
      "Describe the mood, style, or feeling you envision for your property's marketing",
    icon: MessageSquare,
    component: "textarea",
    rows: 5,
    rules: {
      required: "Please describe the vibe you are aiming for",
      minLength: {
        value: 10,
        message: "Please describe the vibe in at least 10 characters",
      },
    },
  },
];
