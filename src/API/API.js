const API_KEY = "api_key=617bdf73d3624d01c9238fbe9d4643b0";
const BASE_URL = "https://api.themoviedb.org/3";
const API_LANG = "&language=ru-RU";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_SEARCH = `${BASE_URL}/search/movie?${API_KEY}`;
export const API_POPULAR = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}${API_LANG}`;

export const transformMovie = (movie) => {
    return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        rating: movie.vote_average,
    };
};

const getMovies = async (url) => {
    let res = await fetch(url)
        .then((res) => res.json())
        .then((data) => data.results);
    return await res;
};

export const getPopular = async () => {
    const res = await getMovies(API_POPULAR);
    return res.map(transformMovie);
};