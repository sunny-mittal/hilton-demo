import React from 'react'
import { ApolloProvider } from 'react-apollo'

import client from '../client'
import Home from './Home'

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
)

export default App
