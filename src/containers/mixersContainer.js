import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMixers } from '../actions/fetchMixers'



class MixersContainer extends Component {

    componentDidMount() {
        this.props.fetchMixers()
    }

    render() {
        const mixers = this.props.mixers.map((mixer) => {
            return <li key={mixer.id}>{mixer.drink_name}</li>
        })

        return (
            <div>
                <ul>{mixers}</ul>
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        mixers: state.mixersReducer.mixers
    }
}


export default connect(mapStateToProps, { fetchMixers } )(MixersContainer)