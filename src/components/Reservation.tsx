import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

const formatDate: (date: string) => string = date =>
  moment(date).format('MMM D YYYY')

interface Props {
  name: string
  hotelName: string
  arrivalDate: string
  departureDate: string
}

const Reservation: React.SFC<Props> = ({
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
