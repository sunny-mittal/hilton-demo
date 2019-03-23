import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'

import styles from '../styles'
import Reservations from './Reservations'

export const Home: React.SFC = () => (
  <View style={styles.container}>
    <Header
      centerComponent={{
        style: styles.header,
        text: 'Upcoming Reservations'
      }}
    />
    <Reservations />
  </View>
)

export default Home
