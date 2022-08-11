import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/admin/admin.component';
import { ProductServicesComponent } from './catalogos/product-services/product-services.component';
import { LoginComponent } from './login/login.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: AdminComponent,
    children: [
        {
        path: 'home',
        component: AppComponent,
      },
      {
        path: 'table',
        component: ProductServicesComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
