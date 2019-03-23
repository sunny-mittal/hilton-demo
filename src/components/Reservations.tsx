import React, { PureComponent } from 'react'
import { ChildProps, graphql, Query } from 'react-apollo'
import { RefreshControl, ScrollView, Text, View } from 'react-native'

import { GET_RESERVATIONS } from '../graphql/queries'
import styles from '../styles'
import Reservation from './Reservation'

import { IApolloGQLProps, IRefreshState, NReservations } from '../types'

class Reservations extends PureComponent<IApolloGQLProps, IRefreshState> {
  constructor(props: IApolloGQLProps) {
    super(props)
    this.state = { refreshing: false }
  }

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
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.props.data.refetch}
                />
              }
            >
              {data.reservations
                .sort(
                  (
                    { arrivalDate: a }: NReservations.IReservation,
                    { arrivalDate: b }: NReservations.IReservation
                  ) => (Date.parse(a) < Date.parse(b) ? 1 : -1)
                )
                .map((reservation: NReservations.IReservation) => (
                  <Reservation key={reservation.id} {...reservation} />
                ))}
            </ScrollView>
          )
        }}
      </Query>
    )
  }
}

const withReservations = graphql<IApolloGQLProps>(GET_RESERVATIONS)
export default withReservations(Reservations)
