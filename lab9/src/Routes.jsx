import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Finder from './components/Finder/Finder'
import UserInfo from './components/UserInfo/UserInfo'
import UserNotFound from './components/UserNotFound/UserNotFound'

const Routes = () => (
    <BrowserRouter basename="/lab9/build/index.html">
        <Switch>
          <Route exact path='/' component={Finder} />
          <Route exact path='/userInfo/:user' component={UserInfo} />
          <Route exact path='/userNotFound' component={UserNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;