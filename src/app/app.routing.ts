import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { OrganizationAddComponent } from './organization-add/organization-add.component';
import { AuthGuard } from './auth.guard';
const routes_menu = [
  { 
    path: 'dashboard',
    data:{
      title: 'Dashboard', icon: 'dashboard', class: '',menu_hide:true
    },     
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
    
  },
  { 
    path: 'user-profile',  
    data:{
      title: 'User Profile', icon:'person', class: '',menu_hide:true
    },   
    component: UserProfileComponent, 
    canActivate: [AuthGuard]  
  },
  { 
    path: 'table-list',    
    data:{
      title: 'Table List',  icon:'content_paste', class: '',menu_hide:true
    },    
    component: TableListComponent, 
    canActivate: [AuthGuard]  
  },
  { 
    path: 'typography', 
    data:{
      title: 'Typography',  icon:'library_books', class: '',menu_hide:true
    },       
    component: TypographyComponent , 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'icons',  
    data:{
      title: 'Icons',  icon:'bubble_chart', class: '',menu_hide:true
    },           
    component: IconsComponent , 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'maps',      
    data:{
      title: 'Maps',  icon:'location_on', class: '',menu_hide:true
    },        
    component: MapsComponent , 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'notifications',  
    data:{
      title: 'Notifications',  icon:'notifications', class: '',menu_hide:true
    },   
    component: NotificationsComponent, 
    canActivate: [AuthGuard]  
  }/*,  
  { 
    path: 'upgrade',    
    data:{
      title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro',menu_hide:false
    },       
    component: UpgradeComponent , 
    canActivate: [AuthGuard] 
  }*/
  ,
  { 
    path: 'organization-add',    
    data:{
      title: 'OrganizationAdd',  icon:'contacts', class: '',menu_hide:false
    },       
    component: OrganizationAddComponent
    /*, 
    canActivate: [AuthGuard]  */
  },
  { 
    path: 'login',    
    data:{
      title: 'Login',  icon:'contacts', class: '',menu_hide:true
    },       
    component: LoginComponent 
  },
  
  { 
    path: '',          
    data:{
      class: '', menu_hide:true      
    },
    redirectTo: 'dashboard', 
    pathMatch: 'full' 
  }
];
const routes: Routes = routes_menu;

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
export const Routes_menu = routes_menu;
