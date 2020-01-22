import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserAccessContext, UserAccessProvider } from './context/UserAccessContext'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <UserAccessProvider>
      <UserAccessContext.Consumer>
        {
          (context) => (
            <Router>
              <Switch>
                {
                  context.isLoggedin ?
                    <Fragment>
                      <Route path="/" exact component={Home} />
                      <Route path='/profile' component={Profile} />
                    </Fragment>
                    :
                    <Route path='/' component={Login} />
                }
              </Switch>
            </Router>
          )
        }
      </UserAccessContext.Consumer>
    </UserAccessProvider>
  );
}

export default App;
