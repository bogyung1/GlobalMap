import React, {Component} from 'react';
import './App.css';
import airportData from './components/data/airportData.json';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";


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
                return (

                    <h3>출발공항:{item.arp}, 거리:{item.km}, 도착공항:{item.odp}, time: {item.time}</h3>

                );
            })
            }
          <MainForm/>
          <MapForm/>


        </div>

    );
  }
}

export default App;
