import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';

class Map extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return(
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                 <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={{lat: 10.99835602, lng: 77.01502627}}
                    defaultZoom={11}
                >
                </GoogleMapReact>            
            </div>        )
    }

}

export default Map;