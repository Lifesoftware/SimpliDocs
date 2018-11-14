import { Injectable } from "@angular/core";
import { AsyncLocalStorage } from "angular-async-local-storage";
import {
  HttpModule,
  Http,
  Headers,
  Response,
  RequestOptions
} from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, retry } from "rxjs/operators";
import { Md5 } from "ts-md5/dist/md5";
import { HttpHeaders } from "@angular/common/http";
//import { UserTO } from "../../user/model/userTO";
import { CommaonUserTO } from "../../common/model/UserTo";
import apiCall = require("../../service/api_calls");
import { HttpClient } from "@angular/common/http";
import constants = require("../../service/contants");
import { ConfigService } from "../../service/ConfigService";

//Sudhir[18-May-2018] Added for New Login Process.
export interface ILogin {
  isLogin: boolean;
  isLoginNotLogin: boolean;
  loginDisplayName?: string;
}

@Injectable()
export class LoginService {
  router: any;
  isLoggedIn: Boolean;
  masterBaseUrl: string;
  crmBaseUrl: string;
  constructor(
    protected localStorage: AsyncLocalStorage,
    private _configService: ConfigService,
    private http: HttpClient
  ) {
    this.masterBaseUrl = this._configService.getMasterApi();
    this.crmBaseUrl = this._configService.getCRMApi();
  }

  getLoginAuthenticationService(
    userTo: CommaonUserTO
  ): Observable<CommaonUserTO> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    return this.http.post(
      this.masterBaseUrl + "User/PostLogin",
      userTo,
      httpOptions
    );
  }
  Ilogin: ILogin = {
    isLogin: false,
    isLoginNotLogin: false,
    loginDisplayName: ""
  };
  isLogin() {
    this.Ilogin.isLogin = true;
    this.Ilogin.isLoginNotLogin = false;
  }
  isNotLogin() {
    this.Ilogin.isLoginNotLogin = true;
    this.Ilogin.isLogin = false;
  }
}
