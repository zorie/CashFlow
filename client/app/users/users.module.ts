/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRouterModule } from './users.router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NgUploaderModule } from 'ngx-uploader';

/* Components */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgottenComponent } from './forgotten/forgotten.component';

/* Services */
import { UserService } from './services/user.service';
import { UserFactoryService } from './services/user.factory.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRouterModule,
    ReactiveFormsModule,
    DashboardModule,
    NgUploaderModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ForgottenComponent,
    ProfileComponent
  ],
  providers: [
    UserService,
    UserFactoryService
  ]
})
export class UsersModule { }
