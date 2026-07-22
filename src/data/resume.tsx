import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Nnonye Nwagwu",
  initials: "NN",
  url: "https://github.com/nononwagwu",
  location: "Buffalo, NY",
  locationLink: "",
  description:
    "Computer Science student building machine learning systems, scientific computing tools, and full-stack applications.",
  summary:
    "I'm a Computer Science student at Canisius University interested in machine learning, software engineering, and scientific computing. My current work includes applying neural networks to particle physics research at Jefferson Lab, building machine learning systems for real-world datasets, and developing full-stack applications.",

  avatarUrl: "/me.png",

  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: null },
    { name: "Java", icon: Java },
    { name: "C++", icon: null },
    { name: "SQL", icon: null },

    { name: "PyTorch", icon: null },
    { name: "scikit-learn", icon: null },
    { name: "pandas", icon: null },
    { name: "NumPy", icon: null },
    { name: "XGBoost", icon: null },
    { name: "ROOT", icon: null },

    { name: "React", icon: ReactLight },
    { name: "FastAPI", icon: null },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: null },
    { name: "MongoDB", icon: null },
    { name: "SQLite", icon: null },
    { name: "Tailwind CSS", icon: null },
    { name: "Streamlit", icon: null },

    { name: "Git", icon: null },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "nwagwunono@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nononwagwu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nnonye-nwagwu",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nwagwunono@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Jefferson Lab",
      href: "https://www.jlab.org/",
      badges: [],
      location: "Newport News, VA",
      title: "Machine Learning Research Assistant – Particle Physics",
      logoUrl: "/jlab.png",
      start: "Jun. 2026",
      end: "Present",
      description:
        "Implementing the OmniFold machine learning framework for unbinned unfolding of meson production data using Python and ROOT. Building data pipelines that transform detector-level and Monte Carlo simulation data into neural-network-ready datasets for iterative training and reweighting.",
    },
    {
      company: "AI4ALL",
      href: "https://ai-4-all.org/",
      badges: [],
      location: "Remote",
      title: "AI4ALL Fellow",
      logoUrl: "/ai4all.png",
      start: "Jun. 2026",
      end: "Present",
      description:
        "Developed StockLens, a machine learning-powered financial analysis project using 20,000+ company-year observations and 200+ financial indicators. Built preprocessing pipelines, benchmarked regression models with 5-fold cross-validation, and developed interactive Streamlit dashboards to communicate model predictions and performance.",
    },
    {
      company: "Brown University & Google Research",
      href: "https://www.brown.edu/",
      badges: [],
      location: "Remote",
      title: "Machine Learning Research Assistant – Cardiovascular Risk Modeling",
      logoUrl: "/brown.png",
      start: "Jan. 2026",
      end: "Apr. 2026",
      description:
        "Built and evaluated end-to-end machine learning pipelines for Logistic Regression, SVM, Random Forest, and XGBoost on a 3,000-patient cardiovascular dataset. Applied preprocessing, hyperparameter optimization, and model evaluation using ROC-AUC, precision, recall, and F1-score.",
    },
  ],

  education: [
    {
      school: "Canisius University",
      href: "https://www.canisius.edu/",
      degree: "B.S. Computer Science, Minor in Business",
      logoUrl: "/canisius.svg",
      start: "2024",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "StockLens",
      href: "https://stocklens-ai.streamlit.app/",
      dates: "2026",
      active: true,
      description:
        "A machine learning-powered financial analysis application built on 20,000+ company-year observations and 200+ financial indicators. Benchmarked regression models using 5-fold cross-validation and built an interactive Streamlit dashboard for exploring predictions and financial trends.",
      technologies: [
        "Python",
        "pandas",
        "scikit-learn",
        "Streamlit",
        "Machine Learning",
      ],
      links: [
        {
          type: "Website",
          href: "https://stocklens-ai.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nononwagwu/StockLens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/StockLens.png",
      video: "",
    },

    {
      title: "Igbo2Learn",
      href: "https://igbo2learn.netlify.app/",
      dates: "Jun. 2025 - Nov. 2025",
      active: true,
      description:
        "A full-stack language and cultural learning platform featuring beginner-friendly lessons, interactive quizzes, Igbo proverbs, and XP-based progress tracking.",
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://igbo2learn.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nononwagwu/igbo2learn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/igbo2learn.png",
      video: "",
    },

    {
      title: "Heart Disease Prediction",
      href: "https://github.com/nononwagwu/Heart_disease-ml",
      dates: "2026",
      active: true,
      description:
        "A machine learning project exploring cardiovascular risk prediction using a 3,000-patient dataset. Built and evaluated classification pipelines using Logistic Regression, SVM, Random Forest, and XGBoost with hyperparameter optimization and comprehensive model evaluation.",
      technologies: [
        "Python",
        "pandas",
        "scikit-learn",
        "XGBoost",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nononwagwu/Heart_disease-ml",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/heart-disease.png",
      video: "",
    },

    {
      title: "AuditAI",
      href: "#",
      dates: "Mar. 2026 - Jul. 2026",
      active: true,
      description:
        "A full-stack financial transaction review platform for automated risk scoring, compliance review, and AI-assisted audit report generation.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "SQLite",
        "LLM API",
      ],
      links: [],
      image: "/auditai.png",
      video: "",
    },
  ],


} as const;