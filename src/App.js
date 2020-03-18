import React from 'react';
import './App.css';
import Background from './components/Background'
import {Route, Switch} from 'react-router-dom'
import Main from './components/Main'
import AboutBarleyBags from './components/NavigationPages/AboutBB'
import Cart from './components/NavigationPages/Cart'
import Quiz from './components/NavigationPages/Quiz'
import Shop from './components/NavigationPages/Shop'
import Careers from './components/FooterPages/Careers'
import Email from './components/FooterPages/Email'

class App extends React.Component {
  

  
  
  render() {
  
    return (
        <div className="App">
          <Switch>
        
          <Route exact path='/' component={Background}/>
          <Route exact path='/home' component={Main}/>
          <Route exact path='/home/aboutBarleyBags' component={AboutBarleyBags} />
          <Route exact path='/home/Cart' component={Cart} />   
          <Route exact path='/home/Shop' component={Shop} /> 
          <Route exact path='/home/Quiz' component={Quiz} />  
          <Route exact path='/Careers' component={Careers} />
          <Route exact path='/Email' component={Email} /> 
           
        </Switch> 
        </div>
    );
  }
}

export default App;
