import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  ChangeDetectorRef,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import appElementsEnum = require("../appElements");
import { CommaonUserTO } from "../common/model/UserTo";
import { Document, DocumentsAttach } from "../common/model/Document";
import { FileTypesE } from "../service/api_calls";
import { DashboardTo, DealerDashboardTo, ReportModel, fileExtensions } from "./model/Dashboard";
import { ConfigService } from '../service/ConfigService';
import { DatePipe } from '@angular/common';
import { ContextMenuComponent } from "ngx-contextmenu";
import { commonService } from '../common/service/common.service'
declare var jQuery: any;
declare var $: any;
var self = this;
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  listView: boolean = false
  GridView: boolean = true;
  documentTo: Document = {};
  documentList: Document[] = [];
  shareDescription: string;
  multiplePurpose: any[];
  userList: any[] = [];
  fileExtensionsCodes = fileExtensions
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  @ViewChild("fileInput") fileInput;

  constructor(
    private router: Router, private commonService: commonService
  ) {
    //this.UserTO = this._masterService.getUserTOFromLocalStorage();
    $("#sidebar-wrapper").height($(window).height());

  }

  ShowPreview(data) {
    $("#Preview").modal("show");
    let index = this.documentList.indexOf(data, 1);
    if (index == -1) {
      this.slideIndex = 0;
    } else {
      this.slideIndex = index + 1;
    }
    this.showDivs(this.slideIndex);
  }
  ShareDocumentToUser(data) {
    $("#ShareDocument").modal("show");
    this.getActiveUserList();
  }
  viewDetails(data) {
    $("#viewDetails").modal("show");
  }

  
  AlldocumentList: any[] = [];
  ngOnInit() {
    debugger;
    console.log(this.router.url);
    switch (this.router.url) {
      case '/Dashboard':
        this.commonService.getallfilesDetails().subscribe(w => {
          this.AlldocumentList = w;
          this.Load();
        })
        break;
      case '/shareWithMe':
        this.commonService.getallShareWithMeDocument().subscribe(w => {
          this.AlldocumentList = w;
          this.Load();
        })
        break;
      case '/Starred':
        this.commonService.getallMyStarrrdDocument().subscribe(w => {
          this.AlldocumentList = w;
          this.Load();
        })
        break;
      default:
        break;
    }
    var self = this;
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        self.Load();
      }
    });
  }
  public Load() {
    if (this.AlldocumentList.length > 0) {
      for (let index = 0; index < 10; index++) {
        if (this.AlldocumentList.length != 0) {
          this.documentList.push(this.AlldocumentList.shift());
        }
      }
    }
  }

  slideIndex = 1;
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      (<any>x[i]).style.display = "none";
    }
    (<any>x[this.slideIndex - 1]).style.display = "block";
  }
  uploadImage() {
    $('#fileInput').trigger('click');
  }
  addFile(): void {
    debugger
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files) {
      let data = this.validateFileExtension(fi.files);
      let size = this.checkFileSize(fi.files);
      if (data == true && size == true) {
        let fileToUploadData = fi.files;
        let input = new FormData();
        input.append("file", fileToUploadData);
        for (var i = 0; i < fileToUploadData.length; i++) {
          input.append("file", fileToUploadData[i]);
        }
        this.commonService
          .upload(input)
          .subscribe(res => {
            if (res !== null && res['Result'].length > 0) {
              console.log(res['Result'])
            }
          });
      } else {
        alert("plase check")
      }

    }
  }
  validateFileExtension(filedata) {
    let returnflag = true;
    for (let index = 0; index < filedata.length; index++) {
      var file = filedata[index].name.slice((filedata[index].name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
      var fileExtensionList = ['jpg', 'png', 'jpeg', 'gif', 'svg', 'docx', 'doc', 'pdf', 'xml', 'bmp', 'ppt', 'xls', 'm4v', 'csv', 'avi', 'mpg', 'mp4', 'webm', 'mp3', 'mpeg', 'txt', 'zip'];
      if (fileExtensionList.indexOf(file) === -1) {
        returnflag = false;
      }
    }
    return returnflag;
  }
  getActiveUserList() {
    this.commonService.getUserList().subscribe(
      data => {
        debugger;
        this.userList = [];
        if (data != null && data.length > 0) {
          data.forEach(element => {
            let userObj = { value: element.Value, text: element.Text };
            this.userList.push(userObj);
          });
        }
      }
    )
  }
  getUserNameusingFilter(userId) {
    let data = this.userList.filter(w => w.value == userId);
    if (data) {
      return data[0].text;
    } else {
      return 'No Name';
    }
  }
  shareDocumentTomultipleUser() {
    console.log(this.multiplePurpose);
  }
  checkFileSize(filedata) {
    let returnflag = true;
    for (let index = 0; index < filedata.length; index++) {
      if (filedata[index].size < 15360) {
        returnflag = false;
      }
    }
    return returnflag;
  }
  viewData(viewFlag) {
    if (viewFlag == 1) {
      this.GridView = false;
      this.listView = true;
    } else {
      this.GridView = true;
      this.listView = false;
    }
  }
  HtmlViewSortByExtension(name) {
    let extension = name.slice((name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
    let returnextension = null;
    switch (extension) {
      case 'jpg': case 'png': case 'jpeg': case 'gif': case 'svg':
        returnextension = fileExtensions.IMAGE
        break;
      case 'docx': case 'doc':
        returnextension = fileExtensions.DOC
        break;
      case 'pdf': case 'ppt':
        returnextension = fileExtensions.PDF
        break;
      case 'xml': case 'txt':
        returnextension = fileExtensions.TEXT
        break;
      case 'xls': case 'csv':
        returnextension = fileExtensions.EXEL
        break;
      case 'm4v': case 'avi': case 'mpg': case 'mp4':
        returnextension = fileExtensions.VIDEO
        break;
      case 'mp3': case 'mpeg': case 'ogg': case 'wav': case 'webm':
        returnextension = fileExtensions.AUDIO
        break;
      case 'zip':
        returnextension = fileExtensions.ZIP
        break;
      default:
        returnextension = fileExtensions.OTHER
        break;
    }
    return returnextension
  }

}
