import axios from 'axios';
const searchImages = async (term) =>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID H5q7VQgkGGY4DvtLPMZa1wiJzgDKGBath-524WNGdg8'
      },
      params:{
        query:term
      }
    })
    debugger;
    return response.data.results;
  };
  export default searchImages;