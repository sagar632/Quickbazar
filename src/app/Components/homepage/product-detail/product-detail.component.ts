import {AfterViewInit, Component, OnInit, Input,ViewChild} from '@angular/core';
import { ProductsService } from './../../../Services/products.service';
import { ShoppingCartService } from './../../../Services/shopping-cart.service';
import { AuthService } from './../../../Services/auth.service';
import { Router } from '@angular/router';
import {map} from "rxjs/operators";

import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Review} from 'C:/Users/User/Desktop/QuickBazzar-F-main/QuickBazzar-F-main/src/app/Components/shared/review';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 reviewform:FormGroup;
    review:Review;


  product;
    id: Number;
 
  thumbimages: any[] = [];

    @ViewChild('cform') reviewformDirective;
  @ViewChild('quantity') quantityInput;

  productQuantity:number =0;

  constructor(private productsService: ProductsService,
              private shoppingCart: ShoppingCartService,
              private authService: AuthService,
              private router: Router,
              private location:Location,private fb:FormBuilder
    ) {this.oncreate(); }

  ngOnInit(): void {
    this.product =this.productsService.getProductDetails();
    this.productQuantity = this.shoppingCart.getQuantity(this.product._id);
  }



   goback():void{
        this.location.back();
    }
    
    
    oncreate(){
        
         
        this.reviewform=this.fb.group(
        {
             rating:[5,Validators.required],
         
            review:['',Validators.required],
            author:['',[Validators.required,Validators.minLength(2)]]
            
        });
    }
    
    onsubmit(){
         var d=new Date;
      
       this.review=this.reviewform.value;
        this.review.date=d.toJSON();
        this.product.reviews.push(this.review);
        console.log(this.review);
        this.reviewform.reset({
        author:'',
            rating:5,
            review:''
            
        });
        this.reviewformDirective.resetForm({
            rating:5,
            author:'',
            review:''
        });
        
      
        
        
    }












  Incr(){
    this.productQuantity = this.productQuantity + 1;
  }

  Dcr(){
    this.productQuantity = this.productQuantity - 1;
  }

  addToCart(product){
    if(this.authService.getIsAuth()){
      this.shoppingCart.addToCart(product, this.productQuantity);
    }
    else{
       console.log("you are not authenticated");
        this.router.navigate(['/signup']);
    }
  }

}
