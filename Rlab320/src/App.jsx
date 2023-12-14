import { useState } from "react";


import data from "./data";
import "./app.css";

import Body from "./Body";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Body />
    </>
  );
}

export default App;
// When I click on Add, it doesnt push a todo into the array  immediate until another one is added
