import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/Student";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students :Student[];
  // DI
  constructor(private _studentService:StudentService,
              private _router:Router) { }

  ngOnInit(): void {
    this.students= this._studentService.getStudent();
  }

  gotoDetail(i:number){
    this._router.navigate(['detail',i]);
  }

}
