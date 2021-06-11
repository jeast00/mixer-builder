import React, { Component } from "react";
import { connect } from "react-redux";



class MixersContainer extends Component {

    componentDidMount() {
        this.props.fetchMixers();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        mixers: state.mixersReducer
    }
}

export default connect(mapStateToProps)(MixersContainer)