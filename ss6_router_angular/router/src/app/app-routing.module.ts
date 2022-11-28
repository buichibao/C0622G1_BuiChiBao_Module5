import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {TranstWordComponent} from "./transt-word/transt-word.component";
import {ListWordComponent} from "./list-word/list-word.component";


const routes: Routes = [
  {path:"home",component:ListComponent},
  {path:"create",component:CreateComponent},
  {path:"detail/:index",component:DetailComponent},
  {path:"word",component:ListWordComponent},
  {path:"transt/:index",component:TranstWordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
