import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';





@NgModule({
  declarations: [Error404Component, Error500Component, MaintenanceComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [Error404Component, Error500Component, MaintenanceComponent]
})
export class ErrorModule { }
