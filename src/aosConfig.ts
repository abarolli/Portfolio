import AOS from "aos";

let isInitialized = false;
export default function initAOS() {
  if (!isInitialized) {
    console.log("Initializing AOS");
    AOS.init({
      mirror: true,
      once: false,
    });
    isInitialized = true;
  }
}
