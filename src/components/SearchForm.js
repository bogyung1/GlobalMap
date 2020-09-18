import React, { Component } from 'react';
import arrow from '.././rightarrow_80815.png'
import excelJson from './data/exceldata.json'

// 공항이름목록
const airportNames = excelJson.map((data) => data.name);

class SearchForm extends Component {
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
    handleChange = (e) => {
        this.setState({
            [e.target.name.name] : e.target.value.name
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state);
        this.setState({
            departure : '',
            arrival : ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input
                    placeholder={'출발공항'}
                    value={this.state.departure}
                    onChange={this.handleChange}
                    name={'departure'}
                />
                <img
                    src={arrow}
                    width={20}
                    height={14}
                />
                <input
                    placeholder={'도착공항'}
                    value={this.state.arrival}
                    onChange={this.handleChange}
                    name={'arrival'}
                />
                <button type={'search'}>찾기</button>
            </form>
        )
    }
}

export default SearchForm;