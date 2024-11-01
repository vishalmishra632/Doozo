import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealoutletsComponent } from './mealoutlets/mealoutlets.component';
import { OutletsdeatilsComponent } from './outletsdeatils/outletsdeatils.component';
import { OutletsmenuComponent } from './outletsmenu/outletsmenu.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';

const routes: Routes = [
  { path: 'mealoutlets', component: MealoutletsComponent },
  { path: 'outletdetails', component: OutletsdeatilsComponent },
  { path: 'outletmenu', component: OutletsmenuComponent },
  { path: 'menudetails', component: MenudetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutletRoutingModule { }
