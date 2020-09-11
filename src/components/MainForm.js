import React, {Component} from 'react';
import MapForm from "./MapForm";
import SearchForm from "./SearchForm"

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
        return (
            <div>
                <SearchForm
                    onSearch = {this.handleSearch}
                />
                {JSON.stringify(country)}
                <MapForm />
            </div>
        );
    }
}

export default MainForm;