import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

class SearchForm extends Component {
    state = {
        departure : '',
        arrival : ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
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
        const airport = [
            { title: 'The Shawshank Redemption', year: 1994 },
            { title: 'The Godfather', year: 1972 },
            { title: 'The Godfather: Part II', year: 1974 },
            { title: 'The Dark Knight', year: 2008 },
            { title: '12 Angry Men', year: 1957 },
        ];
        return (
            <form onSubmit={this.handleSubmit}>

                {/*
                <input
                    placeholder={'출발공항'}
                    value={this.state.departure}
                    onChange={this.handleChange}
                    name={'departure'}
                />
                */}

                <Autocomplete
                    id="combo-box-demo"
                    placeholder={'출발공항'}
                    options={airport}
                    value={this.state.arrival}
                    onChange={this.handleChange}
                    name={'departure'}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) =>
                        <TextField {...params} label="출발 공항"
                                   variant="outlined"
                                  />}
                />

                <ArrowForwardIcon />
                {/*
                <input
                    placeholder={'도착공항'}
                    value={this.state.arrival}
                    onChange={this.handleChange}
                    name={'arrival'}
                />
                */}

                <Autocomplete
                    id="combo-box-demo"
                    placeholder={'도착공항'}
                    options={airport}
                    value={this.state.arrival}
                    onChange={this.handleChange}
                    name={'arrival'}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) =>
                        <TextField {...params} label="도착 공항"
                                   variant="outlined" />}
                />
                <Button type={'search'}
                        variant="contained"
                        color="primary">
                    찾기
                </Button>
                {JSON.stringify(this.state.departure)}
            </form>
        )
    }
}

export default SearchForm;