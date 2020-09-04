// import React, {Component} from 'react';
// import { Map, GoogleApiWrapper,Marker, InfoWindow } from 'google-maps-react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component{
//     username;
//
//
//
//     constructor(props) {
//         super(props);
//         this.state={
//             username:null
//         };
//     }
//     componentDidMount() {
//         fetch('api')
//             .then(res=>res.json())
//             .then(data=>this.setState({username:data.username}));
//     }
//
//
//     render() {
//         const {username}=this.state
//         return(
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <p>
//                         Hello Google
//                     </p>
//                     <p>
//                         {this.username ? 'Hello ${username}': 'Hello World'}
//
//                     </p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                     </a>
//                 </header>
//                 <Map google={this.props.google} zoom={2}>
//
//                     <Marker onClick={this.onMarkerClick}
//                             name={'Current location'} />
//
//                     <InfoWindow onClose={this.onInfoWindowClose}>
//
//                     </InfoWindow>
//                 </Map>
//
//
//             </div>
//
//         )
//
//     }
// }
//
//
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCyxSf0o0vnFuMchUAfqY3EU6UPNFbf6QI")
// })(App)

import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper,Marker, InfoWindow } from 'google-maps-react';

class App extends React.Component {


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
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
          </header>

          <Map google={this.props.google} zoom={2}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
          </Map>

        </div>
    );
    ;
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCyxSf0o0vnFuMchUAfqY3EU6UPNFbf6QI")
})(App)