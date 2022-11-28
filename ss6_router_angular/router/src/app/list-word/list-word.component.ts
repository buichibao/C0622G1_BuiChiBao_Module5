import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/Word";
import {WordService} from "../../service/word.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})
export class ListWordComponent implements OnInit {

  words:Word[];

  constructor(private _wordService:WordService,
              private _router:Router) { }

  ngOnInit(): void {
    this.words=this._wordService.getWords();
  }

  Transt(i: number) {
    this._router.navigate(['transt',i]);
  }
}
