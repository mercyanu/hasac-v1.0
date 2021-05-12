import React from 'react';
import Landing from './pages/landing/landing.component';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home.component';
import Soil from './components/soil/soil.component';
import Weather from './components/weather/weather.component';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/soil' component={Soil} />
          <Route exact path='/weather' component={Weather} />
          <Route path='/' component={Landing} />

        </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App;