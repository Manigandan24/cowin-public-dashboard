import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { GenerateOtp } from "./generate-otp";

@Injectable({
    providedIn: 'root'
})
export class AdminService{
    headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization':''
    }

    constructor(private http: HttpClient,private generateOtp:GenerateOtp) {

    }

    async getStateIds(){
        this.headers.Authorization='Bearer '+this.generateOtp.getToken()
        return await this.http.get(environment.COWIN_ADMIN_STATE, { headers: this.headers }).toPromise()
    }

    async getDistrictIds(stateid:number){
        this.headers.Authorization='Bearer '+this.generateOtp.getToken()

        return await this.http.get(environment.COWIN_ADMIN_DISTRICT+stateid, { headers: this.headers }).toPromise()
    }
}