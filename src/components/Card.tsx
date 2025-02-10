import React from "react";

import initAOS from "../aosConfig";

import "aos/dist/aos.css";
import styles from "./Card.module.css";

initAOS();

interface Props {
  title: string;
  IconComponent?: React.ReactNode;
  DescriptionComponent: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  displayClassName?: string;
  descriptionClassName?: string;
  fadeIn?: boolean;
}

function Card({
  title,
  IconComponent,
  DescriptionComponent,
  style,
  className,
  displayClassName,
  descriptionClassName,
  fadeIn,
}: Props) {
  return (
    <div className={[styles.cardContainer, className].join(" ")} style={style}>
      <div
        className={[
          styles.cardSection,
          styles.cardDisplay,
          displayClassName,
        ].join(" ")}
      >
        <h1>{title}</h1>
        {IconComponent}
      </div>
      <div
        className={[
          styles.cardSection,
          styles.cardDescription,
          descriptionClassName,
        ].join(" ")}
        data-aos={fadeIn && "fade-right"}
      >
        {DescriptionComponent}
      </div>
    </div>
  );
}

export default Card;
