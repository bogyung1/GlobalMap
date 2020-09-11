import React, {Component} from 'react';
import './App.css';
import MainForm from './components/MainForm';
import MapForm from './components/MapForm';


class App extends Component {
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
    }
  }


  render() {
    const {country} = this.state;
    return (
        <div>
          <MainForm/>
          <MapForm/>
        </div>

    );
  }
}

export default App;
