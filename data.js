/**
 * ==============================================================================
 * TATA CAPITAL LEARNING & DEVELOPMENT - COMPREHENSIVE DUMMY DATA STORE
 * ==============================================================================
 * This file contains ALL dummy data for the portal.
 * It is fully decoupled from the UI logic so you can easily edit, add, or customize
 * training titles, businesses, team members, management profiles, and metrics.
 * 
 * NOTE FOR BEGINNERS:
 * - Arrays look like [item1, item2, ...]
 * - Objects look like { key: value, ... }
 * - All names and details are realistic placeholders for an NBFC lending institution.
 * ==============================================================================
 */

const TC_DATA = {
  // ----------------------------------------------------------------------------
  // 1. BUSINESS VERTICALS (9 Sectors as per requirements)
  // ----------------------------------------------------------------------------
  businesses: [
    {
      id: "retail",
      name: "Retail Finance (Consumer Finance)",
      shortName: "Retail Finance",
      icon: "fa-solid fa-users-line",
      description: "Personal loans, consumer durable finance, two-wheeler loans, used car financing, and digital retail lending."
    },
    {
      id: "housing",
      name: "Housing Finance",
      shortName: "Housing Finance",
      icon: "fa-solid fa-house-chimney",
      description: "Home loans, affordable housing loans, Loan Against Property (LAP), and construction finance for developers."
    },
    {
      id: "motor",
      name: "Motor Finance",
      shortName: "Motor Finance",
      icon: "fa-solid fa-truck-front",
      description: "Commercial vehicle financing, used commercial vehicles, construction equipment, and fleet funding."
    },
    {
      id: "microfinance",
      name: "Microfinance",
      shortName: "Microfinance",
      icon: "fa-solid fa-hand-holding-dollar",
      description: "Joint Liability Group (JLG) lending, rural micro-enterprises, women empowerment credit, and financial inclusion."
    },
    {
      id: "corporate_sme",
      name: "Corporate & SME Finance",
      shortName: "Corporate & SME",
      icon: "fa-solid fa-building-columns",
      description: "Working capital loans, term lending, channel financing, invoice discounting, and customized corporate solutions."
    },
    {
      id: "wealth",
      name: "Wealth",
      shortName: "Wealth Management",
      icon: "fa-solid fa-chart-line",
      description: "Portfolio management services, mutual funds, structured products, Sovereign Gold Bonds, and family office advisory."
    },
    {
      id: "dsmg",
      name: "DSMG",
      shortName: "DSMG (Direct Sales)",
      icon: "fa-solid fa-bullhorn",
      description: "Direct Sales & Marketing Group: outbound customer acquisition, partner distribution, digital cross-sell, and tele-calling."
    },
    {
      id: "cleantech",
      name: "Cleantech",
      shortName: "Cleantech Finance",
      icon: "fa-solid fa-leaf",
      description: "Solar rooftop project financing, energy efficiency loans, electric vehicle (EV) commercial fleets, and sustainability green bonds."
    },
    {
      id: "corp_functions",
      name: "Corporate Functions",
      shortName: "Corporate Functions",
      icon: "fa-solid fa-briefcase",
      description: "Enterprise Risk, Internal Audit, Legal & Secretarial, Credit Operations, IT & Infosec, Treasury, and Human Resources."
    }
  ],

  // ----------------------------------------------------------------------------
  // 2. COMPANY OVERVIEW, STATS, TIMELINE & LEADERSHIP
  // ----------------------------------------------------------------------------
  companyInfo: {
    brandName: "Tata Capital Limited",
    tagline: "Count on Us",
    portalTitle: "Tata Capital Learning & Development Portal",
    mission: "To be the most trusted financial services partner in India, empowering individuals and enterprises through responsible lending, ethical practices, and digital innovation.",
    vision: "To deliver sustainable value to customers and stakeholders by blending the Tata heritage of trust with agile financial solutions.",
    values: [
      { name: "Pioneering", icon: "fa-solid fa-compass", desc: "Being ahead of market trends with innovative lending and digital capabilities." },
      { name: "Integrity", icon: "fa-solid fa-shield-halved", desc: "Operating with absolute transparency, adhering strictly to TCOC and RBI guidelines." },
      { name: "Excellence", icon: "fa-solid fa-award", desc: "Setting benchmarks in credit underwriting speed, service quality, and risk governance." },
      { name: "Unity", icon: "fa-solid fa-people-group", desc: "Fostering one collaborative Tata family across businesses and support functions." },
      { name: "Responsibility", icon: "fa-solid fa-hands-holding-circle", desc: "Driving affirmative action, green financing, and inclusive growth." }
    ],
    // Animated Numbers / Counters Strip
    stats: [
      { label: "Satisfied Customers", value: "4.8M+", numeric: 4800000, suffix: "+", icon: "fa-solid fa-smile" },
      { label: "Branch Network", value: "750+", numeric: 750, suffix: "+", icon: "fa-solid fa-building" },
      { label: "Total Workforce", value: "18,500+", numeric: 18500, suffix: "+", icon: "fa-solid fa-user-group" },
      { label: "AUM (Assets Under Mgmt)", value: "₹1.65L Cr", numeric: 165000, prefix: "₹", suffix: " Cr", icon: "fa-solid fa-indian-rupee-sign" },
      { label: "Years of Trust", value: "17+ Years", numeric: 17, suffix: "+", icon: "fa-solid fa-calendar-check" }
    ],
    // Historical Milestones Timeline
    timeline: [
      { year: "2007", title: "Incorporation", desc: "Tata Capital Limited established as a premier non-banking financial institution under Tata Sons." },
      { year: "2009", title: "Housing Finance Launch", desc: "Tata Capital Housing Finance Limited (TCHFL) initiated to provide home ownership solutions across India." },
      { year: "2014", title: "Cleantech & Green Financing", desc: "Pioneered dedicated Cleantech funding in India, backing renewable energy and rooftop solar projects." },
      { year: "2018", title: "Digital Lending Revolution", desc: "Instant digital loan sanctions, paperless journeys, and FinTech integrations rolled out for retail consumers." },
      { year: "2021", title: "Scale & Sherpa Programme", desc: "Crossed ₹80,000 Cr AUM and launched the internal Sherpa Subject Matter Expert trainer movement." },
      { year: "2024+", title: "AI-First L&D & Lending Scale", desc: "Crossed ₹1.65L Cr AUM, deploying generative AI for credit assessments and adaptive employee learning journeys." }
    ],
    // Key Functions in Tata Capital
    functions: [
      { name: "Credit & Underwriting", icon: "fa-solid fa-file-invoice-dollar", desc: "Assessing creditworthiness, financial statements, collateral evaluation, and risk profiling." },
      { name: "Operations & Disbursement", icon: "fa-solid fa-gears", desc: "Loan booking, CERSAI/e-KYC verification, mandate registration (NACH/e-NACH), and disbursement." },
      { name: "Collections & Recovery", icon: "fa-solid fa-scale-balanced", desc: "Customer resolution, early bucket tele-calling, legal recovery frameworks, and repo management." },
      { name: "Risk Management & Fraud Control", icon: "fa-solid fa-shield-cat", desc: "Portfolio early warnings, fraud monitoring (FCU), model risk, and ALM monitoring." },
      { name: "Sales & Distribution", icon: "fa-solid fa-arrow-trend-up", desc: "Branch banking, DSA alliances, direct-to-consumer digital acquisition, and cross-sell." },
      { name: "Legal & Regulatory Compliance", icon: "fa-solid fa-gavel", desc: "Adherence to RBI master directions, TCOC enforcement, POSH, and fair lending practices." }
    ],
    // Top Management (Official Key Management Team from tatacapital.com)
    // Note: Photographs removed as requested; displayed with dignified corporate executive seals.
    management: [
      {
        name: "Rajiv Sabharwal",
        initials: "RS",
        designation: "Managing Director & CEO",
        business: "Tata Capital Limited",
        bio: "30+ years in banking and financial services. Leads strategic direction, growth, and governance across all Tata Capital entities."
      },
      {
        name: "Sarosh Amaria",
        initials: "SA",
        designation: "Managing Director",
        business: "Tata Capital Housing Finance Limited",
        bio: "Over two decades of lending leadership. Steering retail housing loans, affordable housing, and construction finance across India."
      },
      {
        name: "Avijit Bhattacharya",
        initials: "AB",
        designation: "Chief Human Resources Officer (CHRO)",
        business: "Corporate & Human Resources",
        bio: "Champion of talent transformation, 360-degree learning capability, Sherpa trainer movement, and employee wellness."
      },
      {
        name: "Rakesh Bhatia",
        initials: "RB",
        designation: "Chief Financial Officer (CFO)",
        business: "Corporate Finance & Treasury",
        bio: "Oversees capital raising, ALM supervisory management, investor relations, and financial governance."
      },
      {
        name: "Sarita Kamath",
        initials: "SK",
        designation: "Chief Legal & Compliance Officer & Company Secretary",
        business: "Legal & Regulatory Compliance",
        bio: "Custodian of statutory compliance, RBI regulatory liaison, secretarial affairs, and Tata Code of Conduct governance."
      },
      {
        name: "Abonty Banerjee",
        initials: "AB",
        designation: "Chief Digital & Marketing Officer",
        business: "Digital Innovation & Brand",
        bio: "Pioneering digital-first lending, paperless customer onboarding, brand equity, and AI-driven growth marketing."
      },
      {
        name: "Sandeep Tripathy",
        initials: "ST",
        designation: "Head - Strategy & Investor Relations",
        business: "Corporate Strategy",
        bio: "Driving enterprise corporate strategy, institutional investor engagements, and strategic business growth initiatives."
      },
      {
        name: "Saurabh Agrawal",
        initials: "SA",
        designation: "Chairman & Non-Executive Director",
        business: "Tata Sons / Board of Directors",
        bio: "Group CFO at Tata Sons. Providing overarching board stewardship, capital allocation strategy, and institutional guidance."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 2B. KNOW YOUR L&D TEAM (STRUCTURED FOR ALL 9 BUSINESSES & CENTRAL LEADS)
  // ----------------------------------------------------------------------------
  ldTeam: {
    centralLeadership: [
      {
        id: "LD-C01",
        name: "Vikram Malhotra",
        initials: "VM",
        designation: "Head - Learning & Capability Development (Group)",
        unit: "Central L&D",
        email: "vikram.malhotra@tatacapital.com",
        phone: "+91 22 6606 9101",
        focusAreas: "Enterprise L&D Strategy, TMTC Leadership Programs, Executive Capability"
      },
      {
        id: "LD-C02",
        name: "Pooja Verma",
        initials: "PV",
        designation: "Lead - Sherpa SME Programme & Faculty Development",
        unit: "Central L&D",
        email: "pooja.verma@tatacapital.com",
        phone: "+91 22 6606 9102",
        focusAreas: "Sherpa Train-The-Trainer Bootcamps, Internal SME Certifications, Faculty Recognition"
      },
      {
        id: "LD-C03",
        name: "Rohan Sen",
        initials: "RS",
        designation: "Lead - Digital Learning & LMS Technologies",
        unit: "Central L&D",
        email: "rohan.sen@tatacapital.com",
        phone: "+91 22 6606 9103",
        focusAreas: "LMS Architecture, AI Learning Tools, Mobile App, Compliance Tracking Engine"
      }
    ],
    businessPartners: [
      {
        id: "LD-BP-RETAIL",
        businessId: "retail",
        businessName: "Retail Finance (Consumer Finance)",
        name: "Aniket Deshpande",
        initials: "AD",
        designation: "Lead L&D Partner - Retail Finance",
        email: "aniket.deshpande@tatacapital.com",
        phone: "+91 22 6606 9211",
        location: "Mumbai H.O. / Pan-India",
        focusAreas: "Personal Loans & Two Wheeler Underwriting, Branch Induction, Cross-sell Clinics"
      },
      {
        id: "LD-BP-HOUSING",
        businessId: "housing",
        businessName: "Housing Finance",
        name: "Meenakshi Sundaram",
        initials: "MS",
        designation: "Lead L&D Partner - Housing Finance",
        email: "meenakshi.s@tatacapital.com",
        phone: "+91 22 6606 9212",
        location: "Bengaluru Hub / Pan-India",
        focusAreas: "Affordable Housing Underwriting, Legal & Technical Title Appraisal, LAP Academy"
      },
      {
        id: "LD-BP-MOTOR",
        businessId: "motor",
        businessName: "Motor Finance",
        name: "Karthik Ramanathan",
        initials: "KR",
        designation: "Lead L&D Partner - Motor Finance",
        email: "karthik.r@tatacapital.com",
        phone: "+91 44 6606 9213",
        location: "Chennai Hub / Pan-India",
        focusAreas: "Commercial Vehicles & Construction Equipment Financing, Yard Inspection, Vahan Workflows"
      },
      {
        id: "LD-BP-MICRO",
        businessId: "microfinance",
        businessName: "Microfinance",
        name: "Shalini Roy",
        initials: "SR",
        designation: "Lead L&D Partner - Microfinance",
        email: "shalini.roy@tatacapital.com",
        phone: "+91 33 6606 9214",
        location: "Kolkata Hub / Rural Clusters",
        focusAreas: "Joint Liability Group (JLG) Methodology, Center Meeting Discipline, RBI Microfinance Code"
      },
      {
        id: "LD-BP-SME",
        businessId: "corporate_sme",
        businessName: "Corporate & SME Finance",
        name: "Naveen Singhal",
        initials: "NS",
        designation: "Lead L&D Partner - Corporate & SME",
        email: "naveen.singhal@tatacapital.com",
        phone: "+91 11 6606 9215",
        location: "Delhi NCR Hub / Pan-India",
        focusAreas: "Financial Statement Analysis, Working Capital Assessment, B2B Consultative Pitching"
      },
      {
        id: "LD-BP-WEALTH",
        businessId: "wealth",
        businessName: "Wealth Management",
        name: "Radhika Joshi",
        initials: "RJ",
        designation: "Lead L&D Partner - Wealth Management",
        email: "radhika.joshi@tatacapital.com",
        phone: "+91 22 6606 9216",
        location: "Mumbai H.O.",
        focusAreas: "SEBI / AMFI Certifications, High-Net-Worth Advisory, Portfolio Construction, PMS"
      },
      {
        id: "LD-BP-DSMG",
        businessId: "dsmg",
        businessName: "DSMG (Direct Sales)",
        name: "Pradeep Kulkarni",
        initials: "PK",
        designation: "Lead L&D Partner - DSMG",
        email: "pradeep.k@tatacapital.com",
        phone: "+91 20 6606 9217",
        location: "Pune Hub / Pan-India",
        focusAreas: "Tele-Sales Playbooks, Objection Handling, DND Guidelines, Conversion Acceleration"
      },
      {
        id: "LD-BP-CLEAN",
        businessId: "cleantech",
        businessName: "Cleantech Finance",
        name: "Tanvi Mukherjee",
        initials: "TM",
        designation: "Lead L&D Partner - Cleantech Finance",
        email: "tanvi.m@tatacapital.com",
        phone: "+91 22 6606 9218",
        location: "Mumbai H.O.",
        focusAreas: "Solar Rooftop Project Due Diligence, ESG Due Diligence, Green Bond Frameworks"
      },
      {
        id: "LD-BP-CORP",
        businessId: "corp_functions",
        businessName: "Corporate Functions",
        name: "Gaurav Chawla",
        initials: "GC",
        designation: "Lead L&D Partner - Corporate Functions",
        email: "gaurav.chawla@tatacapital.com",
        phone: "+91 22 6606 9219",
        location: "Thane Corporate Office",
        focusAreas: "Enterprise Risk, Internal Audit, Legal & Compliance, Infosec & IT Architecture"
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. LEARNING BASKET: 5 MILESTONES (FOR NEW & EXISTING EMPLOYEES)
  // ----------------------------------------------------------------------------
  milestones: [
    {
      id: "30",
      dayNumber: 30,
      label: "30 Days",
      title: "Settle In & Align",
      badge: "Foundation Stage",
      icon: "fa-solid fa-flag-checkered",
      minDays: 0,
      maxDays: 30,
      whyItMatters: {
        new: "Settle in seamlessly. Understand Tata Capital's heritage, culture, key policies, systems access, and basic product knowledge so you feel confident, secure, and prepared in your role from Day 1.",
        existing: "Anchor your baseline. Refresh core compliance fundamentals, complete your annual mandatory certifications, and set quarterly learning goals with your reporting manager."
      },
      whatYouWillLearn: {
        new: [
          "Tata Heritage, Core Values, and Code of Conduct (TCOC)",
          "Systems login, security tokens, FinnOne/LOS navigation & POSH norms",
          "Basic loan products, interest rate structures, and customer segments",
          "Who's who in your branch/department and your 30-day deliverables"
        ],
        existing: [
          "Annual mandatory refresher (TCOC, POSH, RBI Fair Practices Code)",
          "Updates to statutory credit norms, circulars, and interest rate benchmarks",
          "Individual Development Plan (IDP) alignment with manager",
          "Self-assessment on digital tools (FinnOne Neo, CRM, Copilot)"
        ]
      },
      howItHelpsYou: [
        { title: "Compliance Safety", desc: "Prevents accidental policy breaches and protects customer data right from the start." },
        { title: "Role Confidence", desc: "Eliminates hesitation with core lending software, branch systems, and team workflows." },
        { title: "Faster Ramp-Up", desc: "Reduces time-to-first-file processing and builds positive rapport with branch peers." }
      ]
    },
    {
      id: "60",
      dayNumber: 60,
      label: "60 Days",
      title: "Build Working Knowledge",
      badge: "Operational Stage",
      icon: "fa-solid fa-gears",
      minDays: 31,
      maxDays: 60,
      whyItMatters: {
        new: "Build hands-on working knowledge. Learn business processes, credit appraisal guidelines, and transaction processing so you can work with minimal supervision.",
        existing: "Level up operational speed. Master advanced troubleshooting, system shortcuts, turnaround time (TAT) reduction, and cross-sell techniques for your business vertical."
      },
      whatYouWillLearn: {
        new: [
          "End-to-end loan application lifecycle (Sourcing to Disbursement)",
          "KYC verification, CKYC portal, Karza verification, and AML checks",
          "Navigating the Credit Rule Engine (BRE) and deviation matrices",
          "Handling basic customer queries and understanding bureau scores (CIBIL/CRIF)"
        ],
        existing: [
          "Advanced CIBIL report scrub: identifying hidden liabilities and DPD spikes",
          "Handling non-standard customer profiles and cash-flow proxies",
          "Resolving stuck disbursement files and NACH rejection recovery",
          "Product cross-sell: bundling insurance, LAP, and top-up offerings"
        ]
      },
      howItHelpsYou: [
        { title: "Reduced Supervision", desc: "Take ownership of customer files with 80% fewer queries raised back by underwriting." },
        { title: "Operational Accuracy", desc: "Zero disbursement errors, compliant documentation, and faster turn-around time." },
        { title: "Customer Delight", desc: "Answer borrower inquiries with precision and build trust through product clarity." }
      ]
    },
    {
      id: "90",
      dayNumber: 90,
      label: "90 Days",
      title: "Become Productive",
      badge: "Performance Stage",
      icon: "fa-solid fa-chart-line",
      minDays: 61,
      maxDays: 90,
      whyItMatters: {
        new: "Become fully productive. Apply product, process, and regulatory compliance knowledge independently and start contributing tangibly to your team's business targets.",
        existing: "Expand performance impact. Take charge of complex files, mentor probationary employees, and run structured portfolio reviews to optimize book health."
      },
      whatYouWillLearn: {
        new: [
          "Consultative selling & objection handling for retail and business borrowers",
          "Underwriting nuances: balance sheet analysis, GST return validation, bank statement scrubs",
          "Collections etiquette, early-delinquency triggers, and soft bucket calling",
          "Managing pipeline via Salesforce CRM and driving monthly target attainment"
        ],
        existing: [
          "High-value deal structuring and co-lending partnership workflows",
          "Early Warning Signals (EWS) monitoring to identify stress before default",
          "Advanced data analytics in Excel for branch sales and delinquency forecasting",
          "Mentoring junior relationship officers and buddy-pairing best practices"
        ]
      },
      howItHelpsYou: [
        { title: "Target Achievement", desc: "Consistent month-on-month achievement of disbursement and fee income targets." },
        { title: "Underwriting Independence", desc: "Clear recommendations on credit proposals without back-and-forth delays." },
        { title: "Career Momentum", desc: "Position yourself for quarterly recognition and top-performer incentive tiers." }
      ]
    },
    {
      id: "180",
      dayNumber: 180,
      label: "180 Days",
      title: "Strengthen & Specialise",
      badge: "Specialisation Stage",
      icon: "fa-solid fa-brain",
      minDays: 91,
      maxDays: 180,
      whyItMatters: {
        new: "Strengthen and specialise. Deepen technical skills, cross-functional understanding, risk mitigation, and digital capabilities to deliver superior quality and output.",
        existing: "Acquire high-value credentials. Undertake niche certifications (Risk, ESG, Analytics), master digital tools (AI, Copilot), and pioneer process improvement initiatives."
      },
      whatYouWillLearn: {
        new: [
          "Cross-functional synergy: collaborating seamlessly between Sales, Credit, Operations & Collections",
          "Managing NPA prevention, legal notice workflows, and SARFAESI provisions",
          "Digital productivity: Prompting with AI, advanced formulas in Excel, executive presentation decks",
          "Customer experience excellence: handling escalated complaints and ombudsman queries"
        ],
        existing: [
          "Specialised credit appraisal: Project finance, builder debt, or complex corporate balance sheets",
          "Generative AI in lending: Automated credit memo drafting and conversational summaries",
          "Leading Kaizen or Lean Six Sigma projects to slash file TAT across branches",
          "Preparation for first-time managerial / supervisory responsibilities"
        ]
      },
      howItHelpsYou: [
        { title: "Subject Matter Depth", desc: "Recognized as the go-to specialist in your hub for tough underwriting or complex queries." },
        { title: "Digital Agility", desc: "Save 5+ hours weekly using automated spreadsheets, templates, and AI tools." },
        { title: "Leadership Pipeline", desc: "Shortlisted for high-potential talent pools and cross-business deputations." }
      ]
    },
    {
      id: "360",
      dayNumber: 360,
      label: "360+ Days",
      title: "Grow & Lead",
      badge: "Leadership & Sherpa Stage",
      icon: "fa-solid fa-trophy",
      minDays: 181,
      maxDays: 9999,
      whyItMatters: {
        new: "Grow and lead. Transition into senior responsibilities, pursue advanced certifications, take on behavioural/leadership training, and explore becoming a Sherpa SME trainer.",
        existing: "Drive institutional excellence. Lead high-impact strategic business projects, serve as an active Sherpa trainer, and mentor the next generation of Tata Capital leaders."
      },
      whatYouWillLearn: {
        new: [
          "People leadership essentials: coaching for performance, constructive feedback, empathy",
          "Strategic thinking & P&L management for branch and cluster heads",
          "Nomination into the Tata Capital Sherpa SME Trainer cohort",
          "Advanced risk governance, regulatory compliance trends, and market foresight"
        ],
        existing: [
          "Train-the-Trainer Boot Camp: Facilitation skills, adult learning methods, interactive lecturing",
          "Executive Presence & Stakeholder Management for senior management interactions",
          "Leading change management and digital transformation across multi-tier teams",
          "Tata Affirmative Action Programme (TAAP) leadership and community impact"
        ]
      },
      howItHelpsYou: [
        { title: "Sherpa Recognition", desc: "Gain institutional prestige, leadership credits, and formal certification as an SME trainer." },
        { title: "Career Acceleration", desc: "Direct pathway to Branch Manager, Credit Head, or Regional Manager roles." },
        { title: "Legacy & Impact", desc: "Shape Tata Capital's institutional memory and empower hundreds of new joiners." }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. TRAINING MASTER REPOSITORY (50+ Real Lending & NBFC Courses)
  // Each course is mapped to:
  // - businessIds: array of matching business IDs (or ["all"])
  // - employeeTypes: array of ["new", "existing"]
  // - milestoneDays: 30, 60, 90, 180, or 360
  // - category: orientation, product, process, systems, cross_functional, digital, compliance, leadership
  // - digitalSubCategory: (if digital) "ai", "excel", "ppt"
  // ----------------------------------------------------------------------------
  trainings: [
    // ------------------- 30 DAYS: NEW & EXISTING -------------------
    {
      id: "TR-001",
      title: "New Employee Orientation Programme (NEOP) - Tata Heritage & Culture",
      shortDescription: "Flagship induction: Discover the 150+ year Tata legacy, Tata Capital's journey, corporate values, code of conduct, and organizational structure.",
      duration: "16 Hours (2 Days)",
      mode: "Classroom",
      level: "Beginner",
      trainer: "L&D Induction Team & Senior Leadership",
      rating: 4.9,
      tag: "Mandatory",
      isFeatured: true,
      category: "orientation",
      businessIds: ["all"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Internalize the 5 Tata Core Values: Integrity, Understanding, Excellence, Unity, and Responsibility",
        "Understand Tata Capital's lending business landscape and 9 key verticals",
        "Build a multi-functional peer network across divisions",
        "Set expectations for your initial 90-day onboarding journey"
      ],
      whoShouldAttend: "All newly joined employees across all grades and business verticals.",
      schedule: "Conducted weekly on Monday & Tuesday at Regional Training Hubs and Virtual Studios.",
      prerequisites: "Completion of HR onboarding formalities & systems login creation.",
      syllabus: [
        "Module 1: The Tata Legacy & Ethos - From Jamsetji Tata to Modern India",
        "Module 2: Tata Capital Story - Vision, Mission & 'Count on Us' Promise",
        "Module 3: Business Showcase - Retail, Housing, Commercial, Wealth & Cleantech",
        "Module 4: Leadership Address & Townhall Q&A",
        "Module 5: My Induction Buddy - Introduction & Action Plan"
      ]
    },
    {
      id: "TR-002",
      title: "Tata Code of Conduct (TCOC) & Workplace Ethics Certification",
      shortDescription: "Mandatory ethical compass: Conflict of interest, gift policies, anti-bribery (ABAC), insider trading, and whistle-blower mechanisms.",
      duration: "2.5 Hours",
      mode: "E-Learning",
      level: "Beginner",
      trainer: "Ethics Counsellor & Legal Secretariat",
      rating: 4.8,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 30,
      objectives: [
        "Learn zero-tolerance policies on fraud, bribery, and unauthorized information sharing",
        "Recognize conflict of interest scenarios in vendor selection and client interactions",
        "Understand whistleblower protection rights and reporting channels"
      ],
      whoShouldAttend: "Compulsory for all active employees annually.",
      schedule: "On-demand self-paced module with end-of-module assessment (pass mark: 80%).",
      prerequisites: "None.",
      syllabus: [
        "Section 1: The Spirit of TCOC",
        "Section 2: Ethical Conduct with Borrowers, Partners & Regulators",
        "Section 3: Anti-Bribery & Corruption (ABAC) Rules",
        "Section 4: Confidentiality & Social Media Guidelines",
        "Section 5: Assessment & Digital Certificate Generation"
      ]
    },
    {
      id: "TR-003",
      title: "POSH: Prevention of Sexual Harassment & Safe Workplace Norms",
      shortDescription: "Legal definitions, Internal Complaints Committee (ICC) framework, respectful conduct, and zero-tolerance policy at Tata Capital.",
      duration: "1.5 Hours",
      mode: "E-Learning",
      level: "Beginner",
      trainer: "ICC Chairperson & Legal Counsel",
      rating: 4.9,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 30,
      objectives: [
        "Understand the PoSH Act 2013 and Tata Capital's Gender Equity Charter",
        "Recognize inappropriate behaviors, micro-aggressions, and virtual harassment",
        "Know how to file complaints and understand the confidential inquiry process"
      ],
      whoShouldAttend: "All employees, contractual staff, and managers.",
      schedule: "Self-paced e-module with interactive video scenarios.",
      prerequisites: "None.",
      syllabus: [
        "Module 1: What Constitutes Sexual Harassment at Workplace",
        "Module 2: Quid Pro Quo vs. Hostile Work Environment",
        "Module 3: Internal Complaints Committee Structure & Redressal",
        "Module 4: Manager's Responsibilities and Duty of Care"
      ]
    },
    {
      id: "TR-004",
      title: "Core Loan Origination System (LOS) & FinnOne Neo Hands-on",
      shortDescription: "Hands-on navigation of FinnOne Neo LOS: Lead creation, applicant de-dupe, document upload, and status tracking.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "Operations IT Lead / Sherpa",
      rating: 4.7,
      tag: "Mandatory",
      category: "systems",
      businessIds: ["retail", "housing", "motor", "corporate_sme"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Master FinnOne Neo dashboard, shortcuts, and application queues",
        "Perform de-dupe checks across Tata Capital database to prevent duplicate loans",
        "Upload verified KYC, bank statements, and income documents correctly"
      ],
      whoShouldAttend: "Sales executives, customer service associates, and branch credit ops.",
      schedule: "Every alternate Wednesday, 2:30 PM - 6:30 PM.",
      prerequisites: "Active Active Directory & FinnOne Neo user credentials.",
      syllabus: [
        "1. Login, User Role Architecture & Queue Selection",
        "2. Step-by-Step Lead to Application Conversion",
        "3. Document Indexing, OCR Checks & Upload Matrix",
        "4. Error Handling and System Helpdesk Escalations"
      ]
    },
    {
      id: "TR-005",
      title: "Retail Lending Foundations: Personal & Consumer Durable Loans",
      shortDescription: "Understanding unsecured lending economics: FOIR, tenure brackets, risk-based pricing, and underwriting fundamentals.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "Retail Product Manager",
      rating: 4.75,
      tag: "Mandatory",
      category: "product",
      businessIds: ["retail", "dsmg"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Understand product features: Personal Loans, Consumer Durable, and Two-Wheeler credit",
        "Calculate EMI, IRR, processing fees, and understand fixed vs. floating rate logic",
        "Recognize eligible customer profiles: Salaried vs. Self-employed Non-Professionals"
      ],
      whoShouldAttend: "Relationship managers, sales officers, and retail branch associates.",
      schedule: "Batch commences every 1st & 3rd Thursday.",
      prerequisites: "None.",
      syllabus: [
        "1. Unsecured Lending Ecosystem in India",
        "2. Tata Capital Product Matrix & Target Customer Personas",
        "3. Rate of Interest (ROI), APR Disclosures & KFS (Key Fact Statement)",
        "4. Pitching Value Proposition over Competitors"
      ]
    },
    {
      id: "TR-006",
      title: "Housing Finance Essentials: Home Loans, LAP & Pradhan Mantri Awas Yojana",
      shortDescription: "Introduction to secured property lending: Legal title vetting, technical valuation basics, LTV ratios, and mortgage registration.",
      duration: "8 Hours",
      mode: "Classroom",
      level: "Beginner",
      trainer: "Housing Credit Head / Sherpa",
      rating: 4.85,
      tag: "Mandatory",
      category: "product",
      businessIds: ["housing"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Understand Home Loans, Home Improvement Loans, and Loan Against Property (LAP)",
        "Grasp Loan-to-Value (LTV) limits mandated by RBI and National Housing Bank",
        "Understand legal search report significance and encumbrance certificates"
      ],
      whoShouldAttend: "All Housing Finance relationship managers and credit associates.",
      schedule: "Monthly classroom batch in Mumbai, Delhi, Bengaluru, and Pune hubs.",
      prerequisites: "Completion of NEOP.",
      syllabus: [
        "1. Home Loan vs. LAP: Risk Profiles & Margins",
        "2. Legal & Technical Appraisal 101: Title deeds, sanction plans, NOCs",
        "3. Subsidy schemes & Tax Benefits under Section 24 and 80C",
        "4. Customer Journey from Sanction to Disbursement"
      ]
    },
    {
      id: "TR-007",
      title: "Commercial Vehicle & Equipment Lending Overview",
      shortDescription: "Understanding fleet owners, FTUs (First Time Users), vehicle hypothecation, Vahan portal integration, and RTO procedures.",
      duration: "5 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "Motor Finance Product Specialist",
      rating: 4.65,
      tag: "Mandatory",
      category: "product",
      businessIds: ["motor"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Understand Light Commercial Vehicles (LCV), Medium & Heavy CV (MHCV), and CE financing",
        "Understand freight route economics, vehicle operating expenses, and tyre life cycles",
        "Learn Vahan database integration for instant RC and permit verification"
      ],
      whoShouldAttend: "Motor Finance frontline and credit teams.",
      schedule: "Bi-weekly webinars with interactive Q&A.",
      prerequisites: "None.",
      syllabus: [
        "1. Indian Transport Industry & Financing Dynamics",
        "2. Asset Categories: New vs. Pre-owned CV, Construction Equipment",
        "3. Collateral Security: Hypothecation & Insurance endorsement",
        "4. Repayment Cycles aligned to freight payments"
      ]
    },
    {
      id: "TR-008",
      title: "Microfinance & JLG Lending Methodology",
      shortDescription: "Mastering the Joint Liability Group (JLG) model, social collateral, center meetings, and RBI's revised regulatory framework for microfinance.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Beginner",
      trainer: "Rural Operations Head",
      rating: 4.8,
      tag: "Mandatory",
      category: "product",
      businessIds: ["microfinance"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Understand group dynamics, peer pressure, and mutual guarantee in JLG lending",
        "Understand RBI's household income cap (₹3 Lakhs) and qualifying asset norms",
        "Conduct village profiling, center creation, and discipline drills"
      ],
      whoShouldAttend: "Branch managers, loan officers, and collection agents in MFI.",
      schedule: "Regional training camps across designated district clusters.",
      prerequisites: "Field orientation checklist signed by branch manager.",
      syllabus: [
        "1. The Philosophy of Financial Inclusion & Responsible Lending",
        "2. RBI Microfinance Directions (2022 onwards) Deep Dive",
        "3. Conducting Center Meetings (Kendra Meetings) with Discipline",
        "4. Preventing Client Over-indebtedness and Ghost Lending"
      ]
    },
    {
      id: "TR-009",
      title: "Cleantech & Solar Financing 101",
      shortDescription: "Fundamentals of Commercial & Industrial (C&I) rooftop solar financing, CAPEX/OPEX models, and green energy underwriting criteria.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "Cleantech Investment Principal",
      rating: 4.9,
      tag: "Recommended",
      category: "product",
      businessIds: ["cleantech"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Understand solar generation fundamentals: Irradiance, Generation Performance Ratio (PR)",
        "Differentiate between CAPEX loan model and RESCO/PPA financing",
        "Learn Tata Capital's environmental and social risk assessment criteria"
      ],
      whoShouldAttend: "Cleantech relationship managers, analysts, and project appraisal teams.",
      schedule: "First Friday of each month.",
      prerequisites: "Basic financial accounting knowledge.",
      syllabus: [
        "1. India's Net-Zero Transition & Renewable Energy Mandates",
        "2. Rooftop Solar Project Economics & Tariff structures",
        "3. Technical Due Diligence: EPC quality, module Tier-1 checks",
        "4. Structuring Debt: Debt Service Reserve Account (DSRA) & Escrow"
      ]
    },
    {
      id: "TR-010",
      title: "Foundations of Corporate & SME Working Capital",
      shortDescription: "Core SME lending products: Cash Credit, Overdraft, Term Loans, Letter of Credit (LC), and Bank Guarantees (BG).",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "SME Credit Head",
      rating: 4.7,
      tag: "Mandatory",
      category: "product",
      businessIds: ["corporate_sme"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Differentiate between funded vs. non-funded credit facilities",
        "Understand Working Capital cycles, inventory holding days, and debtor turnover",
        "Understand primary collateral (hypothecation of stocks/debtors) and secondary collateral"
      ],
      whoShouldAttend: "SME relationship managers, credit analysts, and operations personnel.",
      schedule: "Every second Tuesday.",
      prerequisites: "Commerce or Finance educational background recommended.",
      syllabus: [
        "1. SME Credit Spectrum: Micro, Small vs. Medium Enterprise classifications",
        "2. Working Capital Assessment Methods (Nayek Committee vs. Tandon Method)",
        "3. Collateral & Charge Creation with ROC (Registrar of Companies)",
        "4. Risk-Adjusted Return on Capital (RAROC) basics"
      ]
    },
    {
      id: "TR-011",
      title: "Wealth Management: Products, KYC & SEBI/AMFI Compliance",
      shortDescription: "Overview of mutual fund categories, AIFs, PMS, sovereign bonds, investor risk profiling, and suitability mandates.",
      duration: "5 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "Head of Wealth Advisory",
      rating: 4.75,
      tag: "Mandatory",
      category: "product",
      businessIds: ["wealth"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Master SEBI investment suitability and risk profiling requirements",
        "Understand asset allocation models: Equity, Fixed Income, Gold, Alternates",
        "Learn AMFI code of conduct and prohibition of rebate sharing"
      ],
      whoShouldAttend: "Wealth managers, private bankers, and investment counsellors.",
      schedule: "Weekly cohorts available on LMS.",
      prerequisites: "Valid NISM Series V-A certification (or enrolled to appear).",
      syllabus: [
        "1. Wealth Management Landscape & Tata Capital Advisory Philosophy",
        "2. Risk Profiler Tool & Portfolio Construction Guidelines",
        "3. Wealth Software Walkthrough: Client Reporting Portal & Factsheets",
        "4. Ethics in Client Advisory: Putting Client Interest First"
      ]
    },
    {
      id: "TR-012",
      title: "DSMG Tele-Sales Playbook & Pitch Mastery",
      shortDescription: "Direct Sales & Marketing Group calling scripts, objection handling, active listening, and compliance with DND regulations.",
      duration: "5 Hours",
      mode: "Classroom",
      level: "Beginner",
      trainer: "DSMG Regional Sales Trainer",
      rating: 4.8,
      tag: "Mandatory",
      category: "process",
      businessIds: ["dsmg"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Deliver confident opening hooks within the first 15 seconds of a call",
        "Overcome common customer objections: 'Interest rate is too high', 'I don't need a loan'",
        "Strictly adhere to TRAI Do-Not-Disturb (DND) and calling hour guidelines (8 AM to 7 PM)"
      ],
      whoShouldAttend: "All tele-callers, relationship associates, and direct sales teams.",
      schedule: "Weekly live simulations and call recording audits.",
      prerequisites: "None.",
      syllabus: [
        "1. Anatomy of a High-Converting Sales Call",
        "2. Active Listening & Probing for Underlying Financial Needs",
        "3. Compliant Calling Hours & Script Delivery",
        "4. Live Call Roleplay with Peer and Trainer Feedback"
      ]
    },
    {
      id: "TR-013",
      title: "Corporate Functions Onboarding: Enterprise Risk, Audit & Infosec",
      shortDescription: "Overview of internal governance frameworks, 3-lines of defense, information security protocols, and business continuity planning.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "Head of Internal Audit & CISO",
      rating: 4.7,
      tag: "Mandatory",
      category: "cross_functional",
      businessIds: ["corp_functions"],
      employeeTypes: ["new"],
      milestoneDays: 30,
      objectives: [
        "Understand the 3-Lines of Defense: Business, Risk/Compliance, and Internal Audit",
        "Understand data classification: Restricted, Confidential, Internal, Public",
        "Learn incident reporting mechanisms and phishing response protocols"
      ],
      whoShouldAttend: "Employees joining Legal, Risk, Finance, HR, IT, and Audit functions.",
      schedule: "Held on the 2nd Monday of each month.",
      prerequisites: "None.",
      syllabus: [
        "1. Corporate Governance at Tata Capital",
        "2. Three Lines of Defense Model in Banking & NBFCs",
        "3. Infosec Essentials: Passwords, 2FA, Clean Desk, Data Leakage Prevention (DLP)",
        "4. Audit Readiness & Working Paper Documentation"
      ]
    },
    {
      id: "TR-014",
      title: "Essential Excel for Everyday Lending Operations",
      shortDescription: "Essential formulas for loan officers: PMT, IPMT, PPMT, VLOOKUP, XLOOKUP, pivot tables, and loan amortization schedules.",
      duration: "3 Hours",
      mode: "E-Learning",
      level: "Beginner",
      trainer: "Analytics COE",
      rating: 4.85,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "excel",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 30,
      objectives: [
        "Build dynamic loan repayment schedules using PMT and RATE formulas",
        "Quickly reconcile customer disbursement reports using XLOOKUP and Pivot Tables",
        "Eliminate manual data errors using Data Validation and conditional formatting"
      ],
      whoShouldAttend: "All employees who work with customer files, reports, and spreadsheets.",
      schedule: "Interactive self-paced workbook with downloadable practice files.",
      prerequisites: "Basic familiarity with Microsoft Excel.",
      syllabus: [
        "1. Financial Formulas: PMT, PPMT, IPMT, NPER, RATE explained simply",
        "2. Data Cleansing: Text to Columns, TRIM, CONCAT, removing duplicates",
        "3. Modern Lookups: Mastering XLOOKUP vs. VLOOKUP with exact match",
        "4. Fast Summaries: Pivot Tables and Slice & Dice for Daily MIS"
      ]
    },

    // ------------------- 60 DAYS: NEW & EXISTING -------------------
    {
      id: "TR-015",
      title: "Digital KYC, CKYC & Anti-Money Laundering (PMLA) Deep Dive",
      shortDescription: "Preventing financial crime: Verification via UIDAI Aadhaar XML, DigiLocker, PAN-NSDL check, PEP screening, and STR reporting.",
      duration: "3.5 Hours",
      mode: "E-Learning",
      level: "Intermediate",
      trainer: "Principal Compliance Officer",
      rating: 4.9,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Identify valid Officially Valid Documents (OVDs) as per RBI guidelines",
        "Detect red flags in applicant profiles, high-risk jurisdictions, and Politically Exposed Persons (PEPs)",
        "Understand Suspicious Transaction Reporting (STR) to FIU-IND (Financial Intelligence Unit)"
      ],
      whoShouldAttend: "All branch credit, sales, and operations officers handling customer onboarding.",
      schedule: "Available 24x7 with interactive scenario simulations.",
      prerequisites: "Completion of TCOC.",
      syllabus: [
        "1. Prevention of Money Laundering Act (PMLA) & RBI Master Directions",
        "2. Video-KYC (V-KYC) and Contactless Onboarding Standards",
        "3. CKYC Registry: Uploading and downloading KYC identification records",
        "4. Red Flags: Benami applicants, layering techniques & reporting protocols"
      ]
    },
    {
      id: "TR-016",
      title: "Credit Underwriting & Bureau Scrub: CIBIL, Experian & CRIF",
      shortDescription: "Reading credit information reports (CIR): DPD (Days Past Due), written-off accounts, enquiry spikes, and credit scoring algorithms.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Senior Credit Underwriter / Sherpa",
      rating: 4.88,
      tag: "Mandatory",
      category: "process",
      businessIds: ["retail", "housing", "motor", "corporate_sme"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Analyze 24-month repayment track records across secured and unsecured facilities",
        "Identify warning signs: settled loans, SMA-1 / SMA-2 classification, multiple recent enquiries",
        "Correlate bureau debt commitments with declared income to calculate true FOIR"
      ],
      whoShouldAttend: "Credit analysts, underwriters, and relationship managers seeking credit approval clarity.",
      schedule: "Every 2nd and 4th Wednesday.",
      prerequisites: "Basic financial literacy.",
      syllabus: [
        "1. Structure of a Commercial & Consumer Credit Information Report",
        "2. Decoding DPD strings: '000', 'STD', 'SUB', 'DBT', 'LSS'",
        "3. Inquiries Analysis: Hunger for credit vs. genuine comparisons",
        "4. Practical Case Studies: To Approve, Condition, or Reject?"
      ]
    },
    {
      id: "TR-017",
      title: "Banking Analysis & Account Aggregator Ecosystem",
      shortDescription: "Analyzing bank statements: Average Monthly Balance (AMB), cheque bounce patterns, cash deposit velocity, and Account Aggregator consent flows.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Fintech & Credit Automation Head",
      rating: 4.82,
      tag: "Mandatory",
      category: "systems",
      businessIds: ["retail", "housing", "corporate_sme", "dsmg"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Spot circular transactions, round-tripping, and non-genuine salary credits",
        "Understand Account Aggregator (AA) framework: Anumati, OneMoney, Sahamati consent flows",
        "Use automated bank statement analyzer tools to generate instant cashflow summaries"
      ],
      whoShouldAttend: "Credit underwriters, branch relationship managers, and DSA managers.",
      schedule: "Bi-weekly interactive webinar.",
      prerequisites: "Knowledge of basic accounting.",
      syllabus: [
        "1. Traditional PDF Parsing vs. Frictionless Account Aggregator APIs",
        "2. Key Banking Metrics: Inward Returns, Outward Bounces, ABB vs. EMI",
        "3. Fraud Detection: Manipulated PDFs, font mismatches, and tampered statements",
        "4. Live Analysis of 3 Real Borrower Bank Statements"
      ]
    },
    {
      id: "TR-018",
      title: "Fair Practices Code (FPC) for NBFCs & Transparent Disclosures",
      shortDescription: "RBI Fair Practices Code: Clear loan sanction letters, Key Fact Statements (KFS), APR calculation, and ethical recovery agent guidelines.",
      duration: "2 Hours",
      mode: "E-Learning",
      level: "Intermediate",
      trainer: "Regulatory Compliance Lead",
      rating: 4.95,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Mandatory disclosure of Annual Percentage Rate (APR) and all associated loan charges",
        "Enforce fair recovery guidelines: permissible communication hours, no abusive tactics",
        "Deliver loan agreements and sanction letters in vernacular languages where required"
      ],
      whoShouldAttend: "All customer-facing, credit, collections, and operations staff.",
      schedule: "Self-paced interactive video course.",
      prerequisites: "None.",
      syllabus: [
        "1. The Regulatory Context: RBI Master Directions on Fair Practices",
        "2. Key Fact Statement (KFS) Standardization & Broken Period Interest Rules",
        "3. Code of Conduct for Direct Selling & Collection Agents",
        "4. Ombudsman Scheme: Grievance Turnaround Time & Customer Rights"
      ]
    },
    {
      id: "TR-019",
      title: "Prompting Essentials with AI for Financial Productivity",
      shortDescription: "Mastering generative AI: Drafting customer emails, summarizing complex credit policy circulars, and structured prompting.",
      duration: "3 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "AI Innovation Lab / Sherpa",
      rating: 4.92,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ai",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Master the CREATE prompting framework (Context, Role, Explicit instructions, Tone, Examples)",
        "Use AI to summarize 40-page RBI circulars into 5 bullet action points safely",
        "Adhere to Tata Capital's AI data privacy guidelines: NEVER paste customer PII or raw PANs"
      ],
      whoShouldAttend: "All employees seeking to automate routine writing, analysis, and research.",
      schedule: "Every alternate Friday, 3:00 PM - 6:00 PM.",
      prerequisites: "Access to Tata Capital enterprise-approved AI tools.",
      syllabus: [
        "1. What Generative AI Can & Cannot Do in Banking",
        "2. The Enterprise Guardrails: Protecting Customer PII & Confidentiality",
        "3. Prompt Engineering: Zero-shot, Few-shot & Chain-of-Thought for Finance",
        "4. Real-world Demos: Drafting Credit Approval Memos & Escalation Responses"
      ]
    },
    {
      id: "TR-020",
      title: "Microfinance Center Management & Field Audit Readiness",
      shortDescription: "Field discipline: Conducting village Kendra meetings, handling passbook reconciliation, attendance registers, and cash security.",
      duration: "5 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "MFI Operations Head",
      rating: 4.75,
      tag: "Mandatory",
      category: "process",
      businessIds: ["microfinance"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Maintain 95%+ attendance and discipline in weekly/monthly Kendra gatherings",
        "Implement QR-code digital collections to minimize physical cash transit risk",
        "Pass unannounced branch and field audit reviews with zero High-Risk findings"
      ],
      whoShouldAttend: "MFI branch heads, field officers, and cluster managers.",
      schedule: "Regional field training centres.",
      prerequisites: "Field experience of at least 30 days.",
      syllabus: [
        "1. Psychology of Group Guarantee & Peer Discipline",
        "2. Digital Collections via UPI & Micro-ATMs in Rural Hubs",
        "3. Audit Checklist: Loan sanction cards, member signatures, passbooks",
        "4. Handling Local Community Crises with Tact and Empathy"
      ]
    },
    {
      id: "TR-021",
      title: "Commercial Vehicle Valuation & Fitness Vetting",
      shortDescription: "Inspecting pre-owned trucks, buses, and tippers: Engine health, chassis integrity, RTO permit checks, and distress sale valuation.",
      duration: "5 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Motor Technical Inspection Lead",
      rating: 4.7,
      tag: "Mandatory",
      category: "process",
      businessIds: ["motor"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Conduct structured physical inspection of commercial vehicles using mobile appraisal app",
        "Verify chassis number punching, engine serial tampering, and accidental damage repairs",
        "Establish conservative Loan-to-Value (LTV) on second-hand vehicle valuations"
      ],
      whoShouldAttend: "Motor Finance technical evaluators, credit underwriters, and asset managers.",
      schedule: "Yard visits and inspection workshops held monthly.",
      prerequisites: "Basic automotive knowledge.",
      syllabus: [
        "1. Commercial Vehicle Anatomy: Heavy vs. Light Commercial Platforms",
        "2. Mobile Valuation App: Photo geo-tagging, video inspection standards",
        "3. Market Price Benchmarks: Determining Net Realizable Value (NRV)",
        "4. Yard Management & Repossession Inventory Audits"
      ]
    },

    // ------------------- 90 DAYS: NEW & EXISTING -------------------
    {
      id: "TR-022",
      title: "Financial Statement Analysis & Ratio Mastery for Underwriters",
      shortDescription: "Balance sheet, P&L, Cash Flow analysis: DSCR, Current Ratio, TOL/TNW, ISCR, Working capital cycle, and EBITDA adjustments.",
      duration: "8 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Corporate Credit Head / Sherpa",
      rating: 4.95,
      tag: "Mandatory",
      category: "process",
      businessIds: ["corporate_sme", "housing", "cleantech"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Calculate Debt Service Coverage Ratio (DSCR) to ensure debt-paying capacity",
        "Identify hidden red flags in Notes to Accounts, auditor qualifications, and contingent liabilities",
        "Reconcile audited financials with GST Returns (GSTR-3B vs GSTR-1) and ITR acknowledgments"
      ],
      whoShouldAttend: "Credit analysts, relationship managers, and risk managers.",
      schedule: "Full day virtual masterclass with real corporate balance sheet case studies.",
      prerequisites: "Completion of 60-day credit modules.",
      syllabus: [
        "1. The 3 Financial Statements: Interlinkages and Critical Ratios",
        "2. Profitability vs. Cash Quality: Operating Cash Flow vs. Reported Net Profit",
        "3. Financial Forensic Checks: Related party loans, inventory pile-ups",
        "4. Case Study Workshop: Underwriting a ₹15 Cr SME Term Loan Proposal"
      ]
    },
    {
      id: "TR-023",
      title: "Collections & Recovery: Ethical Negotiation & Early Delinquency Management",
      shortDescription: "Managing 0-30 and 31-60 DPD buckets: Persuasive calling, borrower hardship restructuring, digital pay-links, and legal escalation.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "National Collections Lead",
      rating: 4.85,
      tag: "Mandatory",
      category: "process",
      businessIds: ["retail", "housing", "motor", "microfinance", "dsmg"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Intervene early in DPD 1-30 buckets to arrest forward flow into higher delinquency",
        "Apply respectful, firm negotiation techniques while upholding borrower dignity",
        "Understand legal notice steps: Section 138 (Cheque Bounce), Section 25 (e-NACH failure), and SARFAESI Act"
      ],
      whoShouldAttend: "Collections managers, branch managers, and field recovery supervisors.",
      schedule: "Regional classroom sessions with live call coaching.",
      prerequisites: "Fair Practices Code certification.",
      syllabus: [
        "1. The Delinquency Curve: Why the First 30 Days Dictate Ultimate Recovery",
        "2. Differentiating Willingness to Pay vs. Ability to Pay",
        "3. Restructuring & Settlement Frameworks: Principal waiver approvals",
        "4. Legal Remedies: Section 138 vs. Section 25 vs. Conciliation Lok Adalats"
      ]
    },
    {
      id: "TR-024",
      title: "Advanced Data Analysis & Business MIS in Excel",
      shortDescription: "Power Query, Advanced Dynamic Arrays (FILTER, UNIQUE, SORT), What-If Analysis, and automated executive dashboards.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "BI & MIS Specialist",
      rating: 4.88,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "excel",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Automate monthly branch performance consolidation in 1-click using Power Query",
        "Use dynamic array functions (FILTER, UNIQUE, XLOOKUP) to build live reporting sheets",
        "Create visually clean KPI executive dashboards for senior business leaders"
      ],
      whoShouldAttend: "Business analysts, regional coordinators, and managers preparing reviews.",
      schedule: "Hands-on virtual lab session.",
      prerequisites: "Completion of Essential Excel course.",
      syllabus: [
        "1. Power Query: Cleaning and merging multi-branch CSV files automatically",
        "2. Dynamic Arrays: FILTER, SORTBY, UNIQUE, SEQUENCE in real workflows",
        "3. Scenario Manager & Goal Seek for Loan Restructuring & Yield Calculations",
        "4. Building a Live Executive Lending Dashboard from scratch"
      ]
    },
    {
      id: "TR-025",
      title: "Consultative Selling & High-Impact B2B Pitching",
      shortDescription: "Challenger sales methodology: Financial need discovery, multi-stakeholder pitching, cross-selling SME assets with wealth products.",
      duration: "5 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Senior Sales Director / Sherpa",
      rating: 4.9,
      tag: "Mandatory",
      category: "process",
      businessIds: ["corporate_sme", "wealth", "cleantech", "housing", "dsmg"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Move from transactional 'rate-based selling' to advisory 'solution-based lending'",
        "Map corporate decision-makers: Promoters, CFO, Head of Procurement, Chartered Accountants",
        "Structure multi-product relationships (Term Loan + Working Capital + Keyman Wealth Advisory)"
      ],
      whoShouldAttend: "Relationship managers, enterprise sales heads, and branch heads.",
      schedule: "Conducted monthly across commercial hub cities.",
      prerequisites: "Sales experience in corporate or financial services.",
      syllabus: [
        "1. The Modern CFO Mindset: Liquidity, Cost of Funds & Balance Sheet Optimization",
        "2. Uncovering Latent Needs through Diagnostic Questioning",
        "3. Structuring High-Value Proposals that Beat PSU and Private Bank Competition",
        "4. Live Roleplay: Pitching to an Industrial Equipment Manufacturer"
      ]
    },
    {
      id: "TR-026",
      title: "Cross-Functional Synergy: Credit, Sales & Operations Alignment",
      shortDescription: "Eliminating silos: Streamlining customer handover, reducing RFI (Request For Information) loops, and accelerating loan turnaround times.",
      duration: "3 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Head of Business Excellence",
      rating: 4.8,
      tag: "Recommended",
      category: "cross_functional",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Understand each function's KPIs and pain points in the loan lifecycle",
        "Drastically cut down Query Turnaround Time (TAT) through high First-Time-Right (FTR) file quality",
        "Foster a collaborative 'One Tata Capital' culture of mutual accountability"
      ],
      whoShouldAttend: "Branch managers, credit underwriters, sales managers, and disbursement ops.",
      schedule: "Quarterly joint cross-functional webinar.",
      prerequisites: "90 days of working tenure in current role.",
      syllabus: [
        "1. The Cost of Rework: How 1 Missing Document Costs 3 Days in TAT",
        "2. The 'First Time Right' (FTR) Checklist for Sourcing Teams",
        "3. Joint Credit & Sales Branch Alignment Rituals",
        "4. Resolving Conflicts between Target Pressures and Risk Guardrails"
      ]
    },
    {
      id: "TR-027",
      title: "Affordable Housing & PMAY Credit Guarantee Scheme",
      shortDescription: "Underwriting informal income borrowers: Cash flow surrogate methods, self-construction loans, and NHB subsidy compliance.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Affordable Housing Underwriting Lead",
      rating: 4.85,
      tag: "Mandatory",
      category: "product",
      businessIds: ["housing"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Appraise customers without formalized IT returns using informal business cashflow proxies",
        "Conduct physical residence & business verifications (PD - Personal Discussion) effectively",
        "Structure loans under Credit Risk Guarantee Fund Trust for Low Income Housing (CRGFTLIH)"
      ],
      whoShouldAttend: "Housing finance credit officers and branch relationship managers in Tier 2/3 markets.",
      schedule: "Regional training clusters.",
      prerequisites: "Housing Finance Essentials.",
      syllabus: [
        "1. Dynamics of the Affordable Housing & Informal Income Segment",
        "2. The Art of Personal Discussion (PD): Unearthing True Household Incomes",
        "3. Technical Evaluation: Gram Panchayat approvals, Patta land, title risks",
        "4. Sanctioning with Confidence: Mitigating Credit & Legal Vulnerabilities"
      ]
    },

    // ------------------- 180 DAYS: NEW & EXISTING -------------------
    {
      id: "TR-028",
      title: "Advanced Credit Risk Modeling & Early Warning Systems (EWS)",
      shortDescription: "Portfolio monitoring: Sectoral concentration risk, stress testing, default probability models, and proactive SMA-0/1 account actions.",
      duration: "8 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Risk Officer / Risk COE",
      rating: 4.96,
      tag: "Mandatory",
      category: "process",
      businessIds: ["corporate_sme", "housing", "motor", "cleantech", "corp_functions"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 180,
      objectives: [
        "Interpret Early Warning Signals: Sudden GST turnover drop, key management exits, MCA charge filings",
        "Deploy portfolio stress tests under simulated macroeconomic headwinds (interest rate hikes, inflation)",
        "Structure preventive mitigation: requesting additional collateral or stepping down exposure"
      ],
      whoShouldAttend: "Risk managers, mid-level credit officers, and corporate banking specialists.",
      schedule: "Bi-annual masterclass series.",
      prerequisites: "Financial Statement Analysis certification.",
      syllabus: [
        "1. Risk Governance: Risk Appetite Statement (RAS) & Tolerance Thresholds",
        "2. Constructing an EWS Trigger Dashboard with Real-Time External Feeds",
        "3. RBI Prudential Framework for Stressed Assets Resolution",
        "4. Simulator Exercise: Managing a Distressed Commercial Borrower Account"
      ]
    },
    {
      id: "TR-029",
      title: "High-Impact Business Storytelling & PowerPoint for Leaders",
      shortDescription: "Executive presentations: The Pyramid Principle, designing clean visual slides, data charts, and presenting to the Executive Committee.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Strategy & Transformation COE",
      rating: 4.88,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ppt",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 180,
      objectives: [
        "Apply Barbara Minto's Pyramid Principle: Lead with the recommendation, support with evidence",
        "Eliminate cluttered bullet points; design modern, high-contrast, corporate slides in minutes",
        "Present complex lending performance numbers with confidence, poise, and brevity"
      ],
      whoShouldAttend: "Team leaders, managers, and functional specialists presenting to leadership.",
      schedule: "Every third Friday.",
      prerequisites: "None.",
      syllabus: [
        "1. Structuring the Narrative: Situation, Complication, Question, Answer (SCQA)",
        "2. Slide Design Principles: Tata Capital brand guidelines, typography, visual hierarchy",
        "3. Turning Complex Data Tables into Intuitive Visual Charts",
        "4. Delivery Mastery: Managing Q&A, handling pushback, and timekeeping"
      ]
    },
    {
      id: "TR-030",
      title: "Generative AI in Credit & Document Summarization",
      shortDescription: "Deploying enterprise AI models to draft Credit Approval Memos (CAMs), extract legal clause summaries, and accelerate underwriting.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Digital Officer & AI Lab",
      rating: 4.94,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ai",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 180,
      objectives: [
        "Automate the extraction of covenants from 100-page loan sanction agreements",
        "Generate first-draft Credit Appraisal Memos (CAMs) from financial balance sheets securely",
        "Understand hallucination risks, model limitations, and the necessity of human-in-the-loop validation"
      ],
      whoShouldAttend: "Credit underwriters, product managers, digital teams, and business heads.",
      schedule: "Monthly hands-on AI sandbox sessions.",
      prerequisites: "Completion of Prompting Essentials.",
      syllabus: [
        "1. The AI-Augmented Underwriter: Vision & Practical Reality",
        "2. Live Sandbox: Generating a Credit Memo Draft in under 4 minutes",
        "3. Multi-modal AI: Extracting data from scanned bank cheques, title deeds, and NOCs",
        "4. Ethical AI & Model Governance in Regulated Lending"
      ]
    },
    {
      id: "TR-031",
      title: "SARFAESI Act & Legal Recovery Framework",
      shortDescription: "Secured asset enforcement: Demand notice under Sec 13(2), taking symbolic possession under Sec 13(4), CMM/DM court orders, and auction norms.",
      duration: "5 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Head of Legal & Litigation / Sherpa",
      rating: 4.9,
      tag: "Mandatory",
      category: "process",
      businessIds: ["housing", "corporate_sme", "motor"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 180,
      objectives: [
        "Master the timeline and statutory notice requirements under SARFAESI Act 2002",
        "Liaise effectively with District Magistrates (DM) and Chief Metropolitan Magistrates (CMM)",
        "Conduct transparent e-auctions complying with CIBIL, CERSAI, and public notice guidelines"
      ],
      whoShouldAttend: "Legal managers, collections heads, and recovery officers.",
      schedule: "Conducted quarterly at Regional Legal Hubs.",
      prerequisites: "Completion of 90-day collections training.",
      syllabus: [
        "1. Conditions Precedent for Triggering SARFAESI: NPA classification, debt > ₹1 Lakh",
        "2. Drafting and Serving Defect-Free Section 13(2) Demand Notices",
        "3. Overcoming Borrower Objections: Section 13(3A) handling timelines",
        "4. Physical Possession Execution under Section 14 and E-Auction Rules"
      ]
    },
    {
      id: "TR-032",
      title: "First-Time Manager: Transitioning from Individual Contributor to People Leader",
      shortDescription: "Core managerial competencies: 1-on-1 coaching, delegation, conflict resolution, motivating frontline teams, and psychological safety.",
      duration: "12 Hours (2 Days)",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Executive Leadership Coach & CHRO",
      rating: 4.92,
      tag: "Mandatory",
      category: "leadership",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 180,
      objectives: [
        "Shift mindset from 'doing the work' to 'enabling and empowering others to succeed'",
        "Conduct constructive weekly 1-on-1 coaching sessions that drive business results",
        "Manage performance dips with empathy, clarity, and documented PIP roadmaps"
      ],
      whoShouldAttend: "Newly promoted team leaders, branch heads, and managers with direct reports.",
      schedule: "Residential / 2-day offsite program at Tata Management Training Centre (TMTC) or regional venues.",
      prerequisites: "Managerial appointment or nomination by department head.",
      syllabus: [
        "1. The Identity Shift: From High Performer to People Catalyst",
        "2. The SBI Feedback Model (Situation - Behavior - Impact)",
        "3. Building High-Trust, High-Accountability Branch Cultures",
        "4. Difficult Conversations Workshop: Roleplay with Professional Actors"
      ]
    },
    {
      id: "TR-033",
      title: "Tata Affirmative Action Programme (TAAP) & Social Inclusion",
      shortDescription: "Driving affirmative action: The 4 Es (Education, Employability, Employment, Entrepreneurship) and inclusive lending to SC/ST communities.",
      duration: "2 Hours",
      mode: "E-Learning",
      level: "Intermediate",
      trainer: "TAAP Ethics Committee",
      rating: 4.88,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 180,
      objectives: [
        "Understand the Tata group's historic commitment to affirmative action and equality of opportunity",
        "Identify lending and micro-enterprise development opportunities for marginalized communities",
        "Participate actively in volunteering and skill-building initiatives organized by Tata Capital"
      ],
      whoShouldAttend: "All employees and managers.",
      schedule: "Self-paced module with interactive case examples.",
      prerequisites: "None.",
      syllabus: [
        "1. The Philosophy of TAAP: Beyond Mere Compliance to Real Social Empowerment",
        "2. The 4 Es Framework: Education, Employability, Employment & Entrepreneurship",
        "3. Case Studies of Microfinance Beneficiaries & Rural Entrepreneurs Supported by Tata Capital",
        "4. How You Can Champion Inclusion in Your Daily Hiring and Sourcing Practices"
      ]
    },

    // ------------------- 360+ DAYS: NEW & EXISTING -------------------
    {
      id: "TR-034",
      title: "Sherpa Programme: Train-The-Trainer (TTT) Certification",
      shortDescription: "Become an accredited Tata Capital Sherpa: Adult learning principles, interactive facilitation, question management, and co-teaching.",
      duration: "16 Hours (2 Days)",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Master Facilitators & CHRO",
      rating: 4.98,
      tag: "Recommended",
      isFeatured: true,
      category: "leadership",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 360,
      objectives: [
        "Master the 70:20:10 adult learning framework and instructional design principles",
        "Command physical and virtual classroom presence with energy, empathy, and authority",
        "Deliver a 20-minute capstone teaching demonstration evaluated by a senior leadership panel"
      ],
      whoShouldAttend: "Subject matter experts with 1+ year at Tata Capital who wish to train colleagues part-time.",
      schedule: "Quarterly 2-day bootcamps held at Mumbai Corporate Office and Bengaluru Hub.",
      prerequisites: "Managerial endorsement and approved Sherpa nomination.",
      syllabus: [
        "Day 1 Morning: How Adults Learn - Kolb's Learning Cycle & VAK Learning Styles",
        "Day 1 Afternoon: Presentation Architecture, Hooking Audiences & Handling Hecklers",
        "Day 2 Morning: Designing Impactful Exercises, Roleplays & Case Studies",
        "Day 2 Afternoon: Capstone Teach-Back Audition & Formal Accreditation Ceremony"
      ]
    },
    {
      id: "TR-035",
      title: "Advanced ESG & Sustainable Lending in Corporate Financing",
      shortDescription: "Financing the green transition: BRSR reporting norms, ESG due diligence in corporate credit, green taxonomy, and carbon credits.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Head of ESG & Sustainability",
      rating: 4.9,
      tag: "Recommended",
      category: "cross_functional",
      businessIds: ["cleantech", "corporate_sme", "corp_functions"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 360,
      objectives: [
        "Integrate Environmental, Social, and Governance (ESG) scorecards into credit appraisal memos",
        "Understand SEBI's Business Responsibility and Sustainability Reporting (BRSR) directives",
        "Structure green term loans with KPI-linked coupon discounts for sustainable borrowers"
      ],
      whoShouldAttend: "Senior relationship managers, credit risk leaders, and investment analysts.",
      schedule: "Bi-annual masterclass series.",
      prerequisites: "Underwriting experience.",
      syllabus: [
        "1. Global Climate Finance & India's COP Commitments",
        "2. The Tata Capital ESG Due Diligence Framework for Borrowers",
        "3. Transition Financing: Decarbonizing Cement, Steel, and Heavy Logistics",
        "4. Emerging Instruments: Sustainability-Linked Bonds & Carbon Offsetting"
      ]
    },
    {
      id: "TR-036",
      title: "Strategic P&L Management & Cluster Branch Leadership",
      shortDescription: "Leading multi-branch clusters: Cost of funds optimization, fee income drivers, credit loss provisioning, and RoE maximization.",
      duration: "10 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Managing Director & Chief Financial Officer",
      rating: 4.96,
      tag: "Mandatory",
      category: "leadership",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 360,
      objectives: [
        "Deconstruct a Branch P&L: Net Interest Margin (NIM), Operating Expenses, and Credit Provisions",
        "Optimize branch operating leverage and maximize Return on Assets (RoA) and Return on Equity (RoE)",
        "Build a succession plan and nurture second-line managers across your branch network"
      ],
      whoShouldAttend: "Cluster managers, area business heads, senior credit heads, and high-potential managers.",
      schedule: "Held bi-annually at Tata Management Training Centre (TMTC), Pune.",
      prerequisites: "Minimum 12 months in a supervisory or branch leadership role.",
      syllabus: [
        "1. Deconstructing the NBFC Business Model: From Liability Sourcing to Asset Yields",
        "2. Managing Non-Interest Fee Income: Insurance attachments, processing fees, loan advisory",
        "3. Credit Cost vs. Growth Trade-off: Navigating Economic Cycles",
        "4. Capstone Simulation: Turning Around an Underperforming Cluster in 6 Months"
      ]
    },
    {
      id: "TR-037",
      title: "RBI Master Directions: Advanced NBFC Regulatory Governance",
      shortDescription: "Scale-Based Regulation (SBR) deep dive: Capital adequacy (CRAR), NPA provisioning, large exposure frameworks (LEF), and supervisory reviews.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Compliance Officer & Company Secretary",
      rating: 4.92,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Understand the 4-layer Scale-Based Regulation (Base, Middle, Upper, Top Layer)",
        "Comply with Prudential Guidelines on Income Recognition, Asset Classification and Provisioning (IRACP)",
        "Prepare business units for RBI Annual Financial Inspections (AFI) with zero repeat observations"
      ],
      whoShouldAttend: "Senior managers, compliance coordinators, audit leads, and credit heads.",
      schedule: "Quarterly regulatory update clinic.",
      prerequisites: "1+ years experience in banking or NBFC compliance.",
      syllabus: [
        "1. RBI Scale-Based Regulation (SBR) Architecture and Tata Capital's Positioning",
        "2. Capital Adequacy Ratios (Tier-1 & Tier-2) and Risk-Weighted Assets (RWA) optimization",
        "3. Large Exposures Framework (LEF) and Connected Lending Rules",
        "4. Lessons from Regulatory Penalties in the Indian Financial Sector"
      ]
    },
    {
      id: "TR-038",
      title: "Mastering AI & Data Analytics for Business Growth",
      shortDescription: "Leveraging predictive lead scoring, customer lifetime value models, churn prevention, and conversational AI in lending.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Analytics Officer",
      rating: 4.89,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ai",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 360,
      objectives: [
        "Interpret machine learning propensity models to optimize sales conversion rates",
        "Utilize predictive delinquency algorithms to trigger pre-delinquency interventions",
        "Collaborate effectively with data scientists to formulate high-impact analytical hypotheses"
      ],
      whoShouldAttend: "Business heads, product managers, marketing leaders, and strategy teams.",
      schedule: "Monthly executive masterclass.",
      prerequisites: "Familiarity with basic business metrics.",
      syllabus: [
        "1. From Intuition to Data-Driven Lending: The Analytics Maturity Spectrum",
        "2. Propensity Scoring in Action: How We Deliver 3x Higher Cross-Sell Conversion",
        "3. Real-Time Fraud Analytics: Geolocation mismatches and device fingerprinting",
        "4. The Future of Autonomous Credit Underwriting"
      ]
    },
    // ------------------- EXTENDED MULTI-VERTICAL & CATEGORY COURSES -------------------
    {
      id: "TR-039",
      title: "Two-Wheeler Loans: Underwriting Rules, Dealer Subvention & RTO Pledging",
      shortDescription: "Specialized retail product training: Dealer margins, invoice validation, RTO hypothecation, and fast-track loan sanctions.",
      duration: "4 Hours",
      mode: "Classroom",
      level: "Beginner",
      trainer: "Two-Wheeler National Product Head",
      rating: 4.8,
      tag: "Mandatory",
      category: "product",
      businessIds: ["retail", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Learn loan-to-value (LTV) limits across electric and ICE two-wheeler models",
        "Verify dealer pro-forma invoices, insurance cover notes, and RTO pledge forms",
        "Optimize payout turnaround time for top auto dealership networks"
      ],
      whoShouldAttend: "Retail finance relationship managers, credit officers, and operations executives.",
      schedule: "Bi-weekly workshop at Regional Training Hubs.",
      prerequisites: "NEOP Orientation completed.",
      syllabus: [
        "1. Two-Wheeler Industry Landscape & Dealership Dynamics",
        "2. Credit Policy & Income Surrogates (Banking, ITR, Salary)",
        "3. RTO Form 20/34 Hypothecation Workflows & Vahan API Integration",
        "4. Handling Dealer Queries & TAT Acceleration"
      ]
    },
    {
      id: "TR-040",
      title: "Retail & Two-Wheeler Loan Origination in FinnOne Neo",
      shortDescription: "Systems mastery: File creation, document upload, automated deduping, BRE execution, and disbursement mandate generation.",
      duration: "3.5 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "FinnOne Lead Architect",
      rating: 4.9,
      tag: "Mandatory",
      category: "systems",
      businessIds: ["retail", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Master end-to-end data entry shortcuts in FinnOne Neo LOS",
        "Trigger Karza, CERSAI, and NSDL PAN verification APIs seamlessly",
        "Troubleshoot stuck application stages and queue management"
      ],
      whoShouldAttend: "Credit underwriters, branch operations officers, and sales team leads.",
      schedule: "Weekly virtual hands-on lab.",
      prerequisites: "System login credentials generated.",
      syllabus: [
        "1. FinnOne Neo Architecture & Role-Based Access Controls",
        "2. Sourcing to Underwriting Queue Hand-offs",
        "3. Resolving Rule Engine (BRE) Exception Alerts",
        "4. e-NACH Mandate Registration & Disbursement Trigger"
      ]
    },
    {
      id: "TR-041",
      title: "Turnaround Time (TAT) Optimization & First-Time-Right (FTR) Files",
      shortDescription: "Process excellence: Eliminate document re-queries, streamline credit verification, and achieve sub-4-hour disbursement.",
      duration: "3 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Business Excellence Master Black Belt",
      rating: 4.7,
      tag: "Recommended",
      category: "process",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Identify the top 5 causes of file re-queries by central credit",
        "Utilize the digital FTR pre-flight checklist before submitting proposals",
        "Cut average file processing TAT from 24 hours to 4 hours"
      ],
      whoShouldAttend: "All frontline sales managers, credit analysts, and branch operation teams.",
      schedule: "Monthly process efficiency clinic.",
      prerequisites: "Basic credit process familiarity.",
      syllabus: [
        "1. The Economics of Speed: Why TAT Drives Customer Conversion",
        "2. The 10-Point First-Time-Right Checklist for Frontline Teams",
        "3. Managing Credit Queries with Empathy and Precision",
        "4. Branch TAT Leaderboard Review"
      ]
    },
    {
      id: "TR-042",
      title: "Cross-Functional Synergy: Dealer Alliances, Sales & Risk Governance",
      shortDescription: "Collaborative growth: Aligning branch sales targets with portfolio risk thresholds and dealer network health.",
      duration: "4 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Regional Business Head & Risk Controller",
      rating: 4.8,
      tag: "Recommended",
      category: "cross_functional",
      businessIds: ["retail", "motor", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Resolve friction points between sales acquisition and risk underwriting",
        "Manage auto dealer trade advances and stock audit compliances",
        "Build joint action plans for healthy portfolio mix"
      ],
      whoShouldAttend: "Area sales managers, credit leads, and collections managers.",
      schedule: "Quarterly regional conclave.",
      prerequisites: "30+ days in branch role.",
      syllabus: [
        "1. Balancing Growth with Asset Quality: The Tata Capital Way",
        "2. Dealer Risk Profiling & Trade Advance Limits",
        "3. Resolving Escalations Between Sales and Credit",
        "4. Collaborative Early Bucket Delinquency Management"
      ]
    },
    {
      id: "TR-043",
      title: "Advanced Excel: Loan Amortization, IRR & Pivot Modeling for NBFCs",
      shortDescription: "Digital capability: Build dynamic loan repayment schedules, compute subvention IRR, and analyze delinquency cohorts.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Financial Analytics COE",
      rating: 4.9,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "excel",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Master PMT, PPMT, IPMT, and XIRR functions for complex loan structures",
        "Build interactive pivot tables to slice portfolio delinquency by branch and dealer",
        "Automate repetitive daily MIS reports using dynamic formulas"
      ],
      whoShouldAttend: "Relationship managers, MIS executives, credit underwriters, and finance leads.",
      schedule: "Conducted bi-weekly in Virtual Lab.",
      prerequisites: "Basic Excel familiarity.",
      syllabus: [
        "1. Loan Amortization Schedules & Advance EMI Modeling",
        "2. Computing XIRR with Processing Fees & Dealer Subventions",
        "3. Power Pivots, Slicers & Cohort Delinquency Heatmaps",
        "4. Building an Executive Branch KPI Dashboard in Excel"
      ]
    },
    {
      id: "TR-044",
      title: "PowerPoint Storytelling: Boardroom & Credit Committee Pitches",
      shortDescription: "Digital capability: Transform dense lending metrics into compelling visual presentations for leadership reviews.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "Corporate Strategy COE",
      rating: 4.8,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ppt",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Structure business proposals using the Pyramid Principle",
        "Design clear charts showing disbursement trends, NIM, and NPA ratios",
        "Present high-stakes credit deviation files persuasively"
      ],
      whoShouldAttend: "Branch managers, area managers, strategy analysts, and team leads.",
      schedule: "Monthly visual storytelling masterclass.",
      prerequisites: "None.",
      syllabus: [
        "1. The Architecture of High-Stakes Financial Decks",
        "2. Visualizing Credit Metrics Without Clutter",
        "3. Designing 1-Pager Executive Summaries",
        "4. Live Deck Critiques & Brand Palette Adherence"
      ]
    },
    {
      id: "TR-045",
      title: "AI Prompting Essentials: Drafting Credit Memos & Due Diligence",
      shortDescription: "Digital capability: Use enterprise Generative AI prompts to summarize balance sheets, legal title reports, and borrower risk profiles.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "AI Innovation Lab Lead",
      rating: 4.9,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ai",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 60,
      objectives: [
        "Formulate structured prompts for financial document analysis",
        "Extract critical risk covenants from long-form annual reports",
        "Comply with strict data privacy guidelines and PII redaction"
      ],
      whoShouldAttend: "Credit underwriters, product managers, risk analysts, and legal counsel.",
      schedule: "Bi-weekly hands-on sandbox.",
      prerequisites: "Access to Tata Capital AI Sandbox.",
      syllabus: [
        "1. Prompt Architecture for Financial Services",
        "2. Summarizing 50-Page Audit Reports in 60 Seconds",
        "3. Detecting Contradictions in Borrower Business Descriptions",
        "4. Enterprise Compliance & Safe AI Usage Protocols"
      ]
    },
    {
      id: "TR-046",
      title: "Housing Finance: Title Verification, LAP Valuation & CERSAI",
      shortDescription: "Product training: 13-year chain of title, non-encumbrance certificates, technical property valuation, and legal appraisal.",
      duration: "8 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Chief Legal Counsel & Technical Head",
      rating: 4.9,
      tag: "Mandatory",
      category: "product",
      businessIds: ["housing", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Evaluate title deeds, search reports, and revenue records (7/12, Khata, Patta)",
        "Review fair market valuation (FMV) vs distress valuation norms",
        "Execute timely CERSAI security interest creation"
      ],
      whoShouldAttend: "Housing finance loan officers, credit managers, and legal managers.",
      schedule: "Monthly classroom at Bengaluru & Mumbai Hubs.",
      prerequisites: "Basic mortgage lending experience.",
      syllabus: [
        "1. Title Documents & Chain Analysis (Freehold vs Leasehold)",
        "2. Technical Appraisal: Building Plan Sanctions & RERA Compliance",
        "3. Loan Against Property (LAP) Cash-Flow Underwriting",
        "4. Equitable vs Registered Mortgage Registration Protocol"
      ]
    },
    {
      id: "TR-047",
      title: "Commercial Vehicle & Fleet Financing Assessment",
      shortDescription: "Motor finance: Evaluating fleet operators, route profitability, FASTag cash-flow surrogates, and yard inspections.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Motor Finance Credit Head",
      rating: 4.7,
      tag: "Mandatory",
      category: "product",
      businessIds: ["motor", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Analyze transporter freight contracts and diesel cost sensitivities",
        "Inspect commercial vehicle chassis, fitness certificates, and permits",
        "Structure balloon repayment terms for seasonal fleet operators"
      ],
      whoShouldAttend: "Motor finance credit underwriters and relationship managers.",
      schedule: "Held quarterly at Chennai & Gurugram Hubs.",
      prerequisites: "Basic asset financing knowledge.",
      syllabus: [
        "1. Commercial Vehicle Industry Cycles & Tonnage Categories",
        "2. Cash Flow Estimation from FASTag, Tyre Wear & Trip Logs",
        "3. Used Vehicle Valuation & Yard Verification",
        "4. Repossession Rules & Legal Compliance"
      ]
    },
    {
      id: "TR-048",
      title: "Microfinance: Joint Liability Group (JLG) Center Discipline & RBI Code",
      shortDescription: "Rural finance: Group formation, center meeting protocols, qualitative cash flow evaluation, and fair practices.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Head - Microfinance Operations",
      rating: 4.8,
      tag: "Mandatory",
      category: "product",
      businessIds: ["microfinance", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Apply RBI microfinance master directions on household income assessment",
        "Conduct peer-guarantee verification in village center meetings",
        "Uphold customer protection and dignified recovery norms"
      ],
      whoShouldAttend: "Microfinance branch managers, loan officers, and field credit officers.",
      schedule: "Conducted at Regional Rural Hubs.",
      prerequisites: "Rural induction completed.",
      syllabus: [
        "1. JLG Social Collateral & Center Meeting Discipline",
        "2. Household Income Assessment (RBI 2022 Framework)",
        "3. Credit Life Insurance & Claim Settlement",
        "4. Ethics in Micro-Lending & Women Empowerment"
      ]
    },
    {
      id: "TR-049",
      title: "Corporate & SME: Working Capital Appraisal & GST Data Scrub",
      shortDescription: "Commercial lending: Balance sheet spreads, CMA data analysis, bank statement triangulation, and drawing power computation.",
      duration: "8 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "SME Credit Committee Chair",
      rating: 4.9,
      tag: "Mandatory",
      category: "product",
      businessIds: ["corporate_sme", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Triangulate GSTR-1, GSTR-3B with audited profit and loss statements",
        "Compute working capital cycles, debtor days, and inventory holding periods",
        "Draft credit appraisal memos (CAM) for mid-market manufacturing and trading units"
      ],
      whoShouldAttend: "SME relationship managers, credit analysts, and risk officers.",
      schedule: "Monthly corporate credit academy.",
      prerequisites: "Financial accounting foundations.",
      syllabus: [
        "1. SME Financial Statement Analysis & Accounting Tricks",
        "2. GST vs Bank Credit vs Financial Statement Reconciliation",
        "3. Drawing Power Calculation & Collateral Valuation",
        "4. Covenant Structuring & Early Warning Triggers"
      ]
    },
    {
      id: "TR-050",
      title: "Wealth Advisory: High-Net-Worth Advisory & PMS Due Diligence",
      shortDescription: "Wealth management: Portfolio construction, SEBI mutual fund regulations, sovereign gold bonds, and private wealth advisory.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Investment Officer",
      rating: 4.9,
      tag: "Mandatory",
      category: "product",
      businessIds: ["wealth", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Design asset allocation models matching HNI risk appetites",
        "Analyze portfolio alpha, beta, Sharpe ratio, and drawdown metrics",
        "Ensure full adherence to SEBI investment advisor guidelines"
      ],
      whoShouldAttend: "Wealth managers, private bankers, and investment counselors.",
      schedule: "Bi-monthly executive market briefing.",
      prerequisites: "NISM certification completed.",
      syllabus: [
        "1. Macroeconomic Drivers & Multi-Asset Allocation",
        "2. PMS & AIF Structuring for Ultra-HNIs",
        "3. Estate Planning, Family Trusts & Sovereign Gold Bonds",
        "4. SEBI Suitability Profiling & Regulatory Governance"
      ]
    },
    {
      id: "TR-051",
      title: "DSMG: Outbound Acquisition, Partner Distribution & DND Norms",
      shortDescription: "Direct sales: Building DSA distribution channels, telephone sales scripts, conversion funnels, and TRAI telecom compliance.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "National Direct Sales Head",
      rating: 4.7,
      tag: "Mandatory",
      category: "product",
      businessIds: ["dsmg", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Recruit, onboard, and manage Direct Selling Agents (DSAs)",
        "Execute outbound lead generation while adhering strictly to Do-Not-Disturb (DND) norms",
        "Track lead conversion funnels and cost-of-acquisition metrics"
      ],
      whoShouldAttend: "DSMG managers, team leaders, and channel managers.",
      schedule: "Weekly sales enablement clinic.",
      prerequisites: "None.",
      syllabus: [
        "1. DSA Empanelment, Due Diligence & Commission Structures",
        "2. Tele-Calling Scripting & Objection Turnaround",
        "3. Strict Compliance with TRAI DND Guidelines & Calling Hours",
        "4. Digital Lead Routing via Salesforce CRM"
      ]
    },
    {
      id: "TR-052",
      title: "Cleantech: Solar Rooftop Project Appraisal & Green Bond Standards",
      shortDescription: "Sustainable lending: Solar feasibility studies, power purchase agreements (PPA), carbon credits, and ESG underwriting.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Head - Cleantech Financing",
      rating: 4.9,
      tag: "Mandatory",
      category: "product",
      businessIds: ["cleantech", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Appraise technical solar rooftop generation yields and tier-1 module standards",
        "Evaluate tripartite PPA contracts with industrial and commercial off-takers",
        "Verify ESG eligibility for Green Bond refinancing"
      ],
      whoShouldAttend: "Cleantech credit underwriters, relationship leads, and sustainability analysts.",
      schedule: "Monthly green finance workshop.",
      prerequisites: "Project finance fundamentals.",
      syllabus: [
        "1. India's Renewable Energy Push & Solar Rooftop Policy",
        "2. PPA Contract Structuring & Counterparty Credit Risk",
        "3. Generation Ratio (PR) & Technical Due Diligence",
        "4. ESG Metrics Reporting to Institutional Green Investors"
      ]
    },
    {
      id: "TR-053",
      title: "Corporate Functions: Enterprise Risk, Audit Trails & Statutory Compliance",
      shortDescription: "Support functions: Managing ALM supervisory returns, internal audit scrutiny, regulatory reporting, and board filings.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Chief Risk Officer & Legal Head",
      rating: 4.8,
      tag: "Mandatory",
      category: "product",
      businessIds: ["corp_functions", "all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Maintain zero-error audit trails across financial and credit workflows",
        "Execute timely submissions for RBI returns and statutory filings",
        "Conduct departmental risk control self-assessments (RCSA)"
      ],
      whoShouldAttend: "Risk, audit, legal, compliance, secretarial, and finance teams.",
      schedule: "Held quarterly at Thane Corporate Office.",
      prerequisites: "None.",
      syllabus: [
        "1. Enterprise Risk Management (ERM) Framework at Tata Capital",
        "2. RBI Inspection Readiness & Supervisory Audit Trail Standards",
        "3. Operational Risk Incidents Reporting & Root Cause Analysis",
        "4. Board Committee Presentation Standards"
      ]
    },
    {
      id: "TR-054",
      title: "Early Warning Signals (EWS) & Soft Collections Calling Playbook",
      shortDescription: "Process training: Spot early delinquent triggers at 1-30 DPD, resolve borrower cash mismatches, and maintain dignity in recovery.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Intermediate",
      trainer: "National Collections Head",
      rating: 4.8,
      tag: "Mandatory",
      category: "process",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Analyze portfolio early warning alerts (bounce spikes, bureau score drops)",
        "Conduct polite, firm, and compliant collection calls per RBI Fair Practices Code",
        "Negotiate structured settlement and loan rescheduling terms"
      ],
      whoShouldAttend: "Collections managers, branch credit officers, and customer service teams.",
      schedule: "Bi-weekly collections clinic.",
      prerequisites: "TCOC completed.",
      syllabus: [
        "1. The 1-30 DPD Golden Window: Why Timely Contact Matters",
        "2. Permissible Calling Hours & Prohibited Harassment Practices",
        "3. Psychological Objection Handling for Delinquent Borrowers",
        "4. Digital Payment Link Generation & Instant Receipting"
      ]
    },
    {
      id: "TR-055",
      title: "Salesforce CRM: Lead Pipeline Hygiene & Conversion Acceleration",
      shortDescription: "Systems training: Managing the entire lead pipeline, activity logging, lead scoring, and automated reminders in CRM.",
      duration: "3 Hours",
      mode: "Virtual",
      level: "Beginner",
      trainer: "CRM Technology Lead",
      rating: 4.7,
      tag: "Mandatory",
      category: "systems",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Log customer meetings, calls, and follow-ups accurately in Salesforce CRM",
        "Interpret automated lead scoring to prioritize high-intent borrowers",
        "Prevent lead leakage and meet daily sales SLA targets"
      ],
      whoShouldAttend: "All frontline sales officers, branch relationship managers, and DSMG staff.",
      schedule: "Weekly virtual demo & practice lab.",
      prerequisites: "Salesforce mobile app installed.",
      syllabus: [
        "1. Salesforce Mobile & Desktop Interface Navigation",
        "2. Lead Creation, Allocation & Stage Progression",
        "3. Integrating CIBIL Pull Within CRM Before Sourcing",
        "4. Daily Calling Planner & Sales Activity Dashboard"
      ]
    },
    {
      id: "TR-056",
      title: "Consultative Selling & High-Impact Customer Pitching",
      shortDescription: "Leadership & behavioural: Master consultative discovery questions, overcome price objections, and articulate 'Count on Us' value.",
      duration: "4 Hours",
      mode: "Classroom",
      level: "Intermediate",
      trainer: "Senior Sales Sherpa",
      rating: 4.9,
      tag: "Recommended",
      category: "leadership",
      businessIds: ["all"],
      employeeTypes: ["new", "existing"],
      milestoneDays: 90,
      objectives: [
        "Transition from product-push selling to solution-oriented consultative advisory",
        "Master the 4-step objection turnaround technique for interest rate comparisons",
        "Build long-term customer loyalty and generate high-quality organic referrals"
      ],
      whoShouldAttend: "Sales executives, branch managers, and customer relationship officers.",
      schedule: "Monthly classroom workshop at Regional Hubs.",
      prerequisites: "Basic sales experience.",
      syllabus: [
        "1. The Psychology of the Indian Borrower: Trust vs Rate Sensitivity",
        "2. Conducting High-Value Discovery Conversations",
        "3. Handling 'Bank X is offering 0.5% lower' with Grace and Value",
        "4. Roleplay Simulations with Senior Faculty Feedback"
      ]
    },
    {
      id: "TR-057",
      title: "Advanced Bureau Scrub: De-duping CIBIL, CRIF & Experian Red Flags",
      shortDescription: "Product & underwriting: Detect inquiries velocity, ghost credit lines, disputed remarks, and masked overdue accounts.",
      duration: "5 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Senior Risk Underwriter",
      rating: 4.9,
      tag: "Mandatory",
      category: "product",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Identify aggressive unsecured borrowing patterns across multiple lenders in 30 days",
        "Analyze SMA-1, SMA-2 flags and written-off / settled historical remarks",
        "Formulate data-backed credit policy deviations with appropriate risk mitigants"
      ],
      whoShouldAttend: "Senior credit underwriters, risk managers, and branch credit heads.",
      schedule: "Monthly credit underwriting academy.",
      prerequisites: "90+ days in credit underwriting.",
      syllabus: [
        "1. Bureau Algorithms Decoded: CIBIL vs CRIF Highmark vs Experian",
        "2. Identifying Synthetic Identities & Credit File Cloning",
        "3. Evaluating Settled/Written-Off Loan Waivers",
        "4. Crafting Robust Credit Sanction Conditions (Pre & Post Disbursal)"
      ]
    },
    {
      id: "TR-058",
      title: "Credit Committee Protocol: Handling Multi-Crore Deviations",
      shortDescription: "Process excellence: Formulate risk-mitigated deviation proposals, calculate RAROC, and defend cases before senior management.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Member - Apex Credit Committee",
      rating: 4.9,
      tag: "Mandatory",
      category: "process",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Structure multi-crore credit committee presentations with clear risk-reward trade-offs",
        "Apply Risk-Adjusted Return on Capital (RAROC) thresholds before seeking exceptions",
        "Present cases persuasively with pre-emptive answers to senior management queries"
      ],
      whoShouldAttend: "Senior relationship managers, area credit heads, and corporate underwriters.",
      schedule: "Bi-monthly credit forum.",
      prerequisites: "Minimum 6 months in credit/sales role.",
      syllabus: [
        "1. Credit Delegation of Powers (DoP) & Escalation Hierarchy",
        "2. Crafting Bullet-Proof Credit Memos for Deviations",
        "3. Collateral Haircuts, Personal Guarantees & Escrow Mechanisms",
        "4. Mock Credit Committee Hearing with Live Cross-Examination"
      ]
    },
    {
      id: "TR-059",
      title: "Core Banking API Integrations: Karza, Account Aggregator & e-NACH",
      shortDescription: "Systems training: Deep dive into fintech API gateways, automated bank statement pulls, e-Sign, and digital stamp duty.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Fintech Integrations COE",
      rating: 4.8,
      tag: "Recommended",
      category: "systems",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Troubleshoot API gateway failures between FinnOne and Account Aggregator entities",
        "Verify digital signatures and NeSL digital stamping validity",
        "Accelerate paperless customer onboarding to under 15 minutes"
      ],
      whoShouldAttend: "Operations managers, branch systems leads, and digital underwriting champions.",
      schedule: "Monthly digital operations clinic.",
      prerequisites: "Basic FinnOne knowledge.",
      syllabus: [
        "1. The Digital Lending Tech Stack at Tata Capital",
        "2. Account Aggregator Consent Flow & Error Resolution",
        "3. NeSL Digital Stamping & e-Sign Legal Enforceability",
        "4. Managing API Downtime with Fallback Operating Procedures"
      ]
    },
    {
      id: "TR-060",
      title: "Legal Recovery & SARFAESI Enforcement Framework",
      shortDescription: "Cross-functional training: Section 13(2) notices, physical possession, DRT filings, and legal coordination.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Head - Litigation & Legal Recovery",
      rating: 4.8,
      tag: "Mandatory",
      category: "cross_functional",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Execute legal recovery milestones per the SARFAESI Act, 2002",
        "Draft flawless Section 13(2) and Section 13(4) statutory possession notices",
        "Coordinate with district magistrates and local authorities for peaceful possession"
      ],
      whoShouldAttend: "Legal managers, collections heads, branch managers, and credit controllers.",
      schedule: "Quarterly legal workshop at Regional Hubs.",
      prerequisites: "6+ months collections experience.",
      syllabus: [
        "1. Statutory Timeline of SARFAESI Actions",
        "2. Section 13(2) Demand Notice & 60-Day Representation Protocol",
        "3. Section 14 Application to Chief Metropolitan Magistrate",
        "4. Public Auction, Reserve Price Fixing & Asset Sale Formalities"
      ]
    },
    {
      id: "TR-061",
      title: "Enterprise Generative AI: Automating Financial Due Diligence",
      shortDescription: "Digital capability: Build customized AI workflows to parse 3 years of audited financials and draft standardized credit notes.",
      duration: "5 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Digital Officer & AI Sherpa",
      rating: 4.9,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ai",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Automate financial spreadsheet ingestion and variance highlighting using AI",
        "Generate automated executive risk summaries for credit files",
        "Supervise AI outputs with human-in-the-loop validation"
      ],
      whoShouldAttend: "Senior credit underwriters, risk modelers, and digital champions.",
      schedule: "Monthly AI Masterclass.",
      prerequisites: "Prompting Essentials completed.",
      syllabus: [
        "1. Autonomous Document Understanding in Lending",
        "2. Building Multi-Year Financial Spread Models with AI",
        "3. Automated Credit Committee Note Drafting",
        "4. Ethical AI, Bias Audits & Model Governance"
      ]
    },
    {
      id: "TR-062",
      title: "Financial Macro Modeling & Dynamic Scenarios in Excel",
      shortDescription: "Digital capability: Build multi-scenario financial models, stress-test interest rate shocks, and compute debt service coverage.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Financial Analytics COE",
      rating: 4.9,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "excel",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Construct 3-statement financial forecasting models in Excel",
        "Perform sensitivity stress-testing on borrower DSCR under 200 bps rate hikes",
        "Build dynamic scenario managers for corporate and mortgage borrowers"
      ],
      whoShouldAttend: "Credit analysts, corporate relationship managers, and treasury specialists.",
      schedule: "Bi-monthly modeling bootcamp.",
      prerequisites: "Intermediate Excel proficiency.",
      syllabus: [
        "1. Dynamic Financial Statement Modeling Architecture",
        "2. Building Sensitivity Tables for DSCR & Interest Coverage",
        "3. Monte Carlo Simulation for Probability of Default (PD)",
        "4. Designing Board-Ready Executive Dashboards"
      ]
    },
    {
      id: "TR-063",
      title: "RBI Master Directions & NBFC Compliance Audit Defense",
      shortDescription: "Compliance mastery: Prepare branches for internal risk audits and statutory RBI supervisory inspections with zero observations.",
      duration: "5 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Compliance Officer & Secretarial Team",
      rating: 4.9,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Comply with Scale-Based Regulation (SBR) guidelines for Upper-Layer NBFCs",
        "Ensure 100% adherence to customer complaint redressed timelines and Ombudsman scheme",
        "Conduct mock audit drills to verify loan docket preservation and KYC archives"
      ],
      whoShouldAttend: "Branch managers, compliance officers, and operations heads.",
      schedule: "Bi-monthly compliance clinic.",
      prerequisites: "6+ months NBFC experience.",
      syllabus: [
        "1. RBI SBR Regulatory Architecture & Core Capital Norms",
        "2. Customer Rights, Transparency & Fair Practices Code Enforcement",
        "3. Internal Audit Checklist: The 25 Most Frequent Deficiencies",
        "4. Ombudsman Escalation Handling & Root-Cause Remediation"
      ]
    },
    {
      id: "TR-064",
      title: "Situational Leadership: Transitioning to People Leader (TMTC Pune)",
      shortDescription: "Leadership development: 2-day flagship offsite program at TMTC Pune for emerging branch managers and team leads.",
      duration: "16 Hours (2 Days)",
      mode: "Classroom",
      level: "Advanced",
      trainer: "TMTC Leadership Faculty & CHRO",
      rating: 5.0,
      tag: "Recommended",
      category: "leadership",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 180,
      objectives: [
        "Transition successfully from individual star performer to visionary team coach",
        "Conduct constructive performance appraisals and developmental feedback sessions",
        "Drive collective branch target achievement while minimizing employee attrition"
      ],
      whoShouldAttend: "First-time managers, prospective branch heads, and senior team leaders.",
      schedule: "Conducted bi-annually at TMTC Pune.",
      prerequisites: "Nomination by Business Head & CHRO.",
      syllabus: [
        "1. The Leadership Transition: From Doing to Enabling",
        "2. Situational Leadership Styles: Directing, Coaching, Supporting, Delegating",
        "3. Managing Team Conflict & Building High-Trust Psychological Safety",
        "4. Personal Leadership Development Plan (LDP) & 360-Degree Feedback Review"
      ]
    },
    {
      id: "TR-065",
      title: "Strategic Branch P&L Management & Sustainable Balance Sheet Growth",
      shortDescription: "Product & business leadership: Manage Net Interest Margin (NIM), branch cost-to-income, fee income, and asset quality.",
      duration: "8 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Managing Director & CFO",
      rating: 5.0,
      tag: "Mandatory",
      category: "product",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Deconstruct a branch balance sheet and P&L statement line-by-line",
        "Balance yield expansion with credit cost management",
        "Drive non-fund fee income through cross-sell and ancillary services"
      ],
      whoShouldAttend: "Branch heads, cluster heads, regional managers, and senior credit leaders.",
      schedule: "Bi-annual executive conclave.",
      prerequisites: "Minimum 12 months tenure.",
      syllabus: [
        "1. The Anatomy of an NBFC Branch P&L",
        "2. Managing Cost of Funds, NIM & Opex Ratios",
        "3. Credit Cost vs Yield Trade-off Strategies",
        "4. Formulating the Annual Branch Operating Plan (AOP)"
      ]
    },
    {
      id: "TR-066",
      title: "Process Re-engineering & Digital Lending Automation",
      shortDescription: "Process leadership: Redesign end-to-end customer journeys to eliminate operational friction and achieve sub-1-hour approvals.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Operating Officer",
      rating: 4.9,
      tag: "Recommended",
      category: "process",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Map customer value streams and eliminate non-value-adding manual touchpoints",
        "Implement automated STP (Straight-Through Processing) for retail loan products",
        "Design real-time exception monitoring dashboards"
      ],
      whoShouldAttend: "Operations heads, business excellence champions, and technology partners.",
      schedule: "Quarterly transformation forum.",
      prerequisites: "Process training certification.",
      syllabus: [
        "1. Lean Six Sigma in Financial Services",
        "2. Achieving 85%+ Straight-Through Processing (STP)",
        "3. Robotic Process Automation (RPA) in Credit Operations",
        "4. Measuring Customer Effort Score (CES) & Operational ROI"
      ]
    },
    {
      id: "TR-067",
      title: "Next-Gen LMS & Digital Learning Architecture for Tata Capital",
      shortDescription: "Systems leadership: Leverage AI-driven adaptive learning, micro-credentials, and real-time compliance tracking engines.",
      duration: "4 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Head - Digital Learning Technologies",
      rating: 4.8,
      tag: "Recommended",
      category: "systems",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Configure automated compliance re-certification triggers for thousands of staff",
        "Deploy mobile-first microlearning modules for frontline sales agents",
        "Integrate learning analytics with HRMS talent review frameworks"
      ],
      whoShouldAttend: "L&D partners, HR business partners, and training leads.",
      schedule: "Quarterly EdTech workshop.",
      prerequisites: "LMS admin or trainer profile.",
      syllabus: [
        "1. Modern Learning Architecture in Financial Institutions",
        "2. AI Adaptive Learning Pathways & Skill Gap Analytics",
        "3. Mobile Microlearning Design for Distributed Sales Forces",
        "4. Measuring Training ROI with Kirkpatrick Model Level 4"
      ]
    },
    {
      id: "TR-068",
      title: "Enterprise ALM, Liquidity Governance & Treasury Management",
      shortDescription: "Cross-functional governance: Managing Asset-Liability Committee (ALCO) frameworks, liquidity coverage ratios (LCR), and interest rate risk.",
      duration: "6 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Head - Treasury & Chief Financial Officer",
      rating: 5.0,
      tag: "Mandatory",
      category: "cross_functional",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Understand structural liquidity gap statements across 1-day to 5-year buckets",
        "Analyze dynamic liquidity coverage ratios (LCR) per RBI norms",
        "Evaluate commercial paper, NCDs, and bank term loan borrowing mix"
      ],
      whoShouldAttend: "Treasury managers, senior risk heads, corporate finance leads, and ALCO members.",
      schedule: "Bi-annual treasury academy.",
      prerequisites: "Corporate finance experience.",
      syllabus: [
        "1. Principles of NBFC Treasury & Balance Sheet Funding",
        "2. Asset-Liability Matching & Interest Rate Sensitivity Scenarios",
        "3. Liquidity Risk Management & High-Quality Liquid Assets (HQLA)",
        "4. ALCO Committee Presentations & Regulatory Reporting"
      ]
    },
    {
      id: "TR-069",
      title: "Generative AI in Lending: Strategic Roadmap & Board Governance",
      shortDescription: "Digital leadership: Enterprise GenAI deployment, credit scoring models, responsible AI ethics, and ROI governance.",
      duration: "6 Hours",
      mode: "Virtual",
      level: "Advanced",
      trainer: "Chief Digital Officer & External AI SME",
      rating: 5.0,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ai",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Formulate a 3-year AI transformation roadmap for retail and corporate lending",
        "Establish responsible AI governance policies to prevent model bias and hallucination",
        "Measure business productivity gains from AI copilot deployments across divisions"
      ],
      whoShouldAttend: "Executive leadership, business heads, and technology steering committee.",
      schedule: "Quarterly executive masterclass.",
      prerequisites: "Nomination by Chief Digital Officer.",
      syllabus: [
        "1. The Global Landscape of Generative AI in Financial Services",
        "2. Case Studies: Automated Underwriting, Chatbots & Fraud Detection",
        "3. Ethical AI, Algorithmic Transparency & Model Risk Management",
        "4. Building an AI-First Culture at Tata Capital"
      ]
    },
    {
      id: "TR-070",
      title: "Executive Boardroom Storytelling & C-Suite Data Presentations",
      shortDescription: "Digital leadership: Craft high-stakes strategic slide decks, synthesize multi-billion balance sheet results, and lead executive discussions.",
      duration: "5 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Head - Corporate Strategy & Investor Relations",
      rating: 4.9,
      tag: "Recommended",
      category: "digital",
      digitalSubCategory: "ppt",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Synthesize complex financial and operational performance into 5-slide executive briefs",
        "Master the art of the executive Q&A before the Board of Directors and institutional investors",
        "Use advanced PowerPoint visual layouts that command attention and drive quick decisions"
      ],
      whoShouldAttend: "Business heads, functional leaders, and senior executive assistants.",
      schedule: "Held quarterly at Mumbai Corporate Office.",
      prerequisites: "Leadership role.",
      syllabus: [
        "1. The Psychology of the Boardroom: What Directors Look For",
        "2. The 5-Slide Executive Pitch Architecture",
        "3. Turning Multi-Variable Financial Data into Actionable Visuals",
        "4. Live Boardroom Simulation with Executive Committee Feedback"
      ]
    },
    {
      id: "TR-071",
      title: "Tata Code of Conduct (TCOC) Apex Leadership & Ethics Council",
      shortDescription: "Compliance leadership: Serving as branch ethics counselors, investigating whistle-blower complaints, and upholding Tata heritage.",
      duration: "4 Hours",
      mode: "Classroom",
      level: "Advanced",
      trainer: "Group Ethics Officer & Chief Legal Officer",
      rating: 5.0,
      tag: "Mandatory",
      category: "compliance",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Investigate ethical dilemmas with strict confidentiality and impartiality",
        "Serve as trusted ethics counselors for branch employees",
        "Uphold zero-tolerance governance across all vendor, customer, and employee dealings"
      ],
      whoShouldAttend: "Branch managers, ethics counselors, HR heads, and senior leadership.",
      schedule: "Annual ethics leadership summit.",
      prerequisites: "1+ years at Tata Capital.",
      syllabus: [
        "1. The Tata Ethical Legacy: Lessons from 150 Years",
        "2. Investigating POSH & Whistleblower Complaints: Due Process & Evidence",
        "3. Managing Grey Scenarios in Business Targets vs Ethical Bounds",
        "4. Institutionalizing Ethics as a Strategic Advantage"
      ]
    },
    {
      id: "TR-072",
      title: "Master Sherpa Certification: Coaching Future SME Champions",
      shortDescription: "Flagship leadership movement: Train-The-Trainer advanced certification to mentor, assess, and certify the next generation of Sherpas.",
      duration: "16 Hours (2 Days)",
      mode: "Classroom",
      level: "Advanced",
      trainer: "CHRO & Master Sherpa Council",
      rating: 5.0,
      tag: "Mandatory",
      category: "leadership",
      businessIds: ["all"],
      employeeTypes: ["existing"],
      milestoneDays: 360,
      objectives: [
        "Master adult learning principles, experiential roleplays, and classroom dynamics",
        "Design institutional curriculum modules for rapid employee capability uplift",
        "Receive formal institutional accreditation as a Tata Capital Master Sherpa"
      ],
      whoShouldAttend: "Approved Sherpa nominees with vintage employee tenure (>180 days).",
      schedule: "Held quarterly at TMTC Pune & Mumbai HQ.",
      prerequisites: "Vintage employee status (180+ days) & approved Sherpa nomination.",
      syllabus: [
        "1. The Sherpa Philosophy: Why Top Leaders Teach",
        "2. Curriculum Design & Experiential Case Study Facilitation",
        "3. Managing Difficult Classrooms & Inspiring Frontline Staff",
        "4. Live 30-Minute Teaching Audition & Formal Master Sherpa Induction"
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. COMPLIANCE MODULES (The 5 Core Mandatory Modules + Cyber)
  // ----------------------------------------------------------------------------
  complianceModules: [
    {
      id: "comp-tcoc",
      code: "TCOC-2024",
      title: "Tata Code of Conduct (TCOC)",
      shortName: "TCOC",
      description: "Core values, conflict of interest, gift policies, anti-bribery, fair competition, and confidential reporting.",
      mandatory: true,
      duration: "120 Mins",
      frequency: "Annual",
      dueDate: "31 Oct 2024",
      status: "completed", // completed, in_progress, overdue, upcoming
      progressPercent: 100,
      score: "94%",
      regulator: "Tata Sons / Board of Directors",
      certificateAvailable: true,
      badgeColor: "success"
    },
    {
      id: "comp-posh",
      code: "POSH-2024",
      title: "Prevention of Sexual Harassment (POSH)",
      shortName: "POSH",
      description: "Legal protections under PoSH Act 2013, creating a safe work culture, bystander intervention, and redressal mechanisms.",
      mandatory: true,
      duration: "90 Mins",
      frequency: "Annual",
      dueDate: "15 Nov 2024",
      status: "completed",
      progressPercent: 100,
      score: "98%",
      regulator: "Ministry of Women & Child Development / ICC",
      certificateAvailable: true,
      badgeColor: "success"
    },
    {
      id: "comp-fpc",
      code: "RBI-FPC-2024",
      title: "Fair Practices Code (FPC) for NBFCs",
      shortName: "Fair Practices Code",
      description: "Mandatory RBI framework: Transparent loan terms, KFS disclosures, grievance redressal, and fair collection agent practices.",
      mandatory: true,
      duration: "110 Mins",
      frequency: "Annual",
      dueDate: "30 Nov 2024",
      status: "in_progress",
      progressPercent: 65,
      score: null,
      regulator: "Reserve Bank of India (RBI)",
      certificateAvailable: false,
      badgeColor: "warning"
    },
    {
      id: "comp-kyc",
      code: "AML-KYC-2024",
      title: "KYC & Anti-Money Laundering (PMLA)",
      shortName: "KYC & AML",
      description: "Customer identification norms, beneficial ownership, CKYC records, Politically Exposed Persons (PEPs), and STR reporting.",
      mandatory: true,
      duration: "150 Mins",
      frequency: "Annual",
      dueDate: "15 Dec 2024",
      status: "upcoming",
      progressPercent: 0,
      score: null,
      regulator: "FIU-IND & Reserve Bank of India",
      certificateAvailable: false,
      badgeColor: "info"
    },
    {
      id: "comp-taap",
      code: "TAAP-2024",
      title: "Tata Affirmative Action Programme (TAAP)",
      shortName: "TAAP & Diversity",
      description: "Affirmative action philosophy, positive discrimination for SC/ST/marginalized communities, and inclusive workplace practices.",
      mandatory: true,
      duration: "60 Mins",
      frequency: "Annual",
      dueDate: "31 Dec 2024",
      status: "upcoming",
      progressPercent: 0,
      score: null,
      regulator: "Tata Sons Affirmative Action Council",
      certificateAvailable: false,
      badgeColor: "info"
    },
    {
      id: "comp-cyber",
      code: "INFOSEC-2024",
      title: "Information Security & Data Protection (DPDP)",
      shortName: "Infosec & DPDP",
      description: "Digital Personal Data Protection Act 2023, cyber hygiene, phishing prevention, customer data privacy, and clean desk norms.",
      mandatory: true,
      duration: "75 Mins",
      frequency: "Half-Yearly",
      dueDate: "20 Oct 2024", // Flagged overdue or urgent for demo
      status: "in_progress",
      progressPercent: 40,
      score: null,
      regulator: "CERT-In & Data Protection Board of India",
      certificateAvailable: false,
      badgeColor: "danger"
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. SHERPA SME TRAINER PROGRAMME DATA
  // ----------------------------------------------------------------------------
    sherpaInfo: {
    title: "Project Sherpa: Leaders Developing Leaders",
    tagline: "Subject Matter Experts from the Business, Shaping the Next Generation of Tata Capital",
    description: "The Sherpa Programme identifies outstanding practitioners across all businesses—underwriters, sales champions, risk specialists, and legal counsels—and trains them to become high-impact internal consultants and part-time trainers alongside their regular business roles.",
    stats: [
      { label: "Active Sherpas", value: "148", icon: "fa-solid fa-person-chalkboard" },
      { label: "Training Hours Delivered", value: "2,450+", icon: "fa-solid fa-clock" },
      { label: "Average Learner Rating", value: "4.88 / 5.0", icon: "fa-solid fa-star" },
      { label: "Business Verticals Covered", value: "9 of 9", icon: "fa-solid fa-layer-group" }
    ],
    // 4-Step Process Graphic (Fully interactive & detailed)
    processSteps: [
      {
        step: 1,
        title: "Nominate & Endorse",
        subtitle: "Self-Nomination & Business Head Approval",
        desc: "Submit your domain expertise, preferred teaching topics, and secure formal endorsement from your Reporting Manager and Business Head.",
        icon: "fa-solid fa-file-signature",
        badge: "Step 1: Prerequisites",
        timeline: "Tenure >= 180 Days (Vintage)",
        details: {
          prerequisite: "Minimum 180 days (6 months) tenure in Tata Capital with consistently strong PMS rating (Top 25% performers).",
          deliverables: "Detailed domain expertise dossier, 2 proposed course syllabi, and managerial endorsement form.",
          evaluation: "Screened and shortlisted by the Central L&D Advisory Council and Vertical Business Head."
        }
      },
      {
        step: 2,
        title: "Train-The-Trainer (TTT) Boot Camp",
        subtitle: "2-Day Intensive Facilitation Masterclass",
        desc: "Master adult learning principles, interactive case study design, classroom engagement, and pass a rigorous capstone teach-back audition.",
        icon: "fa-solid fa-chalkboard-user",
        badge: "Step 2: Certification",
        timeline: "2 Full Days (Off-site Workshop)",
        details: {
          prerequisite: "Council shortlisting from Step 1.",
          deliverables: "Design a 45-minute lending case study module with PowerPoint slides, participant handouts, and quiz assessments.",
          evaluation: "Live teach-back audition evaluated by Master Facilitators and HR Leadership on clarity, structure, and audience engagement."
        }
      },
      {
        step: 3,
        title: "Cohort Facilitation & Co-Teaching",
        subtitle: "Live Classroom Delivery with Mentorship",
        desc: "Facilitate 2 to 4 high-impact training workshops per quarter for new joiners and upskilling batches, co-mentored by a senior Sherpa.",
        icon: "fa-solid fa-users-viewfinder",
        badge: "Step 3: Business Delivery",
        timeline: "Quarterly Cohort Workshops",
        details: {
          prerequisite: "Successful clearance of TTT Boot Camp audition.",
          deliverables: "Conduct scheduled training cohorts for frontline credit, sales, and operations staff across regional hubs.",
          evaluation: "Real-time digital learner feedback with mandatory threshold of >= 4.5/5.0 star Net Promoter Score."
        }
      },
      {
        step: 4,
        title: "Rewards, Recognition & Internal Consultant Status",
        subtitle: "Executive Accreditation & Institutional Prestige",
        desc: "Receive formal executive certification, Sherpa lapel pins, high-performance appraisal credits, and recognition as an Internal Domain Consultant.",
        icon: "fa-solid fa-award",
        badge: "Step 4: Prestigious RnR",
        timeline: "Annual Conclave & Appraisal Cycles",
        details: {
          prerequisite: "Completion of at least 40 training hours delivered with >= 4.75 average participant rating.",
          deliverables: "Cross-functional consulting: advise other Tata Capital lending business units on credit policies and operational streamlining.",
          evaluation: "Felicitation at Annual Sherpa Conclave with MD & CEO, special PMS leadership credits, and executive succession pipeline entry."
        }
      }
    ],
    // Voices of Our Sherpas (Focus on Internal Consultant Programme)
    testimonials: [
      {
        name: "Devendra Kulkarni",
        designation: "Cluster Credit Head - Housing Finance (Sherpa since 2021)",
        business: "Housing Finance, Pune",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        quote: "Project Sherpa elevated me from an operational credit underwriter to a recognized Internal Business Consultant. Through this programme, I consulted with our Microfinance and SME teams to standardize informal income assessment proxies. It accelerated my promotion to Cluster Head!"
      },
      {
        name: "Pooja Singhania",
        designation: "Senior Relationship Manager - Corporate & SME (Sherpa since 2022)",
        business: "Corporate & SME, Mumbai",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        quote: "The Sherpa programme gave me the platform to act as a strategic advisor. When facilitating financial statement modeling, I consult directly with new branch managers on spotting early default warning signals in balance sheets. It's the most prestigious internal consultant role at Tata Capital."
      },
      {
        name: "Siddheshwar Rao",
        designation: "Regional Operations Head - Two-Wheeler & Motor Finance (Sherpa since 2023)",
        business: "Two-Wheeler & Motor, Hyderabad",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        quote: "Being a certified Sherpa consultant allowed me to lead the digital underwriting transition across 34 branches in Andhra Pradesh and Telangana. The executive recognition from MD and CHRO during the Annual RnR Conclave was a defining moment in my career."
      }
    ],
    // Sherpa Event Photos (Curated for RnR, TTT, Classroom Delivery, Branch Mentoring)
    gallery: [
      {
        title: "Annual Sherpa Conclave & RnR Awards Ceremony",
        date: "July 2026",
        category: "RnR & Awards",
        location: "The Taj Lands End, Mumbai",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        caption: "Top-rated Sherpas felicitated with executive trophies and certificates by MD & CEO Rajiv Sabharwal and CHRO Avijit Bhattacharya."
      },
      {
        title: "Train-The-Trainer (TTT) 2-Day Facilitation Boot Camp",
        date: "September 2026",
        category: "TTT Boot Camp",
        location: "Tata Capital Corporate Headquarters, Thane",
        image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
        caption: "Batch 14 Sherpa candidates mastering interactive classroom facilitation, adult learning pedagogy, and capstone teach-back auditions."
      },
      {
        title: "Sherpa Facilitator Delivering Credit Appraisal Masterclass",
        date: "October 2026",
        category: "Classroom Training",
        location: "Regional Training Center, Peninsula Corporate Park, Mumbai",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        caption: "Sherpa Devendra actively training a cohort of 35 frontline credit underwriters on CIBIL ratio scrubbing and risk mitigation."
      },
      {
        title: "Frontline Branch Coaching & Retail Field Mentoring",
        date: "November 2026",
        category: "Field Coaching",
        location: "Pune Cluster Branch",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        caption: "Sherpa mentor conducting live one-on-one branch file coaching and customer personal discussion (PD) verification drills."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 7. KNOW YOUR TRAININGS (MONTHLY SCHEDULE - APRIL TO MARCH)
  // ----------------------------------------------------------------------------
  months: [
    "April", "May", "June", "July", "August", "September", 
    "October", "November", "December", "January", "February", "March"
  ],

  // Monthly assigned training records
  monthlySchedules: {
    "April": [
      { id: "SCH-01", courseTitle: "New Employee Orientation Programme (NEOP)", date: "10-11 Apr", time: "09:30 AM - 05:30 PM", mode: "Classroom", trainer: "L&D Induction Team", status: "Completed", venue: "Corporate Training Hall, Floor 3" },
      { id: "SCH-02", courseTitle: "Tata Code of Conduct (TCOC) E-Learning", date: "18 Apr", time: "Self-Paced", mode: "E-Learning", trainer: "Ethics Team", status: "Completed", venue: "LMS Portal" },
      { id: "SCH-03", courseTitle: "Core Loan Origination System (LOS) & FinnOne Neo", date: "24 Apr", time: "02:30 PM - 06:30 PM", mode: "Virtual", trainer: "IT Ops Sherpa", status: "Completed", venue: "Microsoft Teams" }
    ],
    "May": [
      { id: "SCH-04", courseTitle: "POSH & Safe Workplace Norms Certification", date: "08 May", time: "Self-Paced", mode: "E-Learning", trainer: "ICC Committee", status: "Completed", venue: "LMS Portal" },
      { id: "SCH-05", courseTitle: "Essential Excel for Everyday Lending Operations", date: "15 May", time: "03:00 PM - 06:00 PM", mode: "Virtual", trainer: "Analytics COE", status: "Completed", venue: "Microsoft Teams" },
      { id: "SCH-06", courseTitle: "Retail Lending Foundations: Unsecured Economics", date: "22 May", time: "10:00 AM - 04:00 PM", mode: "Classroom", trainer: "Product Team", status: "Attended", venue: "Regional Hub Delhi" }
    ],
    "June": [
      { id: "SCH-07", courseTitle: "Digital KYC, CKYC & Anti-Money Laundering (PMLA)", date: "12 Jun", time: "Self-Paced", mode: "E-Learning", trainer: "Compliance Team", status: "Completed", venue: "LMS Portal" },
      { id: "SCH-08", courseTitle: "Credit Underwriting & Bureau Scrub: CIBIL & Experian", date: "19 Jun", time: "02:00 PM - 06:00 PM", mode: "Virtual", trainer: "Senior Underwriter", status: "Completed", venue: "Microsoft Teams" },
      { id: "SCH-09", courseTitle: "Banking Analysis & Account Aggregator Ecosystem", date: "27 Jun", time: "02:30 PM - 05:30 PM", mode: "Virtual", trainer: "Fintech Lead", status: "Not Attended", venue: "Microsoft Teams" }
    ],
    "July": [
      { id: "SCH-10", courseTitle: "Banking Analysis & Account Aggregator (Re-Scheduled)", date: "05 Jul", time: "02:30 PM - 05:30 PM", mode: "Virtual", trainer: "Fintech Lead", status: "Completed", venue: "Microsoft Teams" },
      { id: "SCH-11", courseTitle: "Fair Practices Code (FPC) for NBFCs", date: "14 Jul", time: "Self-Paced", mode: "E-Learning", trainer: "Regulatory Team", status: "In Progress", venue: "LMS Portal" },
      { id: "SCH-12", courseTitle: "Prompting Essentials with AI for Financial Productivity", date: "24 Jul", time: "03:00 PM - 06:00 PM", mode: "Virtual", trainer: "AI Lab Sherpa", status: "Completed", venue: "Microsoft Teams" }
    ],
    "August": [
      { id: "SCH-13", courseTitle: "Financial Statement Analysis & Ratio Mastery", date: "08 Aug", time: "09:30 AM - 05:30 PM", mode: "Virtual", trainer: "Corporate Credit Head", status: "Completed", venue: "Zoom Studio" },
      { id: "SCH-14", courseTitle: "Collections & Recovery: Ethical Negotiation", date: "19 Aug", time: "10:00 AM - 04:00 PM", mode: "Classroom", trainer: "National Collections Lead", status: "Completed", venue: "Regional Hub Mumbai" },
      { id: "SCH-15", courseTitle: "Consultative Selling & High-Impact B2B Pitching", date: "28 Aug", time: "02:00 PM - 06:00 PM", mode: "Classroom", trainer: "Sales Sherpa", status: "Attended", venue: "Branch Hub Pune" }
    ],
    "September": [
      { id: "SCH-16", courseTitle: "Cross-Functional Synergy: Credit, Sales & Ops", date: "11 Sep", time: "03:00 PM - 06:00 PM", mode: "Virtual", trainer: "Business Excellence Head", status: "Completed", venue: "Microsoft Teams" },
      { id: "SCH-17", courseTitle: "Advanced Data Analysis & Business MIS in Excel", date: "20 Sep", time: "02:30 PM - 06:30 PM", mode: "Virtual", trainer: "MIS Specialist", status: "Completed", venue: "Microsoft Teams" },
      { id: "SCH-18", courseTitle: "Information Security & Data Protection (DPDP)", date: "26 Sep", time: "Self-Paced", mode: "E-Learning", trainer: "CISO Office", status: "In Progress", venue: "LMS Portal" }
    ],
    "October": [
      { id: "SCH-19", courseTitle: "High-Impact Business Storytelling & PowerPoint", date: "09 Oct", time: "03:00 PM - 06:00 PM", mode: "Virtual", trainer: "Strategy COE", status: "Completed", venue: "Microsoft Teams" },
      { id: "SCH-20", courseTitle: "Generative AI in Credit & Document Summarization", date: "17 Oct", time: "02:00 PM - 06:00 PM", mode: "Virtual", trainer: "Chief Digital Officer", status: "In Progress", venue: "AI Sandbox" },
      { id: "SCH-21", courseTitle: "SARFAESI Act & Legal Recovery Masterclass", date: "25 Oct", time: "10:00 AM - 03:00 PM", mode: "Classroom", trainer: "Litigation Sherpa", status: "Upcoming", venue: "Thane Boardroom" }
    ],
    "November": [
      { id: "SCH-NV01", courseTitle: "New Employee Orientation Programme (NEOP) - Day 1", date: "02 Nov", time: "09:30 AM - 05:30 PM", mode: "Classroom", trainer: "L&D Induction Team", status: "Upcoming", venue: "Corporate Hall Floor 3 & Live Stream" },
      { id: "SCH-NV02", courseTitle: "NEOP Day 2: FinnOne Neo, LOS & Infosec Workflows", date: "03 Nov", time: "09:30 AM - 05:30 PM", mode: "Hands-on Lab", trainer: "IT Ops & CISO Team", status: "Upcoming", venue: "Systems Lab, Thane" },
      { id: "SCH-NV03", courseTitle: "Tata Code of Conduct (TCOC) 2026 Annual Refresher", date: "05 Nov", time: "Self-Paced (2 hrs)", mode: "E-Learning", trainer: "Ethics Counsellor", status: "Upcoming", venue: "LMS Portal" },
      { id: "SCH-NV04", courseTitle: "Fair Practices Code (FPC) & RBI Digital Lending Masterclass", date: "06 Nov", time: "10:00 AM - 01:00 PM", mode: "Virtual", trainer: "Chief Compliance Officer", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-NV05", courseTitle: "Two-Wheeler & Retail Credit Underwriting: Bureau Scrub (CIBIL/CRIF)", date: "09 Nov", time: "02:00 PM - 05:30 PM", mode: "Virtual", trainer: "Senior Underwriting Sherpa", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-NV06", courseTitle: "Banking Analysis & Account Aggregator Ecosystem Deep-Dive", date: "10 Nov", time: "10:30 AM - 01:30 PM", mode: "Virtual", trainer: "Fintech COE Lead", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-NV07", courseTitle: "Prevention of Sexual Harassment (POSH) Interactive Certification", date: "12 Nov", time: "03:00 PM - 05:00 PM", mode: "Virtual", trainer: "Internal Complaints Committee", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-NV08", courseTitle: "Digital KYC, AML & Beneficial Ownership Verification Workshop", date: "13 Nov", time: "10:00 AM - 01:00 PM", mode: "Virtual", trainer: "Regulatory Affairs Team", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-NV09", courseTitle: "Generative AI & Prompt Engineering in Credit & Documentation", date: "16 Nov", time: "02:30 PM - 05:30 PM", mode: "Hands-on Virtual", trainer: "AI Lab Sherpa", status: "Upcoming", venue: "AI Innovation Studio" },
      { id: "SCH-NV10", courseTitle: "Sherpa Faculty Train-The-Trainer Boot Camp (Cohort Nov 2026)", date: "17 Nov", time: "09:30 AM - 05:30 PM", mode: "Classroom", trainer: "CHRO & Master Sherpas", status: "Upcoming", venue: "TMTC Pune / Mumbai HQ" }
    ],
    "December": [
      { id: "SCH-25", courseTitle: "Annual Compliance Audit Readiness Clinic", date: "05 Dec", time: "03:00 PM - 05:30 PM", mode: "Virtual", trainer: "Audit Lead", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-26", courseTitle: "Sherpa Train-The-Trainer Boot Camp (Cohort 15)", date: "12-13 Dec", time: "09:30 AM - 06:00 PM", mode: "Classroom", trainer: "CHRO & Master Sherpas", status: "Upcoming", venue: "Mumbai H.O." }
    ],
    "January": [
      { id: "SCH-27", courseTitle: "Q4 Business Strategy & Sourcing Acceleration", date: "09 Jan", time: "02:00 PM - 05:00 PM", mode: "Virtual", trainer: "Business Heads", status: "Upcoming", venue: "Townhall Live" },
      { id: "SCH-28", courseTitle: "Advanced ESG & Sustainable Lending in Corporate Financing", date: "23 Jan", time: "02:30 PM - 06:30 PM", mode: "Virtual", trainer: "ESG Head", status: "Upcoming", venue: "Microsoft Teams" }
    ],
    "February": [
      { id: "SCH-29", courseTitle: "Strategic P&L Management & Cluster Branch Leadership", date: "11 Feb", time: "09:30 AM - 06:00 PM", mode: "Classroom", trainer: "MD & CFO", status: "Upcoming", venue: "TMTC Pune" },
      { id: "SCH-30", courseTitle: "Mastering AI & Predictive Lead Scoring in Lending", date: "20 Feb", time: "03:00 PM - 06:00 PM", mode: "Virtual", trainer: "Analytics Head", status: "Upcoming", venue: "Microsoft Teams" }
    ],
    "March": [
      { id: "SCH-31", courseTitle: "Year-End Collections Sprint & Settlement Protocol", date: "06 Mar", time: "02:00 PM - 05:00 PM", mode: "Virtual", trainer: "Collections Head", status: "Upcoming", venue: "Microsoft Teams" },
      { id: "SCH-32", courseTitle: "FY26 Regulatory Outlook & Policy Revisions", date: "20 Mar", time: "03:00 PM - 05:30 PM", mode: "Virtual", trainer: "Compliance Head", status: "Upcoming", venue: "Microsoft Teams" }
    ]
  },

  // Dedicated New Employee Orientation Checklist (Shown in Know Your Trainings)
  orientationSchedule: [
    { day: "Day 1", topic: "Welcome to Tata Capital, Legacy & Core Values", faculty: "CHRO & L&D Team", status: "Completed", icon: "fa-solid fa-handshake" },
    { day: "Day 2", topic: "Systems, Tools, FinnOne Neo & Infosec Setup", faculty: "IT Support & CISO Office", status: "Completed", icon: "fa-solid fa-laptop-code" },
    { day: "Day 3", topic: "Business Verticals, Products & Credit Policies", faculty: "Vertical Business Heads", status: "Completed", icon: "fa-solid fa-chart-pie" },
    { day: "Day 4", topic: "Mandatory Compliance: TCOC, POSH, KYC & FPC", faculty: "Ethics Counsellor & Legal", status: "In Progress", icon: "fa-solid fa-shield-halved" },
    { day: "Day 5", topic: "Branch Walkthrough, Customer Persona & Buddy Meet", faculty: "Branch Manager & Induction Buddy", status: "Upcoming", icon: "fa-solid fa-map-location-dot" }
  ],

  // ----------------------------------------------------------------------------
  // 8. ENGAGEMENT: GALLERY, NEWSLETTERS & FEEDBACK
  // ----------------------------------------------------------------------------
  engagement: {
    galleryAlbums: [
      {
        id: "album-1",
        title: "Annual L&D Conclave 2024",
        category: "Conclaves",
        count: 14,
        cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        description: "Over 450 leaders and star learners assembled at Taj Lands End to celebrate institutional growth."
      },
      {
        id: "album-2",
        title: "Digital Upskilling AI Sandbox Workshops",
        category: "Technology",
        count: 8,
        cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        description: "Hands-on prompting and automated underwriting sessions across Mumbai, Gurugram, and Bengaluru."
      },
      {
        id: "album-3",
        title: "Branch Excellence & Customer Delight Drills",
        category: "Field Training",
        count: 22,
        cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
        description: "Frontline relationship managers mastering consultative objection handling and empathy."
      },
      {
        id: "album-4",
        title: "Sherpa Facilitator Induction Cohort 13",
        category: "Sherpa",
        count: 11,
        cover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        description: "The graduation ceremony of 32 new Subject Matter Experts accredited as Tata Capital Sherpas."
      }
    ],

    newsletters: [
      {
        id: "nl-q3-2024",
        title: "The Learning Curve - Q3 2024 Edition",
        tag: "Latest Release",
        date: "September 2024",
        coverImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
        summary: "Special Issue: How Generative AI is reshaping credit underwriting; Spotlight on 12 new Sherpas; 100% compliance achievement in Housing Finance.",
        readTime: "6 Mins Read",
        topics: ["AI in Lending", "Sherpa Spotlight", "Quarterly Quiz Winners", "Microfinance Milestones"]
      },
      {
        id: "nl-q2-2024",
        title: "The Learning Curve - Q2 2024 Edition",
        tag: "Quarterly Digest",
        date: "June 2024",
        coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
        summary: "Focus on RBI's Fair Practices Code revisions; Green financing trends in Cleantech; First-time manager transition insights from TMTC Pune.",
        readTime: "7 Mins Read",
        topics: ["Fair Practice Regulations", "Cleantech Boom", "Leadership Offsite", "Employee Stories"]
      },
      {
        id: "nl-q1-2024",
        title: "The Learning Curve - Annual Kickoff Issue",
        tag: "Special Edition",
        date: "April 2024",
        coverImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
        summary: "Managing Director's vision address for the new financial year; Launch of the 360-degree journey milestones roadmap on L&D portal.",
        readTime: "5 Mins Read",
        topics: ["MD Vision 2025", "Milestones Roadmap", "Top Learner Badges", "Ethics Month Wrap-up"]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 9. MANAGER DASHBOARD DATA (FOR MANAGER ROLE VIEW)
  // ----------------------------------------------------------------------------
  managerData: {
    teamStats: {
      teamSize: 12,
      overallCompletionRate: "84.2%",
      mandatoryComplianceRate: "91.5%",
      overdueLearners: 2,
      activeSherpasInTeam: 2,
      totalHoursLogged: "468 Hours"
    },
    // Stepper Distribution: How many members are at each milestone
    milestoneDistribution: [
      { milestone: "30 Days", count: 2, behindCount: 0, status: "on-track" },
      { milestone: "60 Days", count: 3, behindCount: 1, status: "needs-attention" },
      { milestone: "90 Days", count: 2, behindCount: 0, status: "on-track" },
      { milestone: "180 Days", count: 3, behindCount: 1, status: "needs-attention" },
      { milestone: "360+ Days", count: 2, behindCount: 0, status: "on-track" }
    ],
    // Team Members List (Realistic placeholder profiles)
    teamMembers: [
      {
        id: "EMP-1042",
        name: "Aakash Varma",
        role: "Relationship Manager",
        business: "Retail Finance",
        type: "New Employee",
        daysSinceJoining: 24,
        currentMilestone: "30 Days",
        assignedCount: 6,
        completedCount: 5,
        complianceStatus: "Compliant",
        isOverdue: false,
        isSherpa: false,
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1038",
        name: "Sneha Nair",
        role: "Credit Officer",
        business: "Housing Finance",
        type: "New Employee",
        daysSinceJoining: 48,
        currentMilestone: "60 Days",
        assignedCount: 8,
        completedCount: 5,
        complianceStatus: "Overdue (DPDP)",
        isOverdue: true,
        isSherpa: false,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1029",
        name: "Rohan Kulkarni",
        role: "Area Sales Manager",
        business: "Retail Finance",
        type: "Existing Employee",
        daysSinceJoining: 210,
        currentMilestone: "180 Days",
        assignedCount: 12,
        completedCount: 12,
        complianceStatus: "Compliant",
        isOverdue: false,
        isSherpa: true,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1015",
        name: "Priyanka Sen",
        role: "Operations Associate",
        business: "Corporate & SME",
        type: "New Employee",
        daysSinceJoining: 72,
        currentMilestone: "90 Days",
        assignedCount: 9,
        completedCount: 8,
        complianceStatus: "Compliant",
        isOverdue: false,
        isSherpa: false,
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1004",
        name: "Mohit Batra",
        role: "Senior Underwriter",
        business: "Motor Finance",
        type: "Existing Employee",
        daysSinceJoining: 420,
        currentMilestone: "360+ Days",
        assignedCount: 15,
        completedCount: 14,
        complianceStatus: "Compliant",
        isOverdue: false,
        isSherpa: true,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1051",
        name: "Ananya Iyer",
        role: "Legal Counsel",
        business: "Corporate Functions",
        type: "Existing Employee",
        daysSinceJoining: 165,
        currentMilestone: "180 Days",
        assignedCount: 10,
        completedCount: 6,
        complianceStatus: "Overdue (FPC)",
        isOverdue: true,
        isSherpa: false,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1065",
        name: "Tanmay Ghosh",
        role: "Wealth Advisor",
        business: "Wealth",
        type: "New Employee",
        daysSinceJoining: 15,
        currentMilestone: "30 Days",
        assignedCount: 5,
        completedCount: 4,
        complianceStatus: "Compliant",
        isOverdue: false,
        isSherpa: false,
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "EMP-1077",
        name: "Deepak Mehra",
        role: "Collections Executive",
        business: "Retail Finance",
        type: "Existing Employee",
        daysSinceJoining: 85,
        currentMilestone: "90 Days",
        assignedCount: 9,
        completedCount: 9,
        complianceStatus: "Compliant",
        isOverdue: false,
        isSherpa: false,
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
      }
    ]
  },


  // ----------------------------------------------------------------------------
  // 4B. SELF-LEARNING & E-LEARNING BASKET (ANYTIME, ANYWHERE MICROLEARNING)
  // ----------------------------------------------------------------------------
  eLearning: {
    overview: {
      title: "Tata Capital Self-Learning Academy",
      subtitle: "Bite-sized microlearning, leadership masterclasses, and interactive underwriting simulators available on-demand 24/7.",
      totalModules: 18,
      avgCompletionTime: "12 mins",
      certifiedLearners: 1240
    },
    categories: [
      { id: "all", name: "All Self-Paced Modules", icon: "fa-solid fa-border-all" },
      { id: "micro", name: "Microlearning (5-15 min)", icon: "fa-solid fa-bolt" },
      { id: "masterclass", name: "Leadership Masterclasses", icon: "fa-solid fa-chalkboard-user" },
      { id: "digital_ai", name: "AI & Digital Tools", icon: "fa-solid fa-robot" },
      { id: "simulator", name: "Interactive Lending Simulators", icon: "fa-solid fa-gamepad" }
    ],
    modules: [
      {
        id: "EL-001",
        title: "Reading Bank Statements for Retail & Two-Wheeler Loans",
        category: "micro",
        duration: "12 mins",
        level: "Beginner",
        rating: 4.9,
        completions: 890,
        badge: "Essential",
        desc: "Master average bank balance (ABB), outward cheque returns, and salary credits detection in 12 minutes.",
        lessonContent: {
          keyTakeaways: [
            "ABB Calculation: Sum of end-of-day balances divided by number of days in the month",
            "Cheque Return Red Flags: Inward vs Outward returns and their direct impact on borrower bureau score",
            "EMI Debit Clustering: Identifying un-disclosed loans and personal borrowings from bank statements"
          ],
          quizQuestion: "What does multiple ECS/NACH outward return indicate in a borrower bank statement?",
          quizOptions: [
            "Healthy cash flow liquidity and excess reserves",
            "Severe cash crunch and high credit default risk",
            "Eligibility for instant loan top-up and higher sanction",
            "Positive relationship with banking partners"
          ],
          correctOptionIndex: 1
        }
      },
      {
        id: "EL-002",
        title: "RBI Master Directions on Digital Lending: 5 Core Rules",
        category: "micro",
        duration: "15 mins",
        level: "Intermediate",
        rating: 4.8,
        completions: 740,
        badge: "Mandatory",
        desc: "Key regulatory boundaries: Disbursals directly into borrower accounts, cooling-off periods, and Key Fact Statements (KFS).",
        lessonContent: {
          keyTakeaways: [
            "All disbursements must execute directly to borrower bank account with zero pass-through",
            "Key Fact Statement (KFS) in standardized format is mandatory before loan agreement execution",
            "Cooling-off / look-up period allows borrower to exit without penalty"
          ],
          quizQuestion: "Under RBI Digital Lending norms, who must disburse the loan funds?",
          quizOptions: [
            "Any unregulated third-party lending app partner",
            "Directly from the regulated NBFC's bank account to the borrower",
            "Cash disbursement at retail dealer counter",
            "Direct transfer to lending service provider's escrow account"
          ],
          correctOptionIndex: 1
        }
      },
      {
        id: "EL-003",
        title: "Credit Underwriting Decision Simulator: Case #TW-8042",
        category: "simulator",
        duration: "10 mins",
        level: "Intermediate",
        rating: 4.9,
        completions: 610,
        badge: "Hands-on",
        desc: "Interactive branch simulation: Analyze income documents, CIBIL 680, and decide: Approve, Reject, or Refer.",
        lessonContent: {
          keyTakeaways: [
            "Evaluating debt-to-income (FOIR) ratio with two-wheeler ticket sizes",
            "Balancing credit score nuances with stable job vintage",
            "Applying risk-based pricing and co-applicant structuring"
          ],
          quizQuestion: "Borrower FOIR is 42% (within 50% policy limit) but CIBIL has one 30-day DPD from 18 months ago. What is the recommended decision?",
          quizOptions: [
            "Instant rejection with permanent adverse remark",
            "Approve with standard interest rate after verifying clean 12-month track record",
            "Double the processing fee without documentation",
            "Forward to legal recovery department"
          ],
          correctOptionIndex: 1
        }
      },
      {
        id: "EL-004",
        title: "GenAI Prompting for Credit & Due Diligence Summaries",
        category: "digital_ai",
        duration: "14 mins",
        level: "All Levels",
        rating: 4.9,
        completions: 1120,
        badge: "Trending",
        desc: "Learn exact prompt recipes to extract balance sheet risks, synthesize annual reports, and draft credit appraisal memos.",
        lessonContent: {
          keyTakeaways: [
            "System prompts for structured financial extraction: Input, Constraints, Target Schema",
            "Never paste unredacted PII (Personally Identifiable Information) into public LLMs",
            "Cross-verifying LLM outputs against audited financial statements"
          ],
          quizQuestion: "What is the critical compliance rule when using AI tools for credit analysis?",
          quizOptions: [
            "Paste full unredacted customer Aadhaar and PAN numbers freely",
            "Always mask customer PII and ensure internal enterprise AI safeguards are utilized",
            "Allow AI to automatically disburse loans without human underwriting sign-off",
            "Never use AI for any analytical tasks"
          ],
          correctOptionIndex: 1
        }
      },
      {
        id: "EL-005",
        title: "Spotting FCU Red Flags: Fraud Prevention in Lending",
        category: "micro",
        duration: "11 mins",
        level: "Beginner",
        rating: 4.8,
        completions: 830,
        badge: "High Impact",
        desc: "Detect manipulated salary slips, fake company letters, altered bank statements, and suspicious geo-locations.",
        lessonContent: {
          keyTakeaways: [
            "Font inconsistencies and pixelation in PDF payslips indicate digital alteration",
            "Verifying employer existence via MCA-21 and EPFO portal",
            "Checking utility bill addresses against borrower physical verification reports"
          ],
          quizQuestion: "What should an underwriter do upon finding inconsistent PDF metadata and misaligned fonts in a payslip?",
          quizOptions: [
            "Ignore it if the loan amount is small",
            "Trigger a field investigation and refer the file to the Fraud Control Unit (FCU)",
            "Disburse immediately to hit month-end target",
            "Delete the document from the loan file"
          ],
          correctOptionIndex: 1
        }
      },
      {
        id: "EL-006",
        title: "Masterclass: Building High-Trust Customer Relationships",
        category: "masterclass",
        duration: "18 mins",
        level: "Advanced",
        rating: 4.9,
        completions: 590,
        badge: "Executive",
        desc: "Executive session by Tata Capital Leadership on living the 'Count on Us' promise during tough credit conversations.",
        lessonContent: {
          keyTakeaways: [
            "Trust is built on absolute transparency: Zero hidden fees or fine print surprises",
            "Empathy during collection cycles protects long-term customer franchise value",
            "The Tata Code of Conduct as a competitive business differentiator"
          ],
          quizQuestion: "What defines the Tata Capital 'Count on Us' customer promise?",
          quizOptions: [
            "Selling the highest margin product regardless of borrower suitability",
            "Transparent terms, ethical advisory, and responsive service at every interaction",
            "Maximizing penalty charges on delayed payments",
            "Automating customer interactions with zero human touchpoints"
          ],
          correctOptionIndex: 1
        }
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 9B. REVIEWER / CLUSTER DASHBOARD DATA (CLUSTER HEAD & REGIONAL REVIEWER)
  // ----------------------------------------------------------------------------
  reviewerData: {
    reviewerName: "Siddik Ghaniwala (Cluster Reviewer)",
    clusterZone: "West Zone - Cluster 3 (Mumbai Suburban & Thane)",
    clustersCount: 4,
    totalSupervised: 48,
    pendingSignOffs: 6,
    avgComplianceRate: "91.8%",
    escalatedOverdues: 3,
    clusters: [
      { name: "South Mumbai Hub", branches: 4, learners: 14, completionRate: "94.2%", pendingApprovals: 1, status: "Healthy" },
      { name: "Thane Corporate Cluster", branches: 5, learners: 16, completionRate: "92.0%", pendingApprovals: 2, status: "Healthy" },
      { name: "Navi Mumbai Hub", branches: 3, learners: 10, completionRate: "88.5%", pendingApprovals: 2, status: "Needs Attention" },
      { name: "Kalyan-Dombivli Cluster", branches: 3, learners: 8, completionRate: "86.0%", pendingApprovals: 1, status: "Needs Attention" }
    ],
    pendingCertifications: [
      { id: "CERT-901", employeeName: "Rahul Sawant", branch: "Thane West", course: "Two-Wheeler Credit Underwriting Accreditation", date: "12 Nov 2026", status: "Pending Review" },
      { id: "CERT-902", employeeName: "Kavita Rane", branch: "Fort H.O.", course: "Fair Practices Code & RBI Lending Norms", date: "14 Nov 2026", status: "Pending Review" },
      { id: "CERT-903", employeeName: "Amitabh Joshi", branch: "Vashi Hub", course: "FinnOne Neo LOS Operations Sign-Off", date: "15 Nov 2026", status: "Pending Review" },
      { id: "CERT-904", employeeName: "Neha Kulkarni", branch: "Panvel Cluster", course: "KYC & Anti-Money Laundering Certification", date: "16 Nov 2026", status: "Pending Review" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 9C. BUSINESS HEAD DASHBOARD DATA (e.g. TWO-WHEELER / RETAIL FINANCE HEAD)
  // ----------------------------------------------------------------------------
  bizHeadData: {
    verticalName: "Retail Finance - Two-Wheeler & Consumer Lending",
    businessHead: "Siddik Ghaniwala (Business Head)",
    totalFrontlineForce: 420,
    nationalBranches: 85,
    underwritingAccreditationRate: "94.2%",
    salesForceProductCertified: "96.5%",
    overallReadinessIndex: "95.1%",
    zonalBreakdown: [
      { zone: "West Zone (Maharashtra, Gujarat, Goa)", officers: 160, completionRate: "96.2%", branchIndex: "98.0%", rank: "#1 National" },
      { zone: "North Zone (Delhi NCR, Punjab, UP)", officers: 120, completionRate: "92.4%", branchIndex: "91.5%", rank: "#2 National" },
      { zone: "South Zone (Karnataka, TN, AP, Telangana)", officers: 90, completionRate: "89.8%", branchIndex: "88.2%", rank: "#3 National" },
      { zone: "East Zone (WB, Bihar, Odisha, NE)", officers: 50, completionRate: "86.5%", branchIndex: "85.0%", rank: "#4 National" }
    ],
    topPerformingBranches: [
      { branch: "Mumbai Andheri Hub", manager: "Vikas Patil", certifiedPct: "100%", creditAuditScore: "98/100" },
      { branch: "Pune Shivajinagar", manager: "Deepa Shinde", certifiedPct: "98.5%", creditAuditScore: "96/100" },
      { branch: "Ahmedabad SG Highway", manager: "Nilesh Shah", certifiedPct: "97.2%", creditAuditScore: "95/100" }
    ],
    interventionRequiredBranches: [
      { branch: "Kanpur Civil Lines", manager: "Sunil Verma", certifiedPct: "81.0%", reason: "3 new joiners pending KYC certification" },
      { branch: "Kolkata Salt Lake", manager: "Debashish Roy", certifiedPct: "83.5%", reason: "DPDP compliance refresher overdue" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 9D. COO & HEAD HR ENTERPRISE DASHBOARD DATA (BU-WIDE STRATEGIC VIEW)
  // ----------------------------------------------------------------------------
  cooHrData: {
    cooName: "Siddik Ghaniwala (COO & Head HR)",
    totalBuEmployees: 1840,
    activeBranches: 180,
    buStatutoryComplianceRate: "94.8%",
    certifiedSherpasActive: 42,
    leadershipTalentPipelineCount: 28,
    learningHoursLoggedYTD: "38,420 Hours",
    roiMetrics: {
      tatReduction: "18% Faster",
      firstTimeRightFiles: "+24% Quality",
      customerNpsImprovement: "+14 Points",
      trainingInvestmentPerEmployee: "₹14,200"
    },
    verticalComparisons: [
      { business: "Retail Finance (Consumer)", headcount: 620, compliancePct: "95.6%", avgScore: "92.4%", sherpas: 14 },
      { business: "Housing Finance", headcount: 380, compliancePct: "96.2%", avgScore: "94.0%", sherpas: 10 },
      { business: "Motor Finance", headcount: 260, compliancePct: "93.8%", avgScore: "90.5%", sherpas: 6 },
      { business: "Microfinance", headcount: 210, compliancePct: "94.1%", avgScore: "89.2%", sherpas: 4 },
      { business: "Corporate & SME Finance", headcount: 150, compliancePct: "97.0%", avgScore: "95.5%", sherpas: 3 },
      { business: "Wealth Management", headcount: 80, compliancePct: "98.2%", avgScore: "96.0%", sherpas: 2 },
      { business: "DSMG (Direct Sales)", headcount: 140, compliancePct: "91.5%", avgScore: "88.0%", sherpas: 3 }
    ]
  },

  // ----------------------------------------------------------------------------
  // 10. CURRENT LOGGED IN USER PROFILE (FOR EMPLOYEE DASHBOARD)
  // ----------------------------------------------------------------------------
  userProfile: {
    name: "Siddik Ghaniwala",
    empId: "TC-84920",
    designation: "Assistant Manager - Credit Underwriting",
    businessId: "retail",
    businessName: "Retail Finance (Consumer Finance)",
    role: "employee", // or "manager"
    employeeType: "new", // "new" or "existing"
    daysSinceJoining: 45,
    email: "siddik.ghaniwala@tatacapital.com",
    branch: "Bandra Kurla Complex (BKC), Mumbai",
    reportingManager: "Rajiv Sabharwal (MD & CEO)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    joinedDate: "August 27, 2024"
  },
  // ----------------------------------------------------------------------------
  // 12. MD & CHRO EXECUTIVE BOARD GOVERNANCE DATA
  // ----------------------------------------------------------------------------
  mdChroData: {
    managingDirector: "Rajiv Sabharwal (Managing Director & CEO)",
    chro: "Avijit Bhattacharya (Chief Human Resources Officer)",
    scope: "Tata Capital Limited - Apex Executive Board & Governance View",
    headcountCovered: 2450,
    accreditationIndex: "93.4%",
    retentionCorrelation: "+14.2% Higher Retention for Certified Cohorts",
    successionPipeline: "94 High-Potential Leaders Identified",
    rbiAuditStatus: "100% Cleared - Zero Governance Non-Compliances",
    verticalScorecard: [
      { vertical: "Retail Finance (Consumer)", headcount: 620, certifiedPct: "94.2%", sherpas: 28, retentionLift: "+15.6%", auditStatus: "Exemplary" },
      { vertical: "Housing Finance", headcount: 450, certifiedPct: "92.8%", sherpas: 19, retentionLift: "+13.8%", auditStatus: "Exemplary" },
      { vertical: "Motor Finance", headcount: 380, certifiedPct: "91.5%", sherpas: 14, retentionLift: "+12.4%", auditStatus: "Exemplary" },
      { vertical: "Microfinance (JLG)", headcount: 310, certifiedPct: "95.1%", sherpas: 12, retentionLift: "+16.2%", auditStatus: "Exemplary" },
      { vertical: "Corporate & SME Finance", headcount: 290, certifiedPct: "93.0%", sherpas: 11, retentionLift: "+14.0%", auditStatus: "Exemplary" },
      { vertical: "Wealth Management", headcount: 160, certifiedPct: "96.4%", sherpas: 8, retentionLift: "+15.1%", auditStatus: "Exemplary" },
      { vertical: "DSMG & Direct Sales", headcount: 140, certifiedPct: "90.2%", sherpas: 6, retentionLift: "+11.8%", auditStatus: "Satisfactory" },
      { vertical: "Cleantech Finance", headcount: 100, certifiedPct: "97.0%", sherpas: 5, retentionLift: "+17.5%", auditStatus: "Exemplary" }
    ],
    mdDirective: {
      title: "Building an Agile, Digitally Empowered, Governance-Led Institution",
      quote: "Our human capital is our ultimate competitive moat. As Tata Capital scales toward unprecedented milestones, every underwriter, relationship manager, and operations officer must possess 360-degree capability, uncompromising ethical integrity, and deep domain mastery. Project Sherpa exemplifies the Tata philosophy of 'Leaders Developing Leaders' from within.",
      signOff: "Rajiv Sabharwal • Managing Director & CEO, Tata Capital Limited"
    }
  },
};

// Export to window object for straightforward browser access
window.TC_DATA = TC_DATA;
