import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots}  from './robots';
import './App.css';
import Scroll from './Scroll';


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
       if(this.state.robots.length === 0){
         return <h1>Assembling Bots</h1>}
       else {
        return (
          <div className = 'tc'>
          <h1 className='f1' >Bot Buddies</h1>
          <Searchbox searchChange = {this.onSearchchange}  />
          <Scroll>
          <Cardlist robots={filterbots}/>
          </Scroll>
           </div>
          );
       }

       
     
     }
   
   

}
   
export default App;
