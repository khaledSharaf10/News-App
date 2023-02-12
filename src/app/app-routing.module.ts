import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechComponent } from './tech/tech.component';
import { SportComponent } from './sport/sport.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

const routes: Routes = [
  {path: '' , component : TopheadingComponent},
  {path: 'tech' , component : TechComponent},
  {path: 'sports' , component : SportComponent},
  {path: 'general' , component : GeneralComponent},
  {path: 'entertainment' , component : EntertainmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
