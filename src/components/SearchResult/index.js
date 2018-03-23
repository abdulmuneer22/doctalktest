import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import SingleUser from "./SingleUser";

export class SearchResult extends Component {
  render() {
    const { Users, onSelect } = this.props;
    return (
      <View>
        <ScrollView keyboardShouldPersistTaps="always">
          {Users && Users.length > 0
            ? Users.map((u, ind) => (
                <SingleUser {...u} key={ind} onSelect={onSelect} user={u} />
              ))
            : null}
        </ScrollView>
      </View>
    );
  }
}

export default SearchResult;
