import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductServicesComponent } from '../app/catalogos/product-services/product-services.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: '/table', component: ProductServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
