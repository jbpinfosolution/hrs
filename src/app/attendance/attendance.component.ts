import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  
  tdata = [
    { name: 'person1', mark:"Mark Attendance" },
    { name: 'person2', mark:"Mark Attendance" },
  ];
  constructor() { }

  

  ngOnInit(): void {
  }

  markatten(){
    Swal.fire({
      text: 'Attendance has been logged',
      icon: 'success',
  })
  
}
}
