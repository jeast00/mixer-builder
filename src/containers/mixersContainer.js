import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMixers } from "../actions/fetchMixers"






class MixersContainer extends Component {

     componentDidMount() {
        this.props.fetchMixers();
    }

    render() {
        console.log(this.props);
        const mixers = this.props.mixers.map((mixer, index) => {
            return <li key={index}>{mixer.drink_name}</li>
        })
        return (
            <div>
                <ul>{this.props.loading ? <h2>waiting to load...</h2> : mixers }</ul>
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        mixers: state.mixersReducer.mixers,
        loading: state.mixersReducer.loading
    }
}


export default connect(mapStateToProps, { fetchMixers })(MixersContainer)