import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { Constants } from '../utils/constants';
import 'rxjs';

@Injectable()
export class MoviesService {

    constructor(private _http: Http) {}

    getMovieList(searchUrl: string) {
        return this._http.get(searchUrl).map(
            response => response.json()
        );
    }


    getMovie(id: string) {
        return this._http.get(Constants.BASE_URL_MOVIE+"/"+id+Constants.API_KEY).map(
            response => response.json()
        )
    }

    getShow(id: string) {
        return this._http.get(Constants.BASE_URL_TVSHOW+"/"+id+Constants.API_KEY).map(
            response => response.json()
        )
    }

    getYoutubeLink(id: string) {
        return this._http.get(Constants.BASE_URL_MOVIE+"/"+id+"/videos"+Constants.API_KEY).map(
            response => response.json()
        )
    }

    getShowYoutubeLink(id: string) {
        return this._http.get(Constants.BASE_URL_TVSHOW+"/"+id+"/videos"+Constants.API_KEY).map(
            response => response.json()
        )
    }

    searchMovie(query: string) {
        return this._http.get(Constants.SEARCH_MOVIE+"&query="+query).map(
            response => response.json()
        );
    }

    getRecommendedMovies(id: string) {
      return this._http.get(Constants.BASE_URL_MOVIE+"/"+id+"/recommendations"+Constants.API_KEY).map(
        response => response.json()
      );
    }
}
