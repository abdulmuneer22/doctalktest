import axios from "axios";
const SERVER_IP = "https://api.github.com/";
const AUTH_TOKEN = "56c1185b36b0147fd65acfbd173dfbbfc550cde6";

var fetch = axios.create({
  baseURL: SERVER_IP
});

module.exports = {
  search: function(username) {
    return fetch.get(
      `/search/users?q=${username}&&sort=followers&&order=desc&&access_token=${AUTH_TOKEN}`
    );
  }
};
