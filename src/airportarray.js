import React, {Component} from 'react';
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";
import airportData from './components/data/airportdatajs.json';


class airportarray extends Component {
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

                    return (

                        <pre>

                            <h3>{arr[0]}</h3>
                            <h3>{arr[1]}</h3>
                            <h3>{arr[2]}</h3>
                            <h3>{arr[3]}</h3>
                        </pre>

                        // <h3>출발공항:{item.arp}, 거리:{item.km}, 도착공항:{item.odp}, time: {item.time}</h3>

                    );
                })
                }
                <MainForm/>
                <MapForm/>
                <airCode/>

            </div>
            /*
            <div>
              <MainForm/>
              <MapForm/>
            </div>*/

        );
    }
}

export default airportarray;
