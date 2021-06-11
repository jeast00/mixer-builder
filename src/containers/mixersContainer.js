import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { showMixers } from "../actions/createMixerAction";





class MixersContainer extends Component {

    fetchMixers() {
        axios.get("/mixers")
        .then(console.log)
    }

    

    componentDidMount() {
        this.fetchMixers()
    }

    render() {
        return (
            <div>
             {/* {this.props.mixers.map((mixer) => {
                 return (
                     <li key={mixer.id}>{mixer.drink_name}</li>
                 )
             })} */}
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {
        mixers: state.mixers
    }
}


export default connect(mapStateToProps)(MixersContainer)