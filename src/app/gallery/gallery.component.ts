import { Component } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { Router } from '@angular/router';
import { Constants } from '../utils/constants';

@Component({
  moduleId: module.id,
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  
})
export class GalleryComponent {
  movieUrl = '/gallery/movie-list';
  showUrl = '/gallery/tv-show-list';
  isMovie: boolean = true;
  popularity: string = Constants.POPULARITY;
  rating: string = Constants.RATING;

  constructor(private _route: Router ) {
    this._route.navigateByUrl(this.movieUrl);
  }

  onMovieClicked() {
    this.isMovie = true;
    this.switchTabs(this.movieUrl);
  }

  onShowClicked() {
    this.isMovie = false;
    this.switchTabs(this.showUrl);
  }

  onFilterChange(deviceValue) {
    if(this.isMovie)  {
      this._route.navigateByUrl(this.movieUrl+"/"+deviceValue);
    }else{
      this._route.navigateByUrl(this.showUrl+"/"+deviceValue);
    }
    
  }

  switchTabs(url: string) {
    this._route.navigateByUrl(url);
  }
}
