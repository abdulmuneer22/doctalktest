import axios from "axios";
const SERVER_IP = "https://api.github.com/";
const AUTH_TOKEN = "7733e01602cd607a98511889df8651239ded459a";

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
