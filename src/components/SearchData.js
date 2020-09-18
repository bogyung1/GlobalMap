import React, { Component } from 'react';
import excelJson from './data/exceldata.json'

class SearchData extends Component {
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
        },

    }
    render() {
        const airportData = [];
        const dname = this.props.dname;
        const aname = this.props.aname;
        const departureData = excelJson.filter((data)=>{
            return data.name === dname
        }).map((data)=>(
            airportData.push(data.code),
                airportData.push(data.lat),
                airportData.push(data.lon)
        ))
        const arrivalData = excelJson.filter((data)=>{
            return data.name === aname
        }).map((data)=>(
            airportData.push(data.code),
                airportData.push(data.lat),
                airportData.push(data.lon)
        ))

        return (

            <div>
                {airportData[4]}
            </div>
        )
    }
}

export default SearchData;