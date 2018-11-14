import constants = require('../service/contants');
import { SLASH } from '../service/contants';

export const gnGetUserDetails =  constants.USER; 
export const createBank =  constants.MASTER + constants.SLASH +constants.ADD_BANK; 
export const gnVisitsListApi = constants.VISITS;
export const gnEnquiryListApi = constants.Enquiry;
export const gnHistoryList = constants.VISITS + constants.SLASH + constants.HISTORY;
export const gnCreateVisitApi = constants.VISITS;
export const gnCreateEnquiryApi = constants.Enquiry;
export const getKeysApi =  constants.LABEL1 + constants.SLASH + constants.LABEL2;
export const getallMasterMenu = constants.MASTER;
export const getTeamVisitsDetails = constants.Dashboard + constants.SLASH + constants.TeamVisitsDetails;
export const getRecentActivityDetails = constants.Dashboard + constants.SLASH + constants.RecentActivity;
export const getProjectStatusWiseReport = constants.Dashboard + constants.SLASH + constants.ProjectStatusWiseReport;
export const getallProjectByType = constants.PROJECT; 
export const getallPerson = constants.PERSON; 
export const updateSingleVisit = constants.VISITS + constants.SLASH + constants.REVISIT;
export const updateSingleEnquiry =  constants.Enquiry;
export const deleteSingleVisit = constants.VISITS;
export const setDefaultLangApi = constants.SETTING + constants.SLASH + constants.SET_DEFAULT_LANG;
export const getFormField = constants.FormFiled; 
export const getPaymentTerms =constants.paymentTerms;
export const getAddProjAddress =  constants.ADDRESS + constants.SLASH + constants.ADDADDRESS;
export const getAddress =  constants.ADDRESS + constants.SLASH + constants.GETADDRESS;
export const getLeadForOtherSiteCreate = constants.VISITS + constants.SLASH + constants.LEADFORSITE;
export const getLeadForOtherSiteData = constants.VISITS + constants.SLASH + constants.LEADFORSITE + constants.SLASH
export const getPersonDetails = constants.PERSON + constants.SLASH;
export const getPersonByProject = constants.PROJECT + constants.SLASH;
export const getProjectDataOnFirm = constants.PROJECT
export const getPersonList = constants.PERSON + constants.SLASH + constants.DROPDOWN;
export const getAllRecommendedUsers = constants.USER + constants.SLASH + 'all';
export const getGiftsHistory = constants.VISITS + constants.SLASH + constants.GIFTSLINKING;
export const getBanks = constants.MASTER + constants.SLASH + constants.BANKS;
export const getPendingVisitData = constants.VISITS + constants.SLASH + constants.PENDINGVISIT
export const attacheDocuments = constants.MASTER + constants.SLASH + constants.DOCUMENTS
export const getCompaireObjectData = constants.VISITS + constants.SLASH + constants.CompaireObjectData
export const getFeedbackQuestions =constants.FEEDBACK + constants.SLASH
export const postFeedbackAnswers =  constants.FEEDBACK + constants.SLASH + constants.ANSWERS 
export const gnGetDashBoardDetails = constants.Dashboard+'/'+"GetDashboard";
export const gnGetDealerDashBoardDetails=constants.Dashboard+ constants.SLASH +constants.DealerDashboard;


//Vega Master Api
export const organisationMaster = 'Organization/GetOrganizationList?orgTypeId=';
export const organisationDropDownMaster = 'Organization/GetOrganizationDropDownList?orgTypeId=';
// export const organisationPersonType = baseUrl+'Organization/GetOrganizationDropDownList?orgTypeId='
export const organisationList = 'Organization/GetOrgAddressDetails?organizationId=';
// export const getCompetitorsMaster  = baseUrl+'Organization/GetOrganizationDropDownList?orgTypeId=3';
// export const getBrandsCompetitorsMaster  = baseUrl+'Competitor/GetCompetitorBrandNamesDropDownList?competitorOrgId=';
export const getBoughtFromMaster  = 'Organization/GetOrganizationDropDownList?orgTypeId=2';

