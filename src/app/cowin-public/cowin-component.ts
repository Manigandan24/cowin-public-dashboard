import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Component } from '@angular/core';

@Component({
    selector: 'cowinpublic-app',
    templateUrl: './cowin-component.html',
    styleUrls: ['./cowin-component.css']
})
export class CowinPublic {
    constructor(private authservice: AuthService, private router: Router) {

    }

    logout() {
        this.authservice.logoutUser();
        this.router.navigate(['./login'])
    }

}