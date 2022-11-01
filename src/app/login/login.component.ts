import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  title="JBP HRS"
  email:any;
password:any;
  
  constructor(private service: AuthService,private router: Router) { 

  }
   ngOnInit(): void {
   
  }
loginUser(loginForm:NgForm){
  
  var output = this.service.check(this.email,this.password);
    if(output==true){
      
      this.router.navigate(['/attendance']);
    }
    else{
    
      Swal.fire({
        
        text: 'The Email Id or Password is Incorrect. Try again',
        icon: 'warning',
  
     })
  }

}
}
