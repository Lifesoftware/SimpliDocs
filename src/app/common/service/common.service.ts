import { Injectable, APP_INITIALIZER } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class commonService {

  constructor(private _http: HttpClient) {}
 getallfilesDetails()
 {
    return  this._http.get<any[]>("http://localhost:64942/api/Masters/SelectAllTblDocumentDetailsList?createdBy=35");
 }
 upload(fileToUpload: any) {
  return this._http
      .post("http://localhost:64942/api/Masters/UploadMultipleTypesFile?createdBy=" + 1 + "&FileTypeId=" + 1 + "&moduleId=" + 1, fileToUpload);
}

}
