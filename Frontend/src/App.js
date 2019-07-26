import React, { Component } from 'react';
import Kids from './components/Kids/Kids';
import Men from './components/Mens/Mens';
import Women from './components/Womens/Womens';
import PlusSize from './components/PlusSize/PlusSize';
import Header from './components/Header/Header';
import { Route, Switch } from "react-router-dom";

export default class App extends Component{
  
  render(){
    return(
      <div>
        <Header/>
        <Switch>
         <Route exact path="/" component={Kids} />
         <Route path="/men" component={Men} />
         <Route path="/women" component={Women} />
         <Route path="/plussize" component={PlusSize} />
        </Switch>
      </div>
    )
  }
}
