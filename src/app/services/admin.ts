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
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxYjgzYmNmYy04N2YwLTQzNzctOWM0NC1mODZkM2I1NWY1YjIiLCJ1c2VyX3R5cGUiOiJCRU5FRklDSUFSWSIsInVzZXJfaWQiOiIxYjgzYmNmYy04N2YwLTQzNzctOWM0NC1mODZkM2I1NWY1YjIiLCJtb2JpbGVfbnVtYmVyIjo5MDI1NjUxMzE3LCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjMxNTUwMTA2MTkwODA3LCJ0eG5JZCI6IjIwY2ExY2U3LWYzNWUtNGRkOC04YTMyLWRhMWVkM2U3YTZhNiIsImlhdCI6MTYyNzgyNTg5MywiZXhwIjoxNjI3ODI2NzkzfQ.0UO6IoMV4hrLPcSVp-hwxlTa96ztzJwo3FuUhUcbyS8'
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