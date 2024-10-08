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
    text: "Hello! I'm JJ Schirle. I am currently a Biomathematics PhD student in UCLA's Department of Computational Medicine.",
  },
  {
    id: 2,
    text: "I am interested in problems rooted at the intersection of biology, statistics, mathematics, and computer science.",
  },
  // {
  //   id: 3,
  //   text: "",
  // },
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
    description: "Website built with React",
    url: "https://github.com/jjschirle/jjschirle.github.io",
    image: ReactLogo,
  },
];

/* CV data. Formatted to support future additions */
export const CV_data = {
  experience: [
    {
      title: "Research Technician - Bioinforamtics",
      period: "Oct. 2023 - Aug. 2024",
      company: "Capsida Biotherapeutics",
      description: [
        "NGS pipeline and analysis development."
      ]
    },  
    {
        title: "Undergraduate Student Researcher, Graeber Lab",
        period: "Sept. 2021 - Sept. 2023",
        company: "UCLA Department of Molecular and Medical Pharmacology",
        description: [
          "Led differential gene expression analyses using DESeq2 to model gene expression signatures associated with aggresive phenotypes and differentiation, providing insights into disease progression.",
          "Employed Principal Component Analysis (PCA) and non-linear dimensionality reduction to integrate DESeq2 and metabolomics derived signatures.",
          "Conducted linear regression analyses on cell lines, elucidating correlations between -omics data and critical factors such as therapeutic vulnerabilities, metastatic potential, and aggressive phenotypes.",
          "Conducted Gene Set Enrichment Analysis (GSEA) to unveil biological processes correlated with UVM phenotypes, differentiation, and drug sensitivity, contributing to a deeper understanding of disease mechanisms.",
          "Utilized hypergeometric overlap modeling to integrate cell line and publicly available tumor data."
        ]
      },
    ],
  academics: [
      {
        university: "University of California, Los Angeles",
        period: "Sept. 2024 - Present",
        major: "PhD, Biomathematics",
        accolades: [
          // "GPA: 3.917 cumulative, 3.925 major, 3.938 upper div.",
          // "Honors: UCLA Dean's Honors List",
          // "Jonsson Comprehensive Cancer Center (JCCC) Trainee Member",
          // "Relevant Courses: Life Sciences Series, Probability and Mathematical Statistics, Biological Modeling, Data Structures and Object-Oriented Programming, Introduction to Bioinformatics, Machine Learning and ML in Bioinformatics"
        ]
      },
      {
        university: "University of California, Los Angeles",
        period: "Sept. 2021 - Sept. 2023",
        major: "BS, Computational and Systems Biology with Biological Data Sciences Specialization",
        accolades: [
          "GPA: 3.917 cumulative, 3.925 major, 3.938 upper div.",
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