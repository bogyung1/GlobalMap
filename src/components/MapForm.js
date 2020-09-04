import React, {Component} from 'react';
import '.././App.css';
import { Map, GoogleApiWrapper,Marker, InfoWindow } from 'google-maps-react';

class MapForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }
    componentDidMount() {
        fetch('api')
            .then(res=>res.json())
            .then(data=>this.setState({username:data.username}));
    }
    render() {
        //const {username} = this.state;
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*    {username ? `Hello ${username}` : 'Hello World'}*/}
                {/*</header>*/}

                <Map google={this.props.google} zoom={2}>

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>

            </div>
        );


    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCyxSf0o0vnFuMchUAfqY3EU6UPNFbf6QI")
})(MapForm)