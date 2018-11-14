import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
//import { SiteLang } from '../app/multi-lang/service/getLangData.service';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routeConfig } from './app.routes';
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MenuComponent } from './common/component/menu.component';
import { LoginService } from './login/service/login.service';
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { AuthGuard } from './gaurds/auth.guard';
import {HttpModule} from "@angular/http";
//import {UserComponent} from './user/user.component'
import constants = require('../app/service/contants');
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//import { ListService } from './common/service/getDropdownList.service';
import { ConfigModule, ConfigService } from './service/ConfigService';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SampleModule,NotificationServices,taskAddService,adddMeetingService,addIssueService,SampleService as g,occupancyAddService,msgService} from 'vegaccheadermenu';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
   // UserComponent
  ],
  imports: [
    Ng4LoadingSpinnerModule.forRoot(),
    ReactiveFormsModule,SampleModule,
    BrowserModule,MultiselectDropdownModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig, {useHash: true}),
    AsyncLocalStorageModule,
    HttpClientModule    
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
    LoginService,NotificationServices,taskAddService,adddMeetingService,addIssueService,g,occupancyAddService,
     msgService,   
   // SiteLang,
    AuthGuard,
    ConfigService,
    ConfigModule.init()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  
}