import React from "react";
import AOS from "aos";

import Screen from "./Screen";

import "aos/dist/aos.css";
import "../index.css";
import colors from "../configs/colors";

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

function BoredMembersScreen() {
  return (
    <Screen
      style={{ backgroundColor: colors.buttons }}
      className="screen--centered screen--centered-col"
    >
      <div style={{ textAlign: "center" }}>
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
    </Screen>
  );
}

export default BoredMembersScreen;
