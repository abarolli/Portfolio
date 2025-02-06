import React from "react";

import Screen from "./Screen";
import Card from "./Card";
import colors from "../configs/colors";

import "../index.css";
import cardStyles from "./Card.module.css";

const JenkinsLogScannerDescription = (
  <p>A fast utility for scanning Jenkins logs efficiently</p>
);

const TradebotDescription = <p>A Python wrapper around the TDAmeritrade API</p>;

function PythonLibrariesScreen() {
  return (
    <Screen
      className="screen--centered screen--centered-col"
      style={{ backgroundColor: colors.buttons }}
    >
      <h1>Python Libraries I've Written</h1>
      <a href="https://pypi.org/project/tradebot/" target="_blank">
        <Card
          title="tradebot"
          DescriptionComponent={TradebotDescription}
          displayClassName={cardStyles.cardSectionCenteredRightAligned}
          descriptionClassName={cardStyles.cardSectionCenteredLeftAligned}
        />
      </a>
      <a href="https://pypi.org/project/jenkins-log-scanner/" target="_blank">
        <Card
          title="JenkinsLogScanner"
          DescriptionComponent={JenkinsLogScannerDescription}
          displayClassName={cardStyles.cardSectionCenteredRightAligned}
          descriptionClassName={cardStyles.cardSectionCenteredLeftAligned}
        />
      </a>
    </Screen>
  );
}

export default PythonLibrariesScreen;
