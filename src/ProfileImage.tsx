import React from "react";

import styles from "./ProfileImage.module.css";

interface Props {
  src: string;
  width: string;
}

function ProfileImage({ src, width }: Props) {
  return (
    <div
      style={{ width, height: width, backgroundImage: `url(${src})` }}
      className={styles.imageContainer}
    />
  );
}

export default ProfileImage;
