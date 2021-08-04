export interface Centers {
    centers?:center[]
}

export interface center {
    center_id: number,
    name: string,
    address: string,
    state_name: string,
    district_name: string,
    block_name: string,
    pincode: number,
    from: string,
    to: string,
    lat: number,
    long: number,
    fee_type: string,
    sessions:session[]
    vaccine_fees:vaccine_fee[]
}

export interface session{
    session_id: string,
    date: Date,
    available_capacity: number,
    available_capacity_dose1: number,
    available_capacity_dose2: number,
    fee: number,
    min_age_limit: number,
    allow_all_age: boolean,
    vaccine: string
    slots: string[]
}

export interface vaccine_fee{
    vaccine:string,
    fee:string
}