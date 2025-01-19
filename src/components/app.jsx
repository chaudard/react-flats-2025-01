import React from "react";
import GoogleMapReact from "./googleMapReact";
import FlatList from "./flatList";

const App = () => {
    return(
        <div>
            <div className="flat-list">
                <FlatList></FlatList>            
            </div>
            <div className="map-container">
                <GoogleMapReact></GoogleMapReact>
            </div>
        </div>
    )
}

export default App;