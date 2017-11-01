import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from '../library/_guards/auth.guards';

import { AdminComponent } from './admin.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

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
          { path: 'profile', component: ProfileComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
