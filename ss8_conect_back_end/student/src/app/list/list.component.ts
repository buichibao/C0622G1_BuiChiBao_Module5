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

  students:Student[];

  constructor(private _studentService:StudentService,
              private _router:Router) { }

  ngOnInit(): void {
    this._studentService.findAll().subscribe(
      data =>{
        this.students =data;
      },error=>{
        console.log("Lấy danh sách thất bại");
    },() =>{
        console.log("Kết thúc lấy danh sách");
      }
    )
  }

  gotoDetail(i:number){
    this._router.navigate(['detail',i]);
  }

}
