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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
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
    responseTime: ""
  },
  
  
  // Add more services as needed
]; 