import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from './../../../Services/shopping-cart.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  products = [];
  show:boolean;
  ProductList:boolean;
  showMyOrders:boolean
  myOrders = []

  constructor(
    private productsService:ProductsService,
    private cartService:ShoppingCartService,
    private router:Router,private http:HttpClient) {this.ProductList=false;this.showMyOrders=false; }

  ngOnInit(): void {
    this.productsService.fetchAllProductsBySellerId().
    subscribe(
      data => {
        this.products = data
        //  console.log(this.products)
      }
    )

    this.cartService.ordersForSeller()
       .subscribe(
          data =>{ 
            this.myOrders = data
            console.log(this.myOrders);
          }
       )
  }

 beforeUpdated(product){
   this.productsService.BeforeUpdated(product);
   this.router.navigate(['/seller/updateProduct']);
 }
 showorders(){
if(this.showMyOrders==false){
  this.showMyOrders=true;
  this.ProductList=false;
}
else{
  this.ProductList=false;
  this.showMyOrders=false;
}


 }

 showproducts(){
if(this.ProductList==false)
{
  this.showMyOrders=false;
  this.ProductList=true;
}
else{
  this.ProductList=false;
  this.showMyOrders=false;
}


 }



 deleteProduct(id){

this.http.get(" http://localhost:8000/api/products/bycategory?category=Fooding")



 }

}
