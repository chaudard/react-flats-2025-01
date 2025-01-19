import React, {Component} from "react";
import flats from "../../data/flats";

class FlatList extends Component {

    constructor (props) {
        super(props);
    }

    renderlist (flat) {
        return(
            <div className="card">{flat.id}</div>
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