import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
/**
 * 
 * @param params cross field validation
 * @returns 
 */
export function matchPasswords(params:any):ValidatorFn {
    
    return (control:AbstractControl):ValidationErrors|null=>{
        let pass=control.get('password')?.value
        let confirmpass=control.get('confirmPassword')?.value

        if(pass!==confirmpass)
           return {'matchpass':true,'requiredval':'Passwords must match'}

        return null;
    }
}