
Master and CRM urls

"http://localhost:7070";  //Internal DEV
"http://104.211.67.108/crmapi"; //Development
"http://localhost:50309"; //For testing
"http://13.127.101.52:7070";  //Internal DEV
"https://simplydeliverdemo.vegainnovations.co.in/crmunittestingapi"; //UAT
"https://simplydeliverdemo.vegainnovations.co.in/crmstagingapi"; //UAT
"https://polaadcrmapi.azurewebsites.net"; //Production
"https://simplydeliverdemo.vegainnovations.co.in/crmdemoapi"; //BA or Marketting
"https://simplydeliverdemo.vegainnovations.co.in/crmstagingapi"; //UAT
 
'https://simplydeliverdemo.vegainnovations.co.in/crmbstagingapi/api/'; //UAT
"https://simplydeliverdemo.vegainnovations.co.in/simplidelivercrmunittesting/api/";
"http://localhost:64942/api/"; //Local
"http://104.211.67.108/simplidelivercrm/api/"; //Development
"http://localhost:64942/api/"; //Development
'https://simplydeliverdemo.vegainnovations.co.in/crmbstagingapi/api/'; //UAT
"https://schedulepolaad.vegainnovations.co.in"; //Production SimpliWorks for schedule
"https://simplydeliverdemo.vegainnovations.co.in/crmbdemoapi/api/"; //BA OR Marketting.

//Madhav Related urls

"MASTER_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/madhavsimplideliverapi/api/",
"CRM_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/madhavsimplicrmapi/api/V1/",
"MasterRedirectionUrl":"https://simplydeliverdemo.vegainnovations.co.in/madhavsimpliworks/",


//Demo Links
"MASTER_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/crmbstagingapi/api/";,
  "CRM_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/crmstagingapi/api/V1/",
  "SimpliScheduleURL":"https://simplydeliverdemo.vegainnovations.co.in/simplyplan",
  "MasterRedirectionUrl":"https://simplydeliverdemo.vegainnovations.co.in/Master",
  
--- SimpliScheduleURL : task creation ui url like http://104.211.67.108/SimpliSchedule
--- PDF_OPTION  :  1=SAVE pdf only ,2= Share pdf only, 3=Save and Share pdf both
--- FeedBack_Show_Level :  3 //Feedback dialog show level condition
--- gift_API_ID : "50" for Production and UAT and "139" for Development
--- MasterRedirectionUrl : SSO
--- isProductionEnabled : true  // true for SSO and false for normal flow

//Shivangii

 "MASTER_API_ENDPOINTS": "https://odlmshivangiapi.azurewebsites.net/api/",
  "CRM_API_ENDPOINTS": "https://shivangisimplicrmapi.azurewebsites.net/api/V1/",
  "SimpliScheduleURL":"https://scheduleshivangi.vegainnovations.co.in",
  "MasterRedirectionUrl":"https://simpliworksshivangi.vegainnovations.co.in",


//Madhave SimpliOrder

  "SimpliScheduleURL":"https://simplydeliverdemo.vegainnovations.co.in/madhavsimplischedulegui/",
  "MASTER_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/madhavsimplideliverapi/api/",
  "CRM_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/madhavsimplicrmapi/api/V1/",
  "MasterRedirectionUrl":"https://simplydeliverdemo.vegainnovations.co.in/madhavsimpliworks/",

//demo 

 "MASTER_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/madhavsimplideliverapi/api/",
  "CRM_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/madhavsimplicrmapi/api/V1/",
  "Schedule_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/MadhavCalendarApi/api/",
  "Resolve_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/MadhavSimpliResolveAPI/api/",
  "SimpliScheduleURL":"https://simplydeliverdemo.vegainnovations.co.in/demosimplischedulegui",
  "MasterRedirectionUrl":"https://simplydeliverdemo.vegainnovations.co.in/demosimpliworks",
  
  //Live Production

  "debugging": true,
  "Schedule_API_ENDPOINTS": "https://polaadsimplischeduleapi.azurewebsites.net/api/",
  "Resolve_API_ENDPOINTS": "https://polaadsimpliresolveapi.azurewebsites.net/api/",
  "MASTER_API_ENDPOINTS": "https://stapiservice.azurewebsites.net/api/",
  "CRM_API_ENDPOINTS": "https://polaadcrmapi.azurewebsites.net/api/V1/",
  "SimpliScheduleURL":"https://schedulepolaad.vegainnovations.co.in/",
  "MasterRedirectionUrl":"https://simpliworkspolaad.vegainnovations.co.in",
  "isProductionEnabled":true,
  "PDF_OPTION":2,
  "FeedBack_Show_Level":3,
  "gift_API_ID":"50",
  "personDefaultEmailsList":["abc@gmail.com"],
  "PossibilityofconversionFactor":50


  //Marketing Demo
  "MASTER_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/marketingsimplideliverapi/api/",
  "CRM_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/marketingsimplicrmapi/api/V1/",
  "Schedule_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/marketingsimplischeduleapi/api/",
  "Resolve_API_ENDPOINTS": "https://simplydeliverdemo.vegainnovations.co.in/marketingsimpliresolveapi/api/",
  "SimpliScheduleURL":"https://simplydeliverdemo.vegainnovations.co.in/marketingsimplischedule",
  "MasterRedirectionUrl":"https://simplydeliverdemo.vegainnovations.co.in/simpliworksmarketing",


  //Live Marketing
  "Schedule_API_ENDPOINTS": "https://marketingsimplischeduleapi.azurewebsites.net/api/",
  "Resolve_API_ENDPOINTS": "https://marketingsimpliresolveapi.azurewebsites.net/api/",
  "MASTER_API_ENDPOINTS": "https://marketingsimplideliverapi.azurewebsites.net/api/",
  "CRM_API_ENDPOINTS": "https://marketingsimplicrmapi.azurewebsites.net/api/V1/",
  "SimpliScheduleURL":"https://marketingsimplischedule.vegainnovations.co.in",
  "MasterRedirectionUrl":"https://simpliworksmarketing.vegainnovations.co.in",