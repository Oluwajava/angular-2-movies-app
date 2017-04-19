import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Constants } from '../utils/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'tv-show-list',
  templateUrl: 'tv-show-list.component.html',

})
export class TvShowListComponent implements OnInit {
  title = 'app works!';
  response: any;
  byShowPopularity: string = Constants.POPULAR_URL_TVSHOW;
  byShowRating: string= Constants.TOP_RATED_URL_TVSHOW;

  constructor(private _moviesService: MoviesService, private _route: ActivatedRoute) {
    this.getMovies(this.byShowPopularity);
  }

  ngOnInit() {
    this._route.params.map(params => params['by'])
      .subscribe((by) => {
          if(by === Constants.RATING) {
            this.getMovies(this.byShowRating);
          }else{
            this.getMovies(this.byShowPopularity);
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
