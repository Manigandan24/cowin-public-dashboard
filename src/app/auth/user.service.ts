import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserService{

    private userSource=new BehaviorSubject<User>(new User('',false));
    currentUser=this.userSource.asObservable();

    constructor(){

    }

    //update the current user
    updateUser(user:string,role:boolean){
        this.userSource.next(new User(user,role));
    }

}

export class User{
    userName:string;
    isAdmin:boolean;

    constructor(user:string,admin:boolean){
        this.userName=user;
        this.isAdmin=admin;
    }
}