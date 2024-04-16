import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './fruit/home/home.component';

const routes: Routes = [

  {path:'fruit/home',component:HomeComponent},
  {path:'fruit',redirectTo:'fruit/home',pathMatch:'full'},
  {path:'',redirectTo:'fruit/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
