import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Header extends Component {
  render() {
    return (
      <View
      style={{
        backgroundColor : '#03AA85',
        paddingVertical : 10
      }}
      >
        <Text
        style={{
          fontSize : 18,
          color : 'white',
          textAlign : 'center'
        }}
        > Git User Finder </Text>
      </View>
    )
  }
}

export default Header