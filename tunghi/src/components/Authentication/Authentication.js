import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  gotoMain() {
    this.props.navigation.navigate('MH_MAIN');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text>Man Hinh Authentication</Text>
        <TouchableOpacity onPress={() => { this.gotoMain(); } }>
          <Text> Back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
