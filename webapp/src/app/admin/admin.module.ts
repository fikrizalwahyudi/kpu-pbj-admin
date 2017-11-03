import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadModule } from "angular2-image-upload";
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainSideComponent } from './main-side/main-side.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';
import { ProfileComponent } from './profile/profile.component';
import { TokohComponent } from './master/tokoh/tokoh.component';
import { TokohFormComponent } from './master/tokoh/tokoh-form/tokoh-form.component';
import { EventComponent } from './master/event/event.component';
import { EventFormComponent } from './master/event/event-form/event-form.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    FormsModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [
    AdminComponent, 
    MainSideComponent, 
    MainHeaderComponent, 
    FooterComponent, 
    ControlSidebarComponent, 
    Dashboard1Component, 
    ProfileComponent, TokohComponent, TokohFormComponent, EventComponent, EventFormComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
