import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './product/product.service';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guard/admin-guard.service';
import { LoginComponent } from './login/login.component';
import { GuardService } from './guard/guard.service';



const appRoutes: Routes = [
  {path: 'administration', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'about/:id', component: AboutComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminGuard, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
