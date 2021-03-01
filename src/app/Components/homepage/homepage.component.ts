import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../Services/products.service';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { IProductAddToCart } from './../../interfaces';
import { AuthService } from '../../Services/auth.service';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
   providers: [NgbCarouselConfig] ,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products:any[];
proar:any[];
  electronicproduct:[];
  CartProducts: IProductAddToCart[] = [];
  NumberOfItemsInCumber = 0;
  isuser:Boolean;
  constructor(config: NgbCarouselConfig,
    private productsService:ProductsService,
    private shoppingCart:ShoppingCartService,private authService:AuthService) { 
  config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;}

  ngOnInit(): void {
    this.productsService.fetchAllProducts().
    subscribe(
      data => {
        this.products = data
        console.log(data.length)
          this.getcate(data);
      
      }
     
         
  ); 
 this.isuser=this.authService.getIsAuth();
    console.log(this.isuser);
    console.log(this.products.filter(o=>o.category='electronics'));
    

 }
  
 getcate(product:[]){
// this.productsService.getprocat('electronics').subscribe(pro=>{console.log(pro)});
 console.log('jfdfj');
 
  console.log(product);



    }

  
 showDetailsPage(product){
      this.productsService.setProductDetails(product);
          
    }

    // ChangeQty(pId, amt){
    //   this.shoppingCart.ChangeQuantity(pId, amt);
    // }

    // addToCartService(pId){
    //   this.shoppingCart.addToCart(pId);
    // }

  // this.productAddedTocart.find(p=>p.Id==p.Id).Quantity = p.Quantity+1;
  // {const bar: foo = { one: 5, two: "hello" };

  // addToCartService(pId, pName){
  //   let p = this.products.find(a => a.Id = pId);
  //      if(p){
  //        p.name = pName; 
  //      }
  //      this.shoppingCart.addToCart(p);
  // }

  totalItemsInCart(){
   return this.shoppingCart.getTotalItemsInCart();

  }

}

