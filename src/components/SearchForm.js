
import React, { Component } from 'react';
import excelJson from './data/exceldata.json'
import airportdatajs from './data/airportdatajs.json'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

const airport = excelJson.map((data) => data.name).sort();
class SearchForm extends Component {
    state = {
        departure: '',
        arrival: ''
    }

    handleDepartureChange = (e, value) => {
        this.setState({

            departure: value
        });
    }

    handleArrivalChange = (e, value) => {
        this.setState({
            arrival : value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state);
        this.setState({
            departure : this.state.departure,
            arrival : this.state.arrival
        })
    }

    render() {
        let nameTocode = '';
        const airport2 = [];

        excelJson.filter((data)=>{
            return this.state.departure === data.name
        }).map((data) => nameTocode = data.code)
        const airport2codes = airportdatajs.filter((data)=>{
            return nameTocode === data.arp
        }).map((data) => data.odp)
        for(let i=0;i<airport2codes.length;i++) {
            excelJson.filter((data)=>{
                return airport2codes[i] === data.code
            }).map((data) => airport2.push(data.name))
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <Autocomplete
                    id="controllable-states-demo"
                    name="departure"
                    options={airport}
                    onChange={this.handleDepartureChange}
                    style={{ width: 300 }}
                    renderInput={(params) =>
                        <TextField {...params} label="출발 공항"
                                   variant="outlined" />}
                />
                <ArrowForwardIcon />
                <Autocomplete
                    id="combo-box-demo"
                    options={airport2}
                    onChange={this.handleArrivalChange}
                    name="arrival"
                    style={{ width: 300 }}
                    renderInput={(params) =>
                        <TextField {...params} label="도착 공항"
                                   variant="outlined" />}
                />
                <Button type="submit"
                        variant="contained"
                        color="primary">
                    찾기
                </Button>
            </form>
        )
    }
}

export default SearchForm;