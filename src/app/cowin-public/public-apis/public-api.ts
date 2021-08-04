import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { AuthGuardService } from "src/app/auth/authguard.service";
import { SideNavItem } from "../../model/nav.item";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
import { ChangeDetectorRef } from "@angular/core";
import { GenerateOtp } from "src/app/services/generate-otp";

import * as CryptoJS from 'crypto-js';

@Component({
    selector: "public-api-app",
    templateUrl: "./public-api.html",
    styleUrls: ['./public-api.css']
})
export class PublicApi implements OnInit{
    @ViewChild("authForm") authForm!: NgForm;

    authorized: boolean = false
    mobilenumber: string =''
    otp: string = ''
    receivedOtp:boolean=false
    txnId: string = ''
    message: string = ''
    token:string =''

    classStyler = {
        auth: true,
        api: false
    }

    sideNavItems: SideNavItem[] = new ItemsList().getItemsList();

    constructor(private cdr: ChangeDetectorRef,
        private authGuardService: AuthGuardService,
        private authService: AuthService,
        private generateOtp: GenerateOtp) {

    }

    ngOnInit(){
        this.otp=''
        this.mobilenumber=''
        this.authorized=false
        this.receivedOtp=false
    }

    ngAfterContentChecked(): void {
        this.cdr.detectChanges();
    }

    async genOtp() {
        this.mobilenumber = this.authForm.control.get("mobilenumber").value;

       await this.generateOtp.generateOtp(this.mobilenumber).then((o: GenOtpResp) => {
            this.txnId = o.txnId
            this.message = 'Generated Otp'
            this.receivedOtp=true
            console.log(this.message)
        }).catch(e => {
            this.message = e.error
            console.log(e)
        })

        /*
        if (this.mobilenumber === '123') {
            this.otp = '340905'
            var hash = CryptoJS.SHA256(this.otp)
            console.log(hash.toString(CryptoJS.enc.Hex))
            this.receivedOtp=true
        } else {
            this.message = 'enter valid mobile number'
            this.receivedOtp=false
        }*/
    }

    async authorize() {
        let generatedOtp = this.authForm.control.get("otp").value
        var hash = CryptoJS.SHA256(generatedOtp)
        let otpp=hash.toString(CryptoJS.enc.Hex)
        
       await this.generateOtp.confirmOtp(otpp, this.txnId).then((o:any)=>{
            this.token=o.token
            console.log(o)
            this.generateOtp.setToken(this.token)
            this.message='generated token....authorized successfully'
            console.log(this.message)
            this.authorized = true
            this.receivedOtp=true
        }).catch(e=>{
            this.message=e.message
            this.authorized = false
            console.log(e)
        })

        /*
        if (this.otp === '456') {
            this.authorized = true
            this.receivedOtp=true
        } else
            this.authorized = false*/
    }

    enableAuthrization() {
        this.generateOtp.resetToken()
        this.authorized = false
        this.receivedOtp=false;
        this.classStyler.auth = true
        this.classStyler.api = false
    }

    enableApi(){
        this.authorized = true
    }
}


export class ItemsList {

    public getItemsList() {
        let sideNavItems: SideNavItem[] = [
            {
                displayName: 'Public Apis',
                disabled: true,
                iconName: '',
                route: 'cowin',
                children: [{
                    displayName: 'States',
                    disabled: false,
                    iconName: '',
                    route: 'cowin/api/admin/states',
                }, {
                    displayName: 'DistrictsByStates',
                    disabled: false,
                    iconName: '',
                    route: 'cowin/api/admin/districts',
                }, {
                    displayName: 'FindByPin',
                    disabled: false,
                    iconName: '',
                    route: 'cowin/api/sessions/pin',
                },{
                    displayName: 'FindByDistrict',
                    disabled: false,
                    iconName: '',
                    route: 'cowin/api/sessions/district',
                },{
                    displayName: 'FindCalCentersByPin',
                    disabled: false,
                    iconName: '',
                    route: 'cowin/api/centers/pin',
                }
                ]
            }
        ]

        return sideNavItems;
    }
}

export class GenOtpResp {
    otp: string
    txnId: string
}