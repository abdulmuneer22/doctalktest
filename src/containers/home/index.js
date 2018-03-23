import React, { Component } from "react";
import { Text, View, Keyboard, Platform } from "react-native";
import Header from "../../components/Header";
import Search from "../../components/Search";
import SearchResult from "../../components/SearchResult";
import UserCard from "../../components/User";

import { connect } from "react-redux";
import { SearchUsers } from "../../redux/actions";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: "",
      User: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const { UserSuggestions } = this.props;
    if (
      UserSuggestions &&
      UserSuggestions.items &&
      UserSuggestions.items.length > 0
    ) {
      this.setState({
        Users: UserSuggestions.items
      });
    }
  }

  onSelect = user => {
    Keyboard.dismiss();
    this.setState({
      User: user,
      Users: ""
    });
  };

  _searchUsers = name => {
    const { searchUsers } = this.props;
    this.setState({
      User: ""
    });
    searchUsers(name);
  };

  render() {
    const { searchUsers } = this.props;
    const { Users, User } = this.state;
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 25 : 0
        }}
      >
        <Header />
        <Search searchUsers={this._searchUsers} User={User} />
        {User ? (
          <UserCard {...User} />
        ) : (
          <SearchResult Users={Users} onSelect={this.onSelect} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    UserSuggestions: state.Users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchUsers: username => {
      dispatch(SearchUsers(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
