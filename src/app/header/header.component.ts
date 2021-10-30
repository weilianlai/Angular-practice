import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword="123";
  ishighLight = false;
  fontSize=12;
  message = "";

  constructor() { }

  ngOnInit(): void {
  }

  keyEnter(){
    this.keyword="";
    this.doSearch();
  }

  searchClick(event:MouseEvent){
    console.log("searchClick")
    this.keyword="";
    this.doSearch();
  }
  doSearch(){
    console.log("search")
    this.keyword="";
    // this.ishighLight= !this.ishighLight;
    // ++this.fontSize ;

  }

}
