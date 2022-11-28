import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListWordComponent } from './list-word/list-word.component';
import { TranstWordComponent } from './transt-word/transt-word.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    CreateComponent,
    ListWordComponent,
    TranstWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
