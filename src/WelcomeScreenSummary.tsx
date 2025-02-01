import React from "react";
import colors from "./configs/colors";

function WelcomeScreenSummary() {
  return (
    <div style={{ whiteSpace: "wrap" }}>
      <p style={{ marginBottom: "20px", color: colors.text }}>
        Hello, my name is Adeiron (Oni) Barolli and I am a passionate software
        developer with expertise in technologies and languages such as Java,
        Python, JavaScript, SQL, Django, and more.
      </p>
      <p style={{ marginBottom: "20px", color: colors.text }}>
        I have always had a fascination with computers — like many others, this
        fascination sprung from the joy of playing Super Mario Bros on the NES —
        but it was really during my four years at Arizona State University,
        studying as a biology student, that I decided to pursue computer
        programming as a genuine career option.
      </p>
      <p style={{ color: colors.text }}>
        From the moment I typed out my first line of Python code, to the moment
        I compiled my first C program, to now, my love of software development
        has only grown stronger. I believe there's no limit to what a human with
        a computer can accomplish.
      </p>
    </div>
  );
}

export default WelcomeScreenSummary;
