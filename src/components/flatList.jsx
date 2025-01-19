import React, {Component} from "react";
import flats from "../../data/flats";

class FlatList extends Component {

    constructor (props) {
        super(props);
    }

    renderlist (flat) {
        const urlBackground = flat.imageUrl;
        return(           
            <div className="card" style={{backgroundImage: `url(${urlBackground}) , linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`}}>                
                <div className="card-category">{flat.price} {flat.priceCurrency}</div>
                <div className="card-description">
                    <h2>{flat.name}</h2>
                </div>
                <a className="card-link" href="#"></a>
            </div>
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