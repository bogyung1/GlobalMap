import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import airportarray from "./airportarray"
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";
import SearchData from "./components/SearchData";
import airportData from './components/data/airportdatajs.json';

class App extends Component {
    state = {
        departure: {
          name: '인천 국제공항',
          code:'',
          location: {
            lat: 0,
            lon: 0
          }
        },
        arrival: {
          name: '후쿠오카 공항',
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

            <SearchData dname={this.state.departure.name} aname={this.state.arrival.name}></SearchData>
          <MainForm/>
          <MapForm/>
          <airCode/>

        </div>



    );
  }


}

export default App;
