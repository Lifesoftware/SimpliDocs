import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AsyncLocalStorage } from "angular-async-local-storage";
////import { UserTO } from "../user/model/userTO";
//import { UserLoggedInResponseData } from "../user/model/userTO";
import { LoginService } from "./service/login.service";
import { CommaonUserTO } from "../common/model/UserTo";
import { LoginTO } from "../common/model/UserTo";
//import { ListService } from '../common/service/getDropdownList.service'
import con = require("./../service/contants");
declare var cordova: any;
import { ConfigService } from "../service/ConfigService";
@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  loginGroup;
  isLoggedIn = false;
  public isLogFailed = false;
  public isLogDetails = false;
  public loading = false;
  errorMessage: string = "";
  usrErrorMsg: string = "";
  pswdErrorMsg: string = "";
  loginTO: LoginTO = {};
  public userTo: CommaonUserTO = {};
 // private userLoggedInDetails: UserLoggedInResponseData;
  constructor(private router: Router, private _configService: ConfigService, private _loginservice: LoginService) {
    //@ Check isProductionEnabled or not Adde By Kiran 16/06/2018
    if (this._configService.get("isProductionEnabled") == true) {
     // this.listService.checkCookiesCredentialsOnLogin();
      this.router.navigate(['Dashboard'])
    } else {
      let isNotificationUrl = localStorage.getItem("isNotificationUrl");
      if (isNotificationUrl != null && isNotificationUrl != undefined) {
        localStorage.removeItem("isNotificationUrl");
        this.router.navigate([isNotificationUrl])
      }
    }
    if (this.isLoggedin()) {
      if (this.isAndroid()) {
        window.location.href = "../index.html";
      } else {
        this.router.navigate(["/"]);
      }
    }
    this.loginGroup = new FormGroup({
      UserLogin: new FormControl(
        "",
        Validators.compose([
          Validators.required
          //   Validators.maxLength(3)
        ])
      ),
      UserPasswd: new FormControl(
        "",
        Validators.compose([
          Validators.required
          //   Validators.maxLength(3)
        ])
      )
    });
  }
  isAndroid() {
    try {
      if (this._configService.get("isProductionEnabled") == false) {
        return true;
      }
    } catch (error) {
      return false;
    }
  }
  ngOnInit() {

  }

  login() {
    this.loading = true;
  //  this.userLoggedInDetails = new UserLoggedInResponseData();
    this.isLoggedIn = true;
    if (
      this.userTo.UserLogin == undefined ||
      this.userTo.UserPasswd == undefined
    ) {
      this.isLogDetails = true;
      this.usrErrorMsg = "";
      this.pswdErrorMsg = "";
    } else {
      this.loginTO.LoginIP = "103.93.194.58";
      this.userTo.LoginTO = this.loginTO;
      this._loginservice.getLoginAuthenticationService(this.userTo).subscribe(
        data => {
          if (data != null && data.Result == 1) {
            let user: any = data.Tag;
            console.log(data.Tag)
            //localStorage.setItem('currentUser', this.listService.encryption(user));
            localStorage.setItem('LoginName', user.UserLogin);
            if (user) {
             // this.userLoggedInDetails.UserDisplayName = user.UserDisplayName;
            }
            this.router.navigate(["Dashboard"]);
          } else {
            this.loading = false;
            this.isLogFailed = true;
            this.usrErrorMsg = "";
            this.pswdErrorMsg = "";
            this.errorMessage =
              "Invalid Credentials, Please Verify Username and Password";
          }
        },
        error => {
          this.loading = false;
          this.isLogFailed = true;
          this.usrErrorMsg = "";
          this.pswdErrorMsg = "";
          this.errorMessage =
            "Invalid Credentials, Please Verify Username and Password";
        }
      );
    }
  }

  isLoggedin() {
    var userTo = localStorage.getItem('currentUser');
    if (userTo == undefined || userTo == null) {
      return false;
    }
    else {
      return true;
    }
  }
}
