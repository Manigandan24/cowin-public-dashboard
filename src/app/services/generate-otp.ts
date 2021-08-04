import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GenerateOtp {

    token:string

    headers = {
        'accept': 'application/json',
        'content-type': 'application/json'
    }

    constructor(private http: HttpClient) {

    }

    async generateOtp(mobilenumber: string) {
        let mobile = {
            mobile: mobilenumber
        }
        return await this.http.post(environment.COWIN_PUBLIC_GENOTP_URL, mobile, { headers: this.headers }).toPromise()
    }

    async confirmOtp(otp: string, txnId: string) {
        let req = {
            otp: otp,
            txnId: txnId
        }
        return await this.http.post(environment.COWIN_PUBLIC_CONFIRMOTP_URL, req, { headers: this.headers }).toPromise()
    }

    setToken(token:string){
        this.token=token
    }

    getToken(){
        return this.token
    }

}