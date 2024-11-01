import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OutletRoutingModule } from './outlets-routing.module';
import { MealoutletsComponent } from './mealoutlets/mealoutlets.component';
import { OutletsdeatilsComponent } from './outletsdeatils/outletsdeatils.component';
import { OutletsmenuComponent } from './outletsmenu/outletsmenu.component';
import { FieldErrorDisplayModule } from '../field-error-display/field-error-display.module';
import { MenudetailsComponent } from './menudetails/menudetails.component';

import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { MealModule } from '../meals/meal.module';




@NgModule({
  declarations: [MealoutletsComponent, OutletsdeatilsComponent, OutletsmenuComponent, MenudetailsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    OutletRoutingModule,
    FieldErrorDisplayModule,
    SharedModule,
    LayoutModule,
    MealModule,


  ]
})
export class OutletModule { }
