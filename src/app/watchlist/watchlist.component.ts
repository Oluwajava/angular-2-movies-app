import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { Watchlist } from '../utils/watchlist';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'watchlist.component.html',
})
export class WatchlistComponent implements OnInit {
  userId: string;
  items: FirebaseListObservable<any[]>;
  watchList: Array<Watchlist>;

  constructor(private _angularFire: AngularFire, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.map(params => params['userId'])
      .subscribe((id) => {
        this.items = this._angularFire.database.list(id);
        // for(var i = 0; i < this.items.; i++)
        // this.watchList.push(new Watchlist("test"))
      });
  }
}
