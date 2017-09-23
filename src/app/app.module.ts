import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { AdminComponent } from './admin/admin.component';
//import { AdminGuard } from './guard/admin-guard.service';
//import { LoginComponent } from './login/login.component';
//import { GuardService } from './guard/guard.service';
import { ProductModule } from './product/product.module';
//import { AdminModule } from './admin/admin.module'



const appRoutes: Routes = [
  //{path: 'administration', component: AdminComponent, canActivate: [AdminGuard]},
  //{path: 'login', component: LoginComponent},
  //{path: 'administration/:id', component: AdminComponent, canActivate: [AdminGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    //AdminComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    //AdminModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [/*AdminGuard*/, /*GuardService*/],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
