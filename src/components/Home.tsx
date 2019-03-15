import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Reservations } from './Reservations'

export default class Home extends Component {
  public render() {
    return (
      <View>
        <Text>Hilton Demo App</Text>
        <Reservations />
      </View>
    )
  }
}
