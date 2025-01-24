import React, { Component } from "react";
import Map from "./map";
import FlatList from "./flatList";
import flats from "../../data/flats";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {selectedFlatId: 0, showMarker: false, lat: 0, lng: 0};
    }

    handleClick = (flatId) => {
        if (flatId != this.state.selectedFlatId) {
            const flat = flats[flatId-1];
            this.setState({selectedFlatId: flatId, showMarker: true, lat: flat.lat, lng: flat.lng});
        }       
    }

    render() {
        return(
            <div>
                <FlatList selectedFlatId={this.state.selectedFlatId} handleClick={this.handleClick}></FlatList>            
                <div className="map-container">
                    <Map showMarker={this.state.showMarker} lat={this.state.lat} lng={this.state.lng}></Map>
                </div>
            </div>
        )
    }
}

export default App;