import { Component, Output, Input } from '@angular/core';
import { MenuInformation, CommaonUserTO } from '../model/UserTo';
import con = require("../../service/contants");
import { ConfigService } from "../../service/ConfigService";
@Component({
    selector: 'crm-menu',
    template: `
    <div id="wrapper" class="toggled-2">
            <!-- Sidebar -->
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav nav-pills nav-stacked" id="main-menu">
                    <li *ngFor="let myMenu of userMenuList" attr.id ="{{myMenu.MenuId}}">
                        <a [routerLink]="[myMenu.MenuShortCut]"><span class="fa-stack fa-lg pull-left">
                          <i class="{{myMenu.MenuItemIcon}}"></i></span> 
                          <span class="nav-text">{{myMenu.MenuName}}</span>
                            <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
                        </a>
                    </li>
                    <li  attr.id ="Reports">
                    <a [routerLink]="['Dashboard']"><span class="fa-stack fa-lg pull-left">
                      <i class="fa fa-hdd-o fa-stack-1x i-menu"></i></span> 
                      <span class="nav-text">My Drive</span>
                        <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
                    </a>
                </li>
                <li  attr.id ="Reports">
                    <a [routerLink]="['shareWithMe']"><span class="fa-stack fa-lg pull-left">
                      <i class="fa fa-share-alt-square fa-stack-1x i-menu"></i></span> 
                      <span class="nav-text">Share With Me</span>
                        <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
                    </a>
                </li>
                <li  attr.id ="Recent">
                <a [routerLink]="['Recent']"><span class="fa-stack fa-lg pull-left">
                  <i class="fa fa-clock-o fa-stack-1x i-menu"></i></span> 
                  <span class="nav-text">Recent</span>
                    <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
                </a>
            </li>
                <li  attr.id ="Starred">
                <a [routerLink]="['Starred']"><span class="fa-stack fa-lg pull-left">
                  <i class="fa fa-star fa-stack-1x i-menu"></i></span> 
                  <span class="nav-text">Starred</span>
                    <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
                </a>
            </li>
            <li  attr.id ="Trash">
                <a [routerLink]="['Trash']"><span class="fa-stack fa-lg pull-left">
                  <i class="fa fa-trash fa-stack-1x i-menu"></i></span> 
                  <span class="nav-text">Trash</span>
                    <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
                </a>
            </li>
                </ul>
            </div><!-- /#sidebar-wrapper -->
            <!-- Page Content -->
            <!--<div id="page-content-wrapper">
                <div class="container-fluid xyz">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Simple Sidebar With Bootstrap 3 by <a href="http://seegatesite.com/create-simple-cool-sidebar-menu-with-bootstrap-3/" >Seegatesite.com</a></h1>
                            <p>This sidebar is adopted from start bootstrap simple sidebar startboostrap.com, which I modified slightly to be more cool. For tutorials and how to create it , you can read from my site here <a href="http://seegatesite.com/create-simple-cool-sidebar-menu-with-bootstrap-3/">create cool simple sidebar menu with boostrap 3</a></p>
                        </div>
                    </div>
                </div>
            </div>-->
            <!-- /#page-content-wrapper   <li id="">
            <a href="https://simplydeliverdemo.vegainnovations.co.in/madhavsimplidelivergui/#/QuotaDeclaration"><span class="fa-stack fa-lg pull-left">
              <i class="fa fa-flask fa-stack-1x i-menu"></i></span> 
              <span class="nav-text">Rate Declaration</span>
                <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
            </a>
        </li>
        
        <li id="">
            <a href="https://simplydeliverdemo.vegainnovations.co.in/madhavsimplidelivergui/#/Booking"><span class="fa-stack fa-lg pull-left">
              <i class="fa fa-pencil fa-stack-1x i-menu"></i></span> 
              <span class="nav-text">Enquiry</span>
                <b class="arrow fa fa-angle-left" style="padding-top: 12px;float:right;"></b>
            </a>
        </li> -->
    
        </div>
    `,
    styleUrls: []
})

export class MenuComponent {
    public lables = {};
    UserTO: CommaonUserTO = {}
    constructor(  private _configService: ConfigService) { }
    userMenuList: MenuInformation[];
    ngOnInit() {
       // this.UserTO = this._listService.getUserTOFromLocalStorage();

        if (this._configService.get("isProductionEnabled") == false) {
            if (this.UserTO != null && this.UserTO != undefined) {
                let data: MenuInformation[] = this.UserTO.MenuStructureTOList;
                this.userMenuList = data.filter(w => w.ModuleId == 2);
            }
        }
        else {
            this.userMenuList = JSON.parse(localStorage.getItem("MenuStructureTOList"));
        }
        //this.lables = Lang_Keys;
    }

}