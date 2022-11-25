import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>{
  const passWord = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  if(passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value ){
    return {"reConfirmPass": true}
  }else {
    return  null;
  }
}

@Component({
  selector: 'app-form-dang-ki',
  templateUrl: './form-dang-ki.component.html',
  styleUrls: ['./form-dang-ki.component.css']
})
export class FormDangKiComponent implements OnInit {

  rfForm:FormGroup;

  constructor(private _formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.rfForm = this._formBuilder.group({
      email:[,[
        Validators.required,
        Validators.email
      ]],
      password:[,[
        Validators.required,
        Validators.minLength(6)
      ]],
      confirmPassword:[,[
        Validators.required,
        Validators.minLength(6)
      ]],
      country:[,[
        Validators.required
      ]],
      age:[,[
        Validators.required,
        Validators.min(18)
      ]],
      gender:[,[
        Validators.required
      ]
      ],
      phone:[,[
        Validators.required,
        Validators.pattern( /^\\+84\\d{9,10}$/),
        Validators.minLength(8),
        Validators.maxLength(12)
      ]]
    })
  }

  onSubmit(){
    if(this.rfForm.valid){
      console.log(this.rfForm.value)
    }
  }

}
