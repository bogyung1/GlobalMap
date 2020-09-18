import React, {Component} from 'react';
import MapForm from "./MapForm";
import SearchForm from "./SearchForm"
import Airportarray from "../airportarray"
import excelJson from "./data/exceldata.json";


class MainForm extends Component {
    state = {
        departure: '',
        arrival: ''
    }

    handleSearch = (data) => {
        this.setState({
                departure: data.departure,
                arrival: data.arrival,
            }
        )
    }

    render() {
        const airportData = [];
        const dname = this.state.departure;
        const aname = this.state.arrival;
        excelJson.filter((data)=>{
            return data.name === dname
        }).map((data)=>(
            airportData.push(data.code),
                airportData.push(data.lat),
                airportData.push(data.lon)
        ))
        excelJson.filter((data)=>{
            return data.name === aname
        }).map((data)=>(
            airportData.push(data.code),
                airportData.push(data.lat),
                airportData.push(data.lon)
        ))

        return (
            <div>
                <SearchForm
                    onSearch = {this.handleSearch}
                />
                <Airportarray/>
            </div>
        );
    }
}

export default MainForm;