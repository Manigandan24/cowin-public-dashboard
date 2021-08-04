import { Injectable } from "@angular/core";
import { Centers, session } from "../model/centers";

@Injectable({
    providedIn: 'root'
})
export class DataService{

    sessions:session[]
    centersList:Centers={};

    getCenter(){
        console.log(this.centersList)
        return this.centersList
    }

    setCenter(centersList:Centers){
        this.centersList=centersList
    }

    setSession(sessionsData:session[]){
        this.sessions=sessionsData
    }

    getSession():session[]{
        return this.sessions
    }

    resetSession(){
        this.sessions=[]
    }
}