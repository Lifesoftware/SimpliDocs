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
import {commonService} from '../common/service/common.service'
declare var jQuery: any;
declare var $: any;
@Component({
  selector: "app-Starred",
  templateUrl: "./Starred.component.html",
})
export class StarredComponent implements OnInit {
  listView: boolean = false
  GridView: boolean = true;
  documentTo:Document = {};
  documentList:Document []= [];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  constructor(
    private router: Router,private commonService:commonService
  ) {
    //this.UserTO = this._masterService.getUserTOFromLocalStorage();
    $("#sidebar-wrapper").height($(window).height());

  }

  showMessage(a) {
    alert(a)
  }

  ngOnInit() {
    debugger;
    this.commonService.getallfilesDetails().subscribe(w=>{
      this.documentList = w;
    })


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