export const getBoughtFromMasterId='Organization/GetDealerDropDownListForCRM?cnfId=';
// export const getBrandsMaster = getCompetitorsMaster;
export const getLatestQuotaAndRateInfo =  'QuotaAndRate/GetLatestQuotaAndRateInfo';
export const getReferredByMaster = getBoughtFromMaster;
export const getVisitAlongWith = 'User/GetUsersFromRoleForDropDown?roleId=';
export const getDealersMaster = getBoughtFromMasterId;
export const getDealerMeetingWith = 'Organization/GetOrgOwnerDetails?organizationId=';
// export const getPersonList =baseUrl+'Organization/GetOrgOwnerDetails?organizationId=';
export const getPersononOrg = "Organization/GetPersonsOnOrgType?OrgType="

export const getOwnerDerails = 'Organization/GetOrgOwnerDetails?organizationId=';
export const getMaterialUnits= 'Masters/GetUnitMeasuresForDropDown';
export const getUserRoles='Masters/GetRoleListForDropDown';
export const getOrgForPersonId='Masters/GetDropDownListOnPersonId?personId=';
export const getUserByType='MarketingVisit/GetVisitPersonDropDownListOnPersonType?personType=';
export const getOrgPersonByType='Organization/GetOrganizationPersonList?';
export const checkOrgDuplicate = 'Organization/CheckOrgNameOrPhoneNoAlready?';
export const GetOrganizationInfo = 'Organization/GetOrganizationInfo?orgId=';
export const GetOrgAddressDetails = 'Address/GetOrgAddressDetails?addrTypeId=1&orgId=';
export const getChildUserListOnUserId='OrganizationStructure/getChildUserListOnUserId?userId=';

//add in Masters
export const addPerson = constants.PERSON;
export const ckeckPersonAlreadyExist = constants.ckeckPersonAlreadyExist;
export const addProject = constants.PROJECT;
export const getCompetitorsMaster = "Organization/GetOrganizationDropDownList?orgTypeId=3";
export const getCustomerEnquiry = "Organization/GetOrganizationDropDownList?orgTypeId=1";
export const getBrandsCompetitorsMaster = "Competitor/GetCompetitorBrandNamesDropDownList?competitorOrgId="
export const getBrandsMaster = getCompetitorsMaster;
export const getStateMaster =  "Masters/GetStatesForDropDown?countryId=";
export const getDistrictMaster =  "Masters/GetDistrictForDropDown?stateId=";
export const getTalukaMaster = "Masters/GetTalukasForDropDown?districtId=";
export const getOrgPersons =  "Organization/GetOrganizationPersonList?personTypeId=0&organizationId="
export const getAllCompetitorWthBrands =  "Competitor/GetAllCompetitorWthBrands";
export const getAllProducts =  "Masters/GetAllItemBroadCategories";
export const uploadImages =  "Masters/UploadDocument";
export const getPesonDetailsFromUSerID = "User/GetUserDetails?userId="
export const getAllOrganizationTypes = "Masters/GetAllOrganizationTypes"

//Influencer Masters :
export const GetAllInfluencerTypesForDropDown = "Masters/GetAllInfluencerTypesForDropDown";
export const GetAllFirmTypesForDropDown = "Masters/GetAllFirmTypesForDropDown";
export const GetAllOtherDesignations = "Masters/GetAllOtherDesignations";

//Enquiry Masters :
export const GetProdClassesForDropDownList = "Material/GetProdClassesForDropDownList";
export const GetProductItemList ="Material/GetProductItemList";
export const createOrganization =  "Organization/PostNewOrganization";
export const PostUpdateOrganization =  "Organization/PostUpdateOrganization";
export const getAudioList =  "Masters/GetUploadedFileBasedOnFileType?FilteTypeId="
//google api
export const getMyAddress='';

