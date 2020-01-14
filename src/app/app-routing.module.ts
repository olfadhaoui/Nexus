import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserComponent},
  {path:'**',redirectTo:'user'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
