import React from "react";

import styles from "./Card.module.css";

interface Props {
  title: string;
  IconComponent?: React.ReactNode;
  DescriptionComponent: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  displayClassName?: string;
  descriptionClassName?: string;
}

function Card({
  title,
  IconComponent,
  DescriptionComponent,
  style,
  className,
  displayClassName,
  descriptionClassName,
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
      >
        {DescriptionComponent}
      </div>
    </div>
  );
}

export default Card;
