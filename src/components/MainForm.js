import React, {Component} from 'react';
import MapForm from "./MapForm";
import SearchForm from "./SearchForm"

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
        return (
            <div>
                <SearchForm
                    onSearch = {this.handleSearch}
                />
                {this.state.departure}
                {this.state.arrival}
                <MapForm />
            </div>
        );
    }
}

export default MainForm;