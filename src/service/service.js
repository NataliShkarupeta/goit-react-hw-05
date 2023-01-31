
const Api_Key = `1bff0abb40f6fadb07212f8cd9949625`;
const Base_Url = `https://api.themoviedb.org/3`;

export const fetchApi = () => {
 return fetch(`${Base_Url}/trending/all/day?api_key=${Api_Key}`);
    
}

export const fetchApiDetalis = movieId => {
  return fetch(`${Base_Url}/movie/${movieId}?api_key=${Api_Key}`);
};

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };
export const fetchApiReviews = movieId => {
  return fetch(`${Base_Url}/movie/${movieId}/reviews?api_key=${Api_Key}`);
};


export const fetchApiCast = movieId => {
  return fetch(`${Base_Url}/movie/${movieId}/credits?api_key=${Api_Key}`);
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const fetchApiQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie/?api_key=${Api_Key}&query=${query}`
  );
};

// const data = await axios.get(
//   `${API_BASE}3/search/movie?api_key=${API_KEY}&query=${query}`
// );