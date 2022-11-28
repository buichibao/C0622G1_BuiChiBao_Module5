import { Injectable } from '@angular/core';
import {Student} from "../model/Student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _student:Student[];

  constructor(private _httpClient:HttpClient) { }


  setStudent(value: Student[]) {
    this._student = value;
  }

  save(student:Student):Observable<Student>{
    return  this._httpClient.post<Student>(
      environment.api_url,student
    );
  }

  getStudentByIndex(index: number) {
    return this._student[index];
  }
  findAll():Observable<Student[]>{
    return this._httpClient.get<Student[]>(
      environment.api_url);
  }

}
