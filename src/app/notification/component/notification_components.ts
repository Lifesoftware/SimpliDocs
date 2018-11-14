import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, Pipe, Injectable, PipeTransform, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CommaonUserTO, UserRoleTO, NotificationTO, ResultMessage } from "../../common/model/UserTo";
///import { UserTO } from '../../user/model/userTO';
import { NotificationServices } from '../services/notification_services';
import { Router, ActivatedRoute } from '@angular/router';
//import { ListService, ILoader } from "../../common/service/getDropdownList.service";
import { ConfigService } from '../../service/ConfigService';


@Component({
    //changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'notification',
    // template:'<h1>Hello</h1>'
    templateUrl: '../notification.html',

})

export class NotificationComponent implements OnInit {
    //@ViewChild(ErrorMessage) errorMsg: ErrorMessage;
    //userTO: UserTO = new UserTO();
    userTO: CommaonUserTO = {}
    resultMessage: ResultMessage = new ResultMessage;

    constructor(private notificationService: NotificationServices
        , private router: Router
        , route: ActivatedRoute,private _configService: ConfigService,
    ) {
       // this.userTO = this.comman.getUserTOFromLocalStorage();
        route.params.subscribe(val => {
           // this.comman.getAlertForNotify();

            this.getNotificationListByUser();
        });
    }
    notificationList: NotificationTO[] = [];
    ngOnInit() {
        //this.comman.getAlertForNotify();

        this.getNotificationListByUser();
        //setInterval(() => { this.getNotificationListByUser(); }, 5000);
    }

    getNotificationListByUser() {
        //this.ss.showLoader();
        this.notificationList = []
        // this.comman.getAllActiveNotification(this.userTO).subscribe(
        //     notificationRes => {

        //         this.notificationList = notificationRes;
        //         //  if(notificationRes != null && notificationRes.length!=0){
        //         //      this.notificationList = notificationRes;
        //         //  }
        //         //this.ss.hideLoader()
        //     },
        //     err => {
        //         console.log('Err : ' + err);
        //         //this.ss.hideLoader()

        //     }
        // )
    }

    markAsReadToNotification(alertMessageTo: NotificationTO, isReset: boolean = false) {
debugger
        if (alertMessageTo.IsAcknowledged != 0 && !isReset) {
            return;
        }
        if (isReset) {
            alertMessageTo.IsReseted = 1;
        }
        // this.comman.postAlertAcknowledgement(alertMessageTo, this.userTO.IdUser).subscribe(
        //     vRes => {
        //         this.resultMessage = vRes;
        //         debugger
        //         if (this.resultMessage.MessageType == 1 && this.resultMessage.Result == 1) {

        //             this.comman.getAlertForNotify();
        //             this.getNotificationListByUser();
        //         }
        //     },
        //     err => {
        //         console.log("Error Msg : " + err);
        //     }
        // )
        this.navigationToModule(alertMessageTo);

    }

    getValidationColor(isAcknowelded: number) {
        return isAcknowelded == 0 ? 'bold' : 'normal'

    }
    resetAllNotification() {
        //this.ss.showLoader();
        // this.comman.postAllAlertAcknowledgement(this.userTO).subscribe(
        //     vRes => {
        //         this.resultMessage = vRes;
        //         if (this.resultMessage.MessageType == 1 && this.resultMessage.Result == 1) {
        //             this.comman.getAlertForNotify();
        //             //this.getNotificationListByUser();
        //             this.notificationList = [];
        //         }
        //         //this.ss.hideLoader();
        //     },
        //     err => {
        //         //this.ss.hideLoader();
        //         console.log("Error Msg : " + err);
        //     }

        // )
    }
    navigationToModule(alertTo: any) {
        debugger
        console.log(this.userTO.ModuleTOList)
        if (alertTo) {
          if (alertTo.ModuleId == 2) {//Your Project ModuleId 
            this.router.navigate(['/' + alertTo.NavigationUrl]);
          } else {
            let modelobj = this.userTO.ModuleTOList.filter(w => w.IdModule == alertTo.ModuleId);
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

    redirectFun(alertMessageTo: NotificationTO) {
        if (alertMessageTo.NavigationUrl != null || alertMessageTo.NavigationUrl != "") {
            //  if(alertMessageTo.NavigationUrl == 'MyCalendar'){
            //     let res = alertMessageTo.AlertComment.split("#");
            //     let navigationExtras: any = { queryParams: {"idTask": res[res.length - 1],"RaisedOn":alertMessageTo.RaisedOn} }; this.router.navigate(['/' + alertMessageTo.NavigationUrl], navigationExtras); 
            //  }else{
            this.router.navigate(['/' + alertMessageTo.NavigationUrl]);
            //  }
        }

       


    }
}