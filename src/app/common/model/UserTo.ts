
export class CommaonUserTO{
    public UserLogin? : string
    public IdUser? : number
    public IsActive? : number
    public UserPasswd? : string
    public UserRoleList? : UserRoleTO[]
    public LoginTO? : LoginTO
    public PersonId? : number
    public AddressId? : number
    public OrganizationId? : number
    public OrganizationName? : string
    public UserDisplayName? : string
    public MenuStructureTOList? : MenuInformation[]
    public SysEleAccessDCT? : {}
    public RegisteredDeviceId? : number
    public IsSpecialCnf? : number
    public UserPersonTO? : PersonInfo = new PersonInfo();
    public UserExtTO? : UserExtTO 
    public ImeiNumber? : string
    public Result? : number
    public Tag? : object
    public ModuleTOList?:ModuleTO[];

    
}
export class PersonInfo
{
       
    public IdPerson?:number;
    public SalutationId?:number;
    public SalutationName?:string;
    public MobileNo?:string;     
    public AlternateMobNo?:string;   
    public PhoneNo?:string;   
    public DateOfBirth?:Date;   
    public FirstName?:string;   
    public MidName?:string;   
    public LastName?:string;   
    public PrimaryEmail?:string;   
    public AlternateEmail?:string;   
    public Comments?:string;   
    public SeqNo?:number;   
    public PhotoBase64?:string;
    public DateOfBirthStr?:string;
    public DobDay?:number;
    public DobMonth?:number;
    public DobYear?:number;
    public DisplayName?:string
}

export class UserRoleTO{
    public IdUserRole? : string
    public UserId? : number
    public RoleId? : number
    public IsActive? : number
    public CreatedBy? : number
    public CreatedOn? : Date
    public RoleDesc? : string
    public EnableAreaAlloc?:number
}
export class LoginTO{
    public IdLogin? : string
    public UserId? : number
    public LoginDate? : number
    public LogoutDate? : string
    public LoginIP? : string
    public Longitude? : string
    public Latitude? : string
    
}

//Sanjay [2017-06-06] For Regional Manager and Field Officer Different C&Fs area is allocated
export class UserAreaAllocationTO{
    public IdAreaAllocDtl? : Number
    public UserId? : number
    public CnfOrgId? : number
    public DistrictId? : Number
    public CreatedBy? : Number
    public IsActive? : Number
    public CreatedOn? : Date
    public CreatedOnStr? : String
    public Remark? : String
    public UserName? : String
    public DistrictName? : String
    public CnfOrgName? : String    
    
}

export class UserExtTO{
    public UserId? : number
    public PersonId? : number
    public OrganizationId? : number
    public AddressId? : Number
    public CreatedBy? : Number
    public Comments? : string
    public CreatedOn? : Date

}

export class  MenuInformation
{
    constructor(
       public IdMenu:number,
       public SysElementId:number,
       public MenuName:string,
       public MenuDesc:string,
       public ParentMenuId:number,
       public ModuleId:number,
       public SerNo:number,
       public CreatedOn:Date,
       public SubMenuList : MenuInformation[] ,
       public MenuAction:string,
       public MenuItemIcon:string, 
       public MenuShortCut:string, 
      // public ImgPath:string
       
        ){}

}


export class ModuleTO
{
    IdModule?:number
moduleName?:string
moduleDesc?:string
createdOn?:string
NavigateUrl?:string
IsActive?:number
LogoUrl?:string
AndroidUrl?:string
IsSubscribe?:number;

}

export class NotificationTO{
    public IdAlertUser? : number
    public AlertInstanceId? : number
    public UserId? : number
    public RoleId? : number
    public RaisedByUserName? : string
    public AlertComment? : string
    public RaisedOnStr? : string
    public RaisedOn? : Date
    public IsAcknowledged? : number
    public IsReseted? : number
    public NavigationUrl? :string
    
}

export class ResultMessage
{
  public  Exception?:Error
  public  Tag?:Object
  public  MessageType?:any
  public  Text?:string
  public  Result?:number
  public DisplayMessage?: string

}