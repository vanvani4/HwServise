import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ProductModule } from '../product/product.module';
import { ProductListComponent } from '../product/product-list.component'

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
  children: [ 
    {path: '', component: ProductListComponent},
    //{path: ':id', component: ProductListComponent},
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    ProductModule
  ],
  providers: [AuthGuard]
})
export class AdminRoutingModule { }
