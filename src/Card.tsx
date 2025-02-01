import React from "react";

import colors from "./configs/colors";

import styles from "./Card.module.css";

interface Props {
  title: string;
  IconComponent?: React.ReactNode;
  DescriptionComponent: React.ReactNode;
  style?: React.CSSProperties;
}

function Card({ title, IconComponent, DescriptionComponent, style }: Props) {
  return (
    <div className={styles.cardContainer} style={style}>
      <div className={[styles.cardSection, styles.cardDisplay].join(" ")}>
        <h1 style={{ color: colors.accents }}>{title}</h1>
        {IconComponent}
      </div>
      <div className={[styles.cardSection, styles.cardDescription].join(" ")}>
        {DescriptionComponent}
      </div>
    </div>
  );
}

export default Card;
