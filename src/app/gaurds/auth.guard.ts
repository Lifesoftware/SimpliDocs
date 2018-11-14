import { Component, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login/service/login.service';
import { ConfigService } from '../service/ConfigService';
//mport { ListService } from "../common/service/getDropdownList.service";
import con = require('../service/contants');
declare var $:any;
var self;
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, 
        private authServices: LoginService,
        private _configService:ConfigService
    ) {
        self = this;
    }
    standerDate = new Date();
    domain = ".vegainnovations.co.in"
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //TODO : 
        //  1. Here we have check just use login flag 
        //  2. but for more security we need to check Auth token validation
        //  3. along with user role.      
        $("#sidebar-wrapper").height($(window).height());
        //this.listService.getAlertForNotify();
         //@ Check isProductionEnabled or not Adde By Kiran 16/06/2018
        if (this._configService.get("isProductionEnabled") == true) {
            if (document.cookie) {
                this.authServices.isLogin();
                return true;
            }
            // not logged in so redirect to login page with the return url
            location.href = this._configService.get("MasterRedirectionUrl");
        } else {
            if (this.isLoggedin()) {
                this.authServices.isLogin();
                return true;
            } else {
                this.authServices.isNotLogin();
                this.router.navigate(['Login']);
                return false;
            }
        }
    }

    isLoggedin() {
        return true //((localStorage.getItem('currentUser')) ? true : false);
    }
}
