import { Network, Code2, ShieldCheck, Cpu, Cloud, GraduationCap, Palette, Globe, Megaphone, Camera, type LucideIcon } from "lucide-react";
import svcNetwork from "@/assets/svc-network.jpg";
import svcSoftware from "@/assets/svc-software.jpg";
import svcSecurity from "@/assets/svc-security.jpg";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  long: string;
  deliverables: string[];
  img?: string;
  tag: string;
}

export const services: Service[] = [
  {
    slug: "network-infrastructure",
    icon: Network,
    title: "Network Infrastructure",
    desc: "Enterprise LAN/WAN, fiber backbones, VSAT and structured cabling engineered for uptime.",
    long: "We design and deploy resilient enterprise networks — from campus fiber backbones and structured cabling to VSAT links, point-to-point radio and high-density Wi-Fi. Every rollout is documented, labelled and tested to international standards.",
    deliverables: ["Site survey & low-level design", "Structured cabling (Cat6/6a, OS2 fiber)", "Core/distribution/access switching", "Enterprise Wi-Fi & WLAN controllers", "VSAT & last-mile connectivity"],
    img: svcNetwork,
    tag: "01",
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    desc: "Custom web platforms, mobile apps and back-office systems that automate the messy parts.",
    long: "From revenue collection portals to internal dashboards and customer-facing apps, we ship production-grade software with clean architecture, secure APIs and the kind of UX your team will actually use.",
    deliverables: ["Web & mobile applications", "Internal dashboards & ERPs", "API design & integrations", "Payment & USSD integrations", "QA, deployment & maintenance"],
    img: svcSoftware,
    tag: "02",
  },
  {
    slug: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Vulnerability assessments, endpoint protection, firewall hardening and incident response.",
    long: "We harden your perimeter and your people. Penetration testing, SIEM, endpoint detection, awareness training and a 24/7 incident response retainer keep your data sovereign and your operations running.",
    deliverables: ["Vulnerability & penetration testing", "Firewall & perimeter hardening", "Endpoint detection & response (EDR)", "SOC / SIEM implementation", "Security awareness training"],
    img: svcSecurity,
    tag: "03",
  },
  {
    slug: "project-sites-web",
    icon: Globe,
    title: "Project Sites & Web",
    desc: "High-converting marketing sites, microsites and e-commerce builds — fast, SEO-ready.",
    long: "Launch campaigns, real-estate developments and product lines with bespoke microsites engineered for speed, SEO and conversion. Built on modern stacks, hosted globally, handed over with full analytics.",
    deliverables: ["Marketing sites & microsites", "E-commerce (Shopify / custom)", "CMS integration", "SEO & Core Web Vitals", "Analytics & conversion tracking"],
    tag: "04",
  },
  {
    slug: "branding-identity",
    icon: Palette,
    title: "Branding & Identity",
    desc: "Logo systems, brand guidelines, visual identity and naming for organizations to remember.",
    long: "We craft brand systems with conviction — research, naming, logo design, typography, colour, motion and a guideline document your team can actually apply across every channel.",
    deliverables: ["Brand strategy & positioning", "Naming & verbal identity", "Logo system & visual identity", "Brand guidelines (.pdf + Figma)", "Stationery, decks & launch assets"],
    tag: "05",
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Social, SEO, content and paid media that turn attention into measurable revenue.",
    long: "Strategy-first digital marketing — paid social, search, content engines and influencer partnerships measured against pipeline and revenue, not vanity metrics.",
    deliverables: ["Paid social & search (Meta, Google, TikTok)", "SEO & content strategy", "Email & CRM automation", "Influencer & partnership campaigns", "Monthly performance reporting"],
    tag: "06",
  },
  {
    slug: "creative-media",
    icon: Camera,
    title: "Creative & Media Production",
    desc: "Photography, videography, motion graphics and product shoots for brands that look the part.",
    long: "In-house production for brands that need polished assets at scale — commercial photography, video, motion graphics and editorial direction shot in Kano or anywhere we're needed.",
    deliverables: ["Brand & product photography", "Commercial videography", "Motion graphics & animation", "Editorial direction & styling", "Post-production & colour"],
    tag: "07",
  },
  {
    slug: "hardware-procurement",
    icon: Cpu,
    title: "Hardware & Procurement",
    desc: "Servers, workstations, networking gear and CCTV systems — sourced and deployed at scale.",
    long: "OEM-authorized procurement, staging and deployment of servers, workstations, networking and surveillance hardware — with warranty management and lifecycle planning baked in.",
    deliverables: ["Servers & storage", "Workstations & peripherals", "Networking & wireless equipment", "CCTV & access control", "Warranty & lifecycle management"],
    tag: "08",
  },
  {
    slug: "cloud-managed-it",
    icon: Cloud,
    title: "Cloud & Managed IT",
    desc: "Migration, hosting, backups and 24/7 managed services so your team can focus.",
    long: "We migrate, manage and monitor your cloud — AWS, Azure, GCP or hybrid. Patch management, backups, monitoring and a single SLA across infrastructure and applications.",
    deliverables: ["Cloud migration & architecture", "Backup & disaster recovery", "24/7 monitoring & patching", "Helpdesk & user support", "Cost optimisation"],
    tag: "09",
  },
  {
    slug: "ict-training",
    icon: GraduationCap,
    title: "ICT Training",
    desc: "Hands-on programs in cybersecurity, networking, software and digital skills.",
    long: "Cohort-based and corporate training delivered at our Kano facility or on-site — Cisco, CompTIA, ethical hacking, full-stack development and digital skills for the next generation.",
    deliverables: ["Cisco & CompTIA tracks", "Ethical hacking & security", "Full-stack web development", "Corporate upskilling programs", "Certificates & job placement"],
    tag: "10",
  },
];

