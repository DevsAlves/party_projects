import axios from "axios";

const partyFetch = axios.create({
  baseURL: "https://party-projects.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;