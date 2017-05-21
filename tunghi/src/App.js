import React, { Component } from "react";
import { View, Text } from "react-native";
import { AppRouter } from "./AppRouter";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRouter />
      </View>
    );
  }
}
