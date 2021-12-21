import React, { Component } from 'react';



class Solution extends Component {
    render() {
        let emptySol = ["_", "_","_","_"];
        return (
            emptySol.map(e=> <span>{e} </span>)
        )
    }
}

export default Solution;