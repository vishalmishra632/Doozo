import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MealRoutingModule } from './meal-routing.module';
import { AddmealreviewComponent } from './addmealreview/addmealreview.component';
import { MealaddonsComponent } from './mealaddons/mealaddons.component';
import { MealbagComponent } from './mealbag/mealbag.component';
import { MealplansComponent } from './mealplans/mealplans.component';
import { MyfavoritemealComponent } from './myfavoritemeal/myfavoritemeal.component';
import { FieldErrorDisplayModule } from '../field-error-display/field-error-display.module';
import { MealoffersComponent } from './mealoffers/mealoffers.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AddmealreviewComponent, MealaddonsComponent, MealbagComponent, MealplansComponent, MyfavoritemealComponent, MealoffersComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MealRoutingModule,
    FieldErrorDisplayModule,
    LayoutModule,
    SharedModule
  ]
})
export class MealModule { }
