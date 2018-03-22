import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Home from "./src/containers/home";
import { Provider } from "react-redux";
import configureStore from "./src/redux/store";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            flex: 1
          }}
        >
          <Home />
        </View>
      </Provider>
    );
  }
}
