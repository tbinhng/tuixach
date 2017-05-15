import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import App from "./components/App";

export default class tunghi extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}


AppRegistry.registerComponent('tunghi', () => tunghi);
