import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ParseSourceFile } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private router:Router,private service:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
   boolean{
    console.log(localStorage.getItem("useremail"))

    if(localStorage.getItem("useremail")!=null){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
