import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './autenticacao/auth.guard';
import { HomeComponent } from './home/home.component';
import {AdministrativoComponent} from './administrativo/administrativo.component'
import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'administrativo', component:AdministrativoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent,  canActivate:[AuthGuard]},
   


];
