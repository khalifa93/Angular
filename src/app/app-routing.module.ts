import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainFormComponent } from './main-form/main-form.component';
import { MonthlyUpdateComponent } from './monthly-update/monthly-update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'newproject', component: MainFormComponent }
   ,{path: 'monthlyupdate', component: MonthlyUpdateComponent}
   ,{path: 'home', component: HomeComponent}
   ,{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
  
                         

@NgModule({
  //imports: [ CommonModule ], declarations: []
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
