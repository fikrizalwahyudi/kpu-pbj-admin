import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from '../library/_guards/auth.guards';

import { AdminComponent } from './admin.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TokohComponent } from './master/tokoh/tokoh.component';
import { TokohFormComponent } from './master/tokoh/tokoh-form/tokoh-form.component';
import { EventComponent } from './master/event/event.component';
import { EventFormComponent } from './master/event/event-form/event-form.component';

// canActivate:[AuthGuard]
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: '', component: Dashboard1Component },
          { path: 'dashboard', component: Dashboard1Component },
          { path: 'personal', component: ProfileComponent },
          { path: 'profile', component: TokohComponent },
          { path: 'profile-form', component: TokohFormComponent },
          { path: 'profile-edit/:id', component: TokohFormComponent },
          { path: 'event', component: EventComponent },
          { path: 'event-form', component: EventFormComponent },
          { path: 'event-edit/:id', component: EventFormComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
