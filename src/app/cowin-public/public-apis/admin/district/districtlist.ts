import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { District, DistrictId } from "src/app/model/district";
import { AdminService } from "src/app/services/admin";

@Component({
    selector: "districtlist-app",
    templateUrl: "./districtlist.html",
    styleUrls: ['./districtlist.css']
})
export class DistrictComponent {
    @ViewChild("districtForm") districtForm!: NgForm;
    state_id: number
    districtid: DistrictId
    districts: District[]
    isLoading: boolean = true;
    message: string
    ttl: number = 0

    //pagination
    page = 1;
    pageSize = 10;
    collectionSize: number;

    constructor(private adminService: AdminService) {

    }

    async onSubmit(districtForm: NgForm) {
        this.isLoading = true
        this.message = 'fetcing district ids'

        await this.adminService.getDistrictIds(this.districtForm.control.get("state_id").value).then((x: DistrictId) => {
            this.districtid = x
            this.isLoading = false
            this.collectionSize=this.districtid.districts.length
        }).catch(e => {
            this.message = "error in fetching district id..."
            this.isLoading = false
        })

        this.districts = this.districtid.districts
        this.ttl = this.districtid.ttl
    }
}