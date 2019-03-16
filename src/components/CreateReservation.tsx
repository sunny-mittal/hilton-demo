import React from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'
import styles from '../styles'

const CreateReservation: React.SFC<{}> = () => (
  <View>
    <Header
      centerComponent={{
        style: styles.shared.header,
        text: 'Create Reservation'
      }}
    />
  </View>
)

export default CreateReservation
