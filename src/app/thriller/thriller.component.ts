import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'thriller.component.html',
})
export class ThrillerComponent implements OnInit{
  title = 'app works!';
  link: string;
  url: any;
  constructor(private _route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this._route.params.map(params => params['link'])
        .subscribe(link => {
            this.link = "https://www.youtube.com/embed/"+link;
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.link); 
            
        });
  }
}
