import React, { Component } from 'react';



class Solution extends Component {
    
    solution() {
        return this.props.solution();
    }

    render() {
      return this.solution();
    }
}

export default Solution;