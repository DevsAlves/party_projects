import axios from "axios";

const partyFetch = axios.create({
  baseURL:
    "https://party-projects-backend-k4kmyz1t3-dev-alves-projects.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
