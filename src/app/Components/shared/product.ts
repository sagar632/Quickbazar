import {Review} from './review';
export class Product{
	id:string;
	name:string;
	image:string;
	category:string;
	discountavail:boolean;
	discountpercent:number;
	price:number;
	description:string;
	reviews:Review[];
	availquantity:number;
	shopkeeper:string;
	averageratings:number;
}