import React, { Component } from "react";
import { connect } from "react-redux";



class MixersContainer extends Component {



}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        mixers: state.mixersReducer
    }
}

export default connect(mapStateToProps)(MixersContainer)