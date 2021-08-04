import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AdminService } from "src/app/services/admin";
import { SessionsService } from "src/app/services/sessionsservice";
import { formatDate } from "@angular/common";
import { Sessions } from "src/app/model/sessions";


@Component({
    selector: "sessions.district-app",
    templateUrl: "./sessions.district.html",
    styleUrls: ['./sessions.district.css']
})
export class SessionByDistrict{
    @ViewChild("sessionByDistrictForm") districtForm!: NgForm;

    pincode:number
    date:Date
    sessionsList:Sessions={};
    isLoading: boolean = true;
    message: string

    constructor(private sessionService: SessionsService){

    }

    async onSubmit(districtForm: NgForm){
        this.isLoading = true
        this.sessionsList
        this.message = 'fetcing available sessions by district'
        const formattedDate = formatDate(this.districtForm.control.get("date").value, 'dd-MM-yyyy','en-IN');

        await this.sessionService.findSessionsByDistrict(this.districtForm.control.get("district_id").value,formattedDate).then((x:Sessions)=>{
            this.sessionsList.sessions=x.sessions
            this.isLoading = false
        }).catch(e=>{
            this.message = "error in fetching sessions list..."
            this.isLoading = false
        })
    }
}