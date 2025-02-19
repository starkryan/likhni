export interface Service {
  responseTime: string;
  id: string;
  title: string;
  description: string;
  url: string;
  category: "government" | "banking" | "utilities" | "travel" | "education" | "healthcare" | "business";
  icon: string;
  rating: number;
  usersCount: string;
  lastUpdated: string;
  tags: string[];
  features?: string[];
  status?: "operational" | "maintenance" | "issues";
  verifiedBy?: string[];
}

export const services: Service[] = [
  {
    id: "aadhar-card",
    title: "Aadhar Card",
    description: "Apply for new Aadhar card or update existing one",
    url: "https://uidai.gov.in/",
    category: "government",
    icon: "IdCard",
    rating: 4.8,
    usersCount: "500M+",
    lastUpdated: "Real-time",
    tags: ["Official", "Secure", "24/7"],
    status: "operational",
    verifiedBy: ["UIDAI"],
    responseTime: "",
    features: [
      "Online Aadhar Card Application",
      "Biometric Update",
      "Address Change",
      "Download E-Aadhar",
      "Check Update Status"
    ]
  },
  {
    id: "pan-card",
    title: "PAN Card",
    description: "Apply for new PAN card or corrections",
    url: "https://www.incometax.gov.in/",
    category: "government",
    icon: "CreditCard",
    rating: 4.9,
    usersCount: "100M+",
    lastUpdated: "Real-time",
    tags: ["Official", "Secure"],
    status: "operational",
    verifiedBy: ["Income Tax Department"],
    responseTime: "",
    features: [
      "New PAN Card Application",
      "Correction/Update PAN Details",
      "Track Application Status",
      "Download e-PAN",
      "Link PAN with Aadhar"
    ]
  },
  {
    id: "railway-booking",
    title: "Railway Booking (IRCTC)",
    description: "Book train tickets and check PNR status",
    url: "https://www.irctc.co.in/",
    category: "travel",
    icon: "Train",
    rating: 4.7,
    usersCount: "2M+",
    lastUpdated: "Updated daily",
    tags: ["Real-time", "Free"],
    responseTime: "",
    features: [
      "Book Train Tickets",
      "Check PNR Status",
      "Cancel Tickets",
      "Track Booking Status",
      "Download Tickets"
    ]
  },
  {
    id: "passport-renewal",
    title: "Passport Renewal",
    description: "Easily renew your passport online with our streamlined digital service. Track your application status in real-time.",
    url: "https://passport.gov.in/",
    category: "government",
    icon: "Passport",
    rating: 4.8,
    usersCount: "500k+",
    lastUpdated: "Updated daily",
    tags: ["Official", "Secure", "24/7"],
    responseTime: "",
    features: [
      "Online Passport Renewal",
      "Track Application Status",
      "Download Passport Status",
      "Link Aadhar with Passport"
    ]
  },
  {
    id: "digital-id-verification",
    title: "Digital ID Verification",
    description: "Verify your identity online for government services using secure digital authentication.",
    url: "https://id.gov.in/",
    category: "government",
    icon: "Fingerprint",
    rating: 4.9,
    usersCount: "1M+",
    lastUpdated: "Updated daily",
    tags: ["Official", "Secure"],
    responseTime: "",
    features: [
      "Digital ID Verification",
      "Government Services",
      "Secure Authentication",
      "Real-time Status"
    ]
  },
  {
    id: "flight-tracker",
    title: "Flight Tracker",
    description: "Real-time flight tracking with detailed information about delays, gates, and weather conditions.",
    url: "https://www.flightradar24.com/",
    category: "travel",
    icon: "Plane",
    rating: 4.7,
    usersCount: "2M+",
    lastUpdated: "Updated daily",
    tags: ["Real-time", "Free"],
    responseTime: "",
    features: [
      "Flight Tracking",
      "Delay Information",
      "Gate Changes",
      "Weather Updates"
    ]
  },
  {
    id: "smart-energy-monitor",
    title: "Smart Energy Monitor",
    description: "Monitor and optimize your energy usage in real-time. Get personalized savings recommendations.",
    url: "https://www.energymonitor.com/",
    category: "utilities",
    icon: "Zap",
    rating: 4.6,
    usersCount: "300k+",
    lastUpdated: "Updated daily",
    tags: ["Smart Home", "Savings"],
    responseTime: "",
    features: [
      "Energy Monitoring",
      "Savings Recommendations",
      "Real-time Alerts",
      "Usage History"
    ]
  },
  {
    id: "digital-banking",
    title: "Digital Banking",
    description: "Secure online banking with advanced features like budgeting tools and investment tracking.",
    url: "https://www.bankbazaar.com/",
    category: "banking",
    icon: "Wallet",
    rating: 4.9,
    usersCount: "5M+",
    lastUpdated: "Updated daily",
    tags: ["Secure", "24/7"],
    responseTime: "",
    features: [
      "Online Banking",
      "Budgeting Tools",
      "Investment Tracking",
      "Secure Transactions"
    ]
  },
  {
    id: "electricity-bill-payment",
    title: "Electricity Bill Payment",
    description: "Pay your electricity bill conveniently online with our secure and user-friendly service.",
    url: "https://www.paytm.com/electricity-bill-payment/",
    category: "utilities",
    icon: "Zap",
    rating: 4.8,
    usersCount: "1M+",
    lastUpdated: "Updated daily",
    tags: ["Secure", "24/7"],
    responseTime: "",
    features: [
      "Electricity Bill Payment",
      "Bill History",
      "Payment Reminders",
      "Payment History"
    ]
  },
  {
    id: "water-bill-payment",
    title: "Water Bill Payment",
    description: "Pay your water bill conveniently online with our secure and user-friendly service.",
    url: "https://www.paytm.com/water-bill-payment/",
    category: "utilities",
    icon: "Zap",
    rating: 4.8,
    usersCount: "1M+",
    lastUpdated: "Updated daily",
    tags: ["Secure", "24/7"],
    responseTime: "",
    features: [
      "Water Bill Payment",
      "Bill History",
      "Payment Reminders",
      "Payment History"
    ]
  },
  {
    id: "driving-license",
    title: "Driving License",
    description: "Apply for new driving license or renew existing one",
    url: "https://parivahan.gov.in/",
    category: "government",
    icon: "Car",
    rating: 4.7,
    usersCount: "50M+",
    lastUpdated: "Real-time",
    tags: ["Official", "Secure", "24/7"],
    status: "operational",
    verifiedBy: ["Ministry of Road Transport"],
    responseTime: "",
    features: [
      "New License Application",
      "License Renewal",
      "Duplicate License",
      "International Driving Permit",
      "Track Application Status"
    ]
  },
  {
    id: "voter-id",
    title: "Voter ID Card",
    description: "Register as a voter or update your voter ID details",
    url: "https://www.nvsp.in/",
    category: "government",
    icon: "Vote",
    rating: 4.6,
    usersCount: "100M+",
    lastUpdated: "Daily",
    tags: ["Official", "Free", "Secure"],
    status: "operational",
    verifiedBy: ["Election Commission of India"],
    responseTime: "",
    features: [
      "New Voter Registration",
      "Update Voter Details",
      "Download e-EPIC",
      "Search Name in Voter List",
      "Track Application Status"
    ]
  },
  {
    id: "gst-filing",
    title: "GST Filing",
    description: "File GST returns and manage GST compliance",
    url: "https://www.gst.gov.in/",
    category: "government",
    icon: "Receipt",
    rating: 4.8,
    usersCount: "20M+",
    lastUpdated: "Real-time",
    tags: ["Official", "Secure", "Tax"],
    status: "operational",
    verifiedBy: ["GST Council"],
    responseTime: "",
    features: [
      "File GST Returns",
      "GST Registration",
      "View Filed Returns",
      "Pay GST",
      "Track GST Credits"
    ]
  },
  {
    id: "property-registration",
    title: "Property Registration",
    description: "Online property registration and document verification",
    url: "https://ngdrs.gov.in/",
    category: "government",
    icon: "Building",
    rating: 4.5,
    usersCount: "1M+",
    lastUpdated: "Daily",
    tags: ["Official", "Secure"],
    status: "operational",
    verifiedBy: ["Ministry of Housing"],
    responseTime: "",
    features: [
      "Property Registration",
      "Document Verification",
      "Fee Payment",
      "Track Registration Status",
      "Download Documents"
    ]
  },
  
  
  // Add more services as needed
]; 