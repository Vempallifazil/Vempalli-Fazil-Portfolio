export type Palette = { from: string; via: string; to: string; accent: string };

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export type Certification = { issuer: string; name: string; link?: string };

export type Skill = { name: string; mono: string; note?: string };

export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const profile = {
  "fullName": "Vempalli Fazil",
  "displayName": "Vempalli Fazil",
  "firstName": "FAZIL",
  "seriesTag": "THE SERIES",
  "originalLabel": "A VEMPALLI ORIGINAL",
  "role": "Test Engineer",
  "tagline": [
    "Test Engineer",
    "Selenium + Java",
    "Infosys"
  ],
  "intro": "I’m a Test Engineer at Infosys in Chennai. Building a learning platform taught me what happens after a learner clicks Enroll. Browser automation taught me to slow down and check every step that leads there.",
  "location": "Chennai, India",
  "email": "asrarfazil786@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/vempalli-fazil-435299276/",
    "github": "https://github.com/Vempallifazil"
  },
  "resumePdf": import.meta.env.BASE_URL + "assets/Vempalli_Fazil_Resume.pdf",
  "portrait": {
    "src": import.meta.env.BASE_URL + "assets/portrait-720.webp",
    "srcSet": import.meta.env.BASE_URL + "assets/portrait-420.webp 420w, " + import.meta.env.BASE_URL + "assets/portrait-720.webp 720w, " + import.meta.env.BASE_URL + "assets/portrait-1100.webp 1100w",
    "alt": "Illustrated portrait of Vempalli Fazil"
  },
  "interests": [
    "Browser automation",
    "Playwright",
    "Full-stack development"
  ]
};

export const education = [
  {
    "school": "S.V.U. College of Engineering",
    "place": "Tirupati",
    "degree": "B.Tech in Electronics and Communication Engineering",
    "period": "2021 – 2025",
    "score": "71%"
  },
  {
    "school": "Sri Chaitanya Junior College",
    "place": "Tirupati",
    "degree": "Intermediate · MPC",
    "period": "2019 – 2021",
    "score": "96%"
  },
  {
    "school": "I.K High School",
    "place": "Rayachoti",
    "degree": "SSC",
    "period": "2018 – 2019",
    "score": "93%"
  }
];

