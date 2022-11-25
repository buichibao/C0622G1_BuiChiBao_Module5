import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  rfUser:FormGroup;

  constructor(private _formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.rfUser= this._formBuilder.group({
      email:[,[
        Validators.required,
        Validators.email
       ]
      ],
      password:[,[
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }


  onSubmit() {
    if(this.rfUser.valid){
      console.log(this.rfUser.value);
    }
  }
}
