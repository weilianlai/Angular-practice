import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword="yyyyyy";

  constructor() { }

  ngOnInit(): void {
  }

  keyEnter(){
    this.doSearch();
  }

  searchClick(event:MouseEvent){
    console.log("searchClick")
    this.doSearch();
  }
  doSearch(){
    console.log("search")

  }

}
