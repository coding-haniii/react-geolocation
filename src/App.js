import React, { Component, useState } from 'react';
import "./App.css";

export default class App extends Component{
  render(){

  
      return (
        <div className="App">
            <div className="container">
              <div className="box-button">
                    <Parent />
              </div>
            </div>
          
        </div>
      )
  }
}

const Parent = (props) => {
  const [data, setData ] = useState(0);

  return (
    <div>
    <div>{data}</div>
    <Child setData={setData} value={data} />
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <button id="find-me" onClick={() => { 
        let sum =  props.value + 1;
            geoFindMe(sum)
            props.setData( sum)
      }}>
          Show my location
      </button><br />
      <p id="status"></p>
      <table id="map-tbl">
      <tr id="map-tr">
        <th>No</th>
        <th>latitude/longitude</th>
      </tr>
      </table>
    </div>
  )
}

function geoFindMe(sum) {
  const status = document.querySelector("#status");
  const mapTr = document.querySelector("#map-tbl");

  function success(position) {    

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const num = document.querySelector("#map-tbl").childElementCount;

    status.textContent = "";

    const newRow = mapTr.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);

    const href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    const txt = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    
    newCell1.innerText = num;
    newCell2.innerHTML = "<a href="+href+">"+txt+"</a>";
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// import Board from "./components/Board";

// function App() {
//   return (
//     <div className="container">
//           <div className="box-button">
//                   <Board />
//           </div>
//           <div className="box-data">
//               data
//           </div>
//     </div>
//   );
// }

// export default App;
