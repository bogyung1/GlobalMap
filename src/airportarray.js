import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";
import airportData from './components/data/airportdatajs.json';


class airportarray extends Component {

    constructor(props) {
        super(props);

        this.state = {
            departure: {
                name: '',
                code:'BKI',
                location: {
                    lat: 0,
                    lon: 0
                }
            },
            arrival: {
                name: '',
                code: 'PUS',
                location: {
                    lat: 0,
                    lon: 0
                }
            },
            time: 0,
            distance: 0
        };
    }



    render() {

        var arr = [];
        const {country} = this.state;
        return (
            <div>

                {airportData.map((item, index) => {

                    if (this.state.departure.code == item.arp && this.state.arrival.code == item.odp)
                    {
                        arr.push("출발공항 : " + item.arp)
                        arr.push("도착공항 : " + item.odp)
                        arr.push("거리 : " + item.km+"km");
                        arr.push("소요시간 : " + item.time+"분");
                    }

                })
                }
                {arr[0]}&nbsp;&nbsp;&nbsp;
                {arr[1]}&nbsp;&nbsp;&nbsp;
                {arr[2]}&nbsp;&nbsp;&nbsp;
                {arr[3]}&nbsp;&nbsp;&nbsp;
                <MapForm ar = {arr} />;
            </div>

        );
    }
}

export default airportarray;
