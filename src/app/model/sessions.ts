export interface Sessions {
    sessions?:center[]
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