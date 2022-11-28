import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  rfStudent :FormGroup;

  constructor(private _formBuilder:FormBuilder,
              private _studentService:StudentService,
              private _router:Router) { }

  ngOnInit(): void {
    this.rfStudent = this._formBuilder.group({
      name:['No Name',[
        Validators.required,
        Validators.minLength(5)
        ]
      ],
      point:[100,[
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]],
      gender:[,[

       ]
      ]

    })
  }

  onSubmit(){
    if(this.rfStudent.valid){
      console.log(this.rfStudent.valid);
      this._studentService.save(this.rfStudent.value);
      this._router.navigateByUrl("/home");
    }
  }

}
