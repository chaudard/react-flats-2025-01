import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker"></div>;

class Map extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const defaultZoom = 12;
        if (this.props.showMarker) {
            return(                
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                 <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                    defaultZoom={defaultZoom}
                >
                    <Marker
                        lat={this.props.lat}
                        lng={this.props.lng}
                    />
                </GoogleMapReact>            
            </div>        
            )
        }
        else {
            return(                
                // Important! Always set the container height explicitly
                <div style={{ height: '100vh', width: '100%' }}>
                     <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={{lat: 48.884211, lng: 2.34689}}
                        defaultZoom={defaultZoom}
                    >
                    </GoogleMapReact>            
                </div>        
                )
            }
}

}

export default Map;