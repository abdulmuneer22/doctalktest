import React from "react";
import { Text, View, Image } from "react-native";
import _ from "lodash";

export default ({ login, avatar_url }) => {
  return (
    <View
      style={{
        marginHorizontal: 40,
        marginVertical: 50,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          marginVertical: 10,
          fontSize : 20
        }}
      >
        {_.capitalize(login)}
      </Text>
      <Image
        source={{ uri: avatar_url }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2
        }}
      />
    </View>
  );
};
