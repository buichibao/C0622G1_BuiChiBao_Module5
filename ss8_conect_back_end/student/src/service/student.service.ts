import { Injectable } from '@angular/core';
import {Student} from "../model/Student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

const API_URL = `${environment.api_url}`
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
      API_URL,student);
  }

  update(student:Student):Observable<Student>{
    return this._httpClient.patch<Student>(
      API_URL + '/' +student.id ,student);
  }

  findAll():Observable<Student[]>{
    console.log(API_URL);
    return this._httpClient.get<Student[]>(
      API_URL);
  }


  findById(id: number): Observable<Student> {
    return this._httpClient.get<Student>(API_URL + '/' + id);
  }


  delete(student:Student):Observable<Student>{
    return this._httpClient.delete<Student>(
      API_URL + '/' +student.id);
  }


}
