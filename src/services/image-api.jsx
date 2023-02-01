import axios from "axios";

const API_KEY = '32396078-5569d1de9dd35c5ed352ed577';

export const addFotoObj = async (searchInput, pageNum) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${searchInput}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
   
    return response.data.hits;
}