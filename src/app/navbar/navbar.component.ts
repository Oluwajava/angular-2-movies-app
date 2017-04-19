import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { MoviesService } from '../service/movies.service';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
  searchQuery: string;
  user = {};
  authenticated: boolean;
  searchResult: any;
  userId: any;

  constructor(public _angularFire: AngularFire, private _moviesService: MoviesService) {
    this._angularFire.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.authenticated = true;
        this.user = user;
        this.userId = user.uid;
        console.log(user);
      }
      else {
        // user not logged in
        this.authenticated = false;
        this.user = {};
      }
    });
  }

  login() {
    this._angularFire.auth.login({
      provider: AuthProviders.Google
    });

  }

  logout() {
    this._angularFire.auth.logout();
  }

  search() {
      this._moviesService.searchMovie(this.searchQuery).subscribe((res) => {
        this.searchResult = res.results;
        console.log(this.searchResult);
      })
  }
}
