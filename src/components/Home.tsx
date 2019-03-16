import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

import { Reservations } from './Reservations'

export default class Home extends Component {
  public render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Hilton Demo',
            style: styles.header
          }}
        />
        <Reservations />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 20
  }
})
