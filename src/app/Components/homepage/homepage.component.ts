import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../Services/products.service';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { IProductAddToCart } from './../../interfaces';
import { AuthService } from '../../Services/auth.service';
import { HttpClient } from '@angular/common/http';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
   providers: [NgbCarouselConfig] ,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
jdata;toys;
fdata;
sports;
  products:any[];
proar:any[];
  electronicproduct;
  clothing;fooding;
  CartProducts: IProductAddToCart[] = [];
  NumberOfItemsInCumber = 0;
  isuser:Boolean;
 
  constructor(config: NgbCarouselConfig,
    private productsService:ProductsService,
    private shoppingCart:ShoppingCartService,private authService:AuthService,private http:HttpClient) { 
  config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;}

  ngOnInit(): void {
    this.productsService.fetchAllProducts().
    subscribe(
      data => {
        this.products = data
        
         console.log(data)
      
      }
     
         
  ); 
    
     this.http.get(" http://localhost:8000/api/products/bycategory?category=Electronics").
     subscribe(electronics=>{this.electronicproduct=electronics
       console.log(this.electronicproduct.products)
     
       });



 this.http.get(" http://localhost:8000/api/products/bycategory?category=Fooding").
     subscribe(fooding=>{this.fooding=fooding
       console.log(this.fooding.products)
     
       });



      this.http.get(" http://localhost:8000/api/products/bycategory?category=Sports").
     subscribe(sports=>{this.sports=sports
       console.log(this.sports.products)
     
       });


 this.http.get(" http://localhost:8000/api/products/bycategory?category=Toys").
     subscribe(toys=>{this.toys=toys
       console.log(this.toys.toys)
     
       });



      this.http.get(" http://localhost:8000/api/products/bycategory?category=Clothing").
     subscribe(clothing=>{this.clothing=clothing
       console.log(this.clothing.products)
     
       });

 this.isuser=this.authService.getIsAuth();
    console.log("user"+this.isuser);
    console.log(this.electronicproduct);
    

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

