import React from "react";

import Screen from "./Screen";
import Card from "./Card";
import colors from "../configs/colors";

import "../index.css";
import cardStyles from "./Card.module.css";
import styles from "./PythonLibrariesScreen.module.css";
import ContinueButton from "./ContinueButton";

const JenkinsLogScannerDescription = (
  <p>A fast utility for scanning Jenkins logs efficiently</p>
);

const TradebotDescription = <p>A Python wrapper around the TDAmeritrade API</p>;

interface Props {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const PythonLibrariesScreen = React.forwardRef(
  ({ scrollToRef }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <Screen
        className={[
          styles.pythonLibrariesScreen,
          "screen--centered screen--centered-col",
        ].join(" ")}
        ref={ref}
      >
        <div
          className={[styles.screenMainContent, "screen__main-content"].join(
            " "
          )}
        >
          <h1 className={styles.header}>Python Libraries I've Published</h1>
          <a
            className={styles.cardContainerAlignRight}
            href="https://pypi.org/project/tradebot/"
            target="_blank"
          >
            <Card
              title="tradebot"
              DescriptionComponent={TradebotDescription}
              className={[
                cardStyles.cardContainerGlowingTeal,
                styles.collapseHeaders,
                "hoverable--grow",
              ].join(" ")}
              displayClassName={cardStyles.cardSectionRightAligned}
              descriptionClassName={cardStyles.cardSectionLeftAligned}
              fadeIn={true}
            />
          </a>
          <a
            className={styles.cardContainerAlignRight}
            href="https://pypi.org/project/jenkins-log-scanner/"
            target="_blank"
          >
            <Card
              title="JenkinsLogScanner"
              DescriptionComponent={JenkinsLogScannerDescription}
              className={[
                cardStyles.cardContainerGlowingTeal,
                styles.collapseHeaders,
                "hoverable--grow",
              ].join(" ")}
              displayClassName={cardStyles.cardSectionRightAligned}
              descriptionClassName={cardStyles.cardSectionLeftAligned}
              fadeIn={true}
            />
          </a>
        </div>
        <ContinueButton
          onClick={() =>
            scrollToRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Where to find me
        </ContinueButton>
      </Screen>
    );
  }
);

export default PythonLibrariesScreen;
