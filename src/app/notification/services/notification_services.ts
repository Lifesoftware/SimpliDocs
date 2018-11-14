import{Injectable} from '@angular/core';
import {Http,Headers,Response,RequestOptions}from '@angular/http';
import{Observable}from 'rxjs/Rx';
//import { UserTO } from '../../user/model/userTO';
import { CommaonUserTO, UserRoleTO ,NotificationTO,ResultMessage} from "../../common/model/UserTo";


@Injectable()
export class NotificationServices{
    constructor (private http: Http) {}

    //  getAllActiveNotification(UserTo : CommaonUserTO):Observable<NotificationTO[]>{
    //       return this.http.get(myGlobalVal.gnGetAllActiveAlertList + UserTo.IdUser+"&roleId="+UserTo.UserRoleList[0].RoleId)
    //              // ...and calling .json() on the response to return data
    //              .map((res:Response)=>res.json())
    //              //...errors if any
    //              .catch((error:any)=>Observable.throw(error.json().error|| 'Server error'));
    // }

    //  postAlertAcknowledgement(notificationTo : NotificationTO
    //     , loginId : number): Observable<ResultMessage>{
    //      var params ={
    //         alertUsersTO​ : notificationTo,
    //         loginUserId : loginId
    //     };
    //     let bodyString = JSON.stringify(params);
    //      let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers : headers});

    //      return this.http.post(myGlobalVal.gnPostAlertAcknowledgement, bodyString, options)
    //              // ...and calling .json() on the response to return data
    //              .map((res:Response)=>res.json())

    //              //...errors if any
    //              .catch((error:any)=>Observable.throw( error.json().error|| 'Server error'));                 
    // }

    //   postAllAlertAcknowledgement( userTo : CommaonUserTO): Observable<ResultMessage>{
    //      var params ={
    //         loginUserId : userTo.IdUser,
    //         roleId : userTo.UserRoleList[0].RoleId
    //     };
    //     let bodyString = JSON.stringify(params);
    //      let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers : headers});

    //      return this.http.post(myGlobalVal.gnPostResetAllAlerts, bodyString, options)
    //              // ...and calling .json() on the response to return data
    //              .map((res:Response)=>res.json())

    //              //...errors if any
    //              .catch((error:any)=>Observable.throw( error.json().error|| 'Server error'));                 
    // }
}