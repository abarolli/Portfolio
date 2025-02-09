import React from "react";
import Screen from "./Screen";

import "../index.css";
import colors from "../configs/colors";

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
              width={"200px"}
              alt=""
              data-aos="fade-left"
              style={{ marginRight: "150px" }}
              className="hoverable--grow"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adeiron-barolli/"
            target="_blank"
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
