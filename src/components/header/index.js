import React , { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <div style={style.component}>
        <h1 style={style.title}>
          Billin code challenge
        </h1>
      </div>
    )
  }
}

const style = {
  component: {
    display:'table',
    backgroundColor:'#03a9f4',
    width:'100%',
    height:75,
  },
  title: {
    margin:0, // clear the h1 margin
    display:'table-cell',
    textAlign:'center',
    verticalAlign:'middle'
  }
}
