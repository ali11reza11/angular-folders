import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { authguard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NotAuthorizedComponent,
    ManageUsersComponent,
    ManagePagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
