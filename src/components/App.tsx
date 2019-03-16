import React from 'react'
import { ApolloProvider } from 'react-apollo'

import client from '../client'
import Home from './Home'

const App: React.SFC<{}> = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
)

export default App
