import { Component, EmbeddedViewRef, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchKeyword = new EventEmitter<string>();

  keyword="";
  ishighLight = false;
  fontSize=12;
  message = "";

  constructor() { }

  ngOnInit(): void {
  }

  keyEnter(){

    this.doSearch();
  }

  searchClick(event:MouseEvent){

    this.doSearch();
  }
  doSearch(){
    this.searchKeyword.emit(this.keyword);

    // this.ishighLight= !this.ishighLight;
    // ++this.fontSize ;

  }

}
