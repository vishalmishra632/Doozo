import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddmealreviewComponent } from './addmealreview/addmealreview.component';
import { MealaddonsComponent } from './mealaddons/mealaddons.component';
import { MealbagComponent } from './mealbag/mealbag.component';
import { MealoffersComponent } from './mealoffers/mealoffers.component';
import { MealplansComponent } from './mealplans/mealplans.component';
import { MyfavoritemealComponent } from './myfavoritemeal/myfavoritemeal.component';

const routes: Routes = [
  { path: 'addreview', component: AddmealreviewComponent },
  { path: 'addons', component: MealaddonsComponent },
  { path: 'mealbag', component: MealbagComponent },
  { path: 'mealplans', component: MealplansComponent },
  { path: 'favoritemeal', component: MyfavoritemealComponent },
  { path: 'offers', component: MealoffersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealRoutingModule { }
