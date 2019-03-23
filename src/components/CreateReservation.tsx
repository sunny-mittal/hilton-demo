import React from 'react'
import { ApolloProvider, Mutation } from 'react-apollo'

import client from '../client'
import { CREATE_RESERVATION } from '../graphql/mutations'
import CreateReservationForm from './CreateReservationForm'

const CreateReservation = () => (
  <ApolloProvider client={client}>
    <Mutation mutation={CREATE_RESERVATION}>
      {(onSubmit: (data: any) => void, { data }: any) => (
        <CreateReservationForm onSubmit={onSubmit} />
      )}
    </Mutation>
  </ApolloProvider>
)

export default CreateReservation
