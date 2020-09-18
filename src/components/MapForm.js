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
        const triangleCoords = [
            {lat: 13.005696, lng: 7.658433},
            {lat: 37.558774, lng: 126.794452},
        ];

        return (
            <div className="App">

                <Map google={this.props.google} minZoom={2} maxZoom={2}>
                    <Marker
                        onClick={this.onMarkerClick}
                        title={'캇시나 공항'}
                        name={'airport1'}
                        position={{lat: 13.005696, lng: 7.658433}} >
                    </Marker>
                    <Marker
                        onClick={this.onMarkerClick}
                        title={'김포 공항'}
                        name={'airport2'}

                        position={{lat: 37.558774, lng: 126.794452}}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.title}</h1>
                        </div>
                    </InfoWindow>
                    <Polygon
                        paths={triangleCoords}
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


