export const gnShareVisitDetailsApi="Masters/SendShareDocumentToMail"
export const UploadMultipleTypesFile= "Masters/UploadMultipleTypesFile?CreatedBy="

export const gnGetAllItemBroadCategories="Masters/GetAllItemBroadCategories"; //Sudhir[22-May-2018]

export const gnGetAllUnitMeasures="Masters/GetAllUnitMeasurement";
export const getAllDimUnitMeasuresByCatId="Masters/SelectAllUnitMeasuresForDropDownByCatId?unitCatId=";

export const gnGetAddressFromLocation="GeoLocation/myLocationAddress?"; // e.g lat=18.519813199999998&logn=73.7674889
export const gnPostGeoLocationDetails="GeoLocation/PostLocationDetails"; // e.g lat=18.519813199999998&logn=73.7674889
export const gnPostSaveNewTaskDetails="Masters/SaveTaskModuleDetails";
export const gnPostModuleCommunicationDetails="Masters/SaveModuleCommunicationDetails";
export const gnPostExternalModuleNewIssue="Classification/PostExternalModuleNewIssue";
export const gnPostExternalOtherNewIssue= "Issue";
export const gnGetAllActiveAlertList = "Notify/GetAllActiveAlertList?userId=";
export const gnPostAlertAcknowledgement =  "Notify/PostAlertAcknowledgement";
export const gnPostResetAllAlerts =  "Notify/PostResetAllAlerts";
export const gnGetTaskModuleDetailsByEntityId="Masters/GetTaskModuleDetailsByEntityId?EntityId=";
export const gnGetTaskTypeOfCRM="Master/getBasicTasks?systemId=";
export const gnGetRaiseIssueAgainsVisit="Masters/GetModuleCommunicationDetailsById?srcModuleId=";
export const gnGetIssueFromResolve="Classification/GetModuleWiseClassification?moduleId=";
export const gnGetPersonOnPersonId="Masters/GetPersonOnPersonId?personId=";
export const gnGetSystemConfigValByName="Configuration/GetSystemConfigParamValByName?configParamName=";
export const getUserLastLocationListOnUserId='GeoLocation/getUserLastLocationListOnUserId?userIds=';
export const getNearByLocation='GeoLocation/getNearBycustomer?distance=';
export const GetTravelRouteByUserId='GeoLocation/GetPlanRoutes?userId=';
export const getNearDealerByLocation='GeoLocation/GetNearestDealerList?distance=';

export const gnGetRoleAndOrgMappingList='Masters/GetRoleOrgListForDropDown?visitTypeId=';
export const gnVisitsCountsListApi = constants.REPORTS+'/GetVisitCountsReport';

export const gnPostTasksWithoutSubscription="Masters/SaveTasksWithoutSubscription";
export const gnGetTasksWithousSubscList="Masters/GetTasksWithousSubscList?srcModuleId=";

export const gngetGetReportObject='Report/GetReportObject?reportId=';

export const gngetAllReportsList =  "Report/GetAllReportObject";
export const gngetDynamicDataonReportTo =  "Report/GetDynamicData";
export const gnGetAddressesForNewLoadingSlip = "LoadSlip/GetAddressesForNewLoadingSlip?addrSourceTypeId="; // Additional entityId, 

export const gnGetLoadingLayerList = "Masters/GetLoadingLayerList"; 

export const gnGetBookingMaterialExtList = "Booking/GetEmptySizeAndProductListForBooking";

export const gnOrderBooking =  "booking/PostNewBooking";
export const gnGetActiveUserDropDownList = "User/GetActiveUserDropDownList";

export const gnGetCdStructureList ="Masters/GetCDStructureForDropDown";
export enum FileTypesE
{
    IMAGE=1,
    PDF=2,
    AUDIO=3,
    VIDEO=4
}

export enum HtmlInputTypesE{
	Date=1,
    Text=2,
    DropDown=3,
    AutoComplete=4,
	Radio_Button=5
}
