import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { FieldErrorDisplayComponent } from './field-error-display.component';

@NgModule({
  declarations: [
    FieldErrorDisplayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    FieldErrorDisplayComponent
  ]
})
export class FieldErrorDisplayModule { }
