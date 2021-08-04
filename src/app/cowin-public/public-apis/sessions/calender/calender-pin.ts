import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SessionsService } from "src/app/services/sessionsservice";
import { formatDate } from "@angular/common";
import { Sessions } from "src/app/model/sessions";
import { Centers } from "src/app/model/centers";
import { DataService } from "src/app/services/data";


@Component({
    selector: "calender-pin-app",
    templateUrl: "./calender-pin.html",
    styleUrls: ['./calender-pin.css']
})

export class CalenderByPin{
    @ViewChild("sessionByPinForm") districtForm!: NgForm;

    pincode:number
    date:Date
    centersList:Centers={};
    isLoading: boolean = true;
    message: string

    constructor(private sessionService: SessionsService, private dataService:DataService){

    }

     async onSubmit(districtForm: NgForm){
        this.isLoading = true
        this.message = 'fetcing available centers by pincode'
        const formattedDate = formatDate(this.districtForm.control.get("date").value, 'dd-MM-yyyy','en-IN');

        await this.sessionService.findCalenderByPin(this.districtForm.control.get("pincode").value,formattedDate).then((x:Centers)=>{
            this.centersList.centers=x.centers
            this.isLoading = false
            this.dataService.setCenter(this.centersList)
        }).catch(e=>{
            this.message = "error in fetching centers list..."
            this.isLoading = false
        })
    }
}