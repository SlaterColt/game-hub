import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: 'd9e8c64b146c4edbbe626cda5bcb735c'
  }
})