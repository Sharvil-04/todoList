import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthService } from '../services/hardcodedauth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = "sharvilp";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin: boolean = false;

  constructor(private router: Router,
    private hardcodedauth: HardcodedauthService
  ) {}

  login(){
   if(this.hardcodedauth.authenticate(this.username, this.password)){
    this.router.navigate(['welcome', this.username]);
    this.invalidLogin = false;
   }else{
    this.invalidLogin = true;
   }
  }

}
