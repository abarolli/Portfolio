import { useEffect, useRef, useState } from "react";

import styles from "./StickyHeader.module.css";

interface Props {
  title: string;
  className?: string;
}

function StickyHeader({ title, className }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        else setIsVisible(false);
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
        className={[
          styles.stickyHeader,
          isVisible ? styles.stickyHeaderVisible : "",
          className,
        ].join(" ")}
        ref={headerRef}
      >
        {title}
      </h1>
    </>
  );
}

export default StickyHeader;
