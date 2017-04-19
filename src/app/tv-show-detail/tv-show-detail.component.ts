import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
    moduleId: module.id,
    selector: 'tv-show-detail',
    templateUrl: 'tv-show-detail.component.html',
})
export class TvShowDetailComponent implements OnInit {
    title = 'app works!';
    id: string;
    movie: any;
    youtubeLink: string;
    constructor(private _moviesService: MoviesService, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let self = this;
        this._activatedRoute.params.map(params => params['id'])
            .subscribe((id) => {
                this._moviesService.getShow(id).subscribe(res => {
                    self.movie = res;
                    this._moviesService.getYoutubeLink(id).subscribe(res => {
                        this.youtubeLink = res.results[0].key;
                        console.log(this.youtubeLink);
                    });
                });

            });

    }
}
