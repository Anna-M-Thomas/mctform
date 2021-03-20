import React, { useState } from "react";
import Eventform from "./Eventform";
//import Output from './components/Meishi'

const App = () => {
  //Each field need a state
  const [venue, setVenue] = useState("");
  const [join, setJoin] = useState("");
  const [participants, setParticipants] = useState("");
  const [cost, setCost] = useState("");
  const [bring, setBring] = useState([]);
  const [apply, setApply] = useState("");
  const [applications, setApplications] = useState("");

  return (
    <div className="App">
      <Eventform
        venue={venue}
        setVenue={setVenue}
        setApplications={setApplications}
        setParticipants={setParticipants}
        setCost={setCost}
        bring={bring}
        setBring={setBring}
      />
      <div>
        Date and time: <br />
        Gathering spot: {venue} <br />
        Who can join: <br /># participants: {participants} people
        <br />
        Cost: {cost === "Free" ? cost : `${cost} yen`}
        <br />
        What to bring:{" "}
        {bring.map((thing) => (
          <span>{thing}, </span>
        ))}
        <br />
        How to apply: <br />
        Application deadline: <br />
        Applications, inquiries: {applications}
      </div>
      <br />
      <div>
        募集定員に達しましたので、申込受付を終了いたしました。This event has
        reached its limit of participants. Thank you for your interest!{" "}
      </div>
      <div>English follows Japanese.</div>
      <div>■ </div>
      <div>ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー</div>
    </div>
  );
};

export default App;
