import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  
  tdata = [
    {  name: 'Mr. Nice' },
    { name: 'Narco' },
  ];
  constructor(private router: Router) { }

  

  ngOnInit(): void {
  }
  
}
