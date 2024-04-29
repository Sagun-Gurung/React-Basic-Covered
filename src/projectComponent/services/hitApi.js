import axios from "axios";
import { baseURL } from "../config/config";

export let hitApi = axios.create({
  // baseURL: "http://localhost:8000", baseURL define
  // baseURL: process.env.REACT_APP_BASEURL, from env
  baseURL: baseURL, //exported from config file
});
