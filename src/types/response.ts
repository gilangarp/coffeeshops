import { IDetailProduct } from "./product";
import { IProfileBody } from "./profile";
import { IPromoBody } from "./promo";
import { IUserBody } from "./user";

interface IPaginationMeta {
  totalData?: number;
  totalPage?: number;
  page: number;
  prevLink: string | null;
  nextLink: string | null;
}

export interface IBasicResponse {
  msg: string;
  data: unknown;
  err?: string;
  meta?: IPaginationMeta;
}

export interface IAuthResponse extends IBasicResponse {
  data: { token: string ,uuid: string , id: number }[];
}

export interface IUserResponse extends IBasicResponse {
  data: IProfileBody[];
}

export interface IPromoResponse extends IBasicResponse {
  data: IPromoBody[];
}

export interface IRegisterResponse extends IBasicResponse {
  data: IUserBody[];
}

export interface IProductDetailResponse extends IBasicResponse {
  data: IDetailProduct;
}