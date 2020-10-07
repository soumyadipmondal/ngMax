import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ErrorComponent } from 'src/shared/error/error.component';
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
  content:SafeHtml= null
  showServerErr:string='';
  isSeverErr:boolean = false;
  isLoggedIn = true;
  isLoading = false;

  constructor(private _authService: AuthenticateService, 
    private _loaderServ: SharedService, 
    injector: Injector,
    domSanitizer: DomSanitizer) { 
      const custErrElem = createCustomElement(ErrorComponent, {injector});
      customElements.define('cust-err', custErrElem);

      this.content = domSanitizer.bypassSecurityTrustHtml('<cust-err err=Advertisement: Please Login></cust-err>')

    }
  @ViewChild(DynaPlaceholderDirective) placeDir: DynaPlaceholderDirective;
  ngOnInit(): void {
  }

  toggleLogIn = ()=>{
    this.isLoggedIn = !this.isLoggedIn;
  }

  onAuthSubmit = (data : NgForm)=>{
    let authObs: Observable<AuthResponse>;
    this.isLoading = true;
    this._loaderServ.showLoader(this.placeDir,'Loading....'); //creating load component dynamically

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
          //console.log(errMessage);
          this
          this._loaderServ.hideLoader();
          this.isLoading = false
          this.isSeverErr = true
          this.showServerErr= errMessage;
        },
      );
  }

}
