import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots}  from './robots';
import './App.css';


class App extends Component { 
  constructor() {

    super()
   this.state = {
     robots: robots,
     searchfield: ""
    }
  }
  componentDidMount() {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({ robots:users}));
  }
 
  
   onSearchchange = (event)=> {
     this.setState({searchfield: event.target.value });
     }
   
     render() {
       
       const filterbots = this.state.robots.filter(robots =>{
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
       })
       if(robots.length === 0){
         return <h1>Assembling Bots</h1>}
       else {
        return (
          <div className = 'tc'>
          <h1 className='f1' >Bot Buddies</h1>
          <Searchbox searchChange = {this.onSearchchange}  />
          <Cardlist robots={filterbots}/>
          </div>
          );
       }

       
     
     }
   
   

}
   


export default App;
