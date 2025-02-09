import React from "react";
import AOS from "aos";

import Screen from "./Screen";
import colors from "../configs/colors";
import ContinueButton from "./ContinueButton";

import "aos/dist/aos.css";
import "../index.css";
import styles from "./BoredMembersScreen.module.css";

AOS.init();

const BoredMembersIcon = (
  <div className="hoverable--grow">
    <img
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-mirror="true"
      src="/bored_members_network.svg"
      height="300px"
      width="300px"
      alt=""
    />
  </div>
);

interface Props {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const BoredMembersScreen = React.forwardRef(
  ({ scrollToRef }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <Screen
        style={{ backgroundColor: colors.buttons }}
        className="screen--centered screen--centered-col"
        ref={ref}
      >
        <div
          className={[styles.screenMainContent, "screen__main-content"].join(
            " "
          )}
        >
          <div className={styles.headingContainer}>
            <h1>
              Check out <span style={{ color: colors.neonPink }}>Bored</span>{" "}
              <span style={{ color: colors.brightPurple }}>Members</span>
            </h1>
            <h2>A chat room app I wrote in Java, using Spring Boot</h2>
          </div>
          <a
            href="https://bored-members-7822d4103af9.herokuapp.com/"
            target="_blank"
          >
            {BoredMembersIcon}
          </a>
        </div>
        <ContinueButton
          onClick={() =>
            scrollToRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Continue
        </ContinueButton>
      </Screen>
    );
  }
);

export default BoredMembersScreen;
