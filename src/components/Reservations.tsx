import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { ScrollView, Text } from 'react-native'

import Reservation from '../../src/components/Reservation'

export const GET_RESERVATIONS_QUERY = gql`
  {
    reservations {
      id
      hotelName
      name
    }
  }
`

const renderReservations = ({ loading, error, data }) => {
  if (loading) {
    return <Text>Loading reservations</Text>
  }
  if (error) {
    return <Text>An error occurred</Text>
  }
  return (
    <ScrollView>
      {data.reservations.map(reservation => {
        const { name, hotelName, id } = reservation
        return <Reservation key={id} name={name} hotelName={hotelName} />
      })}
    </ScrollView>
  )
}

export const Reservations = () => (
  <Query query={GET_RESERVATIONS_QUERY}>{renderReservations}</Query>
)
