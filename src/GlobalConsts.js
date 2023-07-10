// Icons found here: https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";


/* General consts */
export const my_name = "Joseph Schirle"
/*export const githubUsername = "jjschirle.github.io";*/
export const github_url = "https://github.com/jjschirle"
export const linkedin_url = "https://www.linkedin.com/in/josephschirle/"

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
// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)


/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
