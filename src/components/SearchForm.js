import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

const airport = [ 'The Shawshank Redemption', 'The Godfather' ];
class SearchForm extends Component {
    state = {
        departure : '',
        arrival : ''
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
                    options={airport}
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