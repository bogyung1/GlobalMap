import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import './App.css';
import StartForm from './components/StartForm';
import MainForm from './components/MainForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FlightIcon from '@material-ui/icons/Flight';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class App extends Component {

  state = {
    departure: {
      name: '',
      code: '',
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
    const { country } = this.state;
    return (
        <BrowserRouter>
          <div className="App">
            <Container maxWidth="lg">
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Link to="/">
                    <FlightIcon color="inherit" />
                  </Link>
                  <Link to="/main" style={{textDecoration: 'none'}}>
                    <Typography variant="h6" color="inherit">
                    먼나라 이웃나라
                    </Typography>
                  </Link>
                </Toolbar>
              </AppBar>
              <Route exact path="/" component={StartForm} />
              <Route path="/main" component={MainForm} />
            </Container>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
