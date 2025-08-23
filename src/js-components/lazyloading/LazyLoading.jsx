import React, { Suspense, useState } from "react";
let About = React.lazy(() => import("./About"));
let Contact = React.lazy(() => import("./Contact"));
const LazyLoading = () => {
  const [loadAbout, setLoadAbout] = useState(false);
  const [loadContact, setLoadContact] = useState(false);
  return (
    <div>
      <button onClick={() => setLoadAbout((prev) => !prev)}>
        {loadAbout ? "Hide About" : "Load About"}
      </button>
      <button onClick={() => setLoadContact((prev) => !prev)}>
        {loadContact ? "Hide Contact" : "Load Contact"}
      </button>

      <div>
        <Suspense fallback={`Component is loading....`}>
          {loadAbout && <About />}
          {loadContact && <Contact />}
        </Suspense>
      </div>
    </div>
  );
};

export default LazyLoading;
