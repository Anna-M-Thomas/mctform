import React from "react";
import Eventform from "./components/Eventform";
//import Output from './components/Meishi'

const App = () => {
  //Each field need a state

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <div className="App">
      <Eventform handleChange={handleChange} />
    </div>
  );
};

export default App;
