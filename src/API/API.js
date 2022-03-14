export const API_KEY = "api_key=617bdf73d3624d01c9238fbe9d4643b0";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_LANG = "&language=ru-RU";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_SEARCH = `${BASE_URL}/search/movie?${API_KEY}${API_LANG}`;
export const API_POPULAR_MOVIES = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}${API_LANG}`;
export const API_NEW_RELEASES = `${BASE_URL}/movie/upcoming?${API_KEY}${API_LANG}`;
export const API_NEW_TV = `${BASE_URL}/tv/popular?${API_KEY}${API_LANG}`;
export const API_MOVIE_GENRES = `${BASE_URL}/genre/movie/list?${API_KEY}${API_LANG}`;
export const API_TV_GENRES = `${BASE_URL}/genre/tv/list?${API_KEY}${API_LANG}`;
export const API_SEARCH_BY_GENRE = `${BASE_URL}/discover/movie?${API_KEY}&sort_by=popularity.desc`;
export const API_SEARCH_TV_BY_GENRE = `${BASE_URL}/discover/tv${API_KEY}&sort_by=popularity.desc`;

// export const transformMovie = (movie) => {
//     return {
//         id: movie.id,
//         title: movie.title,
//         description: movie.overview,
//         rating: movie.vote_average,
//     };
// };
//
// const getMovies = async (url) => {
//     let res = await fetch(url)
//         .then((res) => res.json())
//         .then((data) => data.results);
//     return await res;
// };
//
// export const getPopular = async () => {
//     const res = await getMovies(API_POPULAR);
//     return res.map(transformMovie);
// };