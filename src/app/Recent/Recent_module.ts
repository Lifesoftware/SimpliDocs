import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecentComponent } from './Recent.component';
import { routeConfig } from '../app.routes';
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';  
import {HttpModule} from '@angular/http'
import {ContextMenuModule} from 'ngx-contextmenu'
import {commonService} from '../common/service/common.service'
import { from } from 'rxjs/observable/from';
const routeCnfig: Routes = [
    {
        path: '',
        component: RecentComponent,
    }
]

@NgModule({
    imports: [
        FormsModule,ContextMenuModule.forRoot(),
        ReactiveFormsModule,CommonModule,HttpModule,
        RouterModule.forChild(routeCnfig)

    ],
    declarations: [
        RecentComponent
    ],
    providers: [
        DatePipe,commonService
    ]
    //bootstrap: [DashBoardComponent]
})

export class RecentModule { }