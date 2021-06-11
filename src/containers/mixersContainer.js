import React, { Component } from "react";
import { connect } from "react-redux";


class MixersContainer extends Component {
    constructor() {
        super();
        this.state = {
            mixers: [],
        }
    }

    fetchMixers() {
        fetch(`/mixers`)
        .then(resp => resp.json())
        .then(console.log(resp))
    }

    componentDidMount() {
        this.fetchMixers();
    }



}

const mapStateToProps = (state) => {
    return {
        mixers: state.mixers
    }
}

export default connect(mapStateToProps)(MixersContainer)