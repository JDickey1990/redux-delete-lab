import React, { Component } from 'react';
import Band from './Band'
class Bands extends Component {

    bandInfo = () => {
        return this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/> )
    }

    render() {
        return(
        <div>
            {this.bandInfo()}
        </div>
        );
    }
};

export default Bands;