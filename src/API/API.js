import axios from "axios";

export const API_KEY = "617bdf73d3624d01c9238fbe9d4643b0";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_LANG = "ru-RU";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_POPULAR_MOVIES = `${BASE_URL}/discover/movie`;
export const API_SEARCH_QUERY = `${BASE_URL}/search/movie?query=`;
export const API_GENRES = `${BASE_URL}/genre/movie/list`;
export const API_GENRE_MOVIES = `${BASE_URL}/discover/movie?with_genres=`;
export const API_NEW_RELEASES = `${BASE_URL}/movie/upcoming`;
export const API_NEW_TV = `${BASE_URL}/tv/popular`;

const params = {
    api_key: API_KEY,
    language: API_LANG,
}

export const getMovies = (url, page, setLoading, setMovies, setTotalPages = () => {}) => {
    axios.get(url, {
        params: {
            api_key: API_KEY,
            language: API_LANG,
            page: page,
        },
    }).then(res => {
        setTotalPages(res.data.total_pages);
        setMovies(res.data.results);
        setLoading(false);
    });
};

export const getGenres = (url, setGenres) => {
    axios.get(url, {params}).then(res => setGenres(res.data.genres));
};

export async function getMovieInfo(link, id) {
    const url = `${BASE_URL}/${link}/${id}`;
    try {
        const movieInfo = await getMovieMetaInfo(url);
        const info = await movieInfo.data;
        const movieTrailers = await getMovieMetaInfo(`${url}/videos`)
        const trailers = await movieTrailers.data.results;
        const similarMovies = await getMovieMetaInfo(`${url}/similar`)
        const similar = await similarMovies.data.results;
        return {
            info: info,
            trailers: trailers,
            similar: similar,
        };
    } catch (e) {
        throw new Error(e);
    };
};

async function getMovieMetaInfo(url) {
    const data = await axios.get(url, {params});
    if (data) {
        return data;
    };
};