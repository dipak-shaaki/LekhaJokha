
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // our backend
}); 
//axios.create(): 
// This method is used to create an Axios instance with custom configuration.


export default API;
