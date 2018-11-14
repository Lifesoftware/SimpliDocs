import { AstTransformer } from "@angular/compiler";
//import { ListService } from "../service/getDropdownList.service";
export class Document {
    IdDocument?: number;
    ModuleId?: number;
    CreatedBy?: number;
    IsActive?: number;
    CreatedOn?: any;
    DocumentDesc?: string;
    Path?: string;
    FileData?: string;
    Extension?: string;
    isNeedToUpload?: boolean;
    source?: string;
    alt?: string;
    title?: string
    FileTypeId?: number;
    UserName?: string
}
export class DocumentsAttach {
    idVisitDocuments?: number
    visitId?: number
    idCategory?: number
    idDocument?: number
    path?: string
    isActive?: number
    createdBy?: number
    createdOn?: number
    updatedBy?: number
    updatedOn?: number
    visitNO?: any
    fileName?: any
    DocumentDesc?: any;
}

export enum FileTypesE {
    IMAGE = 1,
    PDF = 2,
    AUDIO = 3,
    VIDEO = 4
}
export enum RouteTypeE {
    ACTUAL = 1,
    SUGGESTED = 2
}