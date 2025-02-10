import React from "react";
import colors from "../configs/colors";
import initAOS from "../aosConfig";

import "../index.css";
import styles from "./WelcomeScreen.module.css";

initAOS();

function WelcomeScreenSummary() {
  const skills: { label: string; color: string }[] = [
    {
      label: "Java",
      color: colors.brightNeonGreen,
    },
    {
      label: "Python",
      color: colors.cyberOrange,
    },
    {
      label: "Javascript",
      color: colors.neonPink,
    },
    {
      label: "TypeScript",
      color: colors.electricCyan,
    },
    {
      label: "Spring Boot",
      color: colors.cyberLime,
    },
    {
      label: "Django",
      color: colors.electricCyan,
    },
    {
      label: "Flask",
      color: colors.buttons,
    },
    {
      label: "MongoDB",
      color: colors.deepEmerald,
    },
    {
      label: "SQL",
      color: colors.cyberOrange,
    },
    {
      label: "React",
      color: colors.neonPink,
    },
    {
      label: "React Native",
      color: colors.cyberLime,
    },
    {
      label: "Gradle",
      color: colors.electricCyan,
    },
    {
      label: "Maven",
      color: colors.neonPink,
    },
    {
      label: "Jenkins",
      color: colors.buttons,
    },
    {
      label: "UrbanCode Deploy",
      color: colors.cyberOrange,
    },
  ];

  const buildSkillsListComponent = () => {
    const nRows = 5;
    const nCols = Math.ceil(skills.length / nRows);
    const animationDuration = 350;
    const lists = [];
    for (let col = 0; col < nCols; col++) {
      const [startIndex, endIndex] = [col * nRows, col * nRows + nRows];
      const delayOffset = 200;
      lists.push(
        <ul key={col} className={styles.skillsList}>
          {skills.slice(startIndex, endIndex).map((skill, index) => (
            <li
              key={index}
              style={{ color: skill.color }}
              data-aos="fade-right"
              data-aos-duration={animationDuration}
              data-aos-delay={
                (animationDuration - delayOffset) * (col * nRows + index)
              }
            >
              {skill.label}
            </li>
          ))}
        </ul>
      );
    }

    return lists;
  };

  return (
    <div style={{ whiteSpace: "wrap" }}>
      <p style={{ marginBottom: "20px" }}>
        My name's Adeiron (Oni) Barolli and I am a passionate software developer
        with expertise in technologies and languages such as:
      </p>
      <div className={styles.skillsListContainer}>
        {buildSkillsListComponent()}
        <p data-aos="fade" data-aos-delay={3000}>
          and more...
        </p>
      </div>
    </div>
  );
}

export default WelcomeScreenSummary;
