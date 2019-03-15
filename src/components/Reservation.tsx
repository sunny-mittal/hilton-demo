import React from 'react'
import { Text, View } from 'react-native'

const Reservation = ({ name, hotelName }) => (
  <View>
    <Text>
      Booking for {name} at {hotelName}
    </Text>
  </View>
)

export default Reservation
