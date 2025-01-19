import React from "react";
import Map from "./map";
import FlatList from "./flatList";

const App = () => {
    return(
        <div>
            <FlatList></FlatList>            
            <div className="map-container">
                <Map></Map>
            </div>
        </div>
    )
}

export default App;