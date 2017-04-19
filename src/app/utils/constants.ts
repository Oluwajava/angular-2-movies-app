export class Constants {

    public static API_KEY = "?api_key=8b33f5b57c1964517ae7a3229bedbf88";
    public static BASE_URL_MOVIE = "http://api.themoviedb.org/3/movie";
    public static BASE_URL_TVSHOW = "http://api.themoviedb.org/3/tv";
    public static IMAGE_BASE_URL = "http://image.tmdb.org/t/p/w185/";
    public static POPULAR_URL_MOVIE = Constants.BASE_URL_MOVIE+"/popular"+Constants.API_KEY;
    public static TOP_RATED_URL_MOVIE = Constants.BASE_URL_MOVIE+"/top_rated"+Constants.API_KEY;
    public static POPULAR_URL_TVSHOW = Constants.BASE_URL_TVSHOW+"/popular"+Constants.API_KEY;
    public static TOP_RATED_URL_TVSHOW = Constants.BASE_URL_TVSHOW+"/top_rated"+Constants.API_KEY;
    public static SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie"+Constants.API_KEY;
    public static POPULARITY = "popularity";
    public static RATING = "rating";
}