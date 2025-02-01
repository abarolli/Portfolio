import React from "react";

function MyFace() {
  return (
    <div
      style={{
        backgroundImage: `url("/me.jpeg")`,
        height: "350px",
        width: "350px",
        backgroundSize: "cover",
        borderRadius: "50%",
      }}
    />
  );
}

export default MyFace;
