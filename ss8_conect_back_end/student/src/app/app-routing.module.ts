import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";
import {DeleteComponent} from "./delete/delete.component";
import {UpdateComponent} from "./update/update.component";


const routes: Routes = [
  {path:"list",component:ListComponent},
  {path:"create",component:CreateComponent},
  {path:"detail/:index",component:DetailComponent},
  {path:"delete/:index",component:DeleteComponent},
  {path:"update/:index",component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
