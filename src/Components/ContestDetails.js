import React from "react";
import logo2 from "../logo/logo2.jpg";
import logo3 from "../logo/logo3.jpg";

function ContestDetails({ data, idx }) {
  let seconds = data.duration;
  let days = Math.floor(seconds / (3600 * 24));
  let hours = Math.floor((seconds % (3600 * 24)) / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

console.log(data.duration);
  return (
    <div className="display">
      <div className="left">
        <div className="name">
          <h1 className="h1"> ContestName:</h1>
          <h1> {data.name}</h1>
        </div>
        <h1> Contest Start: {new Date(data.start_time).toLocaleString()}</h1>
        <h2> Contest end: {new Date(data.end_time).toLocaleString()}</h2>
        <h3> Time Taken: {`${days} days ${hours} hr ${mins} min & ${secs} sec`}</h3>
      </div>
      <div>
        {idx % 2 === 0 ? (
          <img className="logo" src={logo3} alt="logo2" />
        ) : (
          <img className="logo" src={logo2} alt="logo3" />
        )}
      </div>
    </div>
  );
}

export default ContestDetails;
