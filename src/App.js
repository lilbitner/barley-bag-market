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
import Nav from './components/NavigationPages/Nav'
import Footer from './components/FooterPages/Footer'

class App extends React.Component {
  
  state = {
    bags: []
  }

  
  addBag = (newBag) => {
    this.setState({
      bags: [...this.state.bags, {...newBag}]
    })
    
        fetch('http://localhost:3000/bags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBag)
      }).then(response => {
      if (response.status == 200) 
      {let created = document.createElement('h3')
      created.textContent = "Your bag has been submitted!"
      const form = document.querySelector('#form')
      form.appendChild(created)}
    })
  }

  
  render() {
  
    return (
        <div className="App">
          <Switch>
       
          <Route exact path='/' component={Background}/>
          <Route exact path='/home' component={Main}/>
          <Route exact path='/home/aboutBarleyBags' component={AboutBarleyBags} />
          <Route exact path='/home/Cart' component={Cart} />   
          <Route exact path='/home/Shop' render={(props) => <Shop addBag={this.addBag} bags={this.state.bags} />} /> 
          <Route exact path='/home/Quiz' component={Quiz} />  
          <Route exact path='/Careers' component={Careers} />
          <Route exact path='/Email' component={Email} /> 
        
        </Switch> 
        </div>
    );
  }
}

export default App;
