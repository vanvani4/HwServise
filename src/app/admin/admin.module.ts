import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service'; // подключаем в admin.module, так как он его использует, можно подключать в (главный) app.module

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, LoginComponent],
  providers: [AuthService]
})
export class AdminModule { }
