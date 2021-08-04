import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {

    private isLoggedIn: boolean = false;
    private userName: String = "user";
    private password: string = "jun@123"

    constructor(private userService:UserService) {
        this.isLoggedIn = false;
    }

    login(user: string, pass: string) {

        if (this.userName == user && this.password == pass) {
            this.isLoggedIn = true
            //update the current user name
            this.userService.updateUser(user,false)
            return of(this.isLoggedIn);
        }
        else if(user == 'admin' && this.password == pass){
            this.isLoggedIn = true
            this.isAdminLoggedIn(user)
            //update the current user name and permission status
            this.userService.updateUser(user,true)
            return of(this.isLoggedIn);
        } else
            return of(false);
    }

    isUserLoggedIn(user: string) {
        return this.isLoggedIn;
    }

    isAdminLoggedIn(user: string) {
        return of(user == 'admin' && this.isLoggedIn? true : false)

    }

    logoutUser(): void {
        this.isLoggedIn = false
    }
}