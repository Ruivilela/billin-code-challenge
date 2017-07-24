import React , { Component } from 'react';

export default class CardDetails extends Component {
  render(){
    console.log(this.props.match.params)
    return(
      <div>
        I'm working
      </div>
    )
  }
}
