import { Injectable } from '@angular/core';
import {Student} from "../model/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _student:Student[] = [
    {name:"A",gender:1,point:100},
    {name:"B",gender:0,point:50},
    {name:"C",gender:2,point:10},
    {name:"D",gender:1,point:0},
  ]
  constructor() { }


  getStudent(): Student[] {
    return this._student;
  }

  setStudent(value: Student[]) {
    this._student = value;
  }

  save(student:Student){
    this._student.unshift(student);
  }

  getStudentByIndex(index: number) {
    return this._student[index];
  }

}
