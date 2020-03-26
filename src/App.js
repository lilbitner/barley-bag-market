import React from 'react';
import './App.css';
import Background from './components/Background'
import {Route, Switch, Redirect} from 'react-router-dom'
import AboutBarleyBags from './components/NavigationPages/AboutBB'
import Quiz from './components/NavigationPages/Quiz'
import Shop from './components/NavigationPages/Shop'
import Careers from './components/FooterPages/Careers'
import Email from './components/FooterPages/Email'
import Nav from './components/NavigationPages/Nav'
import Footer from './components/FooterPages/Footer'
import ReviewCard from './components/NavigationPages/Reviewcard'
import Body from './components/Body'
import Riley from './components/Images/Riley.jpeg';
import Seafoam from './components/Images/Seafoam.jpeg'

class App extends React.Component {
  
  state = {
    bags: [],
    reviews: []
  }

  createMessage = () => {
    let created = document.createElement('h3')
    created.id = "submissionMessage"
    created.textContent = "Your order has been submitted, Judith will be in touch with you shortly!"
    const form = document.querySelector('#form')
    form.appendChild(created)
  }

  createButton =() => {
    let refreshButton = document.createElement('button')
      refreshButton.id = 'refreshButton'
      refreshButton.innerHTML =  `
      <button onClick = 'window.scrollTo(0,0);' 'window.location = window.location.href; return false;'>Submit another order</button>`
      const created = document.querySelector('#submissionMessage')
      created.appendChild(refreshButton)
  }
  // window.location.href=window.location.href
  
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
            {this.createMessage()}
            {this.createButton()}
      
       })
  }

addReview = (newReview) => {
    this.setState({
      reviews: [...this.state.reviews, {...newReview}]
    })
  
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    }).then(response => {
      if (response.status == 200) 
        {
          const rileyImage = document.createElement('img');
          rileyImage.id = 'Riley' ;
          rileyImage.src =  './Images/Riley.jpeg'
          console.log(rileyImage.src)
          rileyImage.alt = 'Riley'
          const rileyCaption = document.createElement('h3')
          rileyCaption.id = 'submissionMessage'
          rileyCaption.textContent = 'Riley thanks you for your feedback!'
          const form = document.querySelector('.reviewForm')
          form.appendChild(rileyImage)
          form.appendChild(rileyCaption)
        } else {console.log('Lilly rocks')}
         
          
          
          
          
        //   let created = document.createElement('h3')
        // created.id = "submissionMessage"
        // created.textContent = "Your review has been submitted, Judith will be in touch with you shortly!"
        // const form = document.querySelector('.reviewForm')
        // form.appendChild(created)}
   })
    
  }
  
  render() {
    return (
        <div className="App">
          <Switch>
       
            <Route exact path='/' component={Background}/>
            <Route exact path='/home' component={Body}/>
            <Route exact path='/home/aboutBarleyBags' render={(props) => <AboutBarleyBags addReview={this.addReview} reviews={this.state.reviews} />} />  
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
