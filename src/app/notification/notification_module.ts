import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NotificationComponent} from './component/notification_components'
import {NotificationServices} from './services/notification_services'

const notifyRouting : Routes = [
    // {
    //     path : '',
    //     component : BlankComponent
    // },
    {
        path : '',
        component : NotificationComponent
    },

]

@NgModule({
    imports : [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(notifyRouting)
    ],
    declarations : [
        NotificationComponent
    ],
    providers :[
        NotificationServices
    ]
})

export class NotifyModule {}