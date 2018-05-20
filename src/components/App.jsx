import React, { Component, Link } from 'react';
import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import {
  isSignInPending,
  isUserSignedIn,
  redirectToSignIn,
  handlePendingSignIn,
  signUserOut,
} from 'blockstack';
import { auth, defaultDatabase } from '../firebase'

import { Switch, Route } from 'react-router-dom'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    
  }
    
  handleSignIn(e) {
    e.preventDefault();
    const origin = window.location.origin
    redirectToSignIn(origin, origin + '/manifest.json', ['store_write', 'publish_data'])
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  render() {
    return (
      <div>
          { !isUserSignedIn() ?
            <Signin handleSignIn={ this.handleSignIn } />
            : 
            <Switch>
              <Route 
                path='/:username?' 
                render={
                  routeProps => <Profile handleSignOut={ this.handleSignOut } {...routeProps} />
                } 
              />
            </Switch>
          }
      </div>
    );
  }

  componentWillMount() {
    if (isSignInPending()) {
      handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
  }
}
