import React, { Component } from "react";


class MixersContainer extends Component {

    fetchMixers() {
        fetch(`http://localhost:3001/mixers`)
        .then(console.log)
    }

}

export default MixersContainer