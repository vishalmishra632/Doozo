import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { MealcreditComponent } from './mealcredit/mealcredit.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MycouponsComponent } from './mycoupons/mycoupons.component';
import { MymealplanComponent } from './mymealplan/mymealplan.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MypaymentdetailsComponent } from './mypaymentdetails/mypaymentdetails.component'
import { MyreturnsComponent } from './myreturns/myreturns.component'
import { MyreviewsComponent } from './myreviews/myreviews.component'
import { RefferEarnMealsComponent } from './reffer-earn-meals/reffer-earn-meals.component'
import { TrackmymealComponent } from './trackmymeal/trackmymeal.component'
import { UserprofileComponent } from './userprofile/userprofile.component'
import { FieldErrorDisplayModule } from '../field-error-display/field-error-display.module';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

import { SharedModule } from '../shared/shared.module';

import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    MealcreditComponent, MyaddressComponent, MycouponsComponent,
    MymealplanComponent, MyorderComponent, MypaymentdetailsComponent, MyorderComponent, MyreturnsComponent,
    MyreviewsComponent, RefferEarnMealsComponent, TrackmymealComponent, UserprofileComponent, OrderhistoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule,
    FieldErrorDisplayModule,
    LayoutModule,
    SharedModule


  ]
})
export class UserModule { }
