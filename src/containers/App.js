import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import {connect} from 'react-redux';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/Error';
import {setSearchfield,requestRobots} from '../action.js';

const mapStatetoProps = (state) =>{
  return {
    searchField:state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}
const mapDispatchtoProps = (dispatch) =>{
  return{
    onSearchchange :(event)=>dispatch(setSearchfield(event.target.value)),
    onRequestrobots : ()=>dispatch(requestRobots())
  }

}
class App extends Component { 
     componentDidMount() {
    this.props.onRequestrobots();
  }
   
 
     render() {
        const {searchField,onSearchchange,robots,isPending} = this.props;
       const filterbots = robots.filter(robots =>{
         return robots.name.toLowerCase().includes(searchField.toLowerCase())
       })
       
         return isPending ?
         <h1>Assembling Bots</h1> :
         (
          <div className = 'tc'>
          <h1 className='f1' >Bot Buddies</h1>
          <Searchbox searchChange = {onSearchchange}  />
          <Scroll>
            <ErrorBoundary>
              <Cardlist robots={filterbots}/>
             </ErrorBoundary>
          </Scroll>
           </div>
          );
       }

       
     
     }
   export default  connect (mapStatetoProps,mapDispatchtoProps) (App);
