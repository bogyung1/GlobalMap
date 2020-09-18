import React, {Component} from 'react';
import SearchForm from "./SearchForm"
import excelJson from "./data/exceldata.json";
import Airportarray from "../Airportarray";
import MapForm from "./MapForm";

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
                <Airportarray airportdata = {airportData}/>
                <MapForm dname = {dname} aname={aname} airportdata = {airportData}/>
            </div>
        );
    }
}

export default MainForm;