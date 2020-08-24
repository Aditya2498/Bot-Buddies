import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import {robots}  from '../robots.js';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/Error';


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
         const {robots,searchfield} = this.state;
       const filterbots = robots.filter(robots =>{
         return robots.name.toLowerCase().includes(searchfield.toLowerCase())
       })
       
         return !robots.length ?
         <h1>Assembling Bots</h1> :
         (
          <div className = 'tc'>
          <h1 className='f1' >Bot Buddies</h1>
          <Searchbox searchChange = {this.onSearchchange}  />
          <Scroll>
            <ErrorBoundary>
              <Cardlist robots={filterbots}/>
             </ErrorBoundary>
          </Scroll>
           </div>
          );
       }

       
     
     }
   export default App;
