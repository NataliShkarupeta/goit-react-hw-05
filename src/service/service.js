// Example request: https://api.themoviedb.org/3/movie/550?api_key=1bff0abb40f6fadb07212f8cd9949625
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// URL: /discover/movie?sort_by=popularity.desc
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

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
  return fetch(`${Base_Url}/search/movie/?api_key=${Api_Key}&query=${query}`);
};

