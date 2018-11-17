import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './gaurds/auth.guard';

export const routeConfig: Routes = [

    {
        path: 'Login', component: LoginComponent, data: {
             hideTopbar: true,
             hideSidebar: true
        }
    },
    {
        path : ''
        , loadChildren : './dashboard/dashboard_module#DashboardModule' , canActivate : [AuthGuard]
    },
    {
        path : 'Dashboard'
        , loadChildren : './dashboard/dashboard_module#DashboardModule' , canActivate : [AuthGuard]
    },
    {
        path : 'shareWithMe'
        , loadChildren : './dashboard/dashboard_module#DashboardModule' , canActivate : [AuthGuard]
    },
    {
        path : 'Starred'
        , loadChildren : './dashboard/dashboard_module#DashboardModule' , canActivate : [AuthGuard]
    },
    {
        path : 'Recent'
        , loadChildren : './Recent/Recent_module#RecentModule' , canActivate : [AuthGuard]
    },
    {
        path : 'Trash'
        , loadChildren : './Trash/Trash_module#TrashModule' , canActivate : [AuthGuard]
    },
    {
        path :'Notifications'
        , loadChildren : './notification/notification_module#NotifyModule', canActivate : [AuthGuard]
    }
   
];