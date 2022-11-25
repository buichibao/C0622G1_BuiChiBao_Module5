import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormDangKiComponent } from './form-dang-ki/form-dang-ki.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormDangKiComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
