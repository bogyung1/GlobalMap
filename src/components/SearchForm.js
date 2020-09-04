import React, { Component } from 'react';
import arrow from '.././rightarrow_80815.png'

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