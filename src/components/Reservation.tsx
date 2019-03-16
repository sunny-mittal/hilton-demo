import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

const Reservation = ({ name, hotelName }) => (
  <Card title={hotelName}>
    <Text style={styles.text}>Guest: {name}</Text>
    <Text style={styles.text}>In: </Text>
    <Text style={styles.text}>Out: </Text>
  </Card>
)

const styles = StyleSheet.create({
  title: {},
  text: {
    lineHeight: 22
  }
})

export default Reservation
