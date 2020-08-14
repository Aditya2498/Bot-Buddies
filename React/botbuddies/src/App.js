import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots}  from './robots';

class App extends Component {
   constructor() {

   super()
  this.state = {
    robots: robots,
    searchfield: ""
   }
 }
  onSearchchange = (event)=> {
    this.setState({searchfield: event.target.value });
    }
  
    render() {
      console.log(this.state.searchfield);
      const filterbots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
    return (
      <div className = 'tc'>
      <h1>Bot Buddies</h1>
      <Searchbox searchChange = {this.onSearchchange}  />
      <Cardlist robots={filterbots}/>
      </div>
      );
    }
  
  
}

export default App;
