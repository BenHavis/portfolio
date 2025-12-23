import React from "react";
import Image from "next/image";
import styles from "./projects.module.css";
import regenmedImage from "../../../assets/regenmedglobal.png";
import feedbackui from "../../../assets/feedbackui.png";
import upin from "../../../assets/upin.png";
import floorplanImage from "../../../assets/floorplan.png";
import streetsignal from "../../../assets/streetsignal-preview.png";
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
    title: "Upin",
    description:
      "A mobile app for hosting and joining local meetups with real-time geolocation, community features, and ticketing for paid events.",
    technologies: ["React Native", "Expo", "Supabase", "Stripe", "PostgreSQL"],
    achievements: [
      "Implemented a geofencing system to verify user proximity before allowing access to communities.",
      "Built a full ticketing system with Stripe integration, including QR code generation and payout automation.",
      "Designed and deployed an event-driven architecture using Supabase Edge Functions and Webhooks.",
    ],
    link: "https://www.upin.co/",
    imageUrl: upin.src,
  },

  {
    title: "Floorplan Renderer",
    description:
      "An AI-powered tool that converts 2D floorplans or room images into detailed interior visualizations using a multi-stage multimodal pipeline.",
    technologies: [
      "TypeScript",
      "Next.js",
      "FastAPI",
      "Gemini 2.5 Flash",
      "Gemini 3 Pro Image",
      "Multimodal AI",
    ],
    achievements: [
      "Built a two-stage AI pipeline using Gemini Flash to extract structured spatial data from floorplans before image generation.",
      "Translated floorplan geometry into explicit room layouts, wall boundaries, openings, and spatial flow constraints.",
      "Conditioned image generation on extracted spatial analysis to enforce layout correctness.",
      "Implemented a production FastAPI service handling image uploads, style selection, and render generation.",
    ],
    link: "https://floorplan-renderer-ai.vercel.app/",
    githubrepo: "https://github.com/BenHavis/floorplan-renderer-ai",
    imageUrl: floorplanImage.src,
  },

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

  {
    title: "StreetSignal",
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
    imageUrl: streetsignal.src,
  },

  {
    title: "Feedback UI",
    description:
      "A feedback management app that allows users to add, edit, and delete feedback with live preview and a custom rating system.",
    technologies: ["React", "TypeScript", "Vite"],
    achievements: [
      "Built from scratch with modern React hooks.",
      "Implemented dynamic form validation and rating UI.",
      "Deployed with Netlify for instant feedback access.",
    ],
    link: "https://determined-haibt-0d51f6.netlify.app/",
    githubrepo: "https://github.com/BenHavis/feedback",
    imageUrl: feedbackui.src,
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
              <p className={styles.projectDescription}>
                {project.description}
              </p>

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
