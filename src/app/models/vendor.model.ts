export interface Vendor {
  id: number;
  name: string;
  email: string;
  imgPath: string;
  marchant: Marchant;
}

export interface Marchant {
  vendorId: number;
  userName: string;
  name: string;
  idNo: string;
  companyName: string;
  address1: string;
  address2: string;
  zipCode: string;
  logo: string;
  cityId: number;
  companyTypeId: number;
  offices: Office[];
  contacts: Contact[];
  officeId?: Office;
}
export interface Office {
  marchantId: number;
  zoneNo: string;
  streetNo: string;
  buildingNo: string;
  phone: string;
  fax: string;
  email: string;
  webSite: string;
  buildingTypeid: number;
}
export interface Contact {
  name: string;
  title: string;
  email: string;
  mobile: string;
  vendorId: number;
}

export interface Manager {
  name: string;
  title: string;
  qId: string;
  mobile: string;
  vendorId: number;
}

export interface Document {
  VendorId: number;
}

export interface CR {
  DocumentId: number;
  CR_No: number;
  TaxId_No: number;
  QAR: number;
  StartDate: Date;
  ExpiryDate: Date;
  PrintDate: Date;
  LegalFirm: string;
  WebSite: string;
}

export interface Balayia {
  DocumentId: number;
  TradingNo: number;
  ExpiryDate: Date;
  PrintDate: Date;
  Type: string;
}

export interface ComputerCard {
  DocumentId: number;
  CardNo: number;
  ExpiryDate: Date;
  Sector: string;
}

export interface ComputerCardAuthorizer {
  DocumentId: number;
  Name: string;
  title: string;
  mobile: string;
  qId: string;
}

export interface Contract {
  ContractNo: string;
  ClientNO: string;
  StartDate: Date;
  ExpireDate: Date;
  RenewalDate?: Date;
  RenewalExpireDate?: Date;
  Email: string;
  WebSite: string;
}
