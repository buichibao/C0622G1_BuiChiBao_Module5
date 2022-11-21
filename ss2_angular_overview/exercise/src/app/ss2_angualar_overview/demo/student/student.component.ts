import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name:string = "Messi";

  imgSrc = "https://vtv1.mediacdn.vn/zoom/550_339/2022/11/3/photo-1-1667409017240637250300-crop-16674090336242040822700.jpg";

  updateName(){
    this.name = "Cristiano Ronaldo";
    this.imgSrc="https://static.bongda24h.vn/medias/standard/2021/10/1/ronaldo-tro-lai-dt-bo-dao-nha.jpg";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
