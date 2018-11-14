import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TrashComponent } from './Trash.component';
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
        component: TrashComponent,
    }
]

@NgModule({
    imports: [
        FormsModule,ContextMenuModule.forRoot(),
        ReactiveFormsModule,CommonModule,HttpModule,
        RouterModule.forChild(routeCnfig)

    ],
    declarations: [
        TrashComponent
    ],
    providers: [
        DatePipe,commonService
    ]
    //bootstrap: [DashBoardComponent]
})

export class TrashModule { }