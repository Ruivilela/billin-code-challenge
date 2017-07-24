import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// components here!
import Cards from './../../components/cards/index';
import CardDetails from './../../components/card-details/index';

export default class Main extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Cards}/>
        <Route path='/card/:id' component={CardDetails} />
      </Switch>
    )
  }
}
