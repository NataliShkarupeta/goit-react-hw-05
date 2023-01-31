
const Api_Key = `1bff0abb40f6fadb07212f8cd9949625`;
const Base_Url = `https://api.themoviedb.org/3`;

export const fetchApi = () => {
 return fetch(`${Base_Url}/trending/all/day?api_key=${Api_Key}`);
    
}

export const fetchApiDetalis = movieId => {
  return fetch(`${Base_Url}/movie/${movieId}?api_key=${Api_Key}`);
};

export const fetchApiReviews = movieId => {
  return fetch(`${Base_Url}/movie/${movieId}/reviews?api_key=${Api_Key}`);
};


export const fetchApiCast = movieId => {
  return fetch(`${Base_Url}/movie/${movieId}/credits?api_key=${Api_Key}`);
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const fetchApiQuery = query => {
  return fetch(`${Base_Url}/search/movie?api_key=${Api_Key}&query=${query}`);
};

