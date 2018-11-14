import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarredComponent } from './Starred.component';
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
        component: StarredComponent,
    }
]

@NgModule({
    imports: [
        FormsModule,ContextMenuModule.forRoot(),
        ReactiveFormsModule,CommonModule,HttpModule,
        RouterModule.forChild(routeCnfig)

    ],
    declarations: [
        StarredComponent
    ],
    providers: [
        DatePipe,commonService
    ]
    //bootstrap: [DashBoardComponent]
})

export class StarredModule { }