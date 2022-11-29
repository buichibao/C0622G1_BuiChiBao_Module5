import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/Student";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  studentDetail:Student;
  index:number;

  constructor(private  _studentService:StudentService,
              private _activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.index = this._activatedRoute.snapshot.params['index'];
    this._studentService.findById(this.index).subscribe(
      data =>{
        this.studentDetail =data;
      }
    )
  }
}
