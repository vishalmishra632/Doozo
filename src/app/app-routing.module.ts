import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  // Dashboard :- it includes dahsboard , banner, toprated
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  // Login/Register :- it includes Login, Register, forgot Password, Confirm Meail,
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  // Meal :- it includes mealreview, addons, mealbag, myfavorite
  { path: 'meal', loadChildren: () => import('./meals/meal.module').then(m => m.MealModule) },

  // Outlet :- it includes outlets, outlets details, outlets menu
  { path: 'outlet', loadChildren: () => import('./outlets/outlets.module').then(m => m.OutletModule) },

  // Extra :- it includes faq, team-services feedback, priacy-policy
  { path: 'extra', loadChildren: () => import('./extra/extra.module').then(m => m.ExtraModule) },


  // Outlet :- it includes mealcredit, address, coupons, favorite,mealplan,order,paymentdetails,returns,review,reffer-earn,trackmeal,userprofile
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
