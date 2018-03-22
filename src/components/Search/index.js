import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

const Search = ({ searchUsers }) => (
  <TextInput
    onChangeText={(name) => searchUsers(name)}
    editable={true}
    maxLength={40}
    placeholder="Satrt typing username"
    style={{
      marginHorizontal: 10,
      borderColor: "rgba(1,1,1,0.5)",
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 5,
      marginTop: 10
    }}
    
  />
);

export default Search;
