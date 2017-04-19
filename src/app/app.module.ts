import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

import { AngularFireModule, AuthMethods,  AuthProviders } from "angularfire2";

const firebaseConfig = {
  apiKey: "AIzaSyBL41JRDwWg3yxMI_MFzYIQmnlRXkBrwaY",
  authDomain: "movies-d287e.firebaseapp.com",
  databaseURL: "https://movies-d287e.firebaseio.com",
  projectId: "movies-d287e",
  storageBucket: "movies-d287e.appspot.com",
  messagingSenderId: "201801292909"
};

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TvShowListComponent,
    NavbarComponent,
    MovieDetailComponent,
    ThrillerComponent,
    GalleryComponent,
    TvShowDetailComponent,
    WatchlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {path: '', component: GalleryComponent},
    {path: 'gallery', component: GalleryComponent,
    children: [
        {path: 'movie-list', component: MovieListComponent},
        {path: 'movie-list/:by', component: MovieListComponent},
        {path: 'tv-show-list', component: TvShowListComponent},
        {path: 'tv-show-list/:by', component: TvShowListComponent},
    ]},
    {path: 'movie-detail/:id', component: MovieDetailComponent},
    {path: 'tvshow-detail/:id', component: TvShowDetailComponent},
    {path: 'thriller/:link', component: ThrillerComponent},
    {path: 'watchlist/:userId', component: WatchlistComponent},
    ]),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
