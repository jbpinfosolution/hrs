import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  title="JBH HRS"
  email:any;
password:any;
  
  constructor(private service: AuthService,private router: Router) { 

  }
   ngOnInit(): void {
   
  }
loginUser(loginForm:NgForm){
  
  if(this.email=="admin@gmail.com" && this.password=="12345678"){
    this.router.navigate(['/attendance']);
   }
   else{
    window.alert("user unauthorized");
   }
}
}