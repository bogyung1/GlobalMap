import React, {Component} from 'react';
//import './App.css';
import MainForm from './components/MainForm';


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
        </div>

    );
  }
}

export default App;
