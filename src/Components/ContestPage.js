import React from "react";

function ContestPage({ yaqoobb }) {
  console.log(yaqoobb);

  return (
    <div className="yaqoobb">
      <div className="nav"> 
        <h1>START YOUR CONTEST JOURNEY</h1>
      </div>
    <div className="table_parent">
    <table>
        <thead>
          <tr>
            <th>Organised by</th>
            <th>channel</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Link to start</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{yaqoobb.name}</td>
            <td>{yaqoobb.site}</td>
            <td>{new Date(yaqoobb.start_time).toLocaleString()}</td>
            <td>{new Date(yaqoobb.end_time).toLocaleString()}</td>
            <td>
              <a id="a" href={yaqoobb.url} target="_black">
                <button> <h2>Click here to go to contest </h2></button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ContestPage;
