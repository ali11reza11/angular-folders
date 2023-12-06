import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { authguard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { Deactivate } from './deactivate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent, canActivateChild: [
      authguard
    ], children: [
      { path: 'manageusers', component: ManageUsersComponent },
      { path: 'managepages', component: ManagePagesComponent }
    ]
  },
  {
    path: 'register', component: RegisterComponent, canDeactivate: [
      Deactivate
    ]
  },
  { path: 'notauthorized', component: NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
