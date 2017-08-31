import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './auth.guard';
import { ComponentsModule } from './components/components.module';

import {JasperoAlertsModule } from "@jaspero/ng2-alerts";

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { OrganizationAddComponent } from './organization-add/organization-add.component';

import { JsonActionService } from './json-action.service';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ShopingControlComponent } from './shoping-control/shoping-control.component';
import { ShopingControlService } from './shoping-control/shoping-control.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    OrganizationAddComponent,
    LoginComponent,
    HomeComponent,
    ShopingControlComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    JasperoAlertsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzG6LZwfU5Fu-5e4Bt8xVJBuUGYkdTUnM'
    })
  ],
  providers: [
    JsonActionService,
    AuthenticationService,
    AuthGuard,
    ShopingControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
