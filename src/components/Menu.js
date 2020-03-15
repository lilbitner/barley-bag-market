import React from 'react' 
import AboutJudy from './AboutJudy'
import {BrowserRouter as Route, Switch} from 'react-router-dom'
import Email from './Email'

export default class Menu extends React.Component {
    
    
    
    
    
    
    
    
    
    render() {
        return(
            <div className = 'menu'>
                {/* <Switch> */}
                <Route exact path='/aboutJudy'>
                    <AboutJudy /> 
                </Route>

                <Route exact path='/email'>
                    <Email /> 
                </Route>


                {/* </Switch> */}
              
            </div>

        )
    }
}