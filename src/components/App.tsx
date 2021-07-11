import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { client, ApolloProvider } from '../utils/apolloClient'
import Navigation from './Navigation'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Wishlist from '../pages/Wishlist'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
