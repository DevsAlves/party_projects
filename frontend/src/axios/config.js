import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://party-projects.onrender.com" + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;