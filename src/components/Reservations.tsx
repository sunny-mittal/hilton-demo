import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'
import { ScrollView, Text, View } from 'react-native'

import Reservation from '../../src/components/Reservation'
import styles from '../styles'

interface Reservation {
  id: string
  hotelName: string
  name: string
  arrivalDate: string
  departureDate: string
}

interface Data {
  reservations: Reservation[]
}

interface Props {
  loading?: any
  error?: any
  data: Data
}

export const GET_RESERVATIONS_QUERY = gql`
  {
    reservations {
      id
      hotelName
      name
      arrivalDate
      departureDate
    }
  }
`

const renderReservations: React.SFC<Props> = ({ loading, error, data }) => {
  if (loading) {
    return (
      <View style={styles.shared.center}>
        <Text>Loading reservations</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.shared.center}>
        <Text>An error occurred</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {data.reservations
        .sort(({ arrivalDate: a }, { arrivalDate: b }) =>
          Date.parse(a) < Date.parse(b) ? -1 : 1
        )
        .map(reservation => {
          return <Reservation key={reservation.id} {...reservation} />
        })}
    </ScrollView>
  )
}

export const Reservations: () => (
  <Query query={GET_RESERVATIONS_QUERY}>{renderReservations}</Query>
)
