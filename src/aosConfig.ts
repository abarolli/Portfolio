import AOS from "aos";

let isInitialized = false;
export default function initAOS() {
  if (!isInitialized) {
    window.onload = () => {
      AOS.init({
        mirror: false,
        once: false,
      });
      isInitialized = true;
      console.log("AOS initialized");
    };
  }
}
