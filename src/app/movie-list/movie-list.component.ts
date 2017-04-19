import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Constants } from '../utils/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',

})
export class MovieListComponent implements OnInit{
  response: any;
  byMoviePopularity: string = Constants.POPULAR_URL_MOVIE;
  byMovieRating: string = Constants.TOP_RATED_URL_MOVIE;

  constructor(private _moviesService: MoviesService, private _route: ActivatedRoute) {
    this.getMovies(this.byMoviePopularity);
  }

  ngOnInit() {
    this._route.params.map(params => params['by'])
      .subscribe((by) => {
          if(by === Constants.RATING) {
            this.getMovies(this.byMovieRating);
          }else{
            this.getMovies(this.byMoviePopularity);
          }
          
      });
  }
  

  getMovies(url: string) {
    this._moviesService.getMovieList(url).subscribe(res => {
      this.response = res.results;
      console.log(this.response);
    });
  }
  
}
