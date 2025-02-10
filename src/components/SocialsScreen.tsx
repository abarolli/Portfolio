import React from "react";
import Screen from "./Screen";
import styles from "./SocialsScreen.module.css";

import "../index.css";

const SocialsScreen = React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <Screen
        className={[
          styles.socialsScreen,
          "screen--centered screen--centered-col",
        ].join(" ")}
        ref={ref}
      >
        <h2>Follow me around</h2>
        <div className={styles.linkIconsContainer}>
          <a
            href="https://github.com/abarolli?tab=overview&from=2025-02-01&to=2025-02-08"
            target="_blank"
          >
            <img
              src="/github-mark-white.svg"
              width={"200px"}
              alt=""
              data-aos="fade-left"
              className="hoverable--grow"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adeiron-barolli/"
            target="_blank"
            className={styles.linkedInIcon}
          >
            <img
              src="/LI-In-Bug.png"
              width={"200px"}
              alt=""
              data-aos="fade-right"
              className="hoverable--grow"
            />
          </a>
        </div>
      </Screen>
    );
  }
);

export default SocialsScreen;
