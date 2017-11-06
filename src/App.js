import React from 'react';
import TReactLoading from './test/TReactLoading.js';
import {TestA,TestB} from './test/TRouteMatch.js';
import TRouteMatch from './test/TRouteMatch.js';
import TImmutable from './test/TImmutable.js';
import TES6 from './test/TES6.js';
import Error from './error.js';
import {
  HashRouter,
  Route,
  Link,
  Redirect,
  Prompt,
  withRouter
} from 'react-router-dom';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <HashRouter>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li><Link to="/TReactLoading">My TReactLoading</Link></li>
        <li><Link to="/TRouteMatch">My TRouteMatch</Link></li>
        <li><Link to="/TImmutable">My TImmutable</Link></li>
        <li><Link to="/TES6">My TES6</Link></li>
      </ul>
      <Prompt when={false} message="您确定要离开当前页面吗？"/>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <Route path="/TReactLoading" component={TReactLoading}/>
      <Route path="/TRouteMatch" component={TRouteMatch}/>
      <Route path="/TImmutable" component={TImmutable}/>
      <Route path="/TES6" component={TES6}/>
      <PrivateRoute path="/protected" component={Protected}/>
      <Route path={`/TRouteMatch/Bb`} component={TestB} />
      <Route path={`/error`} component={Error} />
    </div>
  </HashRouter>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default AuthExample