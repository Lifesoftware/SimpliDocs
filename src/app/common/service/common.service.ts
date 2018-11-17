import { Injectable, APP_INITIALIZER } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MasterDropdownListTO } from "../../dashboard/model/Dashboard";


@Injectable()
export class commonService {

  constructor(private _http: HttpClient) { }
  getallfilesDetails() {
    return this._http.get<any[]>("http://localhost:64942/api/Masters/SelectAllTblDocumentDetailsList?createdBy=37");
  }
  getallShareWithMeDocument() {
    return this._http.get<any[]>("http://localhost:64942/api/Masters/getallShareWithMeDocument?createdBy=37");
  }
  getallMyStarrrdDocument() {
    return this._http.get<any[]>("http://localhost:64942/api/Masters/getallMyStarrrdDocument?createdBy=37");
  }
  getUserList():Observable<MasterDropdownListTO[]>
    {
      return this._http.get<MasterDropdownListTO[]>("http://localhost:64942/api/User/GetActiveUserDropDownList");
    }

  upload(fileToUpload: any) {
    return this._http
      .post("http://localhost:64942/api/Masters/UploadMultipleTypesFile?createdBy=" + 37 + "&FileTypeId=" + 1 + "&moduleId=" + 1, fileToUpload);
  }

}
