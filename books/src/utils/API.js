import axios from "axios";
const BASEURL = "https://books.google.com/?t=";
const APIKEY = "AIzaSyCrpXc1sKbCqxylIkna_JIwDStK5-xuXsI";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
