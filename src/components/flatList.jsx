import React, {Component} from "react";
import flats from "../../data/flats";
import Flat from "./flat";

class FlatList extends Component {

    constructor (props) {
        super(props);
    }

    renderlist (flat) {
        return(
            <Flat flat={flat} key={flat.id} selectedFlatId={this.props.selectedFlatId} handleClick={this.props.handleClick}></Flat>
        )
    }

    render () {
        return (
            <div className="flat-list">
                {flats.map(flat => this.renderlist(flat))}
            </div>
        )
    }

}

export default FlatList;