// Icons found here: https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
/* Images for personal projects */
import ReactLogo from "./images/logo.svg"
import MLLogo from "./images/machine-learning-model-svgrepo-com.svg"
/* Useful consts */
export const my_name = "Joseph Schirle"
/*export const githubUsername = "jjschirle.github.io";*/
export const github_url = "https://github.com/jjschirle"
export const linkedin_url = "https://www.linkedin.com/in/josephschirle/"
export const formspreeUrl = "https://formspree.io/f/xrgwgjqw"
// BufferedImage scale_profile_pic = profile.getSubimage()

/* About Me */
export const about_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

/* Skills */
export const my_skills = [
  {
    id: 1,
    skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="bi:r-circle" className="display-4" />,
    name: "R",
  },
  {
    id: 3,
    skill: <Icon icon="file-icons:c" className="display-4" />,
    name: "C++",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:chart-scatter-plot" className="display-4" />,
    name: "Data Visualization",
  },
  {
    id: 5,
    skill: <Icon icon="eos-icons:machine-learning-outlined" className="display-4" />,
    name: "Machine Learning",
  },
  {
    id: 6,
    skill: <Icon icon="material-symbols:genetics-rounded" className="display-4" />,
    name: "Gene Expression",
  },
  {
    id: 7,
    skill: <Icon icon="medical-icon:i-genetics" className="display-4" />,
    name: "Enrichment Analysis",
  },
  {
    id: 8,
    skill: <Icon icon="fluent:javascript-16-regular" className="display-4" />,
    name: "Javascript",
  },
  {
    id: 9,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
];
// Replace the default GitHub image for matching repos below (images imported above - lines 4-5)

/* Personal Projects data. Formatted to support future additions */
export const Project_data = [
  {
    id: 1,
    Name: "Tumor classification using various algorithms",
    description: "Classifying tumors with various ML models",
    url: "https://github.com/jjschirle/Tumor-classification-using-various-algorithms",
    image: MLLogo,
  },
  {
    id: 2,
    Name: "jjschirle.github.io",
    description: "My website built with React",
    url: "https://github.com/jjschirle/jjschirle.github.io",
    image: ReactLogo,
  },
];

/* CV data. Formatted to support future additions */
export const CV_data = {
  experience: [
      {
        title: "Undergraduate Student Researcher, Graeber Lab",
        period: "Sept. 2021 - present",
        company: "UCLA Department of Molecular and Medical Pharmacology",
        description: [
          "Conducted differential gene expression analysis utilizing DESeq2 across numerous cohorts to identify gene expression signatures linked to uveal melanoma (UVM) phenotypes",
          "Principal Component Analysis (PCA) and integration with DESeq2 derived signatures",
          "Conducted Gene Set Enrichment Analysis (GSEA) to identify biological processes whose enrichment is correlated with UVM phenotypes, differentiation, and drug sensitivity.",
          "Developed a script for visualizing GSEA results",
          "Conducted linear regression analyses on UVM cell lines to elucidate correlation between -omic data and therapeutic vulnerabilities, metastatic potential, and aggressive phenotypes",
          "Created a script to calculate whole chromosome copy number variation from SEG file input",
          "Developed scripts to create figures to aid in visualization and interpretation of results"
        ]
      },
    ],
  academics: [
      {
        university: "University of California, Los Angeles",
        period: "Sept. 2021 - August 2023",
        major: "BS, Computational and Systems Biology with Biological Data Sciences Specialization",
        accolades: [
          "GPA: 3.910 cumulative, 3.920 major, 3.933 upper div.",
          "Honors: UCLA Dean's Honors List",
          "Jonsson Comprehensive Cancer Center (JCCC) Trainee Member",
          "Relevant Courses: Life Sciences Series, Probability and Mathematical Statistics, Biological Modeling, Data Structures and Object-Oriented Programming, Introduction to Bioinformatics, Machine Learning and ML in Bioinformatics"
        ]
      },
      {
        university: "Santa Monica College (SMC)",
        period: "Aug. 2017 - June 2021",
        major: "",
        accolades: [
          "GPA: 3.85",
          "Honors: SMC Dean's Honors List",
          "Relevant Courses: Multivariable Calculus, Ordinary Differential Equations, Linear Algebra, Discrete Structures/Mathematics, Chemistry, Physics"
        ]
      },
    ],
    presentations: [
      {
        title: "Regression Based Analysis of Uveal Melanoma Cell Lines Reveals Signatures Associated with Drug Sensitivity.",
        event: "UCLA Undergraduate Research Week",
        location: "(May 2023, Westwood, CA)",
      },
    ],
};