import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMixers } from "../actions/fetchMixers"






class MixersContainer extends Component {

     componentDidMount() {
        fetchMixers();
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        mixers: state.mixersReducer.mixers,
    }
}


export default connect(mapStateToProps, { fetchMixers })(MixersContainer)