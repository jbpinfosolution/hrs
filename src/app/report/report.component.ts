import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
   constructor() { }

  ngOnInit(): void {
  }
  searchText:any;
  emdata = [
    { id: 1, name: 'aa', date: '10/10/2022'},
    { id: 6, name: 'bb', date: '11/12/2022'},
    { id: 8, name: 'cc', date: '17/10/2022'},
    { id: 10, name: 'dd', date: '19/12/2022'},
    { id: 5, name: 'ee', date: '12/10/2022'},
    { id: 4, name: 'ff', date: '18/12/2022'},
  ];
  order: string = 'name';

  orderD(){
    this.emdata=this.emdata.sort(function(a,b){
      return b.id - a.id
    })
  }
  orderA(){
    this.emdata=this.emdata.sort(function(a,b){
      return a.id - b.id
    })
  
  }

  dec(){
    this.emdata=this.emdata.sort(function(a,b){
      return  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
    })
  }
  aec(){
    this.emdata=this.emdata.sort(function(a,b){
      return  b.name > a.name ? 1 : b.name < a.name ? -1 : 0
    })
  }

  Odec(){
    this.emdata=this.emdata.sort(function(a,b){
      return  a.date > b.date ? 1 : a.date < b.date ? -1 : 0
    })
  }

  Oaec(){
    this.emdata=this.emdata.sort(function(a,b){
      return  b.date > a.date ? 1 : b.date < a.date ? -1 : 0
    })
  }
  
  }

 
  



