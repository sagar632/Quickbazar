import {Routes} from '@angular/router';

import {HomepageComponent} from  '../Components/homepage/homepage.component';
import {AboutusComponent} from  '../Components/aboutus/aboutus.component';
import {ContactusComponent} from  '../Components/contactus/contactus.component';


import { SignUpComponent } from '../Components/auth/signup/signup.component';
import { LogInComponent } from '../Components/auth/login/login.component';
import { SellerDashboardComponent } from '../Components/seller/seller-dashboard/seller-dashboard.component';
import { AddProductComponent } from '../Components/Seller/add-product/add-product.component';
import { UpdateProductComponent } from '../Components/Seller/update-product/update-product.component';

import { CartComponent } from '../Components/cart/cart.component';



import { AuthGuard } from "../Guards/auth.guard";
import {SellerGuard} from "../Guards/seller.guard";
import { ProductDetailComponent } from '../Components/homepage/product-detail/product-detail.component';

export const routes: Routes = [
{path:'home' ,component:HomepageComponent},
  {path: 'signup', component: SignUpComponent},
 {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LogInComponent},
 {path:'product-details', component:ProductDetailComponent},
  {path:'myCart', component:CartComponent},
 
 
  {
    path: 'seller', 
    children: [
      {path:'', component: SellerDashboardComponent,
    canActivate:[AuthGuard, SellerGuard]
      },
     
      {path: 'addProduct', component: AddProductComponent,
  canActivate:[AuthGuard, SellerGuard] 
      },
      
      {path: 'updateProduct', component: UpdateProductComponent,
 canActivate:[AuthGuard, SellerGuard] 
      },
    ],
  },

];
