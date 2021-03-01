import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
//import {LoginComponent} from '../login/login.component';
import {DiaglogComponent} from '../diaglog/diaglog.component';
import {RegisterComponent} from '../register/register.component';

import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   TotalItemsInCart:number;
isuser:Boolean;
  constructor( private shoppingCart:ShoppingCartService,public dialog:MatDialog,private authService:AuthService ){ 
  }

  ngOnInit(): void {
    this.TotalItemsInCart = this.shoppingCart.getTotalItemsInCart();
   this.isuser=this.authService.getIsAuth();
    console.log(this.isuser);
  }
 
}
