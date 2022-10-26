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
  searchText!:any;
  emdata = [
    { id: 1, name: 'person 1', date: '10/10/2022'},
    { id: 2, name: 'person 2', date: '11/12/2022'},
  ];
  
}
