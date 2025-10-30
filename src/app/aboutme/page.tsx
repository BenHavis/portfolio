import React from "react";
import styles from './aboutme.module.css';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.text}>
          Hi! I&apos;m a full-stack developer specializing in building robust web applications 
          with modern tech stacks. My expertise spans frontend development with React, 
          backend systems with Supabase, and database architecture across MSSQL and PostgreSQL platforms.
        </p>

        <p className={styles.text}>
          I have taken the lead on designing and developing a mobile app focused on helping users 
connect and organize real-world meetups. I oversaw its entire lifecycle from initial concept 
to launch, creating user-friendly interfaces, leveraging Supabase to implement scalable 
backend systems, and delivering features that foster meaningful in-person connections.
        </p>

        <p className={styles.text}>
          I thrive on solving challenging problems and delivering impactful solutions that 
          enhance user experiences. When I&apos;m not coding, you&apos;ll find me exploring new 
          technologies, optimizing systems, and refining design approaches to create intuitive 
          and efficient applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
