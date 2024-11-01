import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraRoutingModule } from './extra-routing.module';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';

import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [FaqComponent, FeedbackComponent, PrivacyPolicyComponent, TermsOfServicesComponent, ContactusComponent],
  imports: [
    CommonModule,
    ExtraRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class ExtraModule { }
