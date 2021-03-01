import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {routes} from './routes';
import { AuthGuard } from "../Guards/auth.guard";
import {SellerGuard} from "../Guards/seller.guard";
@NgModule({
  
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
exports:[ RouterModule ],
    
    declarations: [],
     providers:[AuthGuard, SellerGuard]
  
})
export class AppRoutingModule { }