export const caseStudies = [
  { slug: "campus-fiber", tag: "Network Infrastructure", title: "Campus-Wide Fiber Rollout", client: "Tertiary Institution, Kano", outcome: "30km fiber, zero downtime cutover", year: "2024", summary: "End-to-end fiber backbone connecting 22 buildings, 3 data closets and 1,400+ access points — delivered with zero service interruption to active users.", color: "from-primary/30 to-transparent" },
  { slug: "revenue-platform", tag: "Software", title: "Revenue Collection Platform", client: "State Government Agency", outcome: "+220% collection efficiency", year: "2024", summary: "USSD, web and POS-enabled revenue platform integrated with state treasury — replacing manual receipt books with real-time reconciliation.", color: "from-secondary/30 to-transparent" },
  { slug: "soc-implementation", tag: "Cybersecurity", title: "SOC Implementation", client: "Tier-2 Financial Institution", outcome: "MTTR reduced by 65%", year: "2023", summary: "24/7 Security Operations Centre with SIEM, EDR and incident playbooks — slashing mean-time-to-respond and passing CBN audit on first attempt.", color: "from-primary/30 to-transparent" },
  { slug: "fintech-identity", tag: "Branding", title: "Fintech Identity System", client: "Lagos-based Fintech", outcome: "Full rebrand in 6 weeks", year: "2025", summary: "Strategy, naming, logo system and 80-page brand guidelines launched alongside a Series-A announcement.", color: "from-secondary/30 to-transparent" },
  { slug: "real-estate-launch", tag: "Project Site", title: "Real Estate Launch Microsite", client: "Property Developer, Abuja", outcome: "1.2k qualified leads in 30 days", year: "2025", summary: "Conversion-engineered launch microsite with 3D walkthroughs, financing calculator and CRM integration — sold-out phase one in 45 days.", color: "from-primary/30 to-transparent" },
  { slug: "edtech-growth", tag: "Digital Marketing", title: "EdTech Growth Campaign", client: "Pan-African EdTech", outcome: "4.3x ROAS across paid channels", year: "2024", summary: "Full-funnel paid social, search and content engine — scaled monthly enrolments 5x while reducing cost-per-acquisition by 38%.", color: "from-secondary/30 to-transparent" },
];
