// Icons found here: https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
/* Images for personal projects 
   Some found here: https://www.svgrepo.com/vectors/machine-learning/
*/
import ReactLogo from "./images/logo.svg"
import MLLogo from "./images/machine-learning-model-svgrepo-com.svg"
/* Useful consts */
export const my_name = "Joseph Schirle"
/*export const githubUsername = "jjschirle.github.io";*/
export const github_url = "https://github.com/jjschirle"
export const linkedin_url = "https://www.linkedin.com/in/josephschirle/"
export const formspreeUrl = "https://formspree.io/f/xrgwgjqw"
// BufferedImage scale_profile_pic = profile.getSubimage()

/* About Me. Split by paragraph */
export const about_text = [
  {
    id: 1,
    text: "Hello! I'm Joseph Schirle. You can call me JJ. I'm a computational and systems biology major with a passion for advancing research at the intersection of biology and technology. I am deeply interested in bioinformatics, and have had a specific focus on translational cancer research. I am driven by the potential to develop novel bioinformatics tools that aid in understanding complex biological processes and contribute to advancements in cancer diagnostics, treatments, and genetics.",
  },
  {
    id: 2,
    text: "On the software engineering front, I aspire to work with cutting-edge technologies in the cloud computing domain, and leverage the power of machine learning to develop innovative solutions to a host of problems. I am excited about leveraging my expertise in data analysis, scripting, and programming languages such as Python and R to tackle challenging problems.",
  },
  {
    id: 3,
    text: "Through my website, I aim to showcase some of my projects and skills while connecting with like-minded professionals and exploring opportunities to contribute to impactful projects in the fields of bioinformatics, computational biology, and software engineering.",
  },
];

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
          "Led differential gene expression analyses using DESeq2 across diverse cohorts to uncover gene expression signatures associated with uveal melanoma (UVM) phenotypes, providing insights into disease progression", 
          "Employed Principal Component Analysis (PCA) to integrate DESeq2-derived signatures, effectively identifying complex relationships within gene expression and uncovering underlying patterns", 
          "Conducted Gene Set Enrichment Analysis (GSEA) to unveil critical biological processes correlated with UVM phenotypes, differentiation, and drug sensitivity, contributing to a deeper understanding of disease mechanisms", 
          "Pioneered the development of scripts that generated informative figures, such as a script for visualizing GSEA results, enabling clear and intuitive representation of the data, facilitating data-driven insights", 
          "Conducted linear regression analyses on UVM cell lines, elucidating robust correlations between -omics data and critical factors such as therapeutic vulnerabilities, metastatic potential, and aggressive phenotypes", 
          "Created a script to calculate whole chromosome copy number variation from SEG file input"
        ]
      },
    ],
  academics: [
      {
        university: "University of California, Los Angeles",
        period: "Sept. 2021 - August 2023",
        major: "BS, Computational and Systems Biology with Biological Data Sciences Specialization",
        accolades: [
          "GPA: 3.914 cumulative, 3.920 major, 3.933 upper div.",
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