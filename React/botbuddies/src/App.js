import React from 'react';
import Searchbox from './Searchbox';
import Cardlist from './Cardlist';
import { robots } from './robots';


import './App.css';



class App extends React.Component {
  render() {
    return ( <div>
      <h1>Bot Buddies</h1>
      <Searchbox />
      <Cardlist robots={robots}/>
      
    </div> )
   }
    

}

export default App;
