import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynaPlaceholderDirective } from 'src/shared/shared-service/shared-directive.directive';
import { SharedService } from 'src/shared/shared-service/shared.service';
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

  constructor(private _authService: AuthenticateService, private _loaderServ: SharedService) { }
  @ViewChild(DynaPlaceholderDirective) placeDir: DynaPlaceholderDirective;
  ngOnInit(): void {
  }

  toggleLogIn = ()=>{
    this.isLoggedIn = !this.isLoggedIn;
  }

  onAuthSubmit = (data : NgForm)=>{
    let authObs: Observable<AuthResponse>;
    //console.log(data);
    this.isLoading = true;
    this._loaderServ.showLoader(this.placeDir,'Loading....');
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
          this.isLoading = false;
          this._loaderServ.hideLoader();
          console.log(serverRes)
        },
        errMessage => {
          console.log(errMessage);
          this._loaderServ.hideLoader();
          this.isLoading = false
          this.isSeverErr = true
          this.showServerErr= errMessage;
        },
      );
  }

}
