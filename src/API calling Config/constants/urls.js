import { TMDB_API_KEY } from "./constants";

export const Originals = `discover/tv?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=213`

export const Action = `discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`

export const Comedy = `discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`

export const Horror = `discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`

export const Romance = `discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`

export const Documentary = `discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`