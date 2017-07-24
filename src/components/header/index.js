import React , { Component } from 'react';
import style from './style'; 

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
