import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './ss2_angualar_overview/demo/student/student.component';
import { CalculatorComponent } from './ss2_angualar_overview/exercise/exercise_01/calculator/calculator.component';
import {FormsModule} from "@angular/forms";
import { ColorComponent } from './ss2_angualar_overview/exercise/exercise_02/color/color.component';
import { Student3Component } from './ss3_angualar_template/demo/student3/student3.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CalculatorComponent,
    ColorComponent,
    Student3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
