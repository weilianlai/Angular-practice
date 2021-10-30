import { ArticleService } from './article.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title= 'conduit';
  subtitle='A place to share your <u>knowledge.</u>';
  //list : any [] = [];

  get list(){
    return this.articleService.list;
  }

  constructor(public articleService: ArticleService) {
    //this.list = this.articleService.list;
   }

  doSearch($event:any){

    this.articleService.doSearch($event);
  }
}
