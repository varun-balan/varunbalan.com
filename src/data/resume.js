// Resume content as structured data, separated from presentation.
// To update the resume, edit this file only — the Resume component renders it.
// NOTE: contact PII (phone, email) is intentionally omitted from the public
// page. Contact routes through LinkedIn; the full PDF lives on S3.

const resume = {
  name: "Varun Balan",
  location: "Arlington, VA",
  lastUpdated: "October 2025",
  links: {
    linkedin: "https://www.linkedin.com/in/varunbalan/",
    github: "https://github.com/varun-balan",
  },
  // Full downloadable resume (kept on S3, may include contact details).
  pdfUrl:
    "https://varun-balan-resume-personal-website.s3.amazonaws.com/Varun-Balan-Resume.pdf",

  profile: [
    "Software Engineer at Capital One specializing in cloud-native data and control platforms for anti-money-laundering (AML) initiatives.",
    "Recognized for turning ambiguous, high-stakes requirements into scalable solutions, streamlining engineering processes, and driving cross-functional alignment with product, compliance, and business teams.",
    "Holds a B.S. in Computer Engineering & Computer Sciences (Distinction; GPA 3.9/4.0).",
    "Committed to growing into engineering leadership within technology-driven financial services.",
  ],

  experience: [
    {
      company: "Capital One",
      role: "Software Engineer (Full-Time)",
      location: "McLean, VA",
      date: "Aug 2024 – Present",
      summary:
        "AML data/control platforms; cross-functional delivery with product, compliance, and engineering.",
      bullets: [
        "Delivered multiple intents end-to-end, automating quarterly manual tasks and reducing feature effort by 80% (5 → 1 story points) through regression test automation and process improvements.",
        "Championed a government-flagged issue as intent owner: defined roadmap, aligned stakeholders, tracked milestones, escalated risks early, and provided executive-ready updates until resolution.",
        "Spearheaded cross-team delivery for a new audit control and a regulatory API design; clarified acceptance criteria, mapped system dependencies, and coordinated implementation across multiple teams.",
      ],
    },
    {
      company: "Capital One",
      role: "Software Engineering Intern",
      location: "McLean, VA",
      date: "Jun 2023 – Aug 2023",
      bullets: [
        "Built a multi-region Amazon ECS environment via internal IaC to meet a critical enterprise deadline.",
        "Migrated two production apps from Kubernetes Ops to ECS → 3× faster deployments and ~80% infrastructure cost savings.",
        "Automated failover mechanisms, which improved system resilience and reduced manual operational overhead.",
      ],
    },
    {
      company: "Raven Software (Activision Blizzard)",
      role: "Software Engineering Intern",
      location: "Middleton, WI",
      date: "May 2022 – Aug 2022",
      bullets: [
        "Resolved 20+ live Jira issues in C++/Lua for Call of Duty: Warzone, reducing bug backlog in time-critical live operations.",
        "Built and shipped 6 UI widgets used in a major season update, collaborating with design and gameplay teams.",
      ],
    },
    {
      company: "Think360.ai",
      role: "Data Science Intern",
      location: "Mumbai, India",
      date: "Jun 2019 – Aug 2019",
      bullets: [
        "Built a Python data-visualization application using AWS S3 and SQL, accelerating analytics workflows.",
        "Conducted a logistic-regression variable-importance study; pruning low-value tables, which reduced storage costs by ~30%.",
      ],
    },
    {
      company: "Edulastic (Pear Assessment)",
      role: "Programmer Intern",
      location: "Remote",
      date: "Jun 2018 – Aug 2018",
      bullets: [
        "Automated REST-API updates for marketing datasets (Python/Pandas), enabling outreach to new users with zero manual effort.",
      ],
    },
  ],

  research: [
    {
      company: "WEMPEC, UW–Madison",
      role: "Undergraduate Research Assistant",
      date: "Jan 2022 – Nov 2024",
      bullets: [
        "Built a Python/Flask dashboard on Azure App Service for secure remote experiments on micro-grid hardware.",
        "Implemented an Azure IoT Hub → Blob Storage pipeline for scalable and secure experiment data ingestion.",
        "Co-authored “A Cloud-Based Solution for Remote Access to a Microgrid Experimental Platform”, presented at IEEE PEDES 2024.",
        "Recognized contributor for “Picogrid: An experimental platform for prosumer microgrids” for hardware assembly and experimental runs.",
      ],
    },
    {
      company: "Nanotechnology Lab, UW–Madison",
      role: "Undergraduate Research Assistant",
      date: "Sep 2021 – Dec 2021",
      bullets: [
        "Modeled spectroscopic data from brain and pancreatic tissue (NumPy/MATLAB).",
        "Applied OpenCV-based image registration to improve post-experiment comparative analysis.",
      ],
    },
  ],

  education: [
    {
      school: "Georgetown University",
      location: "Washington, DC",
      date: "Expected May 2029",
      degree: "Part-time MBA",
    },
    {
      school: "University of Wisconsin–Madison",
      location: "Madison, WI",
      date: "May 2024",
      degree: "B.S., Computer Engineering & Computer Sciences (Double Major)",
      detail: "GPA: 3.9/4.0",
      bullets: [
        "Graduated with Distinction, College of Engineering Dean’s Honors List (all semesters).",
        "Relevant coursework: Operating Systems, Algorithms, Computer Networks, Databases, Big Data Systems, Artificial Intelligence, Applied NLP.",
      ],
    },
    {
      school: "Overseas Family School",
      location: "Singapore",
      date: "June 2020",
      degree: "IB Diploma",
      detail: "Score: 43/45",
      bullets: ["Subjects: HL: Mathematics, Physics, Chemistry; SL: Economics, French, English."],
    },
  ],

  leadership: [
    {
      company: "TOUCH Community Services",
      role: "Volunteer Tutor",
      location: "Singapore",
      date: "Mar 2018 – Feb 2021",
      bullets: [
        "Delivered weekly Math & English tutoring to 10 students from low-income/single-parent families; tracked measurable grade improvements (e.g., C → B within one academic year).",
        "Created onboarding guides for new volunteers, cutting ramp-up time by ~25% and improving tutoring consistency.",
      ],
    },
  ],

  awards: [
    "Albert A. Radtke Scholarship Fund",
    "Claude & Dora Richardson Engineering Scholarship Fund",
    "ECE Undergraduate Scholarship in Honor of Retiring ECE Faculty",
  ],

  certifications: [
    "AWS Certified Solutions Architect — Associate (issued Apr 2025)",
    "Selected learning: HarvardX Data Science (2020); Stanford Online Machine Learning (2019); MITx Computational Thinking Using Python (2018); AWS Building Modern Java Applications on AWS (2021)",
  ],

  skills: {
    Programming: ["Java", "Python", "SQL", "C++"],
    "Cloud & Infra": ["AWS", "Azure", "Terraform"],
    "Data Engineering": ["Apache Spark", "Kafka"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB"],
    "Data Science / ML": ["Pandas", "NumPy", "Scikit-Learn", "OpenCV"],
  },

  languages: [
    "English (Fluent)",
    "French (Advanced)",
    "Hindi (Professional Working — read & write)",
    "Tamil (Conversational)",
  ],
};

export default resume;
