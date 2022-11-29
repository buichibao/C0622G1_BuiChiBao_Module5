import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Student} from "../../model/Student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {


  student:Student;
  index:number;

  constructor(
              private _studentService:StudentService,
              private _activatedRoute :ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this.index = this._activatedRoute.snapshot.params['index'];
    this._studentService.findById(this.index).subscribe(
      data =>{
        this.student =data;
      }
    )
  }

  deleteStudent(student: Student) {
    this._studentService.delete(student).subscribe(value => {
         this._router.navigateByUrl("/list");
    })
  }
}
