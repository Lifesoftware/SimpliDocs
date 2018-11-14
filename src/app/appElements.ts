import {Component, Injectable} from '@angular/core';
//import {UserTO} from './user/model/userTO';

export enum pgDashboard {
    // Bhgyalaxmi 
    SITE_VISITE = 146,
    DEALER_VISITE = 147,
    INFLUNCER_VISITE = 148
    
    //Madhav
    // SITE_VISITE = 164,
    // DEALER_VISITE = 165,
    // INFLUNCER_VISITE = 166
}
export enum pgVisit
{
     // Bhgyalaxmi 
   SITE_VISITE = 149,
    DEALER_VISITE = 150,
    INFLUNCER_VISITE = 151,
    Add_SITE_VISITE = 152,
    Edit_SITE_VISITE = 153,
    View_SITE_VISITE = 154,
    Delete_SITE_VISITE = 155,
    Revisit_SITE_VISITE = 156,
    Add_DEALER_VISITE = 157,
    Edit_DEALER_VISITE = 158,
    View_DEALER_VISITE = 159,
    Delete_DEALER_VISITE = 160,
    Add_INFLUNCER_VISITE = 161,
    Edit_INFLUNCER_VISITE = 162,
    View_INFLUNCER_VISITE = 163,
    Delete_INFLUNCER_VISITE = 164,
    Revisit_INFLUNCER_VISITE = 165,
    LOCATION = 167,
    EDIT_MASTERDATA=173

    // SITE_VISITE = 167,
    // DEALER_VISITE = 168,
    // INFLUNCER_VISITE = 169,
    // Add_SITE_VISITE = 170,
    // Edit_SITE_VISITE = 171,
    // View_SITE_VISITE = 172,
    // Delete_SITE_VISITE = 173,
    // Revisit_SITE_VISITE = 174,
    // Add_DEALER_VISITE = 175,
    // Edit_DEALER_VISITE = 176,
    // View_DEALER_VISITE = 177,
    // Delete_DEALER_VISITE = 178,
    // Add_INFLUNCER_VISITE = 179,
    // Edit_INFLUNCER_VISITE = 180,
    // View_INFLUNCER_VISITE = 181,
    // Delete_INFLUNCER_VISITE = 182,
    // Revisit_INFLUNCER_VISITE = 183,
    // LOCATION = 184,
    // EDIT_MASTERDATA=185
}

export enum DefaultConfigurationSettingE {
    DEFAULT_MATE_COMP_ORGID = <any>"DEFAULT_MATE_COMP_ORGID",
}

export enum SelectTypeE {
    USER=1,
    STATE = 2,
    DISTRICT = 3,

}

export var SelectType = [
    { typeId: SelectTypeE.USER, typeName: 'USER' }
    , { typeId: SelectTypeE.STATE, typeName: 'STATE' }
    ,{ typeId: SelectTypeE.DISTRICT, typeName: 'DISTRICT' }
    
];
export enum TimeViewE {
    DAY = 1,
    WEEK = 2,
    MONTH = 3,
    YEAR = 4
}
export var TimeView = [
    { timeId: TimeViewE.DAY, timeView: 'DAY' }
    , { timeId: TimeViewE.WEEK, timeView: 'WEEK' }
    , { timeId: TimeViewE.MONTH , timeView: 'MONTH' }
    , { timeId: TimeViewE.YEAR, timeView: 'YEAR' }
]

export enum AddressTxnTypeE
{
    BILLING_ADDRESS=1,
    CONSIGNEE_ADDRESS=2
}

export enum AddressSourceTypeE {
    FROM_BOOKINGS = 1,
    FROM_DEALER = 2,
    FROM_CNF = 3,
    NEW_ADDRESS = 4
}
export enum TransStatusE {
    New = 1
    , Approved = 2
    , ApprovedByDirectors = 3
    , RejectedByDirectors = 8
    , ApprovedByMarketing = 9
    , RejectedByMarketing = 10
    , AcceptedByCAndF = 11
    , RejectedByCAndF = 12
    , Delete = 13
    , LOADING_NEW = 4
    , LOADING_NOT_CONFIRM = 5
    , LOADING_WAITING = 6
    , LOADING_CONFIRM = 7
    , LOADING_REPORTED_FOR_LOADING = 14
    , LOADING_GATE_IN = 15
    , LOADING_COMPLETED = 16
    , DELIVERED = 17
    , LOADING_CANCEL = 18
    , LOADING_POSTPONED = 19
    , LOADING_VEHICLE_CLERANCE_TO_SEND_IN = 20
    , UNLOADING_NEW = 21
    , UNLOADING_COMPLETED = 22
    , UNLOADING_CANCEL = 23
    , Pending_For_Director_Approval = 24
    , Hold = 25                                     //Priyanka [30-07-2018] : Added for adding new status in booking
}

export  enum EnquiryTypeE{
    REGULAR=1,
    OTHER=2
}

export enum loadingSequenceNumber {
    BOTTOM = 1,
    MIDDLE1 = 2,
    MIDDLE2 = 3,
    MIDDLE3 = 4,
    TOP = 5,
}

export enum ProductCatE {
    TMT = 1,
    Plain = 2
}

export enum ProductSpecsIdE {
    STRAIGHT = 1,
    BEND = 2,
    RKSHORT = 3,
    RKLONG = 4,
    TUKADA = 5,
    COIL = 6,
}

