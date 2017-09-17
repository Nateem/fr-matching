import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

import {PopoverModule} from "ngx-popover";

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app.routing';

import { Providers } from './app.providers';

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

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ShopingControlComponent } from './shoping-control/shoping-control.component';
import { ShopingControlDetailComponent } from './shoping-control-detail/shoping-control-detail.component';
import { CloudServiceComponent } from './cloud-service/cloud-service.component';


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
    ShopingControlDetailComponent,
    CloudServiceComponent,

  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    JasperoAlertsModule,
    BrowserAnimationsModule,
    PopoverModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzG6LZwfU5Fu-5e4Bt8xVJBuUGYkdTUnM'
    })
  ],
  providers: Providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
