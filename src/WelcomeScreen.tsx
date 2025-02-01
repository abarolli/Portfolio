import React from "react";
import Screen from "./Screen";
import Card from "./Card";
import WelcomeScreenSummary from "./WelcomeScreenSummary";
import MyFace from "./MyFace";
import colors from "./configs/colors";

import styles from "./WelcomeScreen.module.css";

function WelcomeScreen() {
  return (
    <Screen
      className={styles.welcomeScreen}
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
