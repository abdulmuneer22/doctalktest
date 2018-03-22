import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import _ from "lodash";

export default ({ user ,login, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onSelect(user);
      }}
      style={{
        marginHorizontal: 10,
        paddingVertical: 10,
        borderTopColor: "rgba(1,1,1,0.3)",
        borderTopWidth: 1
      }}
    >
      <Text>{_.upperCase(login)}</Text>
    </TouchableOpacity>
  );
};
