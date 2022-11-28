import { Injectable } from '@angular/core';
import {Word} from "../model/Word";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  private _words:Word[]=[
    {eng:"milk",vn:"sữa"},
    {eng:"fan",vn:"quạt"},
    {eng:"computer",vn:"máy tính"},
    {eng:"car",vn:"ô tô"},
  ]
  constructor() { }


  getWords(): Word[] {
    return this._words;
  }

  setWords(value: Word[]) {
    this._words = value;
  }

  getFindByIndex(index:number){
    return this._words[index];
  }
}
