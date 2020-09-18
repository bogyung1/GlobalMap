import React, {Component} from 'react';
import { Map, GoogleApiWrapper,Marker, InfoWindow,Polygon } from 'google-maps-react';
import '.././App.css';

class MapForm extends Component {



    state = {
        minZoom:2,
        maxZoom:2,

        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };



    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        })

    render() {
        //두 지점 사이 선 긋기
        const Adata = [
            {name: this.props.dname, code: this.props.airportdata[0], lat: this.props.airportdata[1], lng: this.props.airportdata[2]},
            {name: this.props.aname, code: this.props.airportdata[3], lat: this.props.airportdata[4], lng: this.props.airportdata[5]},
        ];

        return (
            <div className="App">




                <Map google={this.props.google} minZoom={2} maxZoom={2}>
                    <Marker
                        onClick={this.onMarkerClick}
                        title={Adata[0].name}

                        name={'airport1'}
                        content={Adata[0].name+'('+Adata[0].code+')'}
                        position={{lat: Adata[0].lat, lng: Adata[0].lng}} >
                    </Marker>
                    <Marker
                        onClick={this.onMarkerClick}
                        title={Adata[1].name}
                        name={'airport2'}
                        content={Adata[1].name+'('+Adata[1].code+')'}
                        position={{lat: Adata[1].lat, lng: Adata[1].lng}}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.title}</h1>
                        </div>
                    </InfoWindow>
                    <Polygon
                        paths={Adata}
                        strokeColor="#0000FF"
                        strokeOpacity={0.9}
                        strokeWeight={2}
                        fillColor="#0000FF"
                        fillOpacity={0.45} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCyxSf0o0vnFuMchUAfqY3EU6UPNFbf6QI")
})(MapForm)


















