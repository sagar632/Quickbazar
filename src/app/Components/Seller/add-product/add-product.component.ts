import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';
import { FormBuilder } from '@angular/forms';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductsService,
     private form: FormBuilder,
     private http: HttpClient) { }

  private baseUrl = "http://localhost:8000/api";

  name;
  description;
  price;
  quantity;
  category;
  discountpercent;
  image;

  ngOnInit(): void {

  }

  selectImage(event){
  if(event.target.files.length>0)
   {
    const file = event.target.files[0];
    this.image = file;
   }
  }

  onSubmit(){
    const formdata = new FormData();
    formdata.append('name',this.name);
    formdata.append('description',this.description);
    formdata.append('price',this.price);
    formdata.append('quantity',this.quantity);
    formdata.append('category',this.category);
    formdata.append('discountpercent',this.discountpercent);
    formdata.append('file',this.image);

  
  // addProduct(productDetails){
  //   console.log(productDetails);
  //  this.productService.createProductBySeller(productDetails);
  // }
  console.log(formdata.get('price'))
  // this.productService.createProductBySeller(formdata);
  this.http.post<any>(this.baseUrl + "/seller/products", formdata)
  .subscribe(res => console.log("product is created"));
  }
}







/*import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(productDetails){
    console.log("adding product");
   this.productService.createProductBySeller(productDetails);
  }

}*/
