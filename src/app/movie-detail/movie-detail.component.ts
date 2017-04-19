import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
    moduleId: module.id,
    selector: 'movie-detail',
    templateUrl: 'movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
    title = 'app works!';
    id: string;
    movie: any;
    youtubeLink: string;
    recommendedMovies: string;
    constructor(private _moviesService: MoviesService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this._activatedRoute.params.map(params => params['id'])
            .subscribe((id) => {
                this._moviesService.getMovie(id).subscribe(res => {
                    this.movie = res;

                    //get recommended movies
                    this._moviesService.getRecommendedMovies(id).subscribe(res => {
                        this.recommendedMovies = res.results;
                        console.log(this.recommendedMovies);
                    });

                    //get youtuve link
                    this._moviesService.getYoutubeLink(id).subscribe(res => {
                        this.youtubeLink = res.results[0].key;
                    });
                });

            });

    }
}
