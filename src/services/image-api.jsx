import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;
const KEY = '32396078-5569d1de9dd35c5ed352ed577';

export const fetchImages = async function (query, page) {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};