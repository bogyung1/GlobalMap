import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import airportarray from "./airportarray"
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";
import airportData from "./components/data/airportdatajs.json";

class App extends Component {


  render() {
    return (
        <div>

          <airportarray/>
          <airCode/>
        </div>



    );
  }


}

export default App;
