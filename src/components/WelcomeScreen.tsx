import React from "react";
import Screen from "./Screen";
import Card from "./Card";
import WelcomeScreenSummary from "./WelcomeScreenSummary";
import MyFace from "./MyFace";
import colors from "../configs/colors";

import "../index.css";
import styles from "./WelcomeScreen.module.css";

function WelcomeScreen() {
  return (
    <Screen
      className="screen--centered"
      style={{ backgroundColor: colors.mainTheme }}
    >
      <div className={styles.welcomeScreenCardContainer}>
        <Card
          title="My Portfolio"
          IconComponent={<MyFace />}
          DescriptionComponent={<WelcomeScreenSummary />}
        />
      </div>
    </Screen>
  );
}

export default WelcomeScreen;
