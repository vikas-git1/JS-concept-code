import React from "react";
import Debounce from "./js-components/debounceThrottle/Debounce";
import Throttle from "./js-components/debounceThrottle/Throttle";
import LocalStorage from "./js-components/storage/LocalStorage";
import SessionsStorage from "./js-components/storage/SessionsStorage";
import Cookies from "./js-components/storage/Cookies";
import LazyLoading from "./js-components/lazyloading/LazyLoading";
import PracticeStorage from "./js-components/storage/PracticeStorage";
import Display from "./js-components/contextApi/Display";
import ControlledComponent from "./js-components/forms/ControlledComponent";
import UncontrolledComponent from "./js-components/forms/UncontrolledForm";
import EventDelegation from "./js-components/eventDelegation/EventDelegation";
import Axios from "./js-components/fetch/Axios";
import Fetch from "./js-components/fetch/Fetch";

function App() {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      {/* <Debounce /> */}
      {/* <Throttle /> */}
      {/* <LocalStorage /> */}
      {/* <SessionsStorage /> */}
      {/* <Cookies /> */}
      {/* <LazyLoading /> */}
      {/* <PracticeStorage /> */}
      {/* <Display /> */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent />m */}
      {/* <EventDelegation /> */}
      <Axios />
      <Fetch />
    </div>
  );
}

export default App;
