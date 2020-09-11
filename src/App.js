import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import airportarray from "./airportarray"
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";
import airportData from './components/data/airportdatajs.json';

class App extends Component {



  state = {
    departure: {
      name: '',
      code:'',
      location: {
        lat: 0,
        lon: 0
      }
    },
    arrival: {
      name: '',
      code: '',
      location: {
        lat: 0,
        lon: 0
      }
    }
  }


  render() {


    const {country} = this.state;
    return (
        <div>



          <MainForm/>
          <MapForm/>
          <airCode/>

        </div>



    );
  }


}

export default App;
