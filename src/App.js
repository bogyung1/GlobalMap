import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import './App.css';
import { withStyles } from '@material-ui/styles';
import StartForm from './components/StartForm';
import MainForm from './components/MainForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FlightIcon from '@material-ui/icons/Flight';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = {
  appBar: {
    background: '#d4e176',
    padding: '10px',
  },
  appIcon: {
    color: 'black',
    fontSize: '2rem',
    display: 'flex',
  },
  appTitle: {
    textDecoration: 'none',
    color: 'black',
    paddingLeft: '10px'
  }
};

class App extends Component {

  render() {
    const { classes } = this.props;
    return (

        <BrowserRouter>
          <div>
            <Container maxWidth="false" minWidth="lg">
              <AppBar className={classes.appBar} position="static">
                <Toolbar variant="dense">
                  <Link to="/">
                    <FlightIcon className={classes.appIcon} color="inherit"/>
                  </Link>
                  <Link to="/main" className={classes.appTitle}>
                    <Typography variant="h4" color="inherit">
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

export default withStyles(styles)(App);
