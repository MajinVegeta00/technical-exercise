import { authFunctionalGuardGuard } from './guards/auth-functional-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NoAccessComponent } from './components/no-access/no-access.component';

const routes: Routes = [
  {
    path: 'login',
    component: FormLoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    canActivate:[authFunctionalGuardGuard],
    component:HomeComponent
  },
 
  {
    path:'no-access',
    component:NoAccessComponent
  },
   {
    path:'**',
    loadComponent:()=> import ('./components/not-found/not-found.component').then(component=>component.NotFoundComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
