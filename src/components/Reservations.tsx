import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import { ScrollView, Text, View } from 'react-native'

import { GET_RESERVATIONS } from '../graphql/queries'
import styles from '../styles'
import Reservation from './Reservation'

interface IReservation {
  id: string
  hotelName: string
  name: string
  arrivalDate: string
  departureDate: string
}

export default class Reservations extends PureComponent {
  public render() {
    return (
      <Query query={GET_RESERVATIONS}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <View style={styles.center}>
                <Text>Loading reservations</Text>
              </View>
            )
          }

          if (error) {
            return (
              <View style={styles.center}>
                <Text>An error occurred</Text>
              </View>
            )
          }

          return (
            <ScrollView>
              {data.reservations
                .sort(
                  (
                    { arrivalDate: a }: IReservation,
                    { arrivalDate: b }: IReservation
                  ) => (Date.parse(a) < Date.parse(b) ? 1 : -1)
                )
                .map((reservation: IReservation) => (
                  <Reservation key={reservation.id} {...reservation} />
                ))}
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}
