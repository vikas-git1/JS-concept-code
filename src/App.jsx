import React from "react";
import Debounce from "./js-components/debounceThrottle/Debounce";
import Throttle from "./js-components/debounceThrottle/Throttle";
import LocalStorage from "./js-components/storage/LocalStorage";
import SessionsStorage from "./js-components/storage/SessionsStorage";
import Cookies from "./js-components/storage/Cookies";
import LazyLoading from "./js-components/lazyloading/LazyLoading";

function App() {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      {/* <Debounce /> */}
      {/* <Throttle /> */}
      {/* <LocalStorage /> */}
      {/* <SessionsStorage /> */}
      {/* <Cookies /> */}
      <LazyLoading />
    </div>
  );
}

export default App;
