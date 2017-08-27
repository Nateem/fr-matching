import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { OrganizationAddComponent } from './organization-add/organization-add.component';

const routes_menu = [
  { 
    path: 'dashboard',
    data:{
      title: 'Dashboard', icon: 'dashboard', class: '',menu_hide:false
    },     
    component: DashboardComponent 
  },
  { 
    path: 'user-profile',  
    data:{
      title: 'User Profile', icon:'person', class: '',menu_hide:false
    },   
    component: UserProfileComponent 
  },
  { 
    path: 'table-list',    
    data:{
      title: 'Table List',  icon:'content_paste', class: '',menu_hide:false
    },    
    component: TableListComponent 
  },
  { 
    path: 'typography', 
    data:{
      title: 'Typography',  icon:'library_books', class: '',menu_hide:false
    },       
    component: TypographyComponent 
  },
  { 
    path: 'icons',  
    data:{
      title: 'Icons',  icon:'bubble_chart', class: '',menu_hide:false
    },           
    component: IconsComponent 
  },
  { 
    path: 'maps',      
    data:{
      title: 'Maps',  icon:'location_on', class: '',menu_hide:false
    },        
    component: MapsComponent 
  },
  { 
    path: 'notifications',  
    data:{
      title: 'Notifications',  icon:'notifications', class: '',menu_hide:false
    },   
    component: NotificationsComponent 
  },  
  { 
    path: 'upgrade',    
    data:{
      title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro',menu_hide:false
    },       
    component: UpgradeComponent 
  }
  ,
  { 
    path: 'organization-add',    
    data:{
      title: 'OrganizationAdd',  icon:'contacts', class: '',menu_hide:false
    },       
    component: OrganizationAddComponent 
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
