import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { client, ApolloProvider } from '../utils/apolloClient'
import Navigation from './Navigation'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
