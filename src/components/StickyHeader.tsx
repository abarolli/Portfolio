import { useEffect, useRef, useState } from "react";

import styles from "./StickyHeader.module.css";

interface Props {
  title: string;
  color?: string;
}

function StickyHeader({ title, color }: Props) {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsSticky(true);
        else setIsSticky(false);
      },
      {
        root: null,
        rootMargin: "0px 0px -100% 0px",
        threshold: 0,
      }
    );

    headerRef.current && observer.observe(headerRef.current);

    return () => {
      headerRef.current && observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <>
      <h1
        style={{ color }}
        className={[styles.stickyHeader, isSticky ? styles.sticky : ""].join(
          " "
        )}
        ref={headerRef}
      >
        {title}
      </h1>
    </>
  );
}

export default StickyHeader;
