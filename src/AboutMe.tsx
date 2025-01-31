import React from "react";

import ProfileImage from "./ProfileImage";
import colors from "./configs/colors";

function AboutMe() {
  return (
    <section
      style={{
        display: "flex",
        columnGap: "40px",
        maxWidth: "1000px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            color: colors.accents,
            fontSize: "2rem",
            textWrap: "nowrap",
          }}
        >
          My Software Engineering Portfolio
        </h1>
        <ProfileImage src="/me.jpeg" width="300px" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            overflow: "auto",
          }}
        >
          <p style={{ marginBottom: "15px" }}>
            My name is Oni Barolli and I am a passionate software developer with
            expertise in technologies and languages such as Java, Python,
            JavaScript, SQL, Django, and more.
          </p>
          <p style={{ marginBottom: "15px" }}>
            I have always had a fascination with computers — like many others,
            this fascination sprung from the joy of playing Super Mario Bros on
            the NES — but it was really during my four years at Arizona State
            University, studying as a biology student, that I decided to pursue
            computer programming as a genuine career option.
          </p>
          <p>
            From the moment I typed out my first line of Python code, to the
            moment I compiled my first C program, to now, my love of software
            development has only grown stronger. I believe there's no limit to
            what a human with a computer can accomplish.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
