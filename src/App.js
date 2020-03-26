import React from 'react';
import './App.css';
import Background from './components/Background'
import {Route, Switch, Redirect} from 'react-router-dom'
import AboutBarleyBags from './components/NavigationPages/AboutBB'
import Quiz from './components/NavigationPages/Quiz'
import Shop from './components/NavigationPages/Shop'
import Body from './components/Body'



class App extends React.Component {
  
  state = {
    bags: [],
    reviews: [], 
    isOrder: false,
    isReview: false
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
        {
          this.setState({isOrder: true})
        } else {}
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
          this.setState({isReview: true})
        } else {}
    })
  }
  
  render() {

    const {isReview, isOrder, reviews, bags} = this.state 
    
    return (
      <div className="App">
        <Switch>
        
          <Route exact path='/' component={Background}/>
          <Route exact path='/home' component={Body}/>
          <Route exact path='/home/aboutBarleyBags'
            render={(props) =>
              <AboutBarleyBags
                isReview={isReview}
                addReview={this.addReview}
                reviews={reviews}
              />
            }
          />  
          <Route exact path='/home/Shop'
            render={(props) =>
              <Shop
                isOrder={isOrder}
                addBag={this.addBag}
                bags={bags} 
              />
            } 
          /> 
          <Route exact path='/home/Quiz' component={Quiz} />  
        
        </Switch> 
      </div>
    );
  }
}

export default App;
