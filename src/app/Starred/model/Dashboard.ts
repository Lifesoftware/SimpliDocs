 export class DashboardTo{
 
    public siteVisit?:Visit

    public dealerVisit?:Visit

    public influencerVisit?:Visit
}

export class DealerDashboardTo{ 
    public idorganization?:number
    public idtblvisitdetails?:number
    public firmname?:string
    public possibilityofconversion?:number
}


export class Visit{
    public  todayCount:number
    public  actualCount:number
}
export class ReportModel
{
    totalCount?:number
    siteVisits?:number
    dealerVisits?:number
    influencerVisits?:number
    visits?:number
    visitTypeId?:number
    visitTypeName?:string
    actualCount?:number
    idUser?:number
    userLogin?:any
    userPasswd?:any
    userDisplayName?:string
    token?:any
    isActive?:number
    createdBy?:number
    createdOn?:Date
    updatedBy?:number
    projectStatusName?:string
    statusId?:number
}