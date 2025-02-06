import React from "react";

import styles from "./Card.module.css";

interface Props {
  title: string;
  IconComponent?: React.ReactNode;
  DescriptionComponent: React.ReactNode;
  style?: React.CSSProperties;
  displayClassName?: string;
  descriptionClassName?: string;
}

function Card({
  title,
  IconComponent,
  DescriptionComponent,
  style,
  displayClassName,
  descriptionClassName,
}: Props) {
  return (
    <div className={styles.cardContainer} style={style}>
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
