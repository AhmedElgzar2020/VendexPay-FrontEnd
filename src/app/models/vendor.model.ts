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
}
export interface Office {
  MarchantId: number;
  ZoneNo: string;
  StreetNo: string;
  BuildingNo: string;
  Phone: string;
  Fax: string;
  Email: string;
  WebSite: string;
  BuildingTypeid: number;
}
export interface Contact {
  Name: string;
  Title: string;
  Email: string;
  Mobile: string;
}
