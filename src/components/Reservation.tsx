import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

import { NReservations } from '../types'

const formatDate: (date: string) => string = date =>
  moment(Date.parse(date)).format('MMM D YYYY')

const Reservation: React.SFC<NReservations.IReservationProps> = ({
  name,
  hotelName,
  arrivalDate,
  departureDate
}) => (
  <Card title={name.toUpperCase()} titleStyle={styles.title}>
    <Text style={styles.text}>
      When: {formatDate(arrivalDate)} to {formatDate(departureDate)}
    </Text>
    <Text style={styles.text}>Where: {hotelName}</Text>
  </Card>
)

const styles = StyleSheet.create({
  text: {
    lineHeight: 22
  },
  title: {
    textAlign: 'left'
  }
})

export default Reservation
