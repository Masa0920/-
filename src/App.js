import React from 'react'
import {BrowserRouter , Switch , Route } from 'react-router-dom'
import Navbar from './screens/Navbar'
import TopContainer from './screens/TopContainer'
import OMath1 from './遷移先/OMath1'
import ECircle from './遷移先/ECircle'
import Electronic from './遷移先/Electronic'
import OMath2 from './遷移先/OMath2'
import Info from './遷移先/Info'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" render={() => <TopContainer/>} />
          <Route exact path="/OMath1" render={() => <OMath1/> } />
          <Route exact path="/ECircle" render={() => <ECircle/> } />
          <Route exact path="/Electronic" render={() => <Electronic/> } />
          <Route exact path="/Info" render={() => <Info/> } />
          <Route exact path="/OMath2" render={() => <OMath2/> } />
        </Switch>
    </BrowserRouter>
  )
}


export default App