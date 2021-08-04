import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from "@angular/forms";
import { State, StateId } from 'src/app/model/State';
import { AdminService } from "src/app/services/admin";

@Component({
    selector: "statelist-app",
    templateUrl: "./statelist.html",
    styleUrls: ['./statelist.css']
})
export class StateComponent implements OnInit {

    statesForm!: FormGroup
    statesArray!: FormArray

    isLoading: boolean = true;
    message: string
    ttl: number=0

    //pagination
    page = 1;
    pageSize = 10;
    collectionSize: number;

    states: State[] = [{ state_name: 'Tamil Nadu', state_id: 31 }, { state_name: 'Andhra', state_id: 32 },{ state_name: 'Andhra', state_id: 32 },{ state_name: 'Andhra', state_id: 32 },{ state_name: 'Andhra', state_id: 32 },{ state_name: 'Andhra', state_id: 32 }]

    stateid: StateId

    constructor(private adminService: AdminService, private formBuilder: FormBuilder) {

    }

    async ngOnInit() {
        this.isLoading = true
        this.message = 'fetcing state ids'

        await this.adminService.getStateIds().then((x: StateId) => {
            this.stateid = x
            this.collectionSize=this.stateid.states.length
            this.isLoading = false
        }).catch(e => {
            this.message = "error in fetching state id..."
            this.isLoading = false
        })
        this.states = this.stateid.states
        this.ttl=this.stateid.ttl
    }

}