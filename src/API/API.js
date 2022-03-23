import axios from "axios";

const API_KEY = "617bdf73d3624d01c9238fbe9d4643b0";
const BASE_URL = "https://api.themoviedb.org/3";
const API_LANG = "ru-RU";
export const ORIGINAL_IMG_URL = "https://image.tmdb.org/t/p/original";
export const SMALL_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_POPULAR_MOVIES = `${BASE_URL}/discover/movie`;
export const API_SEARCH_QUERY = `${BASE_URL}/search/movie?query=`;
export const API_GENRES = `${BASE_URL}/genre/movie/list`;
export const API_GENRE_MOVIES = `${BASE_URL}/discover/movie?with_genres=`;
export const API_NEW_RELEASES = `${BASE_URL}/movie/upcoming`;
export const API_NEW_TV = `${BASE_URL}/tv/popular`;

const defaultParams = {
    api_key: API_KEY,
    language: API_LANG,
};

async function getData(url) {
    const data = await axios.get(url, {params: defaultParams});
    if (data) {
        return data;
    };
};

export async function getMovies(url, page) {
    const params = defaultParams;
    params.page = page;
    try {
        const movies = await getData(url, {params});
        return movies.data;
    } catch (e) {
        throw new Error(e);
    }
};

export async function getGenres(url) {
    const genres = await getData(url);
    return genres.data;
};

export async function getMovieInfo(link, id) {
    const url = `${BASE_URL}/${link}/${id}`;

    try {
        const movieInfo = await getData(url);
        const movieTrailers = await getData(`${url}/videos`);
        const similarMovies = await getData(`${url}/similar`);

        return {
            info: movieInfo.data,
            trailers: movieTrailers.data.results,
            similar: similarMovies.data.results,
        };
    } catch (e) {
        throw new Error(e);
    };
};