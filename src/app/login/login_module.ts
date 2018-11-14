import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { LoginService } from './service/login.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    imports: [
        HttpClientModule],
    declarations: [
        
    ],
    providers:[
        LoginService
    ]
})

export class LoginModule { }