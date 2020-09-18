import React, {Component} from 'react';
import './App.css';
import airportData from './components/data/airportdatajs.json';

class Airportarray extends Component {
    render() {
        const arr = [];
        const start = this.props.airportdata[0];
        const end = this.props.airportdata[3];
        airportData.map((item) => {
            if (start === item.arp && end === item.odp){
                arr.push("출발공항 : " + item.arp);
                arr.push(" 도착공항 : " + item.odp);
                arr.push(" 거리 : " + item.km+"km");
                arr.push(" 소요시간 : " + item.time+"분");
            }
        });
        /*airportData.filter((item)=>{
            return (item.arp === start) && (item.odp === end)
        }).map((item) => {
            arr.push("출발공항 : " + item.arp);
            arr.push(" 도착공항 : " + item.odp);
            arr.push(" 거리 : " + item.km+"km");
            arr.push(" 소요시간 : " + item.time+"분");
        })*/

        return (
            <div>
              {arr}
            </div>
        );
    }
}

export default Airportarray;
