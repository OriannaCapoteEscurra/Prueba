import { Component, NgModule, OnInit, Injectable } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [
  ]
})

export class NewsComponent implements OnInit {

  private loading: boolean = false;
  apiRoot: string = "http://newsapi.org/v2/top-headlines";
  results: [];
  cards = [];

  constructor(private http: HttpClient) { 
    this.results = [];
    this.loading = true;
    this.News().then(_ => (this.loading = false));
  }

  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    
  }

  News() {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?country=us&apiKey=cc27180fe27143ffa0a2611a879dede6`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          res => {
            // Success
            console.log("esto si sirveeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!!!!!!!!!!", res.articles);
            resolve();
            this.cards = res.articles;
            this.slides = this.chunk(this.cards, 5);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
