import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

class Main extends Component {
  gotoAuthentication() {
    this.props.navigation.navigate("MH_AUTHENTICATION");
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <TouchableOpacity
          onPress={() => { this.gotoAuthentication(); }}
        >
          <Text> Go TO Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Main;
