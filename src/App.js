import React, {Component} from 'react';
import './App.css';
import MainForm from './components/MainForm';
import MapForm from "./components/MapForm";

class App extends Component {
  state = {
    country : [
      {
        departure: '',
        arrival: ''
      }
    ]
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
