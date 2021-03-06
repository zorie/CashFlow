/* Modules */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgottenComponent } from './forgotten/forgotten.component';
import { LogoutComponent } from './logout/logout.component';
import {ProfileComponent} from "./profile/profile.component";
import { BillsComponent } from '../dashboard/bills/bills.component';

/* Services */
import { AuthGuard } from '../shared/services/auth';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotten-password', component: ForgottenComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'account', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-bills', component: BillsComponent, canActivate: [AuthGuard] }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRouterModule {}
