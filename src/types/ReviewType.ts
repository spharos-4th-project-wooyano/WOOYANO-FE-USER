export interface ReviewType{
  reservationNum : string,
  serviceId : number,
  content : string,
  reuse : boolean,
  imageUrlList : any,
  [key : string]: string | number | boolean | string[];
}

export interface ReviewListType{
  createdAt:string,
  reservationNum:string,
  reuse:boolean,
  reviewId:number,
  serviceId:number
}
