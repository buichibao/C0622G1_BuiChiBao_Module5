import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/Word";
import {WordService} from "../../service/word.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transt-word',
  templateUrl: './transt-word.component.html',
  styleUrls: ['./transt-word.component.css']
})
export class TranstWordComponent implements OnInit {

  worDetail:Word;
  index:number;

  constructor(private _wordService:WordService,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this._activatedRoute.snapshot.params['index'];
    this.worDetail = this._wordService.getFindByIndex(this.index);
  }

}
