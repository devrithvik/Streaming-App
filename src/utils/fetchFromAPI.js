import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
       maxResults: '20',
    },
    headers: {
      'X-RapidAPI-Key':  '23c2611bdbmshefe2ade490828ebp144701jsn4808f5bd9182',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

    export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }