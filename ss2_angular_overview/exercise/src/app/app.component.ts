import { Component } from '@angular/core';
import {Student} from "./ss3_angualar_template/demo/model/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';

  students:Student[] = [
    {name:"Bui Chi Bao",gender:1,point:100},
    {name:"Ho Hai Hoc",gender:1,point:100},
    {name:"Nguyen Van A",gender:0,point:0},
    {name:"Tran Dinh Nam",gender:0,point:50}
  ]

  dataStr:string="Bao khong gam , Hoc tuong minh lam chi khu rung";
  dataNumber:number=119.12;
  dataMoney:number = 9;
  today:Date = new Date();

}