export const experience = [
  {
    "company": "Infosys",
    "role": "Test Engineer",
    "place": "Chennai",
    "period": "February 2026 – Present",
    "points": [
      "Joined Infosys as a System Engineer Trainee and progressed to Test Engineer. My work during training spanned full-stack development and browser automation.",
      "Built LearnMoreApp during the Infosys capstone. I connected role-specific Angular screens to an ASP.NET Core API and a SQL Server database for courses and enrollments.",
      "Wrote Java scripts with Selenium WebDriver to open pages, locate controls and perform browser actions. I configured implicit waits to allow time for elements to appear.",
      "Organized Java test methods with TestNG annotations, defined suites in XML and troubleshot suite configuration and test execution in Eclipse."
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "learnmore",
    "title": "LearnMoreApp",
    "genre": "Capstone · Full-stack development",
    "year": "2026",
    "logline": "A learning platform with distinct paths for learners, instructors and administrators.",
    "stack": [
      "Angular",
      "ASP.NET Core",
      "SQL Server",
      "Bootstrap"
    ],
    "build": [
      "I built the platform around three roles. After sign-in, a learner can browse courses and enroll, while staff see the controls they need to manage instructors and course content.",
      "Angular handles navigation, forms and validation. REST endpoints connect those screens to services and repositories, separating the browser experience from data access.",
      "On the database side, I designed normalized tables, stored procedures and functions to support course management and enrollment."
    ],
    "features": [
      "Login and registration",
      "Role-specific navigation",
      "Course and instructor management",
      "Enrollment and course viewing"
    ],
    "metrics": [
      {
        "value": "3",
        "label": "user roles"
      },
      {
        "value": "REST",
        "label": "API integration"
      },
      {
        "value": "SQL",
        "label": "relational storage"
      }
    ],
    "palette": {
      "from": "#270511",
      "via": "#781736",
      "to": "#09060d",
      "accent": "#ff5879"
    },
    "motif": "tenants"
  },
  {
    "id": "enrollment",
    "title": "Inside enrollment",
    "genre": "LearnMoreApp · Feature study",
    "year": "2026",
    "logline": "Follow a learner from the course catalogue to the enrollment action.",
    "stack": [
      "Angular",
      "REST API",
      "SQL Server"
    ],
    "build": [
      "The catalogue lets a visitor narrow the available courses by category. Selecting a course opens the detail view, where skill level, instructor and language are shown before enrollment.",
      "I connected navigation and validation in the frontend with the API and storage layers. The two screens below show how the same course appears in different contexts."
    ],
    "features": [
      "Category filtering",
      "Skill-level search",
      "Course detail and enrollment"
    ],
    "metrics": [
      {
        "value": "Browse",
        "label": "course catalogue"
      },
      {
        "value": "Inspect",
        "label": "course details"
      },
      {
        "value": "Enroll",
        "label": "learner action"
      }
    ],
    "palette": {
      "from": "#051d1b",
      "via": "#136149",
      "to": "#080d0c",
      "accent": "#70e5ab"
    },
    "motif": "flow"
  },
  {
    "id": "automation",
    "title": "Inside the test suite",
    "genre": "Infosys training · Automation practice",
    "year": "2026",
    "logline": "From a Java test method to a browser action and a repeatable TestNG suite.",
    "stack": [
      "Java",
      "Selenium WebDriver",
      "TestNG",
      "Eclipse"
    ],
    "build": [
      "I used WebDriver to launch pages and locate controls. A locator identifies the element the script needs before the script performs a browser action.",
      "I configured implicit waits for element lookup. That gave a page time to display a control while keeping the script focused on the action under test.",
      "I grouped test methods using TestNG annotations and XML suite definitions. When a suite failed to start, I checked the class references, suite configuration and how Eclipse launched it."
    ],
    "features": [
      "Element lookup",
      "Browser interactions",
      "Implicit waits",
      "XML suite execution"
    ],
    "metrics": [
      {
        "value": "Java",
        "label": "test language"
      },
      {
        "value": "XML",
        "label": "suite definition"
      },
      {
        "value": "Eclipse",
        "label": "execution environment"
      }
    ],
    "palette": {
      "from": "#071627",
      "via": "#154f77",
      "to": "#050911",
      "accent": "#68c8ff"
    },
    "motif": "shield"
  }
];

export const achievements: Achievement[] = [
  {
    "id": "arcade",
    "title": "Premium Plus",
    "org": "Google Cloud Arcade",
    "detail": "Reached the Premium Plus milestone in the Google Cloud Platform Arcade in 2024.",
    "laurel": "2024 milestone"
  },
  {
    "id": "sigmoid",
    "title": "SIGMOID 2024",
    "org": "S.V. University",
    "detail": "Represented S.V. University at SIGMOID 2024 on AI and robotics innovation.",
    "laurel": "University representation"
  },
  {
    "id": "drones",
    "title": "Drone workshops",
    "org": "College workshops",
    "detail": "Conducted technical workshops on drones and space technologies.",
    "laurel": "Workshop facilitation"
  },
  {
    "id": "isro",
    "title": "Space technologies",
    "org": "ISRO workshop",
    "detail": "Participated in ISRO’s Space Technologies Workshop.",
    "laurel": "Participation"
  },
  {
    "id": "service",
    "title": "Workshop volunteer",
    "org": "College events",
    "detail": "Volunteered at technology and drone workshops during college events.",
    "laurel": "Volunteering"
  }
];

export const certifications: Certification[] = [
  {
    "issuer": "Infosys",
    "name": "Google Professional Cloud Developer"
  },
  {
    "issuer": "Coursera",
    "name": "Google Data Analytics"
  },
  {
    "issuer": "Oracle",
    "name": "Oracle Cloud Infrastructure 2025 Generative AI Professional"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    "id": "automation",
    "title": "Browser automation",
    "subtitle": "Finding and interacting with page controls",
    "skills": [
      {
        "name": "Selenium WebDriver",
        "mono": "Se"
      },
      {
        "name": "Locators",
        "mono": "Lo"
      },
      {
        "name": "Implicit waits",
        "mono": "Im"
      }
    ]
  },
  {
    "id": "execution",
    "title": "Suite execution",
    "subtitle": "Running repeatable browser tests",
    "skills": [
      {
        "name": "TestNG",
        "mono": "Te"
      },
      {
        "name": "XML suites",
        "mono": "XM"
      },
      {
        "name": "Eclipse",
        "mono": "Ec"
      }
    ]
  },
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Code and queries",
    "skills": [
      {
        "name": "Java",
        "mono": "Ja"
      },
      {
        "name": "SQL",
        "mono": "SQ"
      },
      {
        "name": "JavaScript",
        "mono": "Ja"
      }
    ]
  },
  {
    "id": "frontend",
    "title": "Frontend",
    "subtitle": "Learner and administrator screens",
    "skills": [
      {
        "name": "Angular",
        "mono": "An"
      },
      {
        "name": "HTML",
        "mono": "HT"
      },
      {
        "name": "CSS",
        "mono": "CS"
      },
      {
        "name": "Bootstrap",
        "mono": "Bo"
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend & storage",
    "subtitle": "From a request to a record",
    "skills": [
      {
        "name": "ASP.NET Core",
        "mono": "AS"
      },
      {
        "name": "REST APIs",
        "mono": "RE"
      },
      {
        "name": "SQL Server",
        "mono": "SQ"
      }
    ]
  }
];

export const skillEvidence: Record<string,string[]> = {
  "Selenium WebDriver": [
    "I used WebDriver to launch pages and locate controls. A locator identifies the element the script needs before the script performs a browser action."
  ],
  "Locators": [
    "I used WebDriver to launch pages and locate controls. A locator identifies the element the script needs before the script performs a browser action."
  ],
  "Implicit waits": [
    "I configured implicit waits for element lookup. That gave a page time to display a control while keeping the script focused on the action under test."
  ],
  "TestNG": [
    "I grouped test methods using TestNG annotations and XML suite definitions. When a suite failed to start, I checked the class references, suite configuration and how Eclipse launched it."
  ],
  "XML suites": [
    "I grouped test methods using TestNG annotations and XML suite definitions. When a suite failed to start, I checked the class references, suite configuration and how Eclipse launched it."
  ],
  "Eclipse": [
    "I grouped test methods using TestNG annotations and XML suite definitions. When a suite failed to start, I checked the class references, suite configuration and how Eclipse launched it."
  ],
  "Java": [
    "I used WebDriver to launch pages and locate controls. A locator identifies the element the script needs before the script performs a browser action."
  ],
  "SQL": [
    "LearnMoreApp training capstone",
    "Code and queries"
  ],
  "JavaScript": [
    "LearnMoreApp training capstone",
    "Code and queries"
  ],
  "Angular": [
    "LearnMoreApp training capstone",
    "Learner and administrator screens"
  ],
  "HTML": [
    "LearnMoreApp training capstone",
    "Learner and administrator screens"
  ],
  "CSS": [
    "LearnMoreApp training capstone",
    "Learner and administrator screens"
  ],
  "Bootstrap": [
    "LearnMoreApp training capstone",
    "Learner and administrator screens"
  ],
  "ASP.NET Core": [
    "LearnMoreApp training capstone",
    "From a request to a record"
  ],
  "REST APIs": [
    "LearnMoreApp training capstone",
    "From a request to a record"
  ],
  "SQL Server": [
    "LearnMoreApp training capstone",
    "From a request to a record"
  ]
};

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "Early foundations",
    "period": "2018 – 2021",
    "synopsis": "From SSC in Rayachoti to mathematics, physics and chemistry in Tirupati.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "School years",
        "description": "Completed SSC at I.K High School in Rayachoti with 93%.",
        "tags": [
          "SSC"
        ],
        "runtime": "2018 – 2021",
        "palette": {
          "from": "#071627",
          "via": "#154f77",
          "to": "#050911",
          "accent": "#68c8ff"
        }
      },
      {
        "code": "S01 E02",
        "title": "Mathematics and science",
        "description": "Completed Intermediate MPC at Sri Chaitanya Junior College, Tirupati, with 96%.",
        "tags": [
          "MPC"
        ],
        "runtime": "2018 – 2021",
        "palette": {
          "from": "#201007",
          "via": "#79451d",
          "to": "#100907",
          "accent": "#ffbe76"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Engineering years",
    "period": "2021 – 2025",
    "synopsis": "Electronics and communication studies alongside college workshops.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "Engineering in Tirupati",
        "description": "Studied Electronics and Communication Engineering at S.V.U. College of Engineering, graduating with 71%.",
        "tags": [
          "B.Tech",
          "ECE"
        ],
        "runtime": "2021 – 2025",
        "palette": {
          "from": "#201007",
          "via": "#79451d",
          "to": "#100907",
          "accent": "#ffbe76"
        }
      },
      {
        "code": "S02 E02",
        "title": "Beyond the classroom",
        "description": "Represented S.V. University at SIGMOID 2024 on AI and robotics innovation. Conducted technical workshops on drones and space technologies.",
        "tags": [
          "AI",
          "Robotics",
          "Workshops"
        ],
        "runtime": "2021 – 2025",
        "palette": {
          "from": "#180b21",
          "via": "#532f6e",
          "to": "#09060d",
          "accent": "#cf92ff"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "The Infosys capstone",
    "period": "2026",
    "synopsis": "The engineering work behind a role-based learning platform.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "LearnMoreApp",
        "description": "I built the platform around three roles. After sign-in, a learner can browse courses and enroll, while staff see the controls they need to manage instructors and course content.",
        "tags": [
          "Angular",
          "ASP.NET Core",
          "SQL Server",
          "Bootstrap"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#180b21",
          "via": "#532f6e",
          "to": "#09060d",
          "accent": "#cf92ff"
        }
      },
      {
        "code": "S03 E02",
        "title": "Inside enrollment",
        "description": "The catalogue lets a visitor narrow the available courses by category. Selecting a course opens the detail view, where skill level, instructor and language are shown before enrollment.",
        "tags": [
          "Angular",
          "REST API",
          "SQL Server"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#270511",
          "via": "#781736",
          "to": "#09060d",
          "accent": "#ff5879"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "From trainee to Test Engineer",
    "period": "February 2026 – Present",
    "synopsis": "Infosys, Chennai. A closer look at my training and progression.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Role progression",
        "description": "Joined Infosys as a System Engineer Trainee and progressed to Test Engineer. My work during training spanned full-stack development and browser automation.",
        "tags": [
          "Infosys",
          "Chennai"
        ],
        "runtime": "February 2026 – Present",
        "palette": {
          "from": "#270511",
          "via": "#781736",
          "to": "#09060d",
          "accent": "#ff5879"
        }
      },
      {
        "code": "S04 E02",
        "title": "Writing browser tests",
        "description": "Wrote Java scripts with Selenium WebDriver to open pages, locate controls and perform browser actions. I configured implicit waits to allow time for elements to appear.",
        "tags": [
          "Selenium",
          "Java"
        ],
        "runtime": "February 2026 – Present",
        "palette": {
          "from": "#051d1b",
          "via": "#136149",
          "to": "#080d0c",
          "accent": "#70e5ab"
        }
      },
      {
        "code": "S04 E03",
        "title": "Running a suite",
        "description": "Organized Java test methods with TestNG annotations, defined suites in XML and troubleshot suite configuration and test execution in Eclipse.",
        "tags": [
          "TestNG",
          "Eclipse"
        ],
        "runtime": "February 2026 – Present",
        "palette": {
          "from": "#071627",
          "via": "#154f77",
          "to": "#050911",
          "accent": "#68c8ff"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "The next chapter",
    "period": "Current focus",
    "synopsis": "Building on my Java automation foundation.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "Exploring Playwright",
        "description": "I want to deepen my Playwright skills and compare how modern browser tests handle locators, waiting and reliable execution.",
        "tags": [
          "Playwright",
          "Browser testing"
        ],
        "runtime": "Current focus",
        "palette": {
          "from": "#051d1b",
          "via": "#136149",
          "to": "#080d0c",
          "accent": "#70e5ab"
        }
      }
    ]
  }
];

export const topPicks: TopPick[] = [
  {
    "label": "Current role",
    "title": "Test Engineer",
    "detail": "Infosys · Chennai",
    "palette": {
      "from": "#270511",
      "via": "#781736",
      "to": "#09060d",
      "accent": "#ff5879"
    }
  },
  {
    "label": "Featured capstone",
    "title": "LearnMoreApp",
    "detail": "Role-based learning platform",
    "palette": {
      "from": "#051d1b",
      "via": "#136149",
      "to": "#080d0c",
      "accent": "#70e5ab"
    }
  },
  {
    "label": "Automation",
    "title": "Selenium",
    "detail": "Browser interactions in Java",
    "palette": {
      "from": "#071627",
      "via": "#154f77",
      "to": "#050911",
      "accent": "#68c8ff"
    }
  },
  {
    "label": "Test execution",
    "title": "TestNG",
    "detail": "XML suites in Eclipse",
    "palette": {
      "from": "#201007",
      "via": "#79451d",
      "to": "#100907",
      "accent": "#ffbe76"
    }
  },
  {
    "label": "Frontend",
    "title": "Angular",
    "detail": "Learner and admin screens",
    "palette": {
      "from": "#180b21",
      "via": "#532f6e",
      "to": "#09060d",
      "accent": "#cf92ff"
    }
  },
  {
    "label": "Database",
    "title": "SQL Server",
    "detail": "Course and enrollment records",
    "palette": {
      "from": "#270511",
      "via": "#781736",
      "to": "#09060d",
      "accent": "#ff5879"
    }
  },
  {
    "label": "Cloud milestone",
    "title": "Premium Plus",
    "detail": "Google Cloud Arcade · 2024",
    "palette": {
      "from": "#051d1b",
      "via": "#136149",
      "to": "#080d0c",
      "accent": "#70e5ab"
    }
  },
  {
    "label": "University stage",
    "title": "SIGMOID",
    "detail": "AI and robotics · 2024",
    "palette": {
      "from": "#071627",
      "via": "#154f77",
      "to": "#050911",
      "accent": "#68c8ff"
    }
  },
  {
    "label": "Credential",
    "title": "OCI GenAI",
    "detail": "Oracle · 2025",
    "palette": {
      "from": "#201007",
      "via": "#79451d",
      "to": "#100907",
      "accent": "#ffbe76"
    }
  },
  {
    "label": "Education",
    "title": "Electronics & communication",
    "detail": "B.Tech · S.V.U. College of Engineering",
    "palette": {
      "from": "#180b21",
      "via": "#532f6e",
      "to": "#09060d",
      "accent": "#cf92ff"
    }
  }
];

export const introSlides: IntroSlide[] = [
  {
    "kicker": "Starring",
    "title": "Vempalli Fazil",
    "lines": [
      "Test Engineer · Infosys",
      "Chennai, India"
    ]
  },
  {
    "kicker": "Education",
    "title": "Engineering in Tirupati",
    "lines": [
      "B.Tech in Electronics and Communication Engineering",
      "S.V.U. College of Engineering · 2021–2025"
    ]
  },
  {
    "kicker": "Capstone",
    "title": "LearnMoreApp",
    "lines": [
      "A learning platform with distinct paths for learners, instructors and administrators.",
      "Angular · ASP.NET Core · SQL Server"
    ]
  },
  {
    "kicker": "Experience",
    "title": "From trainee to Test Engineer",
    "lines": [
      "Wrote Java scripts with Selenium WebDriver to open pages, locate controls and perform browser actions. I configured implicit waits to allow time for elements to appear."
    ]
  },
  {
    "kicker": "Recognition",
    "title": "Top moments",
    "lines": [
      "Reached the Premium Plus milestone in the Google Cloud Platform Arcade in 2024.",
      "Represented S.V. University at SIGMOID 2024 on AI and robotics innovation."
    ]
  },
  {
    "kicker": "Credentials",
    "title": "Three certifications",
    "lines": [
      "Google Professional Cloud Developer",
      "Google Data Analytics",
      "Oracle Cloud Infrastructure 2025 Generative AI Professional"
    ]
  },
  {
    "kicker": "Coming next",
    "title": "Playwright",
    "lines": [
      "Deepening browser automation skills."
    ]
  }
];

export type ProfileId = 'fazil' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'fazil',
    name: 'Fazil',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

const [crimson, jade, ocean, amber, violet] = topPicks.slice(0, 5).map(p => p.palette);

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} features • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
