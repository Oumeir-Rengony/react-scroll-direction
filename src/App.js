import { useRef } from "react";
import { useScrollDirection } from "./ScrollDirection";

import "./styles.css";

export default function App() {
  const ref = useRef();
  const scrollDirection = useScrollDirection(ref);

  return (
    <div className="App" ref={ref}>
      <h1 data-shadow={scrollDirection} className="scroll-info">
        {scrollDirection}
      </h1>

      <img src="./scroll.gif" alt="scroll-down" />

      <div className="extra-space" />
    </div>
  );
}
