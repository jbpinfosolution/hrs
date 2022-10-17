import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;

  constructor() { }

  ngOnInit(): void {
  }


loginUser(){

   if(this.email=="admin@gmail.com" && this.password=="12345678"){
     window.alert("login successfully")
   }
   else{
    window.alert("user unauthorized");
   }
}
}