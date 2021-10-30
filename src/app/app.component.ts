import { ArticleService } from './article.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title= 'conduit';
  subtitle='A place to share your <u>knowledge.</u>';
  list : any [] = [];

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.articleService.getArticles().subscribe(articles =>
      {this.list = articles});
  }

  // get list(){
  //   return this.articleService.list;
  // }

  constructor(public articleService: ArticleService) {
    //this.list = this.articleService.list;
   }

  doSearch($event:any){

    this.articleService.doSearch($event);
  }
}
