import { OnInit } from "@angular/core";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Centers, session } from "src/app/model/centers";
import { DataService } from "src/app/services/data";

@Component({
    selector: "app-calender-session-card",
    templateUrl: "./calender-sessions-card.html",
    styleUrls: ['./calender-sessions-card.css']
})

export class CalenderSession  implements OnInit{

      
    @Input() sessionsList: session[];
    @Input() isLoading: boolean = false;
    @Input() message: string

    //pagination
    page = 1;
    pageSize = 10;
    collectionSize: number;

    constructor(private dataService:DataService, private router: Router){
        
    }

    async ngOnInit(){
       this.sessionsList=this.dataService.getSession()
    }

    back(){
        this.dataService.resetSession()
        this.router.navigate(["cowin/api/centers/pin"]);
    }

    
}