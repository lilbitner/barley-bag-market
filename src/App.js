import React from 'react';
import './App.css';
import Background from './components/Background'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './components/Main'

class App extends React.Component {
  
  
  state = {
    visible: false 
  }
  
  
  
  // showMain = () => {
  //   this.setState({
  //     visible: true 
  //   })
  // }
  
  
  render() {
  
    return (
      <Router>
      <div className="App">
      <Switch>
     
    <Route exact path='/'>
      <Main /> 
    </Route>
     
    <Background /> 
    

    </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
