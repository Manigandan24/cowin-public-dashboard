import { Component, Input } from "@angular/core";
import { Sessions } from "src/app/model/sessions";


@Component({
    selector: "app-sessions-card",
    templateUrl: "./sessions-card.html",
    styleUrls: ['./sessions-card.css']
})

export class SessionsCard {

    @Input() sessionsList: Sessions = {};
    @Input() isLoading: boolean = true;
    @Input() message: string

    //pagination
    page = 1;
    pageSize = 10;
    collectionSize: number;

}