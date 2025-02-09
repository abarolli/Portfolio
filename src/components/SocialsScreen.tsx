import React from "react";
import Screen from "./Screen";

import "../index.css";
import colors from "../configs/colors";

import "../index.css";

const SocialsScreen = React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <Screen
        style={{ backgroundColor: colors.mainTheme }}
        className="screen--centered screen--centered-col"
        ref={ref}
      >
        <h2>Follow me around</h2>
        <div>
          <a
            href="https://github.com/abarolli?tab=overview&from=2025-02-01&to=2025-02-08"
            target="_blank"
          >
            <img
              src="/github-mark-white.svg"
              height={"200px"}
              width={"200px"}
              alt=""
              style={{ marginRight: "50px" }}
              className="hoverable--grow"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adeiron-barolli/"
            target="_blank"
          >
            <img
              src="/LI-In-Bug.png"
              height={"200px"}
              width={"200px"}
              alt=""
              className="hoverable--grow"
            />
          </a>
        </div>
      </Screen>
    );
  }
);

export default SocialsScreen;
