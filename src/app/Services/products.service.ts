import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import {Product} from '../shared/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private baseUrl = "http://localhost:8000/api";

  private productBeforeUpdated;

  private productDetails;

  constructor(private http: HttpClient) { }

  fetchAllProducts():Observable<any>{
    return this.http.get<any>(this.baseUrl + "/products");
  }




 // getprocat(categories:string):Observable<Product>{
 // return this.http.get<any>(this.baseUrl + "/products").map((pros)=>pros.category===categories);
//}






  

getproduct(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/proucts/' + id);
  }

  getelectronics(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + "/products").pipe(map(products => products[10]));
  }
  getFeaturedpro(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + '/products?featured=true').pipe(map(products => products[0]));
  }

  getproIds(): Observable<number[] | any> {
    return this.fetchAllProducts().pipe(map(products => products.map(product => product._id)));
  }

  




  createProductBySeller(product){
    return this.http.post<any>(this.baseUrl + "/seller/products", product)
               .subscribe(res => console.log("product is created"));
  }

  fetchAllProductsBySellerId():Observable<any>{
    return this.http.get<any>(this.baseUrl + "/seller/products");
  }

   


  BeforeUpdated(product){
    this.productBeforeUpdated = product;
    console.log("before updated" + product._id);
  }

  getProductBeforeUpdated(){
    return this.productBeforeUpdated;
  }

  setProductDetails(product){
   this.productDetails = product;
  }

  getProductDetails(){
    return this.productDetails;
  }


  updateProduct(product){
    // console.log(product._id);
    product._id = this.productBeforeUpdated._id;
    console.log("updating from front");
    return this.http.put<any>(this.baseUrl + "/seller/products", product)
            .subscribe(data => console.log("updated"));
  }
  
}
