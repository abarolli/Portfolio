import React from "react";
import Screen from "./Screen";
import Card from "./Card";
import WelcomeScreenSummary from "./WelcomeScreenSummary";
import MyFace from "./MyFace";
import colors from "../configs/colors";

import "../index.css";
import styles from "./WelcomeScreen.module.css";

interface Props {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

function WelcomeScreen({ scrollToRef }: Props) {
  return (
    <Screen
      className="screen--centered screen--centered-col"
      style={{ backgroundColor: colors.mainTheme, padding: "20px" }}
    >
      <div className={styles.welcomeScreenCardContainer}>
        <Card
          title="My Portfolio"
          IconComponent={<MyFace />}
          DescriptionComponent={<WelcomeScreenSummary />}
          fadeIn={true}
        />
      </div>
      <button
        onClick={() => {
          scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Click for coding adventures
      </button>
    </Screen>
  );
}

export default WelcomeScreen;
