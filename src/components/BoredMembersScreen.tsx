import React, { useEffect, useState } from "react";

import colors from "../configs/colors";
import initAOS from "../aosConfig";
import Screen from "./Screen";
import ContinueButton from "./ContinueButton";

import "aos/dist/aos.css";
import "../index.css";
import styles from "./BoredMembersScreen.module.css";

initAOS();

const BoredMembersIcon = (
  <div className={[styles.boredMembersIcon].join(" ")}>
    <a
      className={styles.boredMembersIconLink}
      href="https://bored-members-7822d4103af9.herokuapp.com/"
      target="_blank"
    ></a>
    <img
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      src="/bored_members_network.svg"
      alt=""
    />
  </div>
);

interface Props {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const BoredMembersScreen = React.forwardRef(
  ({ scrollToRef }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else if (entry.boundingClientRect.bottom > 0) {
            setInView(false);
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -30% 0px",
          threshold: 0,
        }
      );

      const screenRef = ref as React.RefObject<HTMLDivElement>;
      screenRef.current && observer.observe(screenRef.current);

      return () => {
        screenRef.current && observer.unobserve(screenRef.current);
      };
    });

    return (
      <Screen
        className={[
          styles.boredMembersScreen,
          inView ? styles.inView : "",
          "screen--centered screen--centered-col",
        ].join(" ")}
        ref={ref}
      >
        <div
          className={[styles.screenMainContent, "screen__main-content"].join(
            " "
          )}
        >
          <div
            data-aos="fade-left"
            data-aos-delay="350"
            data-aos-duration="600"
            data-aos-easing="ease-in-sine"
            className={styles.headingContainer}
          >
            <h1>
              Check out <span style={{ color: colors.neonPink }}>Bored</span>{" "}
              <span style={{ color: colors.brightPurple }}>Members</span>
            </h1>
            <h2>A chat room app I wrote in Java, using Spring Boot</h2>
          </div>

          {BoredMembersIcon}
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
