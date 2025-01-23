import React, { Component } from "react";
import Map from "./map";
import FlatList from "./flatList";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {selectedFlatId: 0};
    }

    handleClick = (flatId) => {
        if (flatId != this.state.selectedFlatId) {
            this.setState({selectedFlatId: flatId});
        }       
    }

    render() {
        return(
            <div>
                <FlatList selectedFlatId={this.state.selectedFlatId} handleClick={this.handleClick}></FlatList>            
                <div className="map-container">
                    <Map></Map>
                </div>
            </div>
        )
    }
}

export default App;