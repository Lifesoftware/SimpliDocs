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
import { DashboardTo, DealerDashboardTo, ReportModel } from "./model/Dashboard";
import { ConfigService } from '../service/ConfigService';
import { DatePipe } from '@angular/common';
import { ContextMenuComponent } from "ngx-contextmenu";
import { commonService } from '../common/service/common.service'
declare var jQuery: any;
declare var $: any;
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  listView: boolean = false
  GridView: boolean = true;
  documentTo: Document = {};
  documentList: Document[] = [];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  @ViewChild("fileInput") fileInput;

  constructor(
    private router: Router, private commonService: commonService
  ) {
    //this.UserTO = this._masterService.getUserTOFromLocalStorage();
    $("#sidebar-wrapper").height($(window).height());

  }

  showMessage(data, popupFlag) {
    $("#myModal").modal("show");
    this.showDivs(this.slideIndex);
  }

  ngOnInit() {
    debugger;
    this.commonService.getallfilesDetails().subscribe(w => {
      this.documentList = w;
    })


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
      var fileExtensionList = ['jpg', 'png', 'jpeg', 'gif'];
      if (fileExtensionList.indexOf(file) === -1) {
        returnflag = false;
      }
    }
    return returnflag;
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

}
