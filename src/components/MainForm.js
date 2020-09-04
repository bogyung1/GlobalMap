import React, { Component } from 'react';
import SearchForm from './SearchForm'

class MainForm extends Component {
    state = {
        country : [
            {
                departure: '',
                arrival: ''
            }
        ]
    }
    handleSearch = (data) => {
        const {country} = this.state;
        this.setState({
                country: data
            }
        )
    }
    render() {
        const {country} = this.state;
        let title = "먼나라 이웃나라";
        return (

            <div>
                {title}
                <SearchForm
                    onSearch = {this.handleSearch}
                />
                {JSON.stringify(country)}


            </div>

        );
    }
}

export default MainForm;