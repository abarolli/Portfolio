import React from "react";
import Screen from "./Screen";
import Card from "./Card";
import WelcomeScreenSummary from "./WelcomeScreenSummary";
import MyFace from "./MyFace";
import ContinueButton from "./ContinueButton";

import "../index.css";
import styles from "./WelcomeScreen.module.css";

interface Props {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

function WelcomeScreen({ scrollToRef }: Props) {
  return (
    <Screen
      className={[
        styles.welcomeScreen,
        "screen--centered screen--centered-col",
      ].join(" ")}
    >
      <div className={styles.welcomeScreenCardContainer}>
        <Card
          IconComponent={<MyFace />}
          DescriptionComponent={<WelcomeScreenSummary />}
          fadeIn={true}
        />
      </div>
      <ContinueButton
        onClick={() =>
          scrollToRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Click for Coding Adventures
      </ContinueButton>
    </Screen>
  );
}

export default WelcomeScreen;
