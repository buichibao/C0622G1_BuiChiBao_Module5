import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/Student";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  rfStudent :FormGroup;
  student:Student;
  index:number;

  constructor(private _formBuilder:FormBuilder,
              private _studentService:StudentService,
              private _activatedRoute :ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this.index = this._activatedRoute.snapshot.params['index'];
    this._studentService.findById(this.index).subscribe(
      data =>{
        this.rfStudent.patchValue(data);
      });
    this.rfStudent = this._formBuilder.group({
      id:[],
      name:['',[
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      point:['',[
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]],
      gender:['',[]]

    })
  }

  onSubmit(){
    if(this.rfStudent.valid){
      this._studentService.update(this.rfStudent.value).subscribe(
        data=> {
          this._router.navigateByUrl("/list");
        }
      )

    }
  }

}
