import axios from "axios";

// &apiKey=${API_KEY}`

export function getNews(category = 'Sports') {
  const API_KEY = "cc920f511d7a4bfc92ff447a8c2781f5";
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=fr&category=${category}`;

  return axios
    .get(`${API_Endpoint}&apiKey=${API_KEY}`)

}
