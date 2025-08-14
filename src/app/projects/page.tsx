import React from "react";
import Image from "next/image";
import styles from "./projects.module.css";
import regenmedImage from "../../../assets/regenmedglobal.png";
import feedbackui from "../../../assets/feedbackui.png";
import upin from "../../../assets/upin.png";
import streetsignal from "../../../assets/streetsignal-preview.png"; // Add this line
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link: string;
  imageUrl: string;
  githubrepo?: string;
};

const projects: Project[] = [
  {
    title: "RegenMed Global",
    description:
      "A platform connecting patients with regenerative medicine doctors. It includes public articles and tools for doctors to manage their profiles.",
    technologies: ["React", "Next.js", "Supabase"],
    achievements: [
      "Built a scalable and responsive platform.",
      "Integrated real-time profile updates using Supabase.",
      "Enhanced user engagement through public articles.",
    ],
    link: "https://www.regenmedglobal.com/",
    githubrepo: "https://github.com/RegenMedGlobal/regen-med-global-next",
    imageUrl: regenmedImage.src,
  },
  {   title: "StreetSignal",
    description:
      "A civic engagement platform empowering communities to report and track local infrastructure issues like potholes, broken streetlights, and graffiti using geolocation and community mapping.",
    technologies: ["Next.js", "TypeScript", "Supabase", "CSS Modules"],
    achievements: [
      "Built a scalable civic reporting system with real-time community mapping.",
      "Designed an intuitive reporting flow with photo uploads and precise geolocation.",
      "Created a comprehensive database schema for municipal issue tracking and analytics.",
      "Developed responsive UI optimized for mobile-first community engagement.",
    ],
    link: "https://streetsignal.vercel.app/",
    githubrepo: "https://github.com/benhavis/streetsignal",
    imageUrl: streetsignal.src
  },
  {
    title: "Feedback UI",
    description:
      "A feedback management app that allows users to add, edit, and delete feedback with live preview and custom rating system.",
    technologies: ["React", "TypeScript", "useEffect", "Vite"],
    achievements: [
      "Built from scratch with modern React hooks.",
      "Implemented dynamic form validation and rating UI.",
      "Deployed with Netlify for instant feedback access.",
    ],
    link: "https://determined-haibt-0d51f6.netlify.app/",
    githubrepo: "https://github.com/BenHavis/feedback",
    imageUrl: feedbackui.src,
  },
 {
  title: "Upin",
  description:
    "A mobile app for hosting and joining local meetups with real-time geolocation, community features, and ticketing for paid events.",
  technologies: ["React Native", "Expo", "Supabase", "Stripe", "PostgreSQL"],
  achievements: [
    "Implemented a geofencing system to verify user proximity before allowing access to communities.",
    "Built a full ticketing system with Stripe integration, including QR code generation and payout automation.",
    "Designed and deployed an event-driven architecture using Supabase Edge Functions and Webhooks.",
  ],
  link: "https://apps.apple.com/us/app/upin/id1341978328",
  imageUrl: upin.src, // Replace with an Upin-specific image if available
},

];

const ProjectsPage: React.FC = () => {
  return (
    <section className={styles.projectsPage}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={180}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>

              <div>
                <h3 className={styles.subtitle}>Technologies:</h3>
                <ul className={styles.list}>
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className={styles.subtitle}>Achievements:</h3>
                <ul className={styles.list}>
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.projectLinks}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View Project
                </a>
              </div>

              {project.githubrepo && (
                <a
                  href={project.githubrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubIcon}
                  aria-label="GitHub Repository"
                  title="View GitHub Repository"
                >
                  <FaGithub size={22} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
