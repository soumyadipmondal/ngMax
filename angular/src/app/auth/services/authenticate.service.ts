import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { AuthResponse } from '../authenticate.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private _http: HttpClient) { }

  signupForm = (formData: NgForm)=>{
    return this._http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBd7lTyTeU4DqqLXBQ3v51LUgwYUZIDkwY', {
        email: formData.value.email_signup,
        password: formData.value.pwd_signup,
        returnSecureToken:true
      }
    ).pipe(catchError(this.handleError))
  };

  loginForm = (formData: NgForm)=>{
    return this._http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBd7lTyTeU4DqqLXBQ3v51LUgwYUZIDkwY',{
      email: formData.value.email,
      password: formData.value.pwd,
      returnSecureToken:true
      
    }
    ).pipe(catchError(this.handleError));
  }

  private handleError = (errorResponse: HttpErrorResponse)=>{
    let errMessage='An login unknown server error has occured'
      if(!errorResponse.error || !errorResponse.error.error){
        return throwError(errMessage);
      }
    errMessage = `Hi There! There is an server error occured ${errorResponse.error.error.message} + (${errorResponse.error.error.code})`;
    return throwError(errMessage);

  }
}
