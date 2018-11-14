'use strict';
import { HttpHeaders } from '@angular/common/http';

//HTTP Methods
export const POST: string = "POST";
export const GET: string = "GET";
export const PUT: string = "PUT";
export const DELETE: string = "DELETE";

//Header Contents
export const Accept: string = "Accept";
export const ContentType: string = "Content-Type";
export const Authorization: string = "Authorization";
export const ApplicationJson: string = "application/json";
export const Token: string = "token";

//API Keys
export const SLASH: string = "/";
export const LOGIN: string = "login";
export const ADD_BANK: string = "addbank";
export const USER: string = "User";
export const VISITS: string = "Visit";
export const REPORTS: string = "Report";
export const FEEDBACK: string = "Feedback";
export const QUESTIONS: string = "Questions";
export const ANSWERS: string = "Answers";
export const REVISIT: string = "Revisit";
export const Enquiry: string = "Enquiry"
export const id: string = "/{id}";
export const PERSON: string = "Person";
export const ckeckPersonAlreadyExist: string = "Person/CheckPersonInfromation";
export const DROPDOWN: string = "DropDown";
export const PROJECT: string = "Project";
export const HISTORY: string = "getVisitHistory";
export const LEADFORSITE: string = "LeadsOfVisit";
export const GIFTSLINKING: string = "GiftsLinking";
export const BANKS: string = "Banks";
// get lables consts
export const LABEL1: string = "Setting";
export const LABEL2: string = "getlabels";
// get Purpose list consts
export const VISITPURPOSE: string = "allVisitPurpose";
export const MASTER: string = "Master";
export const FormFiled: string = "/Setting/getFieldProperties/"
export const paymentTerms: string = "Master/PaymentTerms"
export const SET_DEFAULT_LANG: string = "SetDefaultLanguage?langId=";
export const SETTING: string = "Setting";
export const ADDRESS: string = "Address";
export const GETADDRESS: string = "getAddress";
export const ADDADDRESS: string = "AddAddress";
export const PENDINGVISIT: string = "pendingVisits";
export const DOCUMENTS: string = "AttacheDocumnents";
export const CompaireObjectData: string = "compaireHistory";
export const GetAllOtherDesignations : string = "GetAllOtherDesignations";
export const Dashboard : string = "Dashboard";
export const DealerDashboard : string = "GetDealerDashboard";
export const TeamVisitsDetails : string = "GetUserWiseDashboardInformation?loginUserId=";
export const RecentActivity : string = "GetRecentActivityOfUsers?loginUserId=";
export const ProjectStatusWiseReport : string = "GetProjectStatusWiseReport?loginUserId=";
//Params
export const params = "PageNumber=1&PageSize=10"
//Header

export const REMARK_ITEMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export const PERCENTAGE_ITEMS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FuZGVlcCIsIm5iZiI6IjE1MTc5OTYzMjYiLCJleHAiOiIxNTE4MDgyNzI2In0.ziMswa7spT8EoAPOFgUIHRcD2a6rhOJcMnVrGs78Wjk',
  })
};






