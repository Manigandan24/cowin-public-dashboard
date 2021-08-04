import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Centers, session } from "src/app/model/centers";
import { DataService } from "src/app/services/data";

@Component({
    selector: "app-calender-center-card",
    templateUrl: "./calender-centers-card.html",
    styleUrls: ['./calender-centers-card.css']
})

export class CalenderCenter implements OnInit {

    @Input() centersList: Centers = {};
    @Input() isLoading: boolean = true;
    @Input() message: string

    sessionsList: session[]

    //pagination
    page = 1;
    pageSize = 10;
    collectionSize: number;

    constructor(private dataService: DataService, private router: Router) {

    }

    ngOnInit() {
        
    }

    async setData(sessionsData: session[]) {

        this.dataService.setSession(sessionsData)
        await this.router.navigate(["cowin/api/centers/pin/sessions"]);
    }

}