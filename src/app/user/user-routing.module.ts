import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

const routes: Routes = [
  { path: 'credits', component: MealcreditComponent },
  { path: 'address', component: MyaddressComponent },
  { path: 'coupons', component: MycouponsComponent },

  { path: 'plan', component: MymealplanComponent },
  { path: 'order', component: MyorderComponent },

  { path: 'paymentdetails', component: MypaymentdetailsComponent },
  { path: 'returns', component: MyreturnsComponent },
  { path: 'reviews', component: MyreviewsComponent },


  { path: 'reffer-earn', component: RefferEarnMealsComponent },
  { path: 'track-meal', component: TrackmymealComponent },
  { path: 'profile', component: UserprofileComponent },
  { path: 'order-history', component: OrderhistoryComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
