import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from './authenticate.model';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  showServerErr:string;
  isSeverErr:boolean = false;
  isLoggedIn = true;
  isLoading = false;

  constructor(private _authService: AuthenticateService) { }

  ngOnInit(): void {
  }

  toggleLogIn = ()=>{
    this.isLoggedIn = !this.isLoggedIn;
  }

  onAuthSubmit = (data : NgForm)=>{
    let authObs: Observable<AuthResponse>;
    //console.log(data);
    this.isLoading = true;
    if(this.isLoggedIn){
      if(!data.valid){
        return;
      }
      authObs=this._authService.loginForm(data)
    }else{
      if(!data.valid){
        return;
      }
      data.reset();
      authObs= this._authService.signupForm(data);
      }
      authObs.subscribe(
        (serverRes:AuthResponse) =>{
          this.isLoading = false
          console.log(serverRes)
        },
        errMessage => {
          console.log(errMessage);
          this.isLoading = false
          this.isSeverErr = true
          this.showServerErr= errMessage;
        },
      );
  }

}
