import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import logo from '../styles/images/logo.png';

const styles = {
    root: {
        color: 'black',
        textAlign: 'center',
    }
};

class StartForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h2>먼나라 이웃나라</h2>
                <h4>공항 간 거리와 비행시간을 알려줍니다.</h4>
                <img src={logo}/>
            </div>
        );
    }
}

export default withStyles(styles)(StartForm);