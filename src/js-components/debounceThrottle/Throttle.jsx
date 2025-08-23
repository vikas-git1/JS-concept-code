import React, { useEffect, useRef, useState } from "react";

const Throttle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const lastCall = useRef(0);
  const handleScroll = () => {
    let now = Date.now();
    if (now - lastCall.current >= 1000) {
      setScrollPosition(window.scrollY);
      lastCall.current = now;
      // console.log("Current :", lastCall.current, "Now :", now);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ height: "200vh", backgroundColor: "gray" }}>
      <div>
        <h1>Throttle</h1>
        <p>Scroll position updates only once per second:</p>
        <p>{scrollPosition}px</p>
      </div>
    </div>
  );
};

export default Throttle;

// import React, { useEffect, useRef, useState } from "react";

// const Throttle = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [throttleScroll, setThrottleScroll] = useState(0);
//   let lastCall = useRef(0);
//   const handleScroll = () => {
//     let now = Date.now();
//     if (now - lastCall.current >= 1000) {
//       setThrottleScroll(window.scrollY);
//       lastCall.current = now;
//     }
//     setScrollPosition(window.scrollY);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div style={{ minHeight: "200vh" }}>
//       <h1>Throttle</h1>
//       <p>The normal scroll position of the window is: {scrollPosition}px</p>
//       <p>The Throttle scroll position of the window is: {throttleScroll}px</p>
//     </div>
//   );
// };

// export default Throttle;
