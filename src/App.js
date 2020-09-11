import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import airportarray from "./airportarray"
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";
import airportData from './components/data/airportdatajs.json';
class App extends Component {



  state = {
    country : [
      {
        departure: '',
        arrival: ''
      }
    ]
  }

  render() {


    const {country} = this.state;
    return (
        <div>
          {airportData.map((item, index) => {
              /*
              var arr = [];
              var start = "BKI";
              var end = "PUS";
              if (start == item.arp && end == item.odp)
              {
                  arr.push("출발공항 : " + item.arp)
                  arr.push("도착공항 : " + item.odp)
                  arr.push("거리 : " + item.km+"km");
                  arr.push("소요시간 : " + item.time+"분");
              }
*/
            return (

                <pre>
                    <h3></h3>
                </pre>

               // <h3>출발공항:{item.arp}, 거리:{item.km}, 도착공항:{item.odp}, time: {item.time}</h3>

            );
          })
          }

          <MainForm/>
          <MapForm/>
          <airCode/>

        </div>



    );
  }


}

export default App;
