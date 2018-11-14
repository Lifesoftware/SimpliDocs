import {
  Component,
  OnInit,
  Input,
  NgModule,
  AfterViewChecked,
  ChangeDetectorRef,
  OnDestroy,
  HostListener
} from "@angular/core";
import { LoginService, ILogin } from "./login/service/login.service";
//import { ListService, ILoader } from "./common/service/getDropdownList.service";
// import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router, ActivatedRoute } from "@angular/router";
//import { UserTO } from "./user/model/userTO";
//import { SiteLang } froym "../app/multi-lang/service/getLangData.service";
//import english = require('../app/multi-lang/models/english');
//import { Lang_Keys } from "../app/multi-lang/models/multilangs";
import { URLSearchParams } from "@angular/http";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import con = require("./service/contants");
import { CommaonUserTO, ModuleTO } from "./common/model/UserTo";
//import { LocationService } from "./common/service/location.service";

import { ConfigService } from './service/ConfigService';
declare var cordova: any;
declare var jQuery:any;
@Component({
  selector: "main-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {
  //AfterViewChecked
  title = "app";
  private auth = "";
  private authData = {};
  isLoggedIn: Boolean;
  //loader: ILoader;
  userTO: CommaonUserTO;
  UserTO: CommaonUserTO = {}
  private datas;
  private lables = {};
  baseUrl:any ='';
  login: ILogin;
  constructor(
    private _loginservice: LoginService,
    //private comman: ListService,
    private router: Router,
    private route: ActivatedRoute,
   // private lang: SiteLang,
    private spinnerService: Ng4LoadingSpinnerService,
    private _configService: ConfigService,
  ) {
    //this.loader = this.comman.loader;
    if (this._configService.get("isProductionEnabled") == true) {
     // this.comman.checkCookiesCredentialsOnLogin();
      // this.router.navigate(['Dashboard'])
    }

    //this.UserTO = this.comman.getUserTOFromLocalStorage();
    this.login = this._loginservice.Ilogin;
    if (this.UserTO == undefined || this.UserTO == null) {
      this._loginservice.isNotLogin();
    }
    else {
      this._loginservice.isLogin();
    }
  }

  assignModuleList: ModuleTO[] = []
  masterRedirectionUrl: any = '';
  isProduction:any = this._configService.get("isProductionEnabled");
  ngOnInit() {
    //this.getLabels();
    this.masterRedirectionUrl = this._configService.get("MasterRedirectionUrl");
    this.baseUrl = this._configService.get("MASTER_API_ENDPOINTS");
    this.isProduction = this._configService.get("isProductionEnabled");
    // this._locationService.subscribeCurrentPosition();
    if (this.UserTO != undefined || this.UserTO != null) {
      this.assignModuleList = this.UserTO.ModuleTOList;
    }
  }
  ngOnDestroy() { }

  getLoginStatus($usr, $pswd) {
    console.log($usr);
  }
  callnotifications() {
    //this.comman.getAlertForNotify();
  }
  ngAfterViewChecked() {
    // this.spinnerService.hide();
  }

  afterSubmitFollowps(data)
  {
      console.log(data)
  }

  afterSubmitComplaints(data)
  {
      console.log(data)
  }
  navigationToModule(alertTo: any) {
    debugger
    console.log(this.UserTO.ModuleTOList)
    if (alertTo) {
      if (alertTo.ModuleId == 2) {//Your Project ModuleId 
        this.router.navigate(['/' + alertTo.NavigationUrl]);
      } else {
        let modelobj = this.UserTO.ModuleTOList.filter(w => w.IdModule == alertTo.ModuleId);
        if (modelobj.length > 0) {
          if (this.isAndroid() == true) {
            localStorage.setItem("isNotificationUrl",alertTo.NavigationUrl)
            window.location.href = '../' + modelobj[0].AndroidUrl;
          } else {
            window.location.href = modelobj[0].NavigateUrl + "#/" + alertTo.NavigationUrl;
          }
        }
      }
    }
  }
  logoutUser() {
    let confirmBox = confirm("Are you sure you want to log out?")
    if (confirmBox) {
      localStorage.removeItem('currentUser');
      //@ Check isProductionEnabled or not Adde By Kiran 16/06/2018
      if (this._configService.get("isProductionEnabled") == true) {
        this.deleteAllCookies();
        window.location.href = this._configService.get("MasterRedirectionUrl");
      } else {

        if (this.isAndroid()) {
          // this._loginservice.isNotLogin();
          window.location.href = "../index.html";
        } else {
          this._loginservice.isNotLogin();
          this.router.navigate(["/"]);
        }
      }
    }
    return false;
  }
  //@ Check android or not Adde By Kiran 16/06/2018
  isAndroid() {
    try {
      if (this._configService.get("isProductionEnabled") == false) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  //@ Delete All Cookies Adde By Kiran 16/06/2018
  deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase = decodeURIComponent(encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=').trim();
        var p = location.pathname.split('/');
        document.cookie = cookieBase.trim() + '/';
        while (p.length > 0) {
          document.cookie = decodeURIComponent(cookieBase.trim()) + p.join('/');
          p.pop();
        };
        d.shift();
      }
    }
  }


  //mobile menu click event
  public menuToggleClick(e) {
    var wrapperHtml = document.getElementById("wrapper").className;

    if (wrapperHtml === "toggled") {
      document.getElementById("wrapper").className = "toggled-2";
    } else {
      document.getElementById("wrapper").className = "toggled";
    }
  }
  standerDate = new Date();
  domain = ".vegainnovations.co.in"
  CheckModuleSubscribeOrNot(val: ModuleTO) {
    debugger;
    document.cookie = "setExternal=0;expires=" + this.standerDate
      + ";domain=" + this.domain + ";path=/";
    localStorage.removeItem("setExternalCoponent");
    var x = document.getElementById("snackbar");
    if (val.IsSubscribe == 0) {
      x.innerHTML = "Please Allow Subscription";
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    else if (val.IsSubscribe == 1 && val.NavigateUrl == null) {
      x.innerHTML = "Please Allow Permission";
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
  }

}
