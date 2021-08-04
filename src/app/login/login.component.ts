import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { matchPasswords } from './login.validation'

import { AuthService } from '../auth/auth.service'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

/**
 * register the component in the app module
 * 
 * import the forms module in the app module
 */
@Component({
    selector: "login-form",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
  })
export class LoginComponent {
  public loginInvalid:boolean = false;
    loginForm: FormGroup;
    loginSuccess:boolean=false;

    constructor(private fb: FormBuilder,private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router){
        this.loginForm=this.fb.group({
            userName: new FormControl('',Validators.required),
            password: new FormControl('', Validators.required),
            //confirmPassword: new FormControl('', Validators.required)
        //},{validators:matchPasswords('')})
        })
    }

    /**
     * properties used for validation in the html
     */
    get userName() {
        return this.loginForm.get('userName');
      }
    
      get password() {
        return this.loginForm.get('password');
      }
    
      get confirmPassword() {
        return this.loginForm.get('confirmPassword');
      }

      logmsg(){
        console.log("loging event........")
      }

    onSubmit() {
      this.loginInvalid = false;
        this.authService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value).subscribe(data=>{
            if(data==true)
              //this.router.navigate(['menu'],{ skipLocationChange: false });
              this.router.navigate(['cowin'],{ skipLocationChange: false });
            else{
              this.loginInvalid = true;
                //this.router.navigateByUrl('login');
            }
        }) 
    }


}